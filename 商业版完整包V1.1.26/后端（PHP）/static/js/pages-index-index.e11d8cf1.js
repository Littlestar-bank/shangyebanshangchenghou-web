(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0d9b":function(t,a,e){"use strict";var n=e("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("4160"),e("159b"),e("b64b"),e("1276"),e("ac1f");var i=e("787c"),o=n(e("b9b4")),r=getApp().globalData,s={components:{diyComponent:o.default},props:{},data:function(){return{options:{},items:{},page:{},scrollTop:0,title:null,desc:null,imgUrl:null}},onLoad:function(t){t&&(this.options=t),this.getPageData(),(0,i.getJSSDK)(r,window.location.href)},onShareAppMessage:function(){var t=this;return{title:t.page.params.share_title,path:"/pages/index/index?"+r.getShareUrlParams()}},onPullDownRefresh:function(){this.getPageData((function(){uni.stopPullDownRefresh()}))},methods:{getPageData:function(t){var a=this;r._get("page/index",{page_id:this.options.page_id||0},(function(e){a.setPageBar(e.data.page),a.items=e.data.items,a.page=e.data.page,(0,i.wxShare)({title:e.data.title||e.data.page.params.share_title,desc:e.data.desc||e.data.page.params.share_title,link:r.domain+"#/pages/index/index?"+r.getShareUrlParams(),imgUrl:e.data.imgUrl||"",callback:function(){}}),"function"===typeof t&&t()}))},setPageBar:function(t){uni.setNavigationBarTitle({title:t.params.title}),uni.setNavigationBarColor({frontColor:"white"===t.style.titleTextColor?"#ffffff":"#000000",backgroundColor:t.style.titleBackgroundColor})},setData:function(t){var a,e,n=this,i=[];Object.keys(t).forEach((function(o){i=o.split("."),a=t[o],e=n.$data,i.forEach((function(t,o){console.log(t),o+1===i.length?n.$set(e,t,a):e[t]||n.$set(e,t,{}),e=e[t]}))}))}}};a.default=s},8069:function(t,a,e){"use strict";e.r(a);var n=e("0d9b"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a},a484:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"/* diy组件 */.test[data-v-654606ff]{color:red}uni-page-body[data-v-654606ff]{background:#fff!important}body.?%PAGE?%[data-v-654606ff]{background:#fff!important}",""]),t.exports=a},b578:function(t,a,e){var n=e("a484");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("4f595cac",n,!0,{sourceMap:!1,shadowMode:!1})},e880:function(t,a,e){"use strict";var n=e("b578"),i=e.n(n);i.a},eeb5:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container b-f"},[e("diy-component",{attrs:{diyItems:t.items}})],1)},o=[]},f75a:function(t,a,e){"use strict";e.r(a);var n=e("eeb5"),i=e("8069");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("e880");var r,s=e("f0c5"),f=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"654606ff",null,!1,n["a"],r);a["default"]=f.exports}}]);