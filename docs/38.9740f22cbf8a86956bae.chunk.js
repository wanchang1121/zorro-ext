webpackJsonp([38],{"0QB0":function(l,n){l.exports="import {Component} from '@angular/core';\r\nimport {NzNotificationService} from '../../../index.showcase';\r\n\r\n@Component({\r\n  selector  : 'nz-demo-notification-duration',\r\n  template  : `\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\r\n`,\r\n  styles    : []\r\n})\r\nexport class NzDemoNotificationDurationComponent {\r\n  createBasicNotification = () => {\r\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed', {nzDuration: 0});\r\n  };\r\n  constructor(private _notification: NzNotificationService) {\r\n  }\r\n}\r\n\r\n"},TagL:function(l,n){l.exports="import {Component} from '@angular/core';\r\nimport {NzNotificationService} from '../../../index.showcase';\r\n\r\n@Component({\r\n  selector  : 'nz-demo-notification-html',\r\n  template  : `\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\r\n`,\r\n  styles    : []\r\n})\r\nexport class NzDemoNotificationHtmlComponent {\r\n  createBasicNotification = () => {\r\n    this._notification.html('<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>');\r\n  };\r\n  constructor(private _notification: NzNotificationService) {\r\n  }\r\n}\r\n\r\n"},ZpxX:function(l,n){l.exports="import {Component} from '@angular/core';\r\nimport {NzNotificationService} from '../../../index.showcase';\r\n\r\n@Component({\r\n  selector  : 'nz-demo-notification-icon',\r\n  template  : `\r\n    <button nz-button (click)=\"createNotification('success')\">\u6210 \u529f</button>\r\n    <button nz-button (click)=\"createNotification('info')\">\u6d88 \u606f</button>\r\n    <button nz-button (click)=\"createNotification('warning')\">\u8b66 \u544a</button>\r\n    <button nz-button (click)=\"createNotification('error')\">\u9519 \u8bef</button>\r\n`,\r\n  styles    : []\r\n})\r\nexport class NzDemoNotificationIconComponent {\r\n  createNotification = (type) => {\r\n    this._notification.create(type, '\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\r\n  };\r\n  constructor(private _notification: NzNotificationService) {\r\n  }\r\n}\r\n\r\n"},dYlS:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("LMZF"),_=function(){},o=u("g3ta"),i=u("QJaU"),a=u("HzDP"),c=u("88JB"),e=u("d0SC"),r=u("Un6q"),d=u("N5qe"),s=u("yojp"),p=(u("01zq"),function(){function l(l){this._notification=l}return l.prototype.createBasicNotification=function(){this._notification.blank("\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")},l}()),f=u("COMP"),z=t._5({encapsulation:2,styles:[],data:{}});function m(l){return t._31(0,[(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,2)._onClick()&&_),"click"===n&&(_=!1!==o.createBasicNotification()&&_),_},d.b,d.a)),t._6(2,1097728,null,0,s.a,[t.l,t.D],{nzType:[0,"nzType"]},null),(l()(),t._29(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),t._29(-1,null,["\n  "]))],function(l,n){l(n,2,0,"primary")},null)}var b=function(l){var n=this;this._notification=l,this.createNotification=function(l){n._notification.create(l,"\u8fd9\u662f\u6807\u9898","\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848")}},N=t._5({encapsulation:2,styles:[],data:{}});function g(l){return t._31(0,[(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,2)._onClick()&&_),"click"===n&&(_=!1!==o.createNotification("success")&&_),_},d.b,d.a)),t._6(2,1097728,null,0,s.a,[t.l,t.D],null,null),(l()(),t._29(-1,0,["\u6210 \u529f"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(5,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,6)._onClick()&&_),"click"===n&&(_=!1!==o.createNotification("info")&&_),_},d.b,d.a)),t._6(6,1097728,null,0,s.a,[t.l,t.D],null,null),(l()(),t._29(-1,0,["\u6d88 \u606f"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(9,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,10)._onClick()&&_),"click"===n&&(_=!1!==o.createNotification("warning")&&_),_},d.b,d.a)),t._6(10,1097728,null,0,s.a,[t.l,t.D],null,null),(l()(),t._29(-1,0,["\u8b66 \u544a"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(13,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,14)._onClick()&&_),"click"===n&&(_=!1!==o.createNotification("error")&&_),_},d.b,d.a)),t._6(14,1097728,null,0,s.a,[t.l,t.D],null,null),(l()(),t._29(-1,0,["\u9519 \u8bef"])),(l()(),t._29(-1,null,["\n"]))],null,null)}var h=function(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.blank("\u8fd9\u662f\u6807\u9898","\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed",{nzDuration:0})}},k=t._5({encapsulation:2,styles:[],data:{}});function v(l){return t._31(0,[(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,2)._onClick()&&_),"click"===n&&(_=!1!==o.createBasicNotification()&&_),_},d.b,d.a)),t._6(2,1097728,null,0,s.a,[t.l,t.D],{nzType:[0,"nzType"]},null),(l()(),t._29(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),t._29(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}var C=function(l){var n=this;this._notification=l,this.createBasicNotification=function(){n._notification.html("<strong>\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML</strong><br><p>HTML</p>")}},T=t._5({encapsulation:2,styles:[],data:{}});function y(l){return t._31(0,[(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(1,0,null,null,2,"button",[["nz-button",""]],null,[[null,"click"]],function(l,n,u){var _=!0,o=l.component;return"click"===n&&(_=!1!==t._19(l,2)._onClick()&&_),"click"===n&&(_=!1!==o.createBasicNotification()&&_),_},d.b,d.a)),t._6(2,1097728,null,0,s.a,[t.l,t.D],{nzType:[0,"nzType"]},null),(l()(),t._29(-1,0,["\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846"])),(l()(),t._29(-1,null,["\n"]))],function(l,n){l(n,2,0,"primary")},null)}var x=function(){return function(){this.NzDemoNotificationBasicCode=u("p/LX"),this.NzDemoNotificationDurationCode=u("0QB0"),this.NzDemoNotificationIconCode=u("ZpxX"),this.NzDemoNotificationHtmlCode=u("TagL")}}(),D=t._5({encapsulation:2,styles:[["#components-notification-demo-icon .ant-btn{margin-right:1em}"]],data:{}});function O(l){return t._31(0,[(l()(),t._7(0,0,null,null,401,"article",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n\n  "])),(l()(),t._7(2,0,null,null,67,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t._29(-1,null,["Notification \u901a\u77e5\u63d0\u9192\u6846"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(7,0,null,null,57,"section",[["class","markdown"]],null,null,null,null,null)),(l()(),t._7(8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5168\u5c40\u5c55\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(11,0,null,null,6,"h2",[["id","\u4f55\u65f6\u4f7f\u7528"]],null,null,null,null,null)),(l()(),t._7(12,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u4f55\u65f6\u4f7f\u7528"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(15,0,null,null,1,"a",[["class","anchor"]],null,null,null,null,null)),(l()(),t._29(-1,null,["#"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5728\u7cfb\u7edf\u53f3\u4e0a\u89d2\u663e\u793a\u901a\u77e5\u63d0\u9192\u4fe1\u606f\u3002\u7ecf\u5e38\u7528\u4e8e\u4ee5\u4e0b\u60c5\u51b5\uff1a"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(22,0,null,null,13,"ul",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(24,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t._7(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u8f83\u4e3a\u590d\u6742\u7684\u901a\u77e5\u5185\u5bb9\u3002"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(28,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t._7(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5e26\u6709\u4ea4\u4e92\u7684\u901a\u77e5\uff0c\u7ed9\u51fa\u7528\u6237\u4e0b\u4e00\u6b65\u7684\u884c\u52a8\u70b9\u3002"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(32,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t._7(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u3002"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(37,0,null,null,3,"h2",[["id","\u5982\u4f55\u4f7f\u7528"]],null,null,null,null,null)),(l()(),t._7(38,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5982\u4f55\u4f7f\u7528"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(42,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u4e0eMessage\u7c7b\u4f3c\uff0c\u5982\u679c\u8981\u4fee\u6539message\u7684\u9ed8\u8ba4\u914d\u7f6e\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u63d0\u4f9b\u5546"])),(l()(),t._7(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["NZ_NOTIFICATION_CONFIG"])),(l()(),t._29(-1,null,["\u7684\u503c\u6765\u4fee\u6539\u3002\n      "])),(l()(),t._7(47,0,null,null,10,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\uff08\u5982\uff1a\u5728\u4f60\u7684\u6a21\u5757\u7684providers\u4e2d\u52a0\u5165 "])),(l()(),t._7(49,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(50,null,[""," provide: NZ_NOTIFICATION_CONFIG, useValue: "," nzDuration: 3000 "," ",""])),(l()(),t._29(-1,null,["\uff0c"])),(l()(),t._7(52,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["NZ_NOTIFICATION_CONFIG"])),(l()(),t._29(-1,null,["\u53ef\u4ee5\u4ece"])),(l()(),t._7(55,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["ng-zorro-antd"])),(l()(),t._29(-1,null,["\u5bfc\u5165\uff09"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(59,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u9ed8\u8ba4\u914d\u7f6e\u4e3a"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(62,0,null,null,1,"pre",[["style","font-size:12px;"]],null,null,null,null,null)),(l()(),t._29(63,null,[" ","\n    nzTop                  : '24px',\n    nzRight                : '0px',\n    nzDuration             : 4500,\n    nzMaxStack             : 7,\n    nzPauseOnHover         : true,\n    nzAnimate              : true\n ",""])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._29(-1,null,["\n\n    "])),(l()(),t._7(66,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u4ee3\u7801\u6f14\u793a"])),(l()(),t._7(68,0,null,null,0,"i",[["class","code-box-expand-trigger anticon anticon-appstore"],["title","\u5c55\u5f00\u5168\u90e8\u4ee3\u7801"]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n  "])),(l()(),t._29(-1,null,["\n\n  "])),(l()(),t._7(71,0,null,null,68,"div",[["nz-row",""]],null,null,null,o.b,o.a)),t._6(72,114688,null,0,i.a,[t.l,t.D],{nzGutter:[0,"nzGutter"]},null),(l()(),t._29(-1,0,["\n    "])),(l()(),t._7(74,0,null,0,28,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),t._6(75,606208,null,0,a.a,[t.l,[2,i.a],t.D],{nzSpan:[0,"nzSpan"]},null),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(77,0,null,null,11,"nz-code-box",[["id","components-notification-demo-basic"]],null,null,null,c.b,c.a)),t._6(78,114688,null,0,e.a,[r.d,t.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(80,0,null,0,1,"nz-demo-notification-basic",[["demo",""]],null,null,null,m,z)),t._6(81,49152,null,0,p,[f.a],null,null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(83,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(85,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(90,0,null,null,11,"nz-code-box",[["id","components-notification-demo-icon"]],null,null,null,c.b,c.a)),t._6(91,114688,null,0,e.a,[r.d,t.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(93,0,null,0,1,"nz-demo-notification-icon",[["demo",""]],null,null,null,g,N)),t._6(94,49152,null,0,b,[f.a],null,null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(96,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(98,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._29(-1,0,["\n    "])),(l()(),t._7(104,0,null,0,34,"div",[["nz-col",""]],[[4,"padding-left","px"],[4,"padding-right","px"]],null,null,null,null)),t._6(105,606208,null,0,a.a,[t.l,[2,i.a],t.D],{nzSpan:[0,"nzSpan"]},null),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(107,0,null,null,17,"nz-code-box",[["id","components-notification-demo-duration"]],null,null,null,c.b,c.a)),t._6(108,114688,null,0,e.a,[r.d,t.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(110,0,null,0,1,"nz-demo-notification-duration",[["demo",""]],null,null,null,v,k)),t._6(111,49152,null,0,h,[f.a],null,null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(113,0,null,1,10,"div",[["intro",""]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(115,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4"])),(l()(),t._7(117,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["4.5s"])),(l()(),t._29(-1,null,["\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a "])),(l()(),t._7(120,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["0"])),(l()(),t._29(-1,null,[" \u5373\u53ef\u3002"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(126,0,null,null,11,"nz-code-box",[["id","components-notification-demo-html"]],null,null,null,c.b,c.a)),t._6(127,114688,null,0,e.a,[r.d,t.l],{nzTitle:[0,"nzTitle"],nzCode:[1,"nzCode"]},null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(129,0,null,0,1,"nz-demo-notification-html",[["demo",""]],null,null,null,y,T)),t._6(130,49152,null,0,C,[f.a],null,null),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(132,0,null,1,4,"div",[["intro",""]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(134,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5185HTML\uff0c\u6ce8\u610f\u9632\u6b62XSS"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._29(-1,0,["\n  "])),(l()(),t._29(-1,null,["\n  "])),(l()(),t._7(141,0,null,null,259,"section",[["class","markdown api-container"]],null,null,null,null,null)),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(143,0,null,null,4,"h2",[["id","API"]],null,null,null,null,null)),(l()(),t._7(144,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._29(-1,null,["API"])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(149,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),t._7(150,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5168\u5c40\u914d\u7f6e\uff08NZ_NOTIFICATION_CONFIG\uff09"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(153,0,null,null,112,"table",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(155,0,null,null,16,"thead",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(157,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(159,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u53c2\u6570"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(162,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u7c7b\u578b"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(165,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u9ed8\u8ba4\u503c"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(168,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u8bf4\u660e"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(173,0,null,null,91,"tbody",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(175,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(177,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzTop"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(180,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["String"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(183,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["24px"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(186,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u9876\u90e8\u8ddd\u79bb"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(190,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(192,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzRight"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(195,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["String"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(198,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["0px"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(201,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u53f3\u4fa7\u8ddd\u79bb"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(205,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(207,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzDuration"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(210,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["Number"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(213,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["0"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(216,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u6301\u7eed\u65f6\u95f4,\u5f53\u8bbe\u7f6e\u4e3a0\u65f6\u4e0d\u6d88\u5931\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(220,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(222,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzMaxStack"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(225,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["Number"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(228,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["8"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(231,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u63d0\u793a\u6700\u5927\u5806\u53e0\u6570"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(235,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(237,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzPauseOnHover"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(240,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["bool"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(243,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["true"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(246,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u60ac\u505c\u65f6\u505c\u6b62\u5012\u8ba1\u65f6\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(250,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(252,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzAnimate"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(255,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["bool"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(258,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["true"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(261,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5f00\u5173\u52a8\u753b\u6548\u679c\uff08\u53ef\u7528\u4e8eNzNotificationService\u4e2d\uff09"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(267,0,null,null,2,"h4",[],null,null,null,null,null)),(l()(),t._7(268,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t._29(-1,null,["NzNotificationService\u670d\u52a1"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(271,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u63d0\u793a\uff1a\u4ee5\u4e0boptions\u53c2\u6570\u652f\u6301\u5168\u5c40\u914d\u7f6e\u4e2d\u7684 "])),(l()(),t._7(273,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["nzDuration/nzAnimate/nzPauseOnHover"])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._7(276,0,null,null,123,"table",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(278,0,null,null,13,"thead",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(280,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(282,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u65b9\u6cd5"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(285,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u53c2\u6570"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(288,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u8bf4\u660e"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._7(293,0,null,null,105,"tbody",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(295,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(297,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["blank"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(300,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(301,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(304,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u4e0d\u5e26\u56fe\u6807\u7684\u63d0\u793a"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(308,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(310,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["success"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(313,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(314,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(317,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u6210\u529f\u63d0\u793a"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(321,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(323,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["error"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(326,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(327,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(330,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u5931\u8d25\u63d0\u793a"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(334,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(336,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["warning"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(339,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(340,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(343,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u8b66\u544a\u63d0\u793a"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(347,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(349,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["info"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(352,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(353,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(title: string, content: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(356,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u4fe1\u606f\u63d0\u793a"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(360,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(362,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["create"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(365,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(366,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(type: string, title: string, content: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(369,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u63d0\u4f9btype\u5c5e\u6027\uff0c\u53ef\u4f20\u5165'success'\u7b49\u9009\u9879"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(373,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(375,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["html"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(378,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(379,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(html: string, options?: Object)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(382,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u53ef\u4f7f\u7528html\u4ee3\u7801\u6765\u6e32\u67d3\u5185\u5bb9"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._7(386,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(388,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["remove"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(391,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t._7(392,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),t._29(-1,null,["(id?: string)"])),(l()(),t._29(-1,null,["\n          "])),(l()(),t._7(395,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t._29(-1,null,["\u79fb\u9664\u7279\u5b9aid\u7684\u6d88\u606f\uff0c\u5f53id\u4e3a\u7a7a\u65f6\uff0c\u79fb\u9664\u6240\u6709\u6d88\u606f"])),(l()(),t._29(-1,null,["\n        "])),(l()(),t._29(-1,null,["\n      "])),(l()(),t._29(-1,null,["\n    "])),(l()(),t._29(-1,null,["\n  "])),(l()(),t._29(-1,null,["\n"])),(l()(),t._29(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,72,0,8),l(n,75,0,12),l(n,78,0,"\u57fa\u672c",u.NzDemoNotificationBasicCode),l(n,91,0,"\u5e26\u6709icon\u7684\u901a\u77e5\u63d0\u9192\u6846",u.NzDemoNotificationIconCode),l(n,105,0,12),l(n,108,0,"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6",u.NzDemoNotificationDurationCode),l(n,127,0,"\u81ea\u5b9a\u4e49",u.NzDemoNotificationHtmlCode)},function(l,n){l(n,50,0,"{","{","}","}"),l(n,63,0,"{","}"),l(n,74,0,t._19(n,75).paddingLeft,t._19(n,75).paddingRight),l(n,104,0,t._19(n,105).paddingLeft,t._19(n,105).paddingRight)})}var S=t._3("nz-demo-notification",x,function(l){return t._31(0,[(l()(),t._7(0,0,null,null,1,"nz-demo-notification",[],null,null,null,O,D)),t._6(1,49152,null,0,x,[],null,null)],null,null)},{},{},[]),I=u("XQ86"),B=u("94s6"),M=u("QYLS"),L=u("sVuO"),j=u("WKJP"),w=u("9Q3e"),A=u("4e8C"),P=u("7rz8"),G=u("PqOC"),H=u("md/V"),F=u("0nO6"),Z=u("l6RC"),q=u("V8+5"),Q=u("4jwp"),R=u("OFGE"),K=u("7bMD"),V=u("71yQ"),J=u("jhj7"),U=u("ppgG"),X=u("Hjq/"),Y=u("hNpP"),W=u("f42N"),E=u("UHIZ"),$=function(){},ll=u("jlvU"),nl=u("AKwh"),ul=u("LTvz"),tl=u("v3Ml"),_l=u("KvRT"),ol=u("fFfs"),il=u("CZgk"),al=u("ICnb"),cl=u("nQgM"),el=u("AMM9"),rl=u("x9cu"),dl=u("Abwc"),sl=u("Gb4R"),pl=u("ATGq"),fl=u("rMvC"),zl=u("PIhm"),ml=u("G5xS"),bl=u("tGoV"),Nl=u("Bd7q"),gl=u("+dpF"),hl=u("t6og"),kl=u("0oag"),vl=u("0MmT"),Cl=u("0SjK"),Tl=u("UWIb"),yl=u("FP9i"),xl=u("8zAG"),Dl=u("OtIO"),Ol=u("V5qy"),Sl=u("BGFw"),Il=u("qa79"),Bl=u("DJ6J"),Ml=u("A6WS"),Ll=u("nGV/"),jl=u("4I7f"),wl=u("LLhl"),Al=u("+35O"),Pl=u("TRYS"),Gl=u("NGUZ"),Hl=u("Cjk6"),Fl=u("6eTp"),Zl=u("pORy"),ql=u("aQzP"),Ql=u("LpTC"),Rl=u("YeNB"),Kl=u("x7DS"),Vl=u("//KT"),Jl=u("h8LI"),Ul=u("1OKL"),Xl=u("Pgvs"),Yl=u("ZgIK"),Wl=u("mQB5"),El=u("9rok");u.d(n,"NzDemoNotificationModuleNgFactory",function(){return $l});var $l=t._4(_,[],function(l){return t._15([t._16(512,t.k,t.Z,[[8,[S,I.a,B.a,M.a,L.a,j.a,w.a,A.a]],[3,t.k],t.w]),t._16(4608,r.o,r.n,[t.t,[2,r.w]]),t._16(5120,P.b,P.a,[[3,P.b],P.c]),t._16(5120,G.b,G.a,[[3,G.b],H.a,P.b]),t._16(4608,F.u,F.u,[]),t._16(6144,Z.b,null,[r.d]),t._16(4608,Z.c,Z.c,[[2,Z.b]]),t._16(4608,q.a,q.a,[]),t._16(5120,Q.c,Q.a,[[3,Q.c],t.y,q.a]),t._16(5120,Q.f,Q.e,[[3,Q.f],q.a,t.y]),t._16(4608,R.h,R.h,[Q.c,Q.f,t.y,r.d]),t._16(5120,R.d,R.i,[[3,R.d],r.d]),t._16(4608,R.g,R.g,[Q.f,r.d]),t._16(5120,R.e,R.l,[[3,R.e],r.d]),t._16(4608,R.c,R.c,[R.h,R.d,t.k,R.g,R.e,t.g,t.q,t.y,r.d]),t._16(5120,R.j,R.k,[R.c]),t._16(4608,K.a,K.a,[]),t._16(4608,V.a,V.a,[t.g,t.k,G.b]),t._16(4608,J.a,J.a,[]),t._16(4608,U.b,U.b,[]),t._16(5120,t.d,function(l,n){return[X.b(l,n)]},[r.d,[2,Y.a]]),t._16(5120,W.a,W.b,[r.d,[3,W.a]]),t._16(512,E.o,E.o,[[2,E.t],[2,E.l]]),t._16(512,$,$,[]),t._16(512,r.c,r.c,[]),t._16(512,ll.a,ll.a,[]),t._16(512,nl.a,nl.a,[]),t._16(512,ul.a,ul.a,[]),t._16(512,tl.a,tl.a,[]),t._16(512,_l.a,_l.a,[]),t._16(512,ol.a,ol.a,[]),t._16(512,F.s,F.s,[]),t._16(512,F.i,F.i,[]),t._16(512,Z.a,Z.a,[]),t._16(512,il.c,il.c,[]),t._16(512,q.b,q.b,[]),t._16(512,Q.b,Q.b,[]),t._16(512,R.f,R.f,[]),t._16(512,al.a,al.a,[]),t._16(512,cl.a,cl.a,[]),t._16(512,el.a,el.a,[]),t._16(512,rl.a,rl.a,[]),t._16(512,dl.a,dl.a,[]),t._16(512,sl.a,sl.a,[]),t._16(512,pl.a,pl.a,[]),t._16(512,fl.a,fl.a,[]),t._16(512,zl.a,zl.a,[]),t._16(512,ml.a,ml.a,[]),t._16(512,bl.a,bl.a,[]),t._16(512,Nl.a,Nl.a,[]),t._16(512,gl.a,gl.a,[]),t._16(512,hl.a,hl.a,[]),t._16(512,kl.a,kl.a,[]),t._16(512,vl.a,vl.a,[]),t._16(512,Cl.a,Cl.a,[]),t._16(512,Tl.a,Tl.a,[]),t._16(512,yl.a,yl.a,[]),t._16(512,xl.a,xl.a,[]),t._16(512,Dl.a,Dl.a,[]),t._16(512,Ol.a,Ol.a,[]),t._16(512,Sl.a,Sl.a,[]),t._16(512,Il.a,Il.a,[]),t._16(512,Bl.a,Bl.a,[]),t._16(512,U.c,U.c,[]),t._16(512,Ml.a,Ml.a,[]),t._16(512,Ll.a,Ll.a,[]),t._16(512,jl.a,jl.a,[]),t._16(512,wl.a,wl.a,[]),t._16(512,Al.a,Al.a,[]),t._16(512,Pl.a,Pl.a,[]),t._16(512,Gl.a,Gl.a,[]),t._16(131584,X.a,X.a,[r.d,t.q,t.k]),t._16(512,Hl.a,Hl.a,[]),t._16(512,Fl.a,Fl.a,[]),t._16(512,Zl.a,Zl.a,[]),t._16(512,ql.a,ql.a,[]),t._16(512,Ql.a,Ql.a,[]),t._16(512,Rl.a,Rl.a,[]),t._16(512,Kl.a,Kl.a,[]),t._16(512,Vl.a,Vl.a,[]),t._16(512,Jl.a,Jl.a,[]),t._16(512,Ul.a,Ul.a,[]),t._16(512,Xl.a,Xl.a,[]),t._16(512,Yl.a,Yl.a,[]),t._16(512,_,_,[]),t._16(1024,E.j,function(){return[[{path:"",component:x}]]},[]),t._16(256,P.c,!1,[]),t._16(256,H.a,ul.b,[]),t._16(256,Wl.b,{nzDuration:1500,nzAnimate:!0,nzPauseOnHover:!0,nzMaxStack:7},[]),t._16(256,El.b,{nzTop:"24px",nzRight:"0px",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})},"p/LX":function(l,n){l.exports="import {Component} from '@angular/core';\r\nimport {NzNotificationService} from '../../../index.showcase';\r\n\r\n@Component({\r\n  selector  : 'nz-demo-notification-basic',\r\n  template  : `\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"createBasicNotification()\">\u6253\u5f00\u901a\u77e5\u63d0\u793a\u6846</button>\r\n  `,\r\n  styles    : []\r\n})\r\nexport class NzDemoNotificationBasicComponent {\r\n\r\n  constructor(private _notification: NzNotificationService) { }\r\n\r\n  createBasicNotification() {\r\n    this._notification.blank('\u8fd9\u662f\u6807\u9898', '\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848');\r\n  }\r\n}\r\n\r\n"}});