(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/cg6py5ji.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/cg6py5ji.js ***!
  \***********************************************************/
/*! exports provided: IonRefresher, IonRefresherContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRefresher", function() { return Refresher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRefresherContent", function() { return RefresherContent; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-f7b6af08.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var __awaiter=undefined&&undefined.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(s,i){function o(e){try{a(n.next(e))}catch(e){i(e)}}function l(e){try{a(n.throw(e))}catch(e){i(e)}}function a(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(o,l)}a((n=n.apply(e,t||[])).next())})},__generator=undefined&&undefined.__generator||function(e,t){var r,n,s,i,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(s=2&i[0]?n.return:i[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;switch(n=0,s&&(i=[2&i[0],s.value]),i[0]){case 0:case 1:s=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,n=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!s||i[1]>s[0]&&i[1]<s[3])){o.label=i[1];break}if(6===i[0]&&o.label<s[1]){o.label=s[1],s=i;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(i);break}s[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],n=0}finally{r=s=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}};var Refresher=function(){function e(){this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.disabled=!1}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return"fixed"!==this.el.getAttribute("slot")?(console.error('Make sure you use: <ion-refresher slot="fixed">'),[2]):(e=this.el.closest("ion-content"))?[4,e.componentOnReady()]:[3,2];case 1:return r.sent(),this.scrollEl=e.getScrollElement(),[3,3];case 2:console.error("ion-refresher did not attach, make sure the parent is an ion-content."),r.label=3;case 3:return t=this,[4,__webpack_require__.e(/*! import() */ 123).then(__webpack_require__.bind(null, /*! ./gesture.js */ "./node_modules/@ionic/core/dist/esm/es5/gesture.js"))];case 4:return t.gesture=r.sent().createGesture({el:this.el.closest("ion-content"),queue:this.queue,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:10,passive:!1,canStart:this.canStart.bind(this),onStart:this.onStart.bind(this),onMove:this.onMove.bind(this),onEnd:this.onEnd.bind(this)}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.scrollEl=void 0},e.prototype.complete=function(){this.close(32,"120ms")},e.prototype.cancel=function(){this.close(16,"")},e.prototype.getProgress=function(){return this.progress},e.prototype.canStart=function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)},e.prototype.onStart=function(){console.log("start"),this.progress=0,this.state=1},e.prototype.onMove=function(e){if(!this.scrollEl)return 0;var t=e.event;if(t.touches&&t.touches.length>1)return 1;if(56&this.state)return 2;var r=e.deltaY;if(r<=0)return this.progress=0,this.state=1,this.appliedStyles?(this.setCss(0,"",!1,""),5):6;if(1===this.state){if(this.scrollEl.scrollTop>0)return this.progress=0,7;this.state=2}if(t.preventDefault(),this.setCss(r,"0ms",!0,""),!r)return this.progress=0,8;var n=this.pullMin;return this.progress=r/n,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),r<n?(this.state=2,2):r>this.pullMax?(this.beginRefresh(),3):(this.state=4,4)},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit()},e.prototype.close=function(e,t){var r=this;setTimeout(function(){r.state=1,r.progress=0,r.didStart=!1,r.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,"",!0,t)},e.prototype.setCss=function(e,t,r,n){var s=this;this.appliedStyles=e>0,this.queue.write(function(){if(s.scrollEl){var i=s.scrollEl.style;i.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)",i.transitionDuration=t,i.transitionDelay=n,i.overflow=r?"hidden":""}})},e.prototype.hostData=function(){return{slot:"fixed",class:Object.assign({},Object(_chunk_f7b6af08_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.mode,"refresher"),{"refresher-active":1!==this.state,"refresher-pulling":2===this.state,"refresher-ready":4===this.state,"refresher-refreshing":8===this.state,"refresher-cancelling":16===this.state,"refresher-completing":32===this.state})}},Object.defineProperty(e,"is",{get:function(){return"ion-refresher"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{cancel:{method:!0},closeDuration:{type:String,attr:"close-duration"},complete:{method:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},getProgress:{method:!0},pullMax:{type:Number,attr:"pull-max"},pullMin:{type:Number,attr:"pull-min"},queue:{context:"queue"},snapbackDuration:{type:String,attr:"snapback-duration"},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionRefresh",method:"ionRefresh",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPull",method:"ionPull",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStart",method:"ionStart",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-refresher{left:0;display:none;position:absolute;top:0;width:100%;height:60px;z-index:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-icon,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-crescent circle,.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line{stroke:var(--ion-text-color,#000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),RefresherContent=function(){function e(){}return e.prototype.componentDidLoad=function(){this.pullingIcon||(this.pullingIcon=this.config.get("ionPullIcon","arrow-down")),this.refreshingSpinner||(this.refreshingSpinner=this.config.get("ionRefreshingSpinner",this.config.get("spinner","lines")))},e.prototype.render=function(){return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"refresher-pulling"},this.pullingIcon&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"refresher-pulling-icon"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"refresher-pulling-text",innerHTML:this.pullingText})),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"refresher-refreshing-icon"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div",{class:"refresher-refreshing-text",innerHTML:this.refreshingText}))]},Object.defineProperty(e,"is",{get:function(){return"ion-refresher-content"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{config:{context:"config"},pullingIcon:{type:String,attr:"pulling-icon",mutable:!0},pullingText:{type:String,attr:"pulling-text"},refreshingSpinner:{type:String,attr:"refreshing-spinner",mutable:!0},refreshingText:{type:String,attr:"refreshing-text"}}},enumerable:!0,configurable:!0}),e}();

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-f7b6af08.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createThemedClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getClassMap; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function hostContext(e, t) { return !!t.closest(e); }
function createColorClasses(e) { var _a; return e ? (_a = { "ion-color": !0 }, _a["ion-color-" + e] = !0, _a) : null; }
function createThemedClasses(e, t) { var _a; return _a = {}, _a[t] = !0, _a[t + "-" + e] = !!e, _a; }
function getClassList(e) { return e ? (Array.isArray(e) ? e : e.split(" ")).filter(function (e) { return null != e; }).map(function (e) { return e.trim(); }).filter(function (e) { return "" !== e; }) : []; }
function getClassMap(e) { var t = {}; return getClassList(e).forEach(function (e) { return t[e] = !0; }), t; }
function openURL(e, t, r, s) {
    return __awaiter(this, void 0, void 0, function () { var o; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(t && "#" !== t[0] && -1 === t.indexOf("://"))) return [3 /*break*/, 2];
                o = e.document.querySelector("ion-router");
                if (!o) return [3 /*break*/, 2];
                r && r.preventDefault();
                return [4 /*yield*/, o.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), o.push(t, s))];
            case 2: return [2 /*return*/, Promise.resolve()];
        }
    }); });
}



/***/ })

}]);
//# sourceMappingURL=80.js.map