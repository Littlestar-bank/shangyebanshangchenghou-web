(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-express-express"],{1091:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("456d"),i("ac6a");var s=getApp().globalData,o={components:{},props:{},data:function(){return{options:{},express:{}}},onLoad:function(t){this.getExpressDynamic(t.order_id)},methods:{getExpressDynamic:function(t){var e=this;s._get("user.order/express",{order_id:t},(function(t){e.setData(t.data)}),(function(){uni.navigateBack()}))},setData:function(t){var e,i,s=this,o=[];Object.keys(t).forEach((function(a){o=a.split("."),e=t[a],i=s.$data,o.forEach((function(t,a){console.log(t),a+1===o.length?s.$set(i,t,e):i[t]||s.$set(i,t,{}),i=i[t]}))}))}}};e.default=o},"291e":function(t,e,i){"use strict";var s,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.express.express_name?i("v-uni-view",{staticClass:"container p-bottom"},[i("v-uni-view",{staticClass:"flow-all-money dis-flex b-f padding-box"},[i("v-uni-view",{staticClass:"flex-box"},[i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"col-7"},[t._v("物流公司: "+t._s(t.express.express_name))])],1),i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"col-7",attrs:{selectable:"true"}},[t._v("物流单号: "+t._s(t.express.express_no))])],1)],1)],1),i("v-uni-view",{staticClass:"logis-detail m-top20 b-f"},t._l(t.express.list,(function(e,s){return i("v-uni-view",{key:s,class:"logis-item "+(0===s?"first":"")},[i("v-uni-view",{staticClass:"logis-item-content"},[i("v-uni-view",{staticClass:"logis-item-content__describe"},[i("v-uni-text",{staticClass:"f-26"},[t._v(t._s(e.context))])],1),i("v-uni-view",{staticClass:"logis-item-content__time"},[i("v-uni-text",{staticClass:"f-22"},[t._v(t._s(e.ftime))])],1)],1)],1)})),1)],1):t._e()},a=[];i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}))},"3b1a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.logis-detail[data-v-64c1b435]{padding:%?30?%}.logis-detail .logis-item[data-v-64c1b435]{position:relative;padding:10px 0 10px 25px;box-sizing:border-box;border-left:2px solid #ccc}.logis-detail .logis-item.first[data-v-64c1b435]{border-left:2px solid #f40}.logis-detail .logis-item[data-v-64c1b435]:after{content:" ";display:inline-block;position:absolute;left:-6px;top:30px;width:6px;height:6px;border-radius:10px;background:#bdbdbd;border:2px solid #fff}.logis-detail .logis-item.first[data-v-64c1b435]:after{background:#f40}.logis-detail .logis-item .logis-item-content[data-v-64c1b435]{position:relative;background:#f9f9f9;padding:%?10?% %?20?%;box-sizing:border-box;color:#666}.logis-detail .logis-item.first .logis-item-content[data-v-64c1b435]{background:#ff6e39;color:#fff}.logis-detail .logis-item .logis-item-content[data-v-64c1b435]:after{content:"";display:inline-block;position:absolute;left:-10px;top:18px;border-left:10px solid #fff;border-bottom:10px solid #f3f3f3}.logis-detail .logis-item.first .logis-item-content[data-v-64c1b435]:after{border-bottom-color:#ff6e39}',""])},"400f":function(t,e,i){"use strict";var s=i("c5ad"),o=i.n(s);o.a},"51de":function(t,e,i){"use strict";i.r(e);var s=i("291e"),o=i("6396");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("400f");var n,l=i("f0c5"),r=Object(l["a"])(o["default"],s["b"],s["c"],!1,null,"64c1b435",null,!1,s["a"],n);e["default"]=r.exports},6396:function(t,e,i){"use strict";i.r(e);var s=i("1091"),o=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=o.a},c5ad:function(t,e,i){var s=i("3b1a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=i("4f06").default;o("1be62410",s,!0,{sourceMap:!1,shadowMode:!1})}}]);