(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-index"],{"03bf":function(t,e,o){"use strict";o.r(e);var a=o("42f4"),n=o("0556");for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);o("2405");var s,r=o("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"3f766e8e",null,!1,a["a"],s);e["default"]=d.exports},"0556":function(t,e,o){"use strict";o.r(e);var a=o("c69e"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},"0e7e":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("28a5"),o("456d"),o("ac6a");var a=o("9c03"),n={components:{},mixins:[a],props:{type:{type:String,default:""},size:{type:String,default:""},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},externalClasses:["custom-class","theme-class"],data:function(){return{relations:{"../btn-group/index":{type:"parent",linked:function(){this.setData({inGroup:!0})},unlinked:function(){this.setData({inGroup:!1})}}},inGroup:!1,isLast:!1}},methods:{handleTap:function(){this.disabled?this.$emit("disabledclick"):this.$emit("btnclick")},switchLastButtonStatus:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setData({isLast:t})},setData:function(t){var e,o,a=this,n=[];Object.keys(t).forEach((function(i){n=i.split("."),e=t[i],o=a.$data,n.forEach((function(t,i){console.log(t),i+1===n.length?a.$set(o,t,e):o[t]||a.$set(o,t,{}),o=o[t]}))}))}}};e.default=n},2405:function(t,e,o){"use strict";var a=o("bc69"),n=o.n(a);n.a},"3c23":function(t,e,o){"use strict";var a=o("651d"),n=o.n(a);n.a},"42f4":function(t,e,o){"use strict";var a={shortcut:o("da18").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-scroll-view",{staticStyle:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0"},attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)}}},[t.detail.goods_id?a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"swiper"},[a("v-uni-swiper",{staticClass:"banner-box  swiper-box",attrs:{autoplay:t.autoplay,duration:t.duration,"indicator-dots":t.indicatorDots,interval:t.interval,circular:"true"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.setCurrent.apply(void 0,arguments)}}},t._l(t.detail.image,(function(e,o){return a("v-uni-swiper-item",{key:o,attrs:{"data-index":o},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onPreviewImages.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:e.file_path}})],1)})),1),a("v-uni-view",{staticClass:"banner-num"},[a("v-uni-text",[t._v(t._s(t.currentIndex))]),a("v-uni-text",[t._v("/"+t._s(t.detail.image.length))])],1)],1),a("v-uni-view",{staticClass:"cont-box b-f"},[a("v-uni-view",{staticClass:"dis-flex flex-y-center"},[a("v-uni-view",{staticClass:"left flex-box dis-flex flex-dir-column"},[a("v-uni-view",{staticClass:"goods-title"},[a("v-uni-text",{staticClass:"title f-30 twolist-hidden"},[t._v(t._s(t.detail.goods_name))])],1),a("v-uni-view",{staticClass:"goods-selling-point"},[a("v-uni-text",{staticClass:"f-24"},[t._v(t._s(t.detail.selling_point))])],1),a("v-uni-view",{staticClass:"money-box dis-flex flex-y-center"},[a("v-uni-view",{staticClass:"goods-price"},[a("v-uni-text",{staticClass:"col-m f-26"},[t._v("￥")]),a("v-uni-text",{staticClass:"goods-price_num col-m f-40"},[t._v(t._s(t.goods_price))])],1),t.line_price>0?a("v-uni-view",{staticClass:"line-price"},[a("v-uni-text",[t._v("￥"+t._s(t.line_price))])],1):t._e(),t.detail.is_user_grade?a("v-uni-view",{staticClass:"tag-grade-price"},[a("v-uni-text",[t._v("会员折扣价")])],1):t._e()],1)],1),a("v-uni-view",{staticClass:"right goods__share"},[a("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickShare.apply(void 0,arguments)}}},[a("v-uni-button",{staticClass:"share-btn dis-flex flex-dir-column",attrs:{formType:"submit"}},[a("v-uni-text",{staticClass:"share__icon iconfont icon-fenxiang"}),a("v-uni-text",{staticClass:"f-24"},[t._v("分享")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"goods-sales-box f-28 dis-flex col-8"},[a("v-uni-text",{staticClass:"flex-box num"},[t._v("销量："+t._s(t.detail.goods_sales))])],1)],1),t.goodsMultiSpec.spec_attr?a("v-uni-form",{attrs:{"report-submit":!0},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.onToggleTrade.apply(void 0,arguments)}}},[a("v-uni-button",{staticClass:"btn-normal",attrs:{formType:"submit"}},[a("v-uni-view",{staticClass:"sku-selector cont-box b-f m-top20 dis-flex flex-y-center"},[a("v-uni-view",{staticClass:"flex-box f-28"},[a("v-uni-text",{staticClass:"col-9"},[t._v("选择：")]),t._l(t.goodsMultiSpec.spec_attr,(function(e,o){return a("v-uni-text",{key:o},[t._v(t._s(e.group_name))])}))],2),a("v-uni-view",{staticClass:"f-26 col-9 t-r"},[a("v-uni-text",{staticClass:"iconfont icon-xiangyoujiantou"})],1)],1)],1)],1):t._e(),a("zan-popup",{attrs:{show:t.showBottomPopup,type:"bottom"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.onToggleTrade.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"popup__trade"},[a("v-uni-view",{staticClass:"trade-close dis-flex flex-x-center flex-y-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onToggleTrade.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-close f-26"})],1),a("v-uni-view",{staticClass:"trade-main"},[a("v-uni-view",{staticClass:"goods-info dis-flex"},[a("v-uni-view",{staticClass:"goods-image",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onPreviewSkuImage.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.skuCoverImage}})],1),a("v-uni-view",{staticClass:"right flex-box"},[a("v-uni-view",{staticClass:"money-box dis-flex flex-y-end"},[a("v-uni-view",{staticClass:"goods-price"},[a("v-uni-text",{staticClass:"col-m f-26"},[t._v("￥")]),a("v-uni-text",{staticClass:"goods-price_num col-m f-40"},[t._v(t._s(t.goods_price))])],1),t.line_price>0?a("v-uni-view",{staticClass:"line-price"},[a("v-uni-text",[t._v("￥"+t._s(t.line_price))])],1):t._e()],1),a("v-uni-view",{staticClass:"goods-stock dis-flex"},[a("v-uni-text",{staticClass:"flex-box f-26 col-7"},[t._v("库存："+t._s(t.stock_num))])],1)],1)],1),a("v-uni-view",{staticClass:"goods-attr"},[a("v-uni-scroll-view",{staticClass:"goods-attr--scroll",attrs:{"scroll-y":"true"}},t._l(t.goodsMultiSpec.spec_attr,(function(e,o){return a("v-uni-view",{key:o,staticClass:"group-item"},[a("v-uni-view",{staticClass:"tips-text",attrs:{"data-id":e.group_id}},[t._v(t._s(e.group_name))]),t._l(e.spec_items,(function(e,n){return a("v-uni-view",{key:n,class:"spec-item "+(e.checked?"cur":""),attrs:{"data-attr-idx":o,"data-item-idx":n},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onSwitchSpec.apply(void 0,arguments)}}},[t._v(t._s(e.spec_value))])}))],2)})),1)],1),a("v-uni-view",{staticClass:"buy_number"},[a("v-uni-view",{staticClass:"buyNumber f-26"},[a("v-uni-text",[t._v("购买数量")])],1),a("v-uni-view",{staticClass:"select-number"},[a("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.onDecGoodsNumber.apply(void 0,arguments)}}},[a("v-uni-button",{class:"default "+(t.goods_num>1?"":"disabled"),attrs:{formType:"submit",type:"default"}},[t._v("-")])],1),a("v-uni-input",{attrs:{type:"number",value:t.goods_num},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.onInputGoodsNum.apply(void 0,arguments)}}}),a("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.onIncGoodsNumber.apply(void 0,arguments)}}},[a("v-uni-button",{staticClass:"default",attrs:{formType:"submit",type:"default"}},[t._v("+")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"footer-fixed f-30"},[t.stock_num>0?[a("v-uni-view",{staticClass:"order-number",attrs:{"data-type":"addCart"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onConfirmSubmit.apply(void 0,arguments)}}},[t._v("加入购物车")]),a("v-uni-view",{staticClass:"order-bt",attrs:{"data-type":"buyNow"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onConfirmSubmit.apply(void 0,arguments)}}},[t._v("立即购买")])]:a("v-uni-view",{staticClass:"default-btn"},[t._v("暂无现货")])],2)],1)],1),t.detail.comment_data.length?a("v-uni-view",{staticClass:"goods-comment"},[a("v-uni-view",{staticClass:"cont-box b-f goods-property-box m-top20"},[a("v-uni-text",{staticClass:"col-3 f-30"},[t._v("评价 ("+t._s(t.detail.comment_data_count)+"条)")]),a("v-uni-text",{staticClass:"comment-num",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onTargetToComment.apply(void 0,arguments)}}},[t._v("查看更多")]),a("v-uni-view",{staticClass:"goods-property-jianTou"},[a("v-uni-text",{staticClass:"iconfont icon-xiangyoujiantou user-orderJtou",staticStyle:{"margin-top":"0"}})],1)],1),t._l(t.detail.comment_data,(function(e,o){return a("v-uni-view",{key:o,staticClass:"goods-comment-box b-f"},[a("v-uni-view",{staticClass:"cont-box goods-comment-box b-t b-f b-b"},[a("v-uni-view",{staticClass:"dis-flex"},[a("v-uni-view",{staticClass:"user"},[a("v-uni-text",{staticClass:"user_name f-26"},[t._v(t._s(e.user.nickName))])],1),a("v-uni-view",{staticClass:"com_xing"},[a("v-uni-text",{staticClass:"iconfont icon-shoucang active"}),e.score<30?[a("v-uni-text",{staticClass:"iconfont icon-shoucang active"}),a("v-uni-text",{staticClass:"iconfont icon-shoucang active"})]:t._e(),e.score<20?[a("v-uni-text",{staticClass:"iconfont icon-shoucang active"}),a("v-uni-text",{staticClass:"iconfont icon-shoucang active"})]:t._e()],2)],1),a("v-uni-view",{staticClass:"goods-comment-cont m-top20"},[a("v-uni-text",{staticClass:"f-26 twolist-hidden"},[t._v(t._s(e.content))])],1),a("v-uni-view",{staticClass:"f-22 col-9 m-top10"},[t._v(t._s(e.create_time))])],1)],1)}))],2):t._e(),a("v-uni-view",{staticClass:"p-bottom"},[a("v-uni-view",{staticClass:"top-nav m-top20 b-f b-b"},[a("v-uni-view",{staticClass:"top-nav-bar"},[t._v("商品描述")])],1),a("v-uni-view",{staticClass:"order",attrs:{hidden:t.hiddenOrder}},[""!=t.detail.content?a("v-uni-view",[a("v-uni-view",{staticClass:"b-f goods-detail-box"},[a("u-parse",{attrs:{content:t.detail.content}})],1)],1):a("v-uni-view",[a("v-uni-view",{staticClass:"shop-notcont"},[a("v-uni-text",{staticClass:"iconfont icon-wushuju"}),a("v-uni-text",{staticClass:"cont"},[t._v("亲,此处暂无详情数据")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"footer-fixed f-30"},[a("v-uni-view",{staticClass:"goods-fixed-icon dis-flex flex-x-center flex-y-center"},[a("v-uni-button",{staticStyle:{opacity:"0",position:"absolute",top:"0px",left:"0px",display:"block",width:"100%",height:"100%"},attrs:{"open-type":"contact",sessionFrom:"weapp",size:"27",type:"default-light"}}),a("v-uni-text",{staticClass:"iconfont icon-kefu "})],1),a("v-uni-view",{staticClass:"goods-fixed-icon",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onTriggerCart.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"flow-img",attrs:{src:o("fa00")}}),t.cart_total_num>0?a("v-uni-view",{staticClass:"flow_num"},[a("v-uni-text",{},[t._v(t._s(t.cart_total_num))])],1):t._e()],1),a("v-uni-view",{staticClass:"order-number",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onToggleTrade.apply(void 0,arguments)}}},[t._v("加入购物车")]),a("v-uni-view",{staticClass:"order-bt",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onToggleTrade.apply(void 0,arguments)}}},[t._v("立即购买")])],1)],1):t._e()],1),t.floorstatus?a("v-uni-view",{staticClass:"widget-goTop",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onScrollTop.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-fanhuidingbu"})],1):t._e(),a("zan-actionsheet",{attrs:{show:t.share.show,actions:t.share.actions,"cancel-text":t.share.cancelText,"cancel-with-mask":t.share.cancelWithMask,"mask-class":"tiny"},on:{cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseShare.apply(void 0,arguments)},actionclick:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickShareItem.apply(void 0,arguments)}}}),a("zan-popup",{attrs:{show:t.share.showPopup},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.onTogglePopup.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pop-poster pop-example__container"},[a("v-uni-view",{staticClass:"pop-close dis-flex flex-x-center flex-y-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onTogglePopup.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-shanchu f-30 col-9"})],1),a("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.onSavePoster.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"poster__image"},[a("v-uni-image",{attrs:{mode:"widthFix",src:t.qrcode}})],1),a("v-uni-view",{staticClass:"poster__tips m-top10 t-c"}),a("v-uni-view",{staticClass:"padding-box m-top10 profile-btn"},[a("v-uni-button",{attrs:{formType:"submit"}},[t._v("保存图片")])],1)],1)],1)],1),a("shortcut",{attrs:{id:""}})],1)},i=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return a}))},"444f":function(t,e,o){"use strict";o.r(e);var a=o("0e7e"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},"49b5":function(t,e,o){"use strict";var a=o("5a2d"),n=o.n(a);n.a},"4b46":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={components:{},props:{show:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},type:{type:String,default:"center"}},data:function(){return{}},methods:{handleMaskClick:function(){this.$emit("clickmask",{})}}};e.default=a},"5a2d":function(t,e,o){var a=o("a2c7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("7b0c7536",a,!0,{sourceMap:!1,shadowMode:!1})},"651d":function(t,e,o){var a=o("7855");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("ece1063c",a,!0,{sourceMap:!1,shadowMode:!1})},7855:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'.zan-btn[data-v-3150da7e]{position:relative;color:#333;background-color:#fff;padding-left:15px;padding-right:15px;border-radius:2px;font-size:16px;line-height:45px;height:45px;box-sizing:border-box;text-decoration:none;text-align:center;vertical-align:middle;overflow:visible}.zan-btn--group[data-v-3150da7e]{margin-bottom:10px}.zan-btn[data-v-3150da7e]::after{content:"";position:absolute;top:0;left:0;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:0 solid #e5e5e5;border-width:1px;border-radius:4px}.zan-btn--primary[data-v-3150da7e]{color:#fff;background-color:#4b0}.zan-btn--primary[data-v-3150da7e]::after{border-color:#0a0}.zan-btn--warn[data-v-3150da7e]{color:#fff;background-color:#f85}.zan-btn--warn[data-v-3150da7e]::after{border-color:#f85}.zan-btn--danger[data-v-3150da7e]{color:#fff;background-color:#f44}.zan-btn--danger[data-v-3150da7e]::after{border-color:#e33}.zan-btn--small[data-v-3150da7e]{display:inline-block;height:30px;line-height:30px;font-size:12px}.zan-btn--small.zan-btn--group[data-v-3150da7e]{margin-bottom:0;margin-right:5px}.zan-btn--mini[data-v-3150da7e]{display:inline-block;line-height:21px;height:22px;font-size:10px;padding-left:5px;padding-right:5px}.zan-btn--mini.zan-btn--group[data-v-3150da7e]{margin-bottom:0;margin-right:5px}.zan-btn--large[data-v-3150da7e]{border-radius:0;border:none;line-height:50px;height:50px}.zan-btn--large.zan-btn--group[data-v-3150da7e]{margin-bottom:0}.zan-btn--plain.zan-btn[data-v-3150da7e]{background-color:initial}.zan-btn--plain.zan-btn--primary[data-v-3150da7e]{color:#06bf04}.zan-btn--plain.zan-btn--warn[data-v-3150da7e]{color:#f60}.zan-btn--plain.zan-btn--danger[data-v-3150da7e]{color:#f44}.button-hover[data-v-3150da7e]{opacity:.9}.zan-btn--loading[data-v-3150da7e]{color:transparent;opacity:1}.zan-btn--loading[data-v-3150da7e]::before{position:absolute;left:50%;top:50%;content:" ";width:16px;height:16px;margin-left:-8px;margin-top:-8px;border:3px solid #e5e5e5;border-color:#666 #e5e5e5 #e5e5e5 #e5e5e5;border-radius:8px;box-sizing:border-box;-webkit-animation:btn-spin-data-v-3150da7e .6s linear;animation:btn-spin-data-v-3150da7e .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.zan-btn--danger.zan-btn--loading[data-v-3150da7e]::before,.zan-btn--primary.zan-btn--loading[data-v-3150da7e]::before,.zan-btn--warn.zan-btn--loading[data-v-3150da7e]::before{border-color:#fff rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1)}@-webkit-keyframes btn-spin-data-v-3150da7e{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes btn-spin-data-v-3150da7e{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.zan-btn.zan-btn--disabled[data-v-3150da7e]{color:#999!important;background:#f8f8f8!important;border-color:#e5e5e5!important;cursor:not-allowed!important;opacity:1!important}.zan-btn.zan-btn--disabled[data-v-3150da7e]::after{border-color:#e5e5e5!important}.zan-btn--group.zan-btn--last[data-v-3150da7e]{margin-bottom:0;margin-right:0}',""])},"8ae7":function(t,e,o){"use strict";o.r(e);var a=o("eb7a"),n=o("444f");for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);o("3c23");var s,r=o("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"3150da7e",null,!1,a["a"],s);e["default"]=d.exports},"8fba":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,'/* wxParse.wxss */.slide-image[data-v-3f766e8e]{background:#fff}.banner-box[data-v-3f766e8e]{height:%?750?%;border-bottom:%?1?% solid #e4e4e4}.user-orderJtou[data-v-3f766e8e]{color:#999;font-size:%?26?%;position:absolute;top:50%;margin-top:%?-9?%}\r\n\r\n/* 底部操作栏 */.footer-fixed .goods-fixed-icon[data-v-3f766e8e]{width:%?150?%;background:#fff;margin:0 auto;padding:0 %?6?%;border-left:%?1?% solid #eee;height:%?92?%;position:relative}.footer-fixed .goods-fixed-icon[data-v-3f766e8e]:first-child{border-left:none}.footer-fixed .goods-fixed-icon uni-image[data-v-3f766e8e]{width:%?56?%;height:%?56?%;display:block;position:absolute;left:0;margin-left:%?30?%;top:0;margin-top:%?17?%}.footer-fixed .goods-fixed-icon uni-text[data-v-3f766e8e]{color:#7a7e83;font-size:%?48?%}.footer-fixed .goods-fixed-icon .bargain-icon[data-v-3f766e8e]{height:%?50?%}.footer-fixed .goods-fixed-icon .bargain-icon uni-image[data-v-3f766e8e]{height:%?50?%;width:%?50?%;margin-top:%?-40?%}.footer-fixed .goods-fixed-icon .bargain-home[data-v-3f766e8e]{margin-top:%?6?%;text-align:center}.footer-fixed .goods-fixed-icon .flow_num uni-text[data-v-3f766e8e]{display:block;color:#fff;font-size:%?22?%;text-align:center}.footer-fixed .goods-fixed-icon .icon-shoucang[data-v-3f766e8e]{font-size:%?40?%}.footer-fixed .goods-fixed-icon .s_cont[data-v-3f766e8e]{color:#ff495e}\r\n\r\n/* 商品标题 */.goods-title[data-v-3f766e8e]{overflow:hidden;padding:0 %?0?% 0 0;color:#333}\r\n\r\n/* 商品价格 */.money-box[data-v-3f766e8e]{margin:%?10?% 0}.money-box .goods-price .goods-price_num[data-v-3f766e8e]{font-size:%?40?%}.money-box .line-price[data-v-3f766e8e]{font-size:%?24?%;color:#999;padding-top:%?6?%;text-decoration:line-through;margin-left:%?12?%}\r\n\r\n/* 会员价标签 */.tag-grade-price[data-v-3f766e8e]{background:-webkit-linear-gradient(left,#fa1e8c,#fc1e56);background:linear-gradient(90deg,#fa1e8c 0,#fc1e56);background:#fc1e56;font-size:%?22?%;border-radius:%?12?%;color:#fff;padding:%?4?% %?12?%;margin-left:%?20?%}\r\n\r\n/* 商品销量 */.goods-sales-box .stock[data-v-3f766e8e]{display:block;text-align:right}\r\n\r\n/* 商品评论 */.goods-comment .goods-property-box[data-v-3f766e8e]{position:relative;padding:12px}.goods-comment .goods-property-jianTou[data-v-3f766e8e]{width:%?52?%;position:absolute;right:0;top:50%;margin-top:%?-13?%}.goods-comment .goods-property-jianTou uni-image[data-v-3f766e8e]{height:100%;width:100%}.goods-comment-box .comment_btn[data-v-3f766e8e]{width:%?220?%;margin:0 auto;padding:%?20?% 0}.goods-comment-box .comment_btn uni-text[data-v-3f766e8e]{display:block;padding:%?5?% 0;color:#ff495e;font-size:%?26?%;text-align:center;border:1px solid #ff495e;border-radius:%?30?%}\r\n\r\n/* 商品规格 */.goods-attr[data-v-3f766e8e]{padding:%?10?% 0}.goods-attr .goods-attr--scroll[data-v-3f766e8e]{max-height:%?600?%}.goods-attr .group-item .tips-text[data-v-3f766e8e]{font-size:%?26?%;color:#888;margin-bottom:%?10?%}.goods-attr .group-item .spec-item[data-v-3f766e8e]{display:inline-block;font-size:%?26?%;height:%?55?%;line-height:%?55?%;padding:0 %?30?%;margin:0 %?20?% %?20?% 0;border-radius:%?8?%;color:#888;border:%?1?% solid #e6e6e6}.goods-attr .group-item .spec-item.cur[data-v-3f766e8e]{background:#f82169;border:%?1?% solid #f82169;color:#fff}.goods-attr .group-item .spec-item.disabled[data-v-3f766e8e]{color:#dedede;cursor:not-allowed;background:#eee;border:%?2?% dashed #dedede}.select-number[data-v-3f766e8e]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?202?%;height:%?52?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;border:%?2?% solid #e7e7e7;border-radius:%?5?%}.select-number .default[data-v-3f766e8e]{float:left;width:%?60?%;height:%?52?%;line-height:%?48?%;padding:0;background:#fff;color:#444;font-size:%?40?%;border-radius:unset}.select-number .disabled[data-v-3f766e8e]{background:#f7f7f7;color:#ddd}.select-number uni-button[data-v-3f766e8e]:after{content:none;border:none}.select-number uni-input[data-v-3f766e8e]{float:left;width:%?80?%;height:%?52?%;line-height:%?52?%;border-right:%?1?% solid #eee;border-left:%?1?% solid #eee;text-align:center;font-size:%?28?%;color:#444}\r\n\r\n/* banner计数 */.banner-num[data-v-3f766e8e]{position:absolute;right:%?30?%;margin-top:%?-70?%;padding:0 %?18?%;background:rgba(0,0,0,.3);border-radius:%?50?%;color:#fff;font-size:%?32?%}.banner-num uni-text[data-v-3f766e8e]:last-child{color:hsla(0,0%,100%,.6);font-size:%?26?%}.footer-fixed .order-number[data-v-3f766e8e]{width:50%;background:-webkit-linear-gradient(left,#fac905,#ff9500);background:linear-gradient(90deg,#fac905 0,#ff9500);color:#fff;text-align:center;line-height:%?92?%}.footer-fixed .order-number uni-button[data-v-3f766e8e]{background:none;padding:0;font-size:%?34?%;color:#fff;line-height:inherit;border-radius:0;border:0}.footer-fixed .order-number uni-button[data-v-3f766e8e]::after{content:" ";width:0;height:0;position:absolute;top:0;left:0;border:none;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:0}.footer-fixed .default-btn[data-v-3f766e8e]{width:100%;background-color:#ccc;color:#fff;text-align:center;line-height:%?92?%}.footer-fixed .flow_num[data-v-3f766e8e]{background:#ff495e;position:absolute;right:%?20?%;top:%?10?%;border-radius:%?30?%;height:%?30?%;min-width:%?30?%}\r\n\r\n/* 商品详情 */.goods-detail-box[data-v-3f766e8e]{font-size:%?28?%}\r\n\r\n/* 评价次数 */.comment-num[data-v-3f766e8e]{position:absolute;right:34px;top:50%;margin-top:%?-20?%;font-size:%?28?%;color:#333}.top-nav-bar[data-v-3f766e8e]{padding:%?24?%;font-size:%?28?%;color:#333}.goods-fixed-icon contact-button[data-v-3f766e8e]{display:block}\r\n\r\n/* 商品分享 */.goods__share uni-button.share-btn[data-v-3f766e8e]{line-height:normal;padding:0 0 0 %?10?%;background:none;border-radius:0;box-shadow:none;font-size:8pt;border:none;color:#888}.goods__share uni-button.share-btn[data-v-3f766e8e]::after{border:none}.goods__share .share__icon[data-v-3f766e8e]{font-size:%?46?%;margin-bottom:%?5?%}\r\n\r\n/* 商品海报 弹出层 */.pop-poster[data-v-3f766e8e]{position:relative;background:#fff;padding:%?42?%;border-radius:%?10?%}\r\n\r\n/* 关闭按钮 */.pop-poster .pop-close[data-v-3f766e8e]{position:absolute;width:%?56?%;height:%?56?%;background:#fff;border-radius:50%;box-shadow:0 0 %?25?% rgba(0,0,0,.15);right:%?-28?%;top:%?-28?%}.pop-poster .pop-close uni-text[data-v-3f766e8e]{display:block}.pop-poster .poster__image[data-v-3f766e8e]{padding:0 %?40?%}.pop-poster .poster__image uni-image[data-v-3f766e8e]{box-shadow:0 0 %?25?% rgba(0,0,0,.15);width:%?460?%;height:%?696.746?%}.pop-poster .profile-btn uni-button[data-v-3f766e8e]{margin-bottom:0}\r\n\r\n/* sku选择器 */.sku-selector[data-v-3f766e8e]{padding:%?30?% %?20?%}\r\n\r\n/* 确认购买弹窗 */.popup__trade[data-v-3f766e8e]{width:%?750?%;position:relative;padding-bottom:%?92?%;z-index:999}.popup__trade .trade-close[data-v-3f766e8e]{position:absolute;top:%?20?%;right:%?20?%;width:%?50?%;height:%?50?%}.popup__trade .trade-main[data-v-3f766e8e]{background:#fff;box-sizing:border-box;padding:%?24?%}.popup__trade .footer-fixed[data-v-3f766e8e]{position:absolute}.popup__trade .trade-main .goods-info[data-v-3f766e8e]{margin-bottom:%?10?%}.popup__trade .trade-main .goods-info .goods-image[data-v-3f766e8e]{margin-top:-40px;margin-right:%?20?%}.popup__trade .trade-main .goods-info .goods-image uni-image[data-v-3f766e8e]{width:90px;height:90px;border:%?5?% solid #fff;box-shadow:0 %?4?% %?10?% hsla(0,0%,86.3%,.79)}.popup__trade .trade-main .goods-info .money-box[data-v-3f766e8e]{margin:0}.popup__trade .trade-main .goods-info .goods-stock[data-v-3f766e8e]{padding-left:%?10?%}.popup__trade .trade-main .buy_number[data-v-3f766e8e]{margin:%?20?% 0;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.popup__trade .trade-main .buy_number .buyNumber[data-v-3f766e8e]{color:#888;background:#fff;border-radius:%?10?%;margin-bottom:%?10?%}\r\n\r\n/* 商品卖点 */.goods-selling-point[data-v-3f766e8e]{color:#f20c59}',""])},"9c03":function(t,e,o){"use strict";o("28a5"),o("456d"),o("ac6a"),o("c5f6"),t.exports={data:function(){return{}},props:{loading_val:Boolean,openType:String,appParameter:String,hoverStopPropagation:Boolean,hoverStartTime:{type:Number,default:20},hoverStayTime:{type:Number,default:70},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:String,sendMessagePath:String,sendMessageImg:String,showMessageCard:String},methods:{bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,o=void 0===e?{}:e;this.$emit("getuserinfo",o)},bindcontact:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,o=void 0===e?{}:e;this.$emit("contact",o)},bindgetphonenumber:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,o=void 0===e?{}:e;this.$emit("getphonenumber",o)},bindopensetting:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,o=void 0===e?{}:e;this.$emit("opensetting",o)},binderror:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,o=void 0===e?{}:e;this.$emit("error",o)},setData:function(t,e){var o,a,n=this,i=[];Object.keys(t).forEach((function(e){i=e.split("."),o=t[e],a=n.$data,i.forEach((function(t,e){e+1===i.length?n.$set(a,t,o):a[t]||n.$set(a,t,{}),a=a[t]}))})),e&&e()}}}},a2c7:function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".pop[data-v-ce5c1f6c]{visibility:hidden}.pop--show[data-v-ce5c1f6c]{visibility:visible}.pop__mask[data-v-ce5c1f6c]{position:fixed;top:0;left:0;right:0;bottom:0;z-index:14;background:rgba(0,0,0,.5);display:none}.pop__mask--hide[data-v-ce5c1f6c]{background:0 0}.pop__container[data-v-ce5c1f6c]{position:fixed;left:50%;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .2s ease;transition:all .2s ease;z-index:15;opacity:0}.pop--show .pop__container[data-v-ce5c1f6c]{opacity:1}.pop--show .pop__mask[data-v-ce5c1f6c]{display:block}.pop--left .pop__container[data-v-ce5c1f6c]{left:0;top:50%;-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.pop--show.pop--left .pop__container[data-v-ce5c1f6c]{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.pop--right .pop__container[data-v-ce5c1f6c]{right:0;top:50%;left:auto;-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.pop--show.pop--right .pop__container[data-v-ce5c1f6c]{-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.pop--bottom .pop__container[data-v-ce5c1f6c]{top:auto;left:50%;bottom:0;-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.pop--show.pop--bottom .pop__container[data-v-ce5c1f6c]{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.pop--top .pop__container[data-v-ce5c1f6c]{top:0;left:50%;-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.pop--show.pop--top .pop__container[data-v-ce5c1f6c]{-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}",""])},b8dd:function(t,e,o){"use strict";o.r(e);var a=o("4b46"),n=o.n(a);for(var i in a)"default"!==i&&function(t){o.d(e,t,(function(){return a[t]}))}(i);e["default"]=n.a},bc69:function(t,e,o){var a=o("8fba");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=o("4f06").default;n("0555e578",a,!0,{sourceMap:!1,shadowMode:!1})},c69e:function(t,e,o){"use strict";var a=o("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("28a5"),o("456d"),o("ac6a");var n=a(o("7618"));o("7514");var i=o("787c"),s=a(o("ca00")),r=a(o("8b2e")),d=a(o("427f")),c=a(o("26e2")),l=a(o("da18")),u=[],f=getApp().globalData,p={components:{zanActionsheet:d.default,zanPopup:c.default,shortcut:l.default},props:{},data:function(){return{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800,currentIndex:1,floorstatus:!1,showView:!0,detail:{},goods_price:0,line_price:0,stock_num:0,goods_num:1,goods_sku_id:0,cart_total_num:0,goodsMultiSpec:{},share:{show:!1,cancelWithMask:!0,cancelText:"关闭",actions:[{name:"生成商品海报",className:"action-class",loading:!1},{name:"发送给朋友",openType:"share"}],showPopup:!1},skuCoverImage:"",scrollTop:0,showBottomPopup:!1,content:null,specData:null,qrcode:null,hiddenOrder:null,title:null,desc:null,imgUrl:null}},onLoad:function(t){var e=this,o=f.getSceneData(t);e.goods_id=t.goods_id?t.goods_id:o.gid,e.getGoodsDetail(),(0,i.getJSSDK)(f,window.location.href)},onShareAppMessage:function(){var t=this,e=f.getShareUrlParams({goods_id:t.goods_id});return{title:t.detail.goods_name,path:"/pages/goods/index?"+e}},methods:{getGoodsDetail:function(){var t=this;f._get("goods/detail",{goods_id:t.goods_id},(function(e){var o=t._initGoodsDetailDataFun(e.data);t.setData(o);var a=f.getShareUrlParams({goods_id:t.goods_id});(0,i.wxShare)({title:t.title||t.detail.goods_name,desc:t.desc||t.detail.goods_name,link:f.domain+"#/pages/custom/index?"+a,imgUrl:t.imgUrl||"",callback:function(){}})}))},_initGoodsDetailDataFun:function(t){var e=this,o=t.detail;return o.content.length>0&&r.default.wxParse("content","html",o.content,e,0),t.goods_sku_id=o.goods_sku.spec_sku_id,t.goods_price=o.goods_sku.goods_price,t.line_price=o.goods_sku.line_price,t.stock_num=o.goods_sku.stock_num,t.skuCoverImage=o.goods_image,20===o.spec_type&&o.goods_sku["image"]&&(t.skuCoverImage=o.goods_sku["image"]["file_path"]),20===o.spec_type&&(t.goodsMultiSpec=e._initManySpecDataFun(o.goods_multi_spec)),t},_initManySpecDataFun:function(t){for(var e in u=[],t.spec_attr)for(var o in t.spec_attr[e].spec_items)o<1&&(t.spec_attr[e].spec_items[0].checked=!0,u[e]=t.spec_attr[e].spec_items[0].item_id);return t},onSwitchSpec:function(t){var e=this,o=t.currentTarget.dataset.attrIdx,a=t.currentTarget.dataset.itemIdx,n=e.goodsMultiSpec;for(var i in n.spec_attr)for(var s in n.spec_attr[i].spec_items)o===i&&(n.spec_attr[i].spec_items[s].checked=!1,a===s&&(n.spec_attr[i].spec_items[a].checked=!0,u[i]=n.spec_attr[i].spec_items[a].item_id));this.goodsMultiSpec=n,e._updateSpecGoodsFun()},_updateSpecGoodsFun:function(){var t=this,e=u.join("_"),o=t.goodsMultiSpec.spec_list,a=o.find((function(t){return t.spec_sku_id===e}));"object"===(0,n.default)(a)&&(this.goods_sku_id=a.spec_sku_id,this.goods_price=a.form.goods_price,this.line_price=a.form.line_price,this.stock_num=a.form.stock_num,this.skuCoverImage=a.form.image_id>0?a.form.image_path:t.detail.goods_image)},setCurrent:function(t){this.currentIndex=t.detail.current+1},onScrollTop:function(){this.scrollTop=0},scroll:function(t){this.floorstatus=t.detail.scrollTop>200},onIncGoodsNumber:function(t){var e=this;f.saveFormId(t.detail.formId),this.goods_num=++e.goods_num},onDecGoodsNumber:function(t){var e=this;f.saveFormId(t.detail.formId),e.goods_num>1&&(this.goods_num=--e.goods_num)},onInputGoodsNum:function(t){var e=t.detail.value;s.default.isPositiveInteger(e)||""===e||(e=1),this.goods_num=e},onTriggerCart:function(){uni.switchTab({url:"../flow/index"})},onConfirmSubmit:function(t){var e=this,o=t.currentTarget.dataset.type;if(!e._onVerifyFun())return!1;if("buyNow"===o)uni.navigateTo({url:"../flow/checkout?"+s.default.urlEncode({order_type:"buyNow",goods_id:e.goods_id,goods_num:e.goods_num,goods_sku_id:e.goods_sku_id}),success:function(){e.onToggleTrade()}});else if("addCart"===o){var a=uni.getStorageSync("referee_id");f._post_form("cart/add",{share_id:a,goods_id:e.goods_id,goods_num:e.goods_num,goods_sku_id:e.goods_sku_id},(function(t){f.showSuccess(t.msg),e.setData(t.data)}))}},_onVerifyFun:function(){var t=this;return""===t.goods_num?(f.showError("请输入购买数量"),!1):(this.goods_num=parseInt(t.goods_num,10),!(t.goods_num<=0)||(f.showError("购买数量不能为0"),!1))},onPreviewImages:function(t){var e=this,o=t.currentTarget.dataset.index,a=[];e.detail.image.forEach((function(t){a.push(t.file_path)})),uni.previewImage({current:a[o],urls:a})},onPreviewSkuImage:function(){var t=this;uni.previewImage({current:t.skuCoverImage,urls:[t.skuCoverImage]})},onTargetToComment:function(){var t=this;uni.navigateTo({url:"./comment/comment?goods_id="+t.goods_id})},onClickShare:function(t){f.saveFormId(t.detail.formId),this.share.show=!0},onCloseShare:function(){this.share.show=!1},onClickShareItem:function(t){var e=this;(t.detail&&0===t.detail.index||0===t.index)&&e._showPosterFun(),e.onCloseShare()},onTogglePopup:function(){this.share.showPopup=!this.share.showPopup},_showPosterFun:function(){var t=this;uni.showLoading({title:"加载中"}),f._get("goods/poster",{goods_id:t.goods_id},(function(e){t.setData(e.data),t.onTogglePopup()}),null,(function(){uni.hideLoading()}))},onSavePoster:function(t){var e=this;f.saveFormId(t.detail.formId),uni.showLoading({title:"加载中"}),uni.downloadFile({url:e.qrcode,success:function(t){uni.hideLoading(),uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({title:"保存成功",icon:"success",duration:2e3}),e.onTogglePopup()},fail:function(t){console.log(t.errMsg),"saveImageToPhotosAlbum:fail auth deny"===t.errMsg&&(uni.showToast({title:"请允许访问相册后重试",icon:"none",duration:1e3}),setTimeout((function(){uni.openSetting()}),1e3))},complete:function(){console.log("complete")}})}})},onToggleTrade:function(t){var e=this;"object"===(0,n.default)(t)&&t.detail.hasOwnProperty("formId")&&f.saveFormId(t.detail.formId),e.setData({showBottomPopup:!e.showBottomPopup})},setData:function(t){var e,o,a=this,n=[];Object.keys(t).forEach((function(i){n=i.split("."),e=t[i],o=a.$data,n.forEach((function(t,i){console.log(t),i+1===n.length?a.$set(o,t,e):o[t]||a.$set(o,t,{}),o=o[t]}))}))}}};e.default=p},dba2:function(t,e,o){"use strict";o.r(e);var a=o("ebf9"),n=o("b8dd");for(var i in n)"default"!==i&&function(t){o.d(e,t,(function(){return n[t]}))}(i);o("49b5");var s,r=o("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"ce5c1f6c",null,!1,a["a"],s);e["default"]=d.exports},eb7a:function(t,e,o){"use strict";var a,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-button",{class:"custom-class theme-class zan-btn "+(t.inGroup?"zan-btn--group":"")+" "+(t.isLast?"zan-btn--last":"")+" "+(t.size?"zan-btn--"+t.size:"")+" "+("mini"===t.size?"zan-btn--plain":"")+" "+(t.plain?"zan-btn--plain":"")+" "+(t.type?"zan-btn--"+t.type:"")+" "+(t.loading?"zan-btn--loading":"")+" "+(t.disabled?"zan-btn--disabled":""),attrs:{disabled:t.disabled,"hover-class":"button-hover","open-type":t.openType,"app-parameter":t.appParameter,"hover-stop-propagation":t.hoverStopPropagation,"hover-start-time":t.hoverStartTime,"hover-stay-time":t.hoverStayTime,lang:t.lang,"session-from":t.sessionFrom,"send-message-title":t.sendMessageTitle,"send-message-path":t.sendMessagePath,"send-message-img":t.sendMessageImg,"show-message-card":t.showMessageCard},on:{contact:function(e){arguments[0]=e=t.$handleEvent(e),t.bindcontact.apply(void 0,arguments)},getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetuserinfo.apply(void 0,arguments)},getphonenumber:function(e){arguments[0]=e=t.$handleEvent(e),t.bindgetphonenumber.apply(void 0,arguments)},error:function(e){arguments[0]=e=t.$handleEvent(e),t.binderror.apply(void 0,arguments)},opensetting:function(e){arguments[0]=e=t.$handleEvent(e),t.bindopensetting.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTap.apply(void 0,arguments)}}},[t._t("default")],2)},i=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return a}))},ebf9:function(t,e,o){"use strict";var a,n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{class:"pop pop--"+t.type+" "+(t.show?"pop--show":"")},[t.overlay?o("v-uni-view",{class:"pop__mask "+(t.showOverlay?"":"pop__mask--hide"),on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleMaskClick.apply(void 0,arguments)}}}):t._e(),o("v-uni-view",{staticClass:"pop__container"},[t._t("default")],2)],1)},i=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return a}))},fa00:function(t,e,o){t.exports=o.p+"static/img/flow.6c107a2f.png"}}]);