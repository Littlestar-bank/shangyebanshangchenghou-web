(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-detail-index"],{"0086":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.detail.shop_id?i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"shop-logo"},[i("v-uni-image",{attrs:{src:t.detail.logo.file_path,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"shop-name"},[i("v-uni-text",[t._v(t._s(t.detail.shop_name))])],1)],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"content-item dis-flex flex-y-center"},[i("v-uni-view",{staticClass:"content-item__icon dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-shijian"})],1),i("v-uni-view",{staticClass:"content-item__text flex-box dis-flex"},[i("v-uni-text",{staticClass:"f-26"},[t._v(t._s(t.detail.shop_hours))])],1)],1),i("v-uni-view",{staticClass:"content-item dis-flex flex-y-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onOpenLocation.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content-item__icon dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-dingwei"})],1),i("v-uni-view",{staticClass:"content-item__text flex-box dis-flex"},[i("v-uni-text",{staticClass:"f-26"},[t._v(t._s(t.detail.region.province)+t._s(t.detail.region.city)+t._s(t.detail.region.region)+t._s(t.detail.address))])],1),i("v-uni-view",{staticClass:"content-item__arrow dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-xiangyoujiantou user-orderJtou"})],1)],1),i("v-uni-view",{staticClass:"content-item dis-flex flex-y-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onMakePhoneCall.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"content-item__icon dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-dianhua"})],1),i("v-uni-view",{staticClass:"content-item__text flex-box dis-flex"},[i("v-uni-text",{staticClass:"f-26"},[t._v(t._s(t.detail.phone))])],1),i("v-uni-view",{staticClass:"content-item__arrow dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-xiangyoujiantou user-orderJtou"})],1)],1)],1),i("v-uni-view",{staticClass:"footer"},[t.detail.summary?i("v-uni-view",{staticClass:"shop-summary dis-flex"},[i("v-uni-text",[t._v(t._s(t.detail.summary))])],1):t._e()],1)],1):t._e()},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"178f":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("456d"),i("ac6a"),i("c5f6"),i("96cf");var a=n(i("3b8d")),o=i("787c"),s=getApp().globalData,c={components:{},props:{},data:function(){return{detail:{},title:null,desc:null,imgUrl:null}},onLoad:function(t){var e=this;e.getShopDetail(t.shop_id),(0,o.getJSSDK)(s,window.location.href)},onShareAppMessage:function(){var t=this,e=s.getShareUrlParams({shop_id:t.detail.shop_id});return{title:t.detail.article_title,path:"/pages/article/detail/index?"+e}},methods:{getShopDetail:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var i,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=this,n=!1,n=!0,a={latitude:"",longitude:""},!n){t.next=9;break}if(!(window.location.href.indexOf("https://")>-1)){t.next=9;break}return t.next=8,new Promise((function(t){try{uni.getLocation({type:"wgs84",fail:function(){t({latitude:"",longitude:""})},success:function(e){var i=e.latitude,n=e.longitude;t({latitude:i,longitude:n})},complete:function(){t({latitude:"",longitude:""})}})}catch(e){t({latitude:"",longitude:""})}}));case 8:a=t.sent;case 9:s._get("shop/detail",{shop_id:e,latitude:a.latitude,longitude:a.longitude},(function(t){i.setData(t.data);var e=s.getShareUrlParams({shop_id:i.detail.shop_id});(0,o.wxShare)({title:i.title||i.detail.article_title,desc:i.desc||i.detail.article_title,link:s.domain+"#/pages/article/detail/index?"+e,imgUrl:i.imgUrl||"",callback:function(){}})}));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onMakePhoneCall:function(){var t=this;uni.makePhoneCall({phoneNumber:t.detail.phone})},onOpenLocation:function(){var t=this,e=t.detail;uni.openLocation({name:e.shop_name,address:e.region.province+e.region.city+e.region.region+e.address,longitude:Number(e.longitude),latitude:Number(e.latitude),scale:15})},setData:function(t){var e,i,n=this,a=[];Object.keys(t).forEach((function(o){a=o.split("."),e=t[o],i=n.$data,a.forEach((function(t,o){console.log(t),o+1===a.length?n.$set(i,t,e):i[t]||n.$set(i,t,{}),i=i[t]}))}))}}};e.default=c},"201e":function(t,e,i){var n=i("83df");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("87b579d6",n,!0,{sourceMap:!1,shadowMode:!1})},"5a7a":function(t,e,i){"use strict";i.r(e);var n=i("178f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"83df":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-54b6c8b4], .container[data-v-54b6c8b4]{background:#fff}.container[data-v-54b6c8b4]{padding:0 0}.header[data-v-54b6c8b4]{padding:0 0 %?30?% 0;border-bottom:%?1?% solid #f1f1f1}.footer[data-v-54b6c8b4]{padding:%?30?% %?30?% 0}.shop-logo[data-v-54b6c8b4], .shop-name[data-v-54b6c8b4]{text-align:center}.shop-logo uni-image[data-v-54b6c8b4]{width:%?750?%;height:%?360?%;\r\n  /* border-radius: 50%; */\r\n  /* border-radius: 10rpx; */box-shadow:0 0 %?30?% rgba(0,0,0,.1)}.shop-name[data-v-54b6c8b4]{margin-top:%?16?%;font-size:%?32?%}.shop-summary[data-v-54b6c8b4]{padding:%?20?%;margin-top:%?30?%;font-size:%?26?%;line-height:1.6;background:#f9f9f9;border-radius:%?6?%}.content[data-v-54b6c8b4]{margin-top:%?30?%;padding:0 %?30?%}.content-item[data-v-54b6c8b4]{padding:%?12?% 0}.content-item__text[data-v-54b6c8b4]{padding:0 %?20?%}body.?%PAGE?%[data-v-54b6c8b4]{background:#fff}",""])},bc67:function(t,e,i){"use strict";var n=i("201e"),a=i.n(n);a.a},f286:function(t,e,i){"use strict";i.r(e);var n=i("0086"),a=i("5a7a");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bc67");var s,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"54b6c8b4",null,!1,n["a"],s);e["default"]=l.exports}}]);