(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-category-list"],{"4a58":function(t,i,a){"use strict";a.r(i);var e=a("56bd"),s=a("a3fc");for(var o in s)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return s[t]}))}(o);a("c0fc");var n,r=a("f0c5"),c=Object(r["a"])(s["default"],e["b"],e["c"],!1,null,"50d5a914",null,!1,e["a"],n);i["default"]=c.exports},"56bd":function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return o})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"list-header"},[e("v-uni-view",{staticClass:"index-search-box dis-flex"},[e("v-uni-view",{staticClass:"index-search flex-box",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.triggerSearch.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"index-cont-search"},[e("v-uni-icon",{staticClass:"text-center",attrs:{size:"15",type:"search"}}),e("v-uni-text",[t._v(t._s(t.option.search?t.option.search:"搜索商品"))])],1)],1),e("v-uni-view",{staticClass:"list-right f-28",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onChangeShowState.apply(void 0,arguments)}}},[t.showView?e("v-uni-text",{staticClass:"iconfont icon-tubiao_kuaizhuangpailie"}):e("v-uni-text",{staticClass:"iconfont icon-tubiao_liebiaopailie"})],1)],1),e("v-uni-view",{staticClass:"store_nav_cont dis-flex b-f b-b"},[e("v-uni-view",{staticClass:"flex-box t-c p-r",attrs:{"data-type":"all","data-index":"0 ",id:"list-"+("all"===t.sortType||0)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchSortType.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("综合")])],1),e("v-uni-view",{staticClass:"flex-box t-c p-r",attrs:{"data-type":"sales","data-index":"1",id:"list-"+("sales"===t.sortType||0)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchSortType.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("销量")])],1),e("v-uni-view",{staticClass:"dis-flex flex-x-center flex-box t-c p-r",attrs:{"data-type":"price","data-index":"2",id:"list-"+("price"===t.sortType||0)},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.switchSortType.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"price__text"},[t._v("价格")]),e("v-uni-view",{staticClass:"price__arrow dis-flex flex-dir-column flex-x-center flex-y-center"},[e("v-uni-text",{class:"iconfont icon-arrow-top "+(t.sortPrice?"":"active")}),e("v-uni-text",{class:"iconfont icon-arrow-bottom "+(t.sortPrice?"active":"")})],1)],1)],1),t.list.data.length>0?e("v-uni-scroll-view",{style:"height: "+t.scrollHeight+"px; width: 750rpx;",attrs:{"scroll-y":!0},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDownLoad.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"new"},[e("v-uni-view",{class:"category-list "+(t.showView?"arrange":"")},t._l(t.list.data,(function(i,a){return e("v-uni-navigator",{key:a,staticClass:"list b-f",attrs:{"hover-class":"none",url:"../goods/index?goods_id="+i.goods_id}},[e("v-uni-view",{staticClass:"left"},[e("v-uni-view",{staticClass:"img"},[e("v-uni-image",{staticClass:"goodsImg",attrs:{mode:"scaleToFill",src:i.goods_image}})],1)],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"cont"},[e("v-uni-text",{staticClass:"title f-29 twolist-hidden"},[t._v(t._s(i.goods_name))]),t.showView?[e("v-uni-view",{staticClass:"selling_point onelist-hidden"},[e("v-uni-text",[t._v(t._s(i.selling_point))])],1),e("v-uni-view",{staticClass:"goods_sales dis-flex"},[e("v-uni-text",{staticClass:"onelist-hidden"},[t._v("已售"+t._s(i.goods_sales)+"件")])],1)]:t._e(),e("v-uni-view",{staticClass:"detail-price onelist-hidden"},[e("v-uni-text",{staticClass:"goods-price f-30 col-m"},[t._v("￥"+t._s(i.goods_sku.goods_price))]),i.goods_sku.line_price>0?e("v-uni-text",{staticClass:"line-price col-9 f-24"},[t._v(t._s(i.goods_sku.line_price))]):t._e()],1)],2)],1)],1)})),1)],1),t.no_more?e("v-uni-view",{staticClass:"no-more f-30"},[t._v("亲, 没有更多了")]):t._e()],1):t._e()],1),t.isLoading||t.list.data.length?t._e():e("v-uni-view",{staticClass:"yoshop-notcont",staticStyle:{"margin-top":"130px"}},[e("v-uni-view",{staticClass:"img"},[e("v-uni-image",{attrs:{src:a("5c24"),mode:"aspectFit"}})],1),e("v-uni-text",{staticClass:"cont"},[t._v("亲, 没有相关内容")])],1)],1)},o=[]},"5c24":function(t,i,a){t.exports=a.p+"static/img/no_content.3c66ea94.png"},a3fc:function(t,i,a){"use strict";a.r(i);var e=a("c463"),s=a.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){a.d(i,t,(function(){return e[t]}))}(o);i["default"]=s.a},c0fc:function(t,i,a){"use strict";var e=a("fcdf"),s=a.n(e);s.a},c463:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("841c"),a("ac1f"),a("99af"),a("4160"),a("159b"),a("b64b"),a("1276");var e=a("787c"),s="category/list::",o=getApp().globalData,n={components:{},props:{},data:function(){return{scrollHeight:null,showView:!1,sortType:"all",sortPrice:!1,option:{},list:{data:[]},no_more:!1,isLoading:!0,page:1}},onLoad:function(t){var i=this;i.setListHeight(),i.setData({option:t}),i.setShowView(),i.getGoodsList(),(0,e.getJSSDK)(o,window.location.href),(0,e.wxShare)({title:"全部分类",desc:"全部分类",link:o.domain+"#/pages/category/index?"+o.getShareUrlParams(),imgUrl:"",callback:function(){}})},onShareAppMessage:function(){return{title:"全部分类",path:"/pages/category/index?"+o.getShareUrlParams()}},methods:{setShowView:function(){var t=this;t.setData({showView:uni.getStorageSync(s+"showView")||!1})},getGoodsList:function(t,i){var a=this;o._get("goods/lists",{page:i||1,sortType:this.sortType,sortPrice:this.sortPrice?1:0,category_id:this.option.category_id||0,search:this.option.search||""},(function(i){var e=i.data.list,s=a.list;!0===t?a.setData({"list.data":s.data.concat(e.data),isLoading:!1}):a.setData({list:e,isLoading:!1})}))},setListHeight:function(){var t=this;uni.getSystemInfo({success:function(i){t.setData({scrollHeight:i.windowHeight-90})}})},switchSortType:function(t){var i=this,a=t.currentTarget.dataset.type,e="price"!==a||!this.sortPrice;this.setData({list:{data:[]},isLoading:!0,page:1,sortType:a,sortPrice:e}),i.getGoodsList()},onChangeShowState:function(){var t=this,i=!t.showView;uni.setStorageSync(s+"showView",i),t.setData({showView:i})},bindDownLoad:function(){if(this.page>=this.list.last_page)return this.setData({no_more:!0}),!1;this.getGoodsList(!0,++this.page)},triggerSearch:function(){var t=getCurrentPages();t.length>1&&"pages/search/index"===t[t.length-2].route?uni.navigateBack():uni.navigateTo({url:"../search/index"})},setData:function(t){var i,a,e=this,s=[];Object.keys(t).forEach((function(o){s=o.split("."),i=t[o],a=e.$data,s.forEach((function(t,o){console.log(t),o+1===s.length?e.$set(a,t,i):a[t]||e.$set(a,t,{}),a=a[t]}))}))}}};i.default=n},c9a9:function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,".store_nav_cont[data-v-50d5a914]{padding:%?20?% 0}.store_nav_cont #list-true[data-v-50d5a914]{color:#ff495e;font-size:%?28?%}.store_nav_cont #list-0[data-v-50d5a914]{color:#333;font-size:%?28?%}.store_nav_cont .price__arrow[data-v-50d5a914]{padding-left:%?20?%;font-size:%?18?%;color:#777}.store_nav_cont #list-true .price__arrow uni-text.active[data-v-50d5a914]{color:#ff495e}.container[data-v-50d5a914]{position:relative}.index-cont-search uni-icon[data-v-50d5a914]{left:0;margin-left:%?20?%}.index-search-box[data-v-50d5a914]{background:#fff;padding:%?18?% %?13?%;border-bottom:%?1?% solid #eee}.index-search[data-v-50d5a914]{border-bottom:0;background:#fff;border-radius:%?50?%;overflow:hidden;position:relative;font-size:%?32?%;color:#999;box-sizing:border-box;height:%?64?%;line-height:%?64?%;margin:0 %?10?%}.list-right[data-v-50d5a914]{width:%?60?%}.list-right uni-text[data-v-50d5a914]{height:%?60?%;line-height:%?60?%;font-size:%?40?%}.list-header[data-v-50d5a914]{position:fixed;top:%?1?%;left:0;right:0}.no-more[data-v-50d5a914]{text-align:center;color:#737373;padding:%?20?% 0}.category-list[data-v-50d5a914]{overflow:hidden}.category-list .list[data-v-50d5a914]{box-sizing:border-box;width:50%;float:left}.category-list .list[data-v-50d5a914]:nth-child(2n){border-left:%?4?% solid #f7f7f7;border-bottom:%?8?% solid #f7f7f7}.category-list .list[data-v-50d5a914]:nth-child(2n-1){border-right:%?4?% solid #f7f7f7;border-bottom:%?8?% solid #f7f7f7}.category-list .list .left[data-v-50d5a914], .category-list .right[data-v-50d5a914]{width:100%}.category-list .list .left .img uni-image[data-v-50d5a914]{width:100%;height:%?375?%;display:block}.category-list .right .cont[data-v-50d5a914]{padding:%?10?% %?12?%}.category-list .right .cont .title[data-v-50d5a914]{height:%?72?%;line-height:1.3}.category-list.arrange .list[data-v-50d5a914]{overflow:hidden;padding:%?15?%;border-bottom:%?1?% solid #f7f7f7;width:100%}.category-list.arrange .list uni-text[data-v-50d5a914]{line-height:1.6}.category-list.arrange .list .left[data-v-50d5a914]{width:35%;float:left}.category-list.arrange .list .right[data-v-50d5a914]{width:65%;float:left}.category-list.arrange .list .left .img uni-image[data-v-50d5a914]{width:%?220?%;height:%?220?%}\r\n\r\n/* 商品卖点 */.selling_point[data-v-50d5a914]{width:100%;font-size:%?24?%;line-height:1.4;color:#ff495e}.goods_sales[data-v-50d5a914]{color:#999;font-size:%?24?%}\r\n\r\n/* 商品价格 */.detail-price[data-v-50d5a914]{font-size:%?24?%}.detail-price .goods-price[data-v-50d5a914]{margin-right:%?8?%}.detail-price .line-price[data-v-50d5a914]{text-decoration:line-through}",""]),t.exports=i},fcdf:function(t,i,a){var e=a("c9a9");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("2a7172b8",e,!0,{sourceMap:!1,shadowMode:!1})}}]);