(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-express-express"],{"0680":function(t,i,e){"use strict";var s;e.d(i,"b",(function(){return o})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return s}));var o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.express.express_name?e("v-uni-view",{staticClass:"container p-bottom"},[e("v-uni-view",{staticClass:"flow-all-money dis-flex b-f padding-box"},[e("v-uni-view",{staticClass:"flex-box"},[e("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[e("v-uni-text",{staticClass:"col-7"},[t._v("物流公司: "+t._s(t.express.express_name))])],1),e("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[e("v-uni-text",{staticClass:"col-7",attrs:{selectable:"true"}},[t._v("物流单号: "+t._s(t.express.express_no))])],1)],1)],1),e("v-uni-view",{staticClass:"logis-detail m-top20 b-f"},t._l(t.express.list,(function(i,s){return e("v-uni-view",{key:s,class:"logis-item "+(0===s?"first":"")},[e("v-uni-view",{staticClass:"logis-item-content"},[e("v-uni-view",{staticClass:"logis-item-content__describe"},[e("v-uni-text",{staticClass:"f-26"},[t._v(t._s(i.context))])],1),e("v-uni-view",{staticClass:"logis-item-content__time"},[e("v-uni-text",{staticClass:"f-22"},[t._v(t._s(i.ftime))])],1)],1)],1)})),1)],1):t._e()},a=[]},1091:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("4160"),e("159b"),e("b64b"),e("1276"),e("ac1f");var s=getApp().globalData,o={components:{},props:{},data:function(){return{options:{},express:{}}},onLoad:function(t){this.getExpressDynamic(t.order_id)},methods:{getExpressDynamic:function(t){var i=this;s._get("user.order/express",{order_id:t},(function(t){i.setData(t.data)}),(function(){uni.navigateBack()}))},setData:function(t){var i,e,s=this,o=[];Object.keys(t).forEach((function(a){o=a.split("."),i=t[a],e=s.$data,o.forEach((function(t,a){console.log(t),a+1===o.length?s.$set(e,t,i):e[t]||s.$set(e,t,{}),e=e[t]}))}))}}};i.default=o},2615:function(t,i,e){"use strict";var s=e("7643"),o=e.n(s);o.a},"51de":function(t,i,e){"use strict";e.r(i);var s=e("0680"),o=e("6396");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return o[t]}))}(a);e("2615");var n,l=e("f0c5"),r=Object(l["a"])(o["default"],s["b"],s["c"],!1,null,"43d901b4",null,!1,s["a"],n);i["default"]=r.exports},6396:function(t,i,e){"use strict";e.r(i);var s=e("1091"),o=e.n(s);for(var a in s)["default"].indexOf(a)<0&&function(t){e.d(i,t,(function(){return s[t]}))}(a);i["default"]=o.a},7643:function(t,i,e){var s=e("83df");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=e("4f06").default;o("641fd286",s,!0,{sourceMap:!1,shadowMode:!1})},"83df":function(t,i,e){var s=e("24fb");i=s(!1),i.push([t.i,'.logis-detail[data-v-43d901b4]{padding:%?30?%}.logis-detail .logis-item[data-v-43d901b4]{position:relative;padding:10px 0 10px 25px;box-sizing:border-box;border-left:2px solid #ccc}.logis-detail .logis-item.first[data-v-43d901b4]{border-left:2px solid #f40}.logis-detail .logis-item[data-v-43d901b4]:after{content:" ";display:inline-block;position:absolute;left:-6px;top:30px;width:6px;height:6px;border-radius:10px;background:#bdbdbd;border:2px solid #fff}.logis-detail .logis-item.first[data-v-43d901b4]:after{background:#f40}.logis-detail .logis-item .logis-item-content[data-v-43d901b4]{position:relative;background:#f9f9f9;padding:%?10?% %?20?%;box-sizing:border-box;color:#666}.logis-detail .logis-item.first .logis-item-content[data-v-43d901b4]{background:#ff6e39;color:#fff}.logis-detail .logis-item .logis-item-content[data-v-43d901b4]:after{content:"";display:inline-block;position:absolute;left:-10px;top:18px;border-left:10px solid #fff;border-bottom:10px solid #f3f3f3}.logis-detail .logis-item.first .logis-item-content[data-v-43d901b4]:after{border-bottom-color:#ff6e39}',""]),t.exports=i}}]);