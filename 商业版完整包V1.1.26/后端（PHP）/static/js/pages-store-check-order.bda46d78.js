(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-store-check-order"],{"5b98":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return a}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.order&&t.order.order_id?i("v-uni-view",{staticClass:"container p-bottom"},[i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[i("v-uni-view",{staticClass:"detail-header dis-flex flex-y-center"},[i("v-uni-view",{staticClass:"header-backdrop"},[i("v-uni-image",{attrs:{src:"/static/refund-bg.png"}})],1),i("v-uni-view",{staticClass:"header-state f-32 col-f"},[i("v-uni-text",[t._v(t._s(t.order.state_text))])],1)],1),t.order.delivery_type.value==t.deliverys.EXPRESS.value?i("v-uni-view",{staticClass:"flow-delivery"},[i("v-uni-view",{staticClass:"flow-delivery__detail dis-flex flex-y-center"},[i("v-uni-view",{staticClass:"detail-location dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-dingwei"})],1),i("v-uni-view",{staticClass:"detail-content flex-box"},[i("v-uni-view",{staticClass:"detail-content__title dis-flex"},[i("v-uni-text",{staticClass:"f-30"},[t._v(t._s(t.order.address.name))]),i("v-uni-text",{staticClass:"detail-content__title-phone f-28"},[t._v(t._s(t.order.address.phone))])],1),i("v-uni-view",{staticClass:"detail-content__describe"},[i("v-uni-text",{staticClass:"col-7"},[t._v(t._s(t.order.address.region.province)+" "+t._s(t.order.address.region.city)+" "+t._s(t.order.address.region.region)+"\n                            "+t._s(t.address.detail))])],1)],1)],1)],1):t._e(),t.curDelivery==t.deliverys.EXTRACT.value?[i("v-uni-view",{staticClass:"m-top20 b-f"},[i("v-uni-view",{staticClass:"flow-delivery"},[i("v-uni-view",{staticClass:"flow-delivery__title m-top20"},[i("v-uni-text",{staticClass:"flow-delivery__title-text f-30"},[t._v("自提门店")])],1),i("v-uni-view",{staticClass:"flow-delivery__detail dis-flex flex-y-center",attrs:{"data-id":t.order.extract_shop.shop_id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onTargetShop.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"detail-location dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-dingwei"})],1),i("v-uni-view",{staticClass:"detail-content flex-box"},[i("v-uni-view",{staticClass:"detail-content__title dis-flex"},[i("v-uni-text",{staticClass:"f-30"},[t._v(t._s(t.order.extract_shop.shop_name))])],1),i("v-uni-view",{staticClass:"detail-content__describe"},[i("v-uni-text",{staticClass:"col-7"},[t._v(t._s(t.order.extract_shop.region.province)+" "+t._s(t.order.extract_shop.region.city)+"\n                                    "+t._s(t.order.extract_shop.region.region)+" "+t._s(t.order.extract_shop.address))])],1)],1),i("v-uni-view",{staticClass:"detail-arrow dis-flex"},[i("v-uni-text",{staticClass:"iconfont icon-xiangyoujiantou user-orderJtou"})],1)],1)],1)],1),t.order.extract.id?i("v-uni-view",{staticClass:"flow-extract-contact m-top20 b-f"},[i("v-uni-view",{staticClass:"contact-item dis-flex"},[i("v-uni-view",{staticClass:"item_label dis-flex flex-x-end flex-y-center"},[i("v-uni-text",[t._v("联系人：")])],1),i("v-uni-view",{staticClass:"item_ipt flex-box dis-flex flex-y-center"},[i("v-uni-text",[t._v(t._s(t.order.extract.linkman))])],1)],1),i("v-uni-view",{staticClass:"contact-item dis-flex"},[i("v-uni-view",{staticClass:"item_label dis-flex flex-x-end flex-y-center"},[i("v-uni-text",[t._v("联系电话：")])],1),i("v-uni-view",{staticClass:"item_ipt flex-box dis-flex flex-y-center"},[i("v-uni-text",[t._v(t._s(t.order.extract.phone))])],1)],1)],1):t._e()]:t._e(),t.order.delivery_type.value==t.deliverys.EXPRESS.value&&20==t.order.delivery_status.value?i("v-uni-view",{staticClass:"flow-all-money b-f padding-box m-top20"},[i("v-uni-view",{staticClass:"flow-all-list dis-flex"},[i("v-uni-text",{},[t._v("物流信息")])],1),i("v-uni-view",{staticClass:"dis-flex"},[i("v-uni-view",{staticClass:"flex-box"},[i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"col-7"},[t._v("物流公司："+t._s(t.order.express.express_name))])],1),i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"col-7",attrs:{selectable:"true"}},[t._v("物流单号："+t._s(t.order.express_no))])],1)],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"flow-all-money b-f padding-box m-top20"},[i("v-uni-view",{staticClass:"flow-all-list dis-flex"},[i("v-uni-text",{},[t._v("商品列表")])],1),i("v-uni-view",{staticClass:"order-cont dis-flex"},[i("v-uni-view",{staticClass:"order-num"},[i("v-uni-text",{attrs:{selectable:"true"}},[t._v("订单号："+t._s(t.order.order_no))])],1),i("v-uni-view",{staticClass:"order-time"},[i("v-uni-text",[t._v(t._s(t.order.create_time))])],1)],1)],1),i("v-uni-view",{staticClass:"padding-box b-f"},t._l(t.order.goods,(function(e,a){return i("v-uni-view",{key:a,staticClass:"dis-flex flow-shopList b-f",attrs:{"data-id":e.goods_id},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onTargetGoods.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"flow-list-left"},[i("v-uni-image",{attrs:{mode:"scaleToFill",src:e.image.file_path}})],1),i("v-uni-view",{staticClass:"flow-list-right flex-box"},[i("v-uni-text",{staticClass:"f-30 col-3 twolist-hidden"},[t._v(t._s(e.goods_name))]),i("v-uni-text",{staticClass:"f-24 col-7"},[t._v(t._s(e.goods_attr))]),i("v-uni-view",{staticClass:"flow-list-cont dis-flex flex-x-between flex-y-center"},[i("v-uni-text",{staticClass:"small"},[t._v("×"+t._s(e.total_num))]),i("v-uni-text",{class:"flow-cont "+(e.is_user_grade?"price-delete":"")},[t._v("￥"+t._s(e.goods_price))])],1),e.is_user_grade?i("v-uni-view",{staticClass:"grade-price"},[i("v-uni-text",[t._v("会员折扣价：￥"+t._s(e.grade_goods_price))])],1):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"select b-f"},[i("v-uni-view",{staticClass:"flow-num-box b-f"},[i("v-uni-text",[t._v("共"+t._s(t.order.goods.length)+"件商品，合计:")]),i("v-uni-text",{staticClass:"flow-money col-m"},[t._v("￥"+t._s(t.order.total_price))])],1)],1),t.order.buyer_remark.length?i("v-uni-view",{staticClass:"flow-all-money b-f m-top20"},[i("v-uni-view",{staticClass:"dis-flex flow-all-list"},[i("v-uni-text",{staticClass:"flex-five"},[t._v("买家留言")])],1),i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont",staticStyle:{padding:"15rpx 0"}},[i("v-uni-text",{staticClass:"col-7"},[t._v(t._s(t.order.buyer_remark))])],1)],1):t._e(),i("v-uni-view",{staticClass:"flow-all-money b-f padding-box m-top20"},[i("v-uni-view",{staticClass:"dis-flex flow-all-list"},[i("v-uni-text",{staticClass:"flex-five"},[t._v("订单金额")])],1),i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"flex-five col-7"},[t._v("商品金额：")]),i("v-uni-text",{staticClass:"flex-five col-m t-r"},[t._v("￥"+t._s(t.order.total_price))])],1),t.order.coupon_id>0?i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"flex-five col-7"},[t._v("优惠券抵扣：")]),i("v-uni-text",{staticClass:"flex-five col-m t-r"},[t._v("-￥"+t._s(t.order.coupon_money))])],1):t._e(),t.order.points_num>0?i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"flex-five col-7"},[t._v(t._s(t.setting.points_name)+"抵扣：")]),i("v-uni-text",{staticClass:"flex-five col-m t-r"},[t._v("-￥"+t._s(t.order.points_money))])],1):t._e(),i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"flex-five col-7"},[t._v("配送费用：")]),i("v-uni-text",{staticClass:"flex-five col-m t-r"},[t._v("+￥"+t._s(t.order.express_price))])],1),"0.00"!=t.order.update_price.value?i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"flex-five col-7"},[t._v("后台改价：")]),i("v-uni-text",{staticClass:"flex-five col-m t-r"},[t._v(t._s(t.order.update_price.symbol)+"￥"+t._s(t.order.update_price.value))])],1):t._e(),i("v-uni-view",{staticClass:"dis-flex flow-all-list-cont"},[i("v-uni-text",{staticClass:"flex-five col-7"},[t._v("实付金额：")]),i("v-uni-text",{staticClass:"flex-five col-m t-r"},[t._v("￥"+t._s(t.order.pay_price))])],1)],1)],2),20!=t.order.order_status.value?i("v-uni-view",{staticClass:"flow-fixed-footer b-f"},[20==t.order.pay_status.value&&t.order.delivery_type.value==t.deliverys.EXTRACT.value&&10==t.order.delivery_status.value?i("v-uni-view",{staticClass:"flow-btn h3"},[i("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onSubmitExtract.apply(void 0,arguments)}}},[t._v("确认核销")])],1):t._e()],1):t._e()],1):t._e()},l=[]},"5c34":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'.order-cont[data-v-6bceb066]{\r\n    /* padding: 12rpx 0; */-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.order-cont .order-num uni-text[data-v-6bceb066],\r\n.order-cont .time[data-v-6bceb066]{color:#888}.order-cont .order-num uni-text[data-v-6bceb066],\r\n.order-cont .order-time uni-text[data-v-6bceb066]{color:#777;font-size:%?26?%}.checkout-right-detail[data-v-6bceb066],\r\n.checkout-left-detail[data-v-6bceb066]{font-size:%?30?%;color:#333;line-height:%?92?%}.btn-default[data-v-6bceb066]{border-radius:4px;border:%?1?% solid #ccc;padding:%?6?% %?20?%;font-size:%?28?%;color:#555}\r\n\r\n/* 会员价 */.flow-shopList .flow-list-right .flow-cont.price-delete[data-v-6bceb066]{font-size:%?26?%;color:#777;text-decoration:line-through}.flow-shopList .grade-price[data-v-6bceb066]{padding-top:%?8?%;font-size:%?28?%;color:#ff495e;text-align:right}\r\n\r\n/* 顶部状态栏 */.detail-header[data-v-6bceb066]{position:relative;width:100%;height:%?140?%}.detail-header .header-backdrop[data-v-6bceb066]{position:absolute;top:0;left:0}.detail-header .header-backdrop uni-image[data-v-6bceb066]{display:block;width:%?750?%;height:%?140?%}.header-state[data-v-6bceb066]{position:relative;padding:0 %?50?%}\r\n\r\n/* 配送信息 */.flow-delivery[data-v-6bceb066]{background:#fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANYAAAANCAYAAADVGpDCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3Yjk4M2ExYy1jMDhkLTQ1OTktYTI0Ny1kZjNjYzdiYTQ5ZTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQwNkY3RkU5N0NGMTFFNUI3N0M4NTU4MzM2RjlFODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQwNkY3RkQ5N0NGMTFFNUI3N0M4NTU4MzM2RjlFODIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzgwZWI1NS03OGFhLTQzOTUtODQ4OC1lOWI5YmVlYTY1ZDciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1OTRiYzUyMy1jMzc3LTExNzgtYTdkZS04NGY3YmM1ZGIxMDMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz556PLxAAACBElEQVR42tyaSyhEYRTHP48imlKibDQeSSlkSlEWLCRFsZNH5FE2FqQ8ErIRC9lIkTwXSpMkWWChhEJCSnlkoUZGSsr78f98n43CMFPu/Z/6NZuZ2zn33/+cb869XkmLx8IDEQaGQJbgiytQDSY3MyL+LYnL/HxPXSoHDIJQQq2WQQk4Dbbb/yUB29LJ+6e3B66VB3ZITbUIEqSpCGoJBP1ghtBUD6ARpEtTGSEhXzd+awE9oJzQUPegWdf3QlBPMhgDMYRa7YNisGWkpP5qrBQtVBShUHugUE9hs4fUtwG0utlEjRivoA/Ug1sj3vjffr8FNJEK1auPFHcE9UTq5pdK2PwcoAzMG7mjuRrRYEIfK9jiDJSCBZJ6ynSTsBBqNQ0qgdPISbq6vJCFbJOaagrEk5gqWNczRGiqG1Ah1LLMafRkf5pYIUKtZnMJDXUNasAIST2ZYFioRx9ssQaKwJFZEv5uYmWDXVJTrYBEElP562PfPKGpnkAbSDOTqb6aWAGgW6iHol5kQj2CdtAJngnqkc1hHMQRNr9DPaXWzZj8Z2PZtFCxhEIdaKE2CGqRJ4060AH8CLUaALX6f5VpBZLhI9SaeZXQVHKNLt84SCIxVbhQi5YuQlNd6OVElZlN9TGxrGBUn2PZ4lyoTdIsST0FQj0UDSLUak6ot3gcBLVY3wQYAJoVXxmNERajAAAAAElFTkSuQmCC") 0 100% repeat-x;background-size:%?120?% auto}.flow-delivery__title[data-v-6bceb066]{width:%?702?%;padding:%?15?% 0;margin:0 auto;background:#fff;border-bottom:%?1?% solid #f1f1f1}.flow-delivery__title-text[data-v-6bceb066]{margin-right:%?20?%}.flow-delivery__detail[data-v-6bceb066]{padding:%?30?%}.detail-content[data-v-6bceb066]{padding:0 %?20?%}.detail-content__title[data-v-6bceb066]{margin-bottom:%?6?%}.detail-content .detail-content__title-phone[data-v-6bceb066]{margin-left:%?10?%}.detail-content .detail-content__describe[data-v-6bceb066]{font-size:%?28?%}\r\n\r\n/* 门店自提联系人 */.flow-extract-contact[data-v-6bceb066]{padding:%?8?% %?24?%;font-size:%?28?%;color:#444}.flow-extract-contact .contact-item[data-v-6bceb066]{padding:%?12?% 0;border-bottom:%?1?% solid #f8f8f8}.flow-extract-contact .contact-item[data-v-6bceb066]:last-child{border-bottom:none}.flow-extract-contact .item_label[data-v-6bceb066]{margin-right:%?26?%;width:%?150?%}',""]),t.exports=e},"825b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("4160"),i("159b"),i("b64b"),i("1276"),i("ac1f");var a=i("cda5"),s=getApp().globalData,l={components:{},props:{},data:function(){return{options:{},deliverys:a,order:{},clerkModel:null,setting:null,curDelivery:null}},onLoad:function(t){var e=s.getSceneData(t);this.setData({options:e}),this.getOrderDetail()},methods:{getOrderDetail:function(){var t=this;s._get("shop.order/detail",{order_id:this.options.oid,order_type:this.options.oty},(function(e){t.setData(e.data)}))},onTargetGoods:function(t){var e=t.currentTarget.dataset.id;uni.navigateTo({url:"../../goods/index?goods_id="+e})},onTargetShop:function(t){uni.navigateTo({url:"../../shop/detail/index?shop_id="+t.currentTarget.dataset.id})},onSubmitExtract:function(){var t=this;uni.showModal({title:"提示",content:"确认核销该订单吗？",success:function(e){e.confirm&&s._post_form("shop.order/extract",{order_id:t.options.oid,order_type:t.options.oty},(function(e){s.showSuccess(e.msg,(function(){t.getOrderDetail()}))}))}})},setData:function(t){var e,i,a=this,s=[];Object.keys(t).forEach((function(l){s=l.split("."),e=t[l],i=a.$data,s.forEach((function(t,l){console.log(t),l+1===s.length?a.$set(i,t,e):i[t]||a.$set(i,t,{}),i=i[t]}))}))}}};e.default=l},c707:function(t,e,i){"use strict";i.r(e);var a=i("5b98"),s=i("e17b");for(var l in s)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return s[t]}))}(l);i("cb8e");var o,n=i("f0c5"),r=Object(n["a"])(s["default"],a["b"],a["c"],!1,null,"6bceb066",null,!1,a["a"],o);e["default"]=r.exports},cb8e:function(t,e,i){"use strict";var a=i("e5e6"),s=i.n(a);s.a},cda5:function(t,e){t.exports={EXPRESS:{name:"快递配送",value:10},EXTRACT:{name:"上门自提",value:20}}},e17b:function(t,e,i){"use strict";i.r(e);var a=i("825b"),s=i.n(a);for(var l in a)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(l);e["default"]=s.a},e5e6:function(t,e,i){var a=i("5c34");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("4f06").default;s("fdcd3450",a,!0,{sourceMap:!1,shadowMode:!1})}}]);