(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-index"],{"0d4b":function(t,i,e){"use strict";e.r(i);var a=e("8b63"),n=e("e84d");for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("13ab");var o,c=e("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"619aec55",null,!1,a["a"],o);i["default"]=l.exports},"13ab":function(t,i,e){"use strict";var a=e("fe13"),n=e.n(a);n.a},"7ad6":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"/* 顶部选项卡 */.header[data-v-619aec55]{display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;top:0;width:100%;height:%?88?%;color:#333;font-size:%?28?%;background:#fff;border-bottom:%?1?% solid #e4e4e4;z-index:100;overflow:hidden;white-space:nowrap}.header .cs[data-v-619aec55]{display:inline-block;padding:0 %?15?%;text-align:center;min-width:20%;height:%?87?%;line-height:%?88?%;box-sizing:border-box}.header .cs uni-text[data-v-619aec55]{display:block;height:100%}.header .cs.active uni-text[data-v-619aec55]{color:#fd4a5f;border-bottom:%?2?% solid #fd4a5f}\r\n\r\n/* 文章列表 */.article-list[data-v-619aec55]{margin-top:%?108?%;line-height:1\r\n  /* padding: 0 20rpx; */}.article-list .article-item[data-v-619aec55]{margin-bottom:%?20?%;padding:%?30?%;background:#fff}.article-list .article-item[data-v-619aec55]:last-child{margin-bottom:0}.article-list .article-item .article-item__title[data-v-619aec55]{line-height:1.3}.article-list .article-item .article-item__image uni-image[data-v-619aec55]{display:block}\r\n\r\n/* 小图模式 */.show-type__10[data-v-619aec55]{display:-webkit-box;display:-webkit-flex;display:flex}.show-type__10 .article-item__left[data-v-619aec55]{padding-right:%?20?%}.show-type__10 .article-item__image uni-image[data-v-619aec55]{width:%?240?%}\r\n\r\n/* 大图模式 */.show-type__20 .article-item__image uni-image[data-v-619aec55]{width:100%}",""]),t.exports=i},"8b63":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"header"},[e("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-x":!0,"scroll-left":!0}},[e("v-uni-view",{class:"cs "+(0==t.category_id?"active":""),attrs:{"data-id":"0"},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.onSwitchTab.apply(void 0,arguments)}}},[e("v-uni-text",[t._v("全部")])],1),t._l(t.categoryList,(function(i,a){return e("v-uni-view",{key:a,class:"cs "+(i.category_id==t.category_id?"active":""),attrs:{"data-id":i.category_id},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.onSwitchTab.apply(void 0,arguments)}}},[e("v-uni-text",[t._v(t._s(i.name))])],1)}))],2)],1),e("v-uni-view",{staticClass:"article-list"},[e("v-uni-scroll-view",{style:"height: "+t.scrollHeight+"px;",attrs:{"scroll-y":!0},on:{scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.bindDownLoad.apply(void 0,arguments)}}},[t._l(t.articleList.data,(function(i,a){return e("v-uni-view",{key:a,class:"article-item show-type__"+i.show_type,attrs:{"data-id":i.article_id},on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.onTargetDetail.apply(void 0,arguments)}}},[10==i.show_type?[e("v-uni-view",{staticClass:"article-item__left flex-box"},[e("v-uni-view",{staticClass:"article-item__title twolist-hidden"},[e("v-uni-text",{staticClass:"dis-block f-30 col-3"},[t._v(t._s(i.article_title))])],1),e("v-uni-view",{staticClass:"article-item__footer m-top10"},[e("v-uni-text",{staticClass:"article-views f-24 col-8"},[t._v(t._s(i.show_views)+"次浏览")])],1)],1),e("v-uni-view",{staticClass:"article-item__image"},[e("v-uni-image",{attrs:{mode:"widthFix",src:i.image.file_path}})],1)]:t._e(),20==i.show_type?[e("v-uni-view",{staticClass:"article-item__title twolist-hidden"},[e("v-uni-text",{staticClass:"dis-block f-30 col-3"},[t._v(t._s(i.article_title))])],1),e("v-uni-view",{staticClass:"article-item__image m-top20"},[e("v-uni-image",{attrs:{mode:"widthFix",src:i.image.file_path}})],1),e("v-uni-view",{staticClass:"article-item__footer m-top10"},[e("v-uni-text",{staticClass:"article-views f-24 col-8"},[t._v(t._s(i.show_views)+"次浏览")])],1)]:t._e()],2)})),t.no_more?e("v-uni-view",{staticClass:"no-more f-30"},[t._v("亲, 没有更多了")]):t._e(),t.isLoading||t.articleList.data.length?t._e():e("v-uni-view",[e("v-uni-view",{staticClass:"yoshop-notcont"},[e("v-uni-text",{staticClass:"iconfont icon-wushuju"}),e("v-uni-text",{staticClass:"cont"},[t._v("亲，暂无内容哦")])],1)],1)],2)],1)],1)},s=[]},b0c0:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("99af"),e("4160"),e("159b"),e("b64b"),e("1276"),e("ac1f");var a=e("787c"),n=getApp().globalData,s={components:{},props:{},data:function(){return{categoryList:[],articleList:{data:[]},category_id:0,scrollHeight:null,no_more:!1,isLoading:!0,page:1}},onLoad:function(){this.setListHeight(),this.getIndexData(),(0,a.getJSSDK)(n,window.location.href),(0,a.wxShare)({title:"文章首页",desc:"文章首页",link:n.domain+"#/pages/article/index?"+n.getShareUrlParams(),imgUrl:"",callback:function(){}})},onShareAppMessage:function(){return{title:"文章首页",path:"/pages/article/index?"+n.getShareUrlParams()}},methods:{getIndexData:function(){var t=this;n._get("article/index",{},(function(i){t.setData({categoryList:i.data.categoryList})})),this.getArticleList()},onSwitchTab:function(t){this.setData({category_id:t.currentTarget.dataset.id,articleList:{data:[]},page:1,no_more:!1,isLoading:!0}),this.getArticleList()},getArticleList:function(t,i){var e=this;n._get("article/lists",{page:i||1,category_id:this.category_id},(function(i){var a=i.data.list,n=e.articleList;!0===t?e.setData({"articleList.data":n.data.concat(a.data),isLoading:!1}):e.setData({articleList:a,isLoading:!1})}))},onTargetDetail:function(t){uni.navigateTo({url:"./detail/index?article_id="+t.currentTarget.dataset.id})},bindDownLoad:function(){if(this.page>=this.articleList.last_page)return this.setData({no_more:!0}),!1;this.getArticleList(!0,++this.page)},setListHeight:function(){var t=uni.getSystemInfoSync(),i=t.windowWidth/750,e=Math.floor(98*i),a=t.windowHeight-e;console.log(t.windowHeight),this.setData({scrollHeight:a})},setData:function(t){var i,e,a=this,n=[];Object.keys(t).forEach((function(s){n=s.split("."),i=t[s],e=a.$data,n.forEach((function(t,s){console.log(t),s+1===n.length?a.$set(e,t,i):e[t]||a.$set(e,t,{}),e=e[t]}))}))}}};i.default=s},e84d:function(t,i,e){"use strict";e.r(i);var a=e("b0c0"),n=e.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},fe13:function(t,i,e){var a=e("7ad6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("4f278cd8",a,!0,{sourceMap:!1,shadowMode:!1})}}]);