webpackJsonp([14],{H0wO:function(t,e){},"WO4/":function(t,e){},w6M8:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("wo1D"),a=s("27vU"),n=s("yvOB"),o=s("JjGC"),r=(o.a,Boolean,String,{name:"check-icon",components:{Icon:o.a},methods:{updateValue:function(){this.$emit("update:value",!this.value)}},props:{value:{type:Boolean,default:!1},type:{type:String,default:"default"}}}),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"vux-check-icon",on:{click:t.updateValue}},[s("icon",{directives:[{name:"show",rawName:"v-show",value:"default"===t.type&&t.value,expression:"type === 'default' && value"}],attrs:{type:"success"}}),t._v(" "),s("icon",{directives:[{name:"show",rawName:"v-show",value:"plain"===t.type&&t.value,expression:"type === 'plain' && value"}],attrs:{type:"success_circle"}}),t._v(" "),s("icon",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],attrs:{type:"circle"}}),t._v(" "),s("span",[t._t("default")],2)],1)},staticRenderFns:[]};var l=s("C7Lr")(r,c,!1,function(t){s("H0wO")},null,null).exports,v=s("itPo"),u=s("5I+0"),d=function(t){return Object(u.a)("post","/api/golfOrderConfirm",t)},p=(String,Array,String,Array,i.a,a.a,n.a,v.a,{name:"golfComfirm",props:{date:{type:String},position:{type:Array},concat:{type:String},caddie:{type:Array}},data:function(){return{invoice:!1,rise:"",detail:!1,showToast:!1,msg:""}},computed:{number:function(){return this.position.length},userName:function(){return JSON.parse(localStorage.getItem("userInfo")).userName},guestName:function(){return new Array(this.number-1)},totalPrice:function(){return 1700*this.guestName.length+400}},components:{CommonHeader:i.a,XInput:a.a,Group:n.a,CheckIcon:l,Toast:v.a},methods:{handleDetailShow:function(){this.detail=!this.detail},handlePay:function(){var t=this;this.invoice&&""===this.rise?(this.msg="请输入发票抬头!",this.showToast=!0):d({date:this.date,position:this.position,caddies:this.caddies,concat:this.concat,guestName:this.guestName,invoice:this.invoice,rise:this.rise,totalPrice:this.totalPrice}).then(function(e){console.log(e),200===e.code&&(t.$emit("hideConfirm"),t.$router.push("/pay/"+e.orderId))})},handleHide:function(){this.$emit("hideConfirm")}}}),h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"confirm-wrapper"},[s("h2",{staticClass:"title"},[s("i",{staticClass:"iconfont",on:{click:t.handleHide}},[t._v("")]),t._v(" 确认订单")]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"form-item"},[s("span",{staticClass:"item-left"},[t._v("开球时间")]),t._v(" "),s("span",{staticClass:"item-right"},[t._v(t._s(t.date))])]),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"item-left"},[t._v("会员名字")]),t._v(" "),s("span",{staticClass:"item-right"},[t._v(t._s(t.userName))])]),t._v(" "),t._l(t.guestName,function(e,i){return s("group",{key:i},[s("x-input",{attrs:{title:"嘉宾姓名","show-clear":!1,placeholder:"请输入嘉宾姓名"},model:{value:t.guestName[i],callback:function(e){t.$set(t.guestName,i,e)},expression:"guestName[index]"}})],1)}),t._v(" "),s("div",{staticClass:"form-item"},[s("span",{staticClass:"item-left"},[t._v("参加人数")]),t._v(" "),s("span",{staticClass:"item-right"},[t._v(t._s(t.number)+"人")])]),t._v(" "),s("check-icon",{staticClass:"invoice",attrs:{value:t.invoice,type:"plain"},on:{"update:value":function(e){t.invoice=e}}},[t._v(" 是否开发票")]),t._v(" "),t.invoice?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rise,expression:"rise"}],staticClass:"invoice-rise",attrs:{placeholder:"请输入发票抬头"},domProps:{value:t.rise},on:{input:function(e){e.target.composing||(t.rise=e.target.value)}}}):t._e(),t._v(" "),s("div",{staticClass:"price-container"},[s("div",{staticClass:"total-price"},[s("span",{staticClass:"price-left"},[t._v("总价")]),t._v(" "),s("span",{staticClass:"price-right",on:{click:t.handleDetailShow}},[t._v("\n          ￥"+t._s(t.totalPrice)+"\n          "),s("svg",{directives:[{name:"show",rawName:"v-show",value:!t.detail,expression:"!detail"}],staticClass:"vux-x-icon vux-x-icon-ios-arrow-down",attrs:{type:"ios-arrow-down",size:"40",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 512 512"}},[s("path",{attrs:{d:"M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"}})]),t._v(" "),s("svg",{directives:[{name:"show",rawName:"v-show",value:t.detail,expression:"detail"}],staticClass:"vux-x-icon vux-x-icon-ios-arrow-up",attrs:{type:"ios-arrow-up",size:"40",xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 512 512"}},[s("path",{attrs:{d:"M396.6 352l19.4-20.7L256 160 96 331.3l19.3 20.7L256 201.5z"}})])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.detail,expression:"detail"}],staticClass:"price-detail"},[t._m(0),t._v(" "),t._l(t.guestName,function(e,i){return s("div",{key:i,staticClass:"detail-item"},[s("span",{staticClass:"item-left"},[t._v("嘉宾价")]),t._v(" "),s("span",{staticClass:"item-right"},[t._v("￥1700")])])})],2)])],2),t._v(" "),s("div",{staticClass:"footer"},[s("div",{staticClass:"confirm-btn",on:{click:t.handlePay}},[t._v("付款")])]),t._v(" "),s("toast",{attrs:{type:"warn"},model:{value:t.showToast,callback:function(e){t.showToast=e},expression:"showToast"}},[t._v(t._s(t.msg))])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"detail-item"},[e("span",{staticClass:"item-left"},[this._v("会员价")]),this._v(" "),e("span",{staticClass:"item-right"},[this._v("￥400")])])}]};var m=s("C7Lr")(p,h,!1,function(t){s("WO4/")},"data-v-1bc04674",null);e.default=m.exports}});
//# sourceMappingURL=14.3c9c04245c3a6b050014.js.map