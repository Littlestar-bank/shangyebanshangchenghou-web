(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-_select-extract_point-index"],{2203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("28a5"),n("456d"),n("ac6a"),n("c5f6");var i="#fff",o="#e64340",a={components:{},props:{content:String,color:{type:String,default:i},duration:{type:Number,default:3e3}},data:function(){return{isShow:!1,backgroundColor:""}},methods:{show:function(){var t=this,e=this.duration;this._timer&&clearTimeout(this._timer),this.setData({isShow:!0}),e>0&&e!==1/0&&(this._timer=setTimeout((function(){t.hide()}),e))},hide:function(){this._timer=clearTimeout(this._timer),this.setData({isShow:!1,backgroundColor:o})},setData:function(t){var e,n,i=this,o=[];Object.keys(t).forEach((function(a){o=a.split("."),e=t[a],n=i.$data,o.forEach((function(t,a){console.log(t),a+1===o.length?i.$set(n,t,e):n[t]||i.$set(n,t,{}),n=n[t]}))}))}}};e.default=a},6465:function(t,e,n){"use strict";n.r(e);var i=n("9cc0"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"71b1":function(t,e,n){"use strict";var i=n("7e65"),o=n.n(i);o.a},"7e65":function(t,e,n){var i=n("8b5e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("ae39cd66",i,!0,{sourceMap:!1,shadowMode:!1})},"8b5e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"uni-page-body[data-v-1bf2272f]{background:#fff}.shop-list .shop-item[data-v-1bf2272f]{padding:%?20?% %?30?%;min-height:%?180?%;font-size:%?26?%;line-height:1.5;border-bottom:1px solid #eee}.shop-item__title[data-v-1bf2272f]{font-size:%?30?%;color:#fd4a5f;margin-bottom:%?10?%}.shop-item__address[data-v-1bf2272f], .shop-item__phone[data-v-1bf2272f]{color:#919396}.shop-item__distance[data-v-1bf2272f]{margin-top:%?10?%;color:#c1c1c1;height:%?40?%}.shop-item__distance .iconfont[data-v-1bf2272f]{color:#81838e;margin-right:%?5?%}\r\n\r\n/* 选中图标 */.shop-item__right[data-v-1bf2272f]{margin-left:%?20?%}.shop-item__right uni-text[data-v-1bf2272f]{color:#fd4a5f;font-size:%?38?%}\r\n\r\n/* 定位图标 */.widget-location[data-v-1bf2272f]{position:fixed;right:%?40?%;bottom:%?70?%;width:%?72?%;height:%?72?%;z-index:200;border-radius:50%;background:#fff;box-shadow:0 0 %?10?% rgba(0,0,0,.2);color:#555;font-size:%?40?%}body.?%PAGE?%[data-v-1bf2272f]{background:#fff}",""])},"9a89":function(t,e,n){"use strict";n.r(e);var i=n("2203"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a},"9cc0":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("28a5"),n("456d"),n("ac6a");var o=i(n("cbcf")),a=i(n("fed8")),s=getApp().globalData,c={components:{zanToptips:a.default},props:{},data:function(){return{selectedId:-1,isAuthor:!0,isLoading:!0,shopList:[],selectedShopId:"",content:""}},onLoad:function(t){var e=this;e.setData({selectedId:t.selected_id}),e.getShopList(),e.getLocation((function(t){e.getShopList(t.longitude,t.latitude)}))},methods:{getShopList:function(t,e){var n=this;n.setData({isLoading:!0}),s._get("shop/lists",{longitude:t||"",latitude:e||""},(function(t){n.setData({shopList:t.data.list,isLoading:!1})}))},getLocation:function(t){var e=this;uni.getLocation({type:"wgs84",success:function(e){t&&t(e)},fail:function(){(0,o.default)({duration:3e3,content:"获取定位失败，请点击右下角按钮打开定位权限"}),e.setData({isAuthor:!1})}})},onAuthorize:function(){var t=this;uni.openSetting({success:function(e){e.authSetting["scope.userLocation"]&&(console.log("授权成功"),t.setData({isAuthor:!0}),setTimeout((function(){t.getLocation((function(e){console.log("获取用户坐标"),t.getShopList(e.longitude,e.latitude)}))}),1e3))}})},onSelectedShop:function(t){var e=this,n=t.currentTarget.dataset.id;e.setData({selectedId:n});var i=getCurrentPages();if(i.length<2)return!1;var o=i[i.length-2];o.setData({selectedShopId:n}),uni.navigateBack({delta:1})},setData:function(t){var e,n,i=this,o=[];Object.keys(t).forEach((function(a){o=a.split("."),e=t[a],n=i.$data,o.forEach((function(t,a){console.log(t),a+1===o.length?i.$set(n,t,e):n[t]||i.$set(n,t,{}),n=n[t]}))}))}}};e.default=c},b5c6:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:"zan-toptips "+(t.isShow?"zan-toptips--show":""),style:"background-color:"+t.backgroundColor},[t._v(t._s(t.content))])},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},b91b:function(t,e,n){"use strict";n.r(e);var i=n("d515"),o=n("6465");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("71b1");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"1bf2272f",null,!1,i["a"],s);e["default"]=r.exports},c3db:function(t,e,n){"use strict";var i=n("c8fc"),o=n.n(i);o.a},c8fc:function(t,e,n){var i=n("d560");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("093f8456",i,!0,{sourceMap:!1,shadowMode:!1})},cbcf:function(t,e,n){"use strict";var i=n("4ea4"),o=i(n("7618"));function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"object"===(0,o.default)(t)?t:{content:t}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=getCurrentPages(),n=e[e.length-1],i={selector:"#zan-toptips",duration:3e3};t=Object.assign(i,a(t));var o=n.selectComponent(t.selector);delete t.selector,o.setData(Object.assign({},t)),o&&o.show()}t.exports=s},d515:function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"container b-f"},[n("v-uni-view",{staticClass:"shop-list"},t._l(t.shopList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"shop-item dis-flex flex-y-center",attrs:{"data-id":e.shop_id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onSelectedShop.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"shop-item__content flex-box"},[n("v-uni-view",{staticClass:"shop-item__title"},[n("v-uni-text",[t._v(t._s(e.shop_name))])],1),n("v-uni-view",{staticClass:"shop-item__address"},[n("v-uni-text",[t._v("地址："+t._s(e.region.province)+t._s(e.region.city)+t._s(e.region.region)+t._s(e.address))])],1),n("v-uni-view",{staticClass:"shop-item__phone"},[n("v-uni-text",[t._v("联系电话："+t._s(e.phone))])],1),n("v-uni-view",{staticClass:"shop-item__distance"},[e.distance?[n("v-uni-text",{staticClass:"iconfont icon-dingwei"}),n("v-uni-text",{staticClass:"f-24"},[t._v(t._s(e.distance_unit))])]:t._e()],2)],1),e.shop_id==t.selectedId?n("v-uni-view",{staticClass:"shop-item__right"},[n("v-uni-text",{staticClass:"iconfont icon-iconfontduihaocopy"})],1):t._e()],1)})),1),t.isLoading||t.shopList.length?t._e():n("v-uni-view",[n("v-uni-view",{staticClass:"shop-notcont"},[n("v-uni-text",{staticClass:"iconfont icon-wushuju"}),n("v-uni-text",{staticClass:"cont"},[t._v("亲，暂无自提门店哦")])],1)],1),t.isAuthor?t._e():n("v-uni-view",{staticClass:"widget-location dis-flex flex-x-center flex-y-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onAuthorize.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"iconfont icon-locate"})],1)],1),n("zan-toptips",{attrs:{id:"zan-toptips",content:t.content}})],1)},a=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}))},d560:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".zan-toptips[data-v-79f47b5a]{display:block;position:fixed;-webkit-transform:translateZ(0) translateY(-100%);width:100%;min-height:32px;top:0;line-height:2.3;font-size:14px;text-align:center;color:#fff;background-color:#e64340;z-index:110;opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease}.zan-toptips--show[data-v-79f47b5a]{-webkit-transform:translateZ(0) translateY(0);opacity:1}",""])},fed8:function(t,e,n){"use strict";n.r(e);var i=n("b5c6"),o=n("9a89");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("c3db");var s,c=n("f0c5"),r=Object(c["a"])(o["default"],i["b"],i["c"],!1,null,"79f47b5a",null,!1,i["a"],s);e["default"]=r.exports}}]);