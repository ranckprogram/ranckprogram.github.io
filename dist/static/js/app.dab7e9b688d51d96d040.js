webpackJsonp([0],{0:function(t,e){},KE5N:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Menu"},[n("div",{staticClass:"bottom-space"}),t._v(" "),n("div",{staticClass:"bottom-menu"},[n("ul",t._l(t.menu,function(e,a){return n("li",{class:{active:a===t.curActive},on:{click:function(e){t.handleTabMenu(a)}}},[t._v(t._s(e.label))])}))])])},staticRenderFns:[]};var s={name:"App",components:{"v-menu":n("VU/8")({data:function(){return{curActive:2,menu:[{label:"首页",route:"Index"},{label:"常用语",route:"Common"},{label:"随时说",route:"Timely"},{label:"今天我说",route:"Today"},{label:"个人中心",route:"User"}]}},methods:{handleTabMenu:function(t){this.curActive=t}}},r,!1,function(t){n("sEkn")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("router-view")],1),this._v(" "),e("v-menu")],1)},staticRenderFns:[]};var i=n("VU/8")(s,o,!1,function(t){n("KE5N")},null,null).exports,l=n("/ocq"),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){n("Ugm9")},"data-v-694cd902",null).exports,v=function(t){return a.a.http.get("http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text="+t)},h={data:function(){return{words:""}},methods:{handleSpeak:function(){v(this.words).then(function(t){console.dir(t)},function(t){console.dir(t)})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timely"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.words,expression:"words"}],staticClass:"change-input",attrs:{type:"text",placeholder:"请输入你想说的话，例如: 你好"},domProps:{value:t.words},on:{input:function(e){e.target.composing||(t.words=e.target.value)}}}),t._v(" "),n("a",{staticClass:"btn-play",attrs:{href:"javascript:;"},on:{click:t.handleSpeak}},[t._v("说")])])},staticRenderFns:[]};var p=n("VU/8")(h,_,!1,function(t){n("YF2Y")},"data-v-3b1ee6a1",null).exports;a.a.use(l.a);var m=new l.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"/timely",name:"Timely",component:p}]}),d=n("8+8L");a.a.use(d.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:m,components:{App:i},template:"<App/>"})},Ugm9:function(t,e){},YF2Y:function(t,e){},sEkn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.dab7e9b688d51d96d040.js.map