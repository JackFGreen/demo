webpackJsonp([8,12],{11:function(t,e){t.exports=function(t,e,n,r){var i,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),n&&(o._scopeId=n),r){var c=o.computed||(o.computed={});Object.keys(r).forEach(function(t){var e=r[t];c[t]=function(){return e}})}return{esModule:i,exports:s,options:o}}},51:function(t,e,n){n(52);var r=n(11)(n(54),n(55),null,null);t.exports=r.exports},52:function(t,e,n){var r=n(53);"string"==typeof r&&(r=[[t.id,r,""]]);n(10)(r,{});r.locals&&(t.exports=r.locals)},53:function(t,e,n){e=t.exports=n(9)(),e.push([t.id,'#page-test .heart{position:relative;width:50px;height:50px;background:pink;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);margin:50px auto}#page-test .heart:after,#page-test .heart:before{content:"";position:absolute;left:-25px;top:0;width:50px;height:50px;background:inherit;border-radius:50%}#page-test .heart:before{left:0;top:-25px}',""])},54:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){var t=this;return setTimeout(function(){t.text="text",t.tpl="line1\t                    line2\t                    line3"},1e3),{}},mounted:function(){this.cvs()},methods:{cvs:function(){var t=document.getElementById("myCanvas"),e=t.getContext("2d");e.fillStyle="#FF0000",e.fillRect(0,0,80,100)},click:function(){var t=(this.$el.parentElement,document.getElementById("test")),e=document.createElement("p");e.innerText=this.tpl,t.appendChild(e)}}}},55:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-test"}},[t._m(0),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),n("article",[n("big",[t._v("123")])],1),t._v(" "),n("div",{staticClass:"heart"}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("input",{attrs:{type:"text",list:"countries"}}),t._v(" "),t._m(5),t._v(" "),n("br"),t._v(" "),n("canvas",{attrs:{id:"myCanvas"},on:{click:t.click}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[n("small",[t._v("test")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[n("mark",[t._v("测试")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[n("div",{staticClass:"grid-col grid-col-12"},[t._v("12")]),t._v(" "),n("div",{staticClass:"grid-col grid-col-12"},[t._v("12")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-gutter"},[n("div",{staticClass:"grid-col grid-col-12"},[t._v("12")]),t._v(" "),n("div",{staticClass:"grid-col grid-col-12"},[t._v("12")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[t._v("\n        "),n("code",[t._v("\n            "),n("span",[t._v("function test() {\n                console.log('test');\n            }")]),t._v("\n        ")]),t._v("\n    ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("datalist",{attrs:{id:"countries"}},[n("option",{attrs:{value:"中国"}}),t._v(" "),n("option",{attrs:{value:"美国"}}),t._v(" "),n("option",{attrs:{value:"日本"}})])}]}}});