import { Component, OnInit, Input, forwardRef, NgModule, TemplateRef, Output, EventEmitter, ViewChild, ViewContainerRef, ElementRef, ContentChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from "@angular/forms";
import { CommonModule, NgForOfContext } from "@angular/common";
import { NgZorroAntdModule } from '../../../index.showcase';
import { API } from '../services/api';
import { Subject } from 'rxjs/Rx';

export interface Shipper {
    name: string;
    id?: string;
    idBak?: string;
    mobile?: string;
    disabled?: boolean;
}

export interface DomOpt {
    _value: string;
    _label: string;
}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ShipperSelectComponent),
    multi: true
};

@Component({
    selector: `shipper-select`,
    template: `
    <nz-select 
        [style.width]="_width" 
        [nzPlaceHolder]="placeholder" 
        [nzMode]="_nzMode"
        [nzFilter]="nzFilter"
        [nzAllowClear]="_allowClear"
        (nzScrollToBottom)="yztScrollToBottom()"
        (nzSearchChange)="yztSearchChange($event)"
        [(ngModel)]="value">
        <nz-option
            #domOpt
            *ngFor="let option of options"
            [nzLabel]="option.name"
            [nzValue]="option.idBak"
            [nzDisabled]="option.disabled">
            <ng-template *ngIf="_content" #nzOptionTemplate>
                <ng-container #nzOptionCon [ngTemplateOutlet]="_content" [ngTemplateOutletContext]="option"></ng-container>
            </ng-template>
        </nz-option>
    </nz-select>
    `,
    styles: [`
    .shipper-select{
        display: inline-block;
    }
    `],
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ShipperSelectComponent implements ControlValueAccessor, OnInit {

    @ViewChild("domOpt") domOpt: DomOpt;
    private onTouchedCallback: () => () => {};
    private onChangeCallback: (_: any) => () => {};

    options: Array<Shipper> = [];
    // 单选的时候传字符串，多选传数组
    _value: string;
    _width = "100%";
    _content: TemplateRef<any>;
    _allowClear = true;
    _nzMode = "combobox";
    // 下拉过滤含关键字选项，false为不过滤
    _filter = false;
    currentText = '';
    canQuery = true;
    keyWordStream = new Subject<string>()
    keyWord$: any;

    @Input() placeholder = "请选择发货人";
    @Input() valueType = "";

    set value(v: string) {
        this._value = v;
        // 双向绑定获取对象
        if (this.valueType === "object") {
            const { _value, _label } = this.domOpt;
            this.onChangeCallback({ value: _value, label: _label });
        } else {
            this.onChangeCallback(v);
        }

    }

    get value(): string {
        return this._value;
    };

    @Input() set width(v: any) {
        const width = parseInt(v);
        this._width = Array.from(v).includes("%") ? `${v}%` : isNaN(width) ? this._width : `${width}px`;
    }

    @Input() set shipperMode(v) {
        this._nzMode = v;
        this._allowClear = v === "combobox" ? true : false;
    };

    @Input() set customTemplate(tpl: TemplateRef<any>) {
        if (tpl instanceof TemplateRef) {
            this._content = tpl;
        }
    }

    @Output() openChange: EventEmitter<any> = new EventEmitter();
    @Output() outOptions: EventEmitter<any> = new EventEmitter();

    constructor(private api: API) {
    }

    ngOnInit() {
        // 限流
        this.keyWord$ = this.keyWordStream
            .debounceTime(250)
            .subscribe(word => {
                this.queryData(word, [])
            });

    }

    ngOnDestroy() {
        this.keyWord$.unsubscribe()
    }

    yztSearchChange(event) {
        this.canQuery = true;
        this.currentText = event;
        this.keyWordStream.next(event);
    }

    yztScrollToBottom() {
        this.queryData(this.currentText, this.options);
    }

    // 写入值
    writeValue(value: any) {
        if (value !== this._value) {
            this._value = value;
        }
    }

    // 注册变化处理事件
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    // 注册触摸事件
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    /**
     * 查询数据
     * @param $event
     */
    queryData(searchText?: string, options?: Array<Shipper>) {
        if (!this.canQuery) return;
        const value = searchText;
        this.api.call("customerWorkerController.queryShipperNameLike",{
            name: value,
            clientType:"send"
        }).ok(json => {
            const result = json.result || [];
            if (!result.length) {
                const lastItem = new Array<Shipper>({ name: "没有更多选项！", disabled: true });
                this.options = options.concat(lastItem);
                this.canQuery = false;
                return;
            }
            this.options = options.concat(result);
            this.outOptions.emit(this.options);
        }).fail(err => {
            throw new Error(err);
        });
    }


}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
    ],
    declarations: [
        ShipperSelectComponent
    ],
    exports: [ShipperSelectComponent]
})
export class ShipperSelectModule {}