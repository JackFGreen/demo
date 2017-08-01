webpackJsonp([11,23],{25:function(e,t){e.exports=function(e,t,o,n){var r,c=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,c=e.default);var i="function"==typeof c?c.options:c;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),o&&(i._scopeId=o),n){var a=i.computed||(i.computed={});Object.keys(n).forEach(function(e){var t=n[e];a[e]=function(){return t}})}return{esModule:r,exports:c,options:i}}},81:function(e,t,o){o(82);var n=o(25)(o(84),o(85),null,null);e.exports=n.exports},82:function(e,t,o){var n=o(83);"string"==typeof n&&(n=[[e.id,n,""]]);o(24)(n,{});n.locals&&(e.exports=n.locals)},83:function(e,t,o){t=e.exports=o(23)(),t.push([e.id,"#page-cs2-2 .box{width:200px;height:100px;margin-bottom:10px;background:pink}#page-cs2-2 .box1{box-shadow:0 0 0 10px #ccc,0 0 0 30px #ddd}#page-cs2-2 .box1:hover{background:#eee}#page-cs2-2 .box1-diff{box-shadow:inset 0 0 0 10px #bbb,inset 0 0 0 30px #ccc}#page-cs2-2 .box2{border:10px solid #ddd;outline:5px dashed #006400;border-radius:30px}#page-cs2-2 .box2-diff{outline-offset:10px}",""])},84:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{click:function(){alert(1)}}}},85:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"page-cs2-2"}},[o("h2",[e._v(e._s(e.$route.name))]),e._v(" "),e._m(0),e._v(" "),o("h3",[e._v("box-shadow")]),e._v(" "),o("p",[e._v("支持逗号分隔语法,我们可以创建任意数量的投影")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),o("div",{staticClass:"box box1",on:{click:function(t){e.click()}}},[e._v("点击或悬停查看效果")]),e._v(" "),e._m(3),e._v(" "),o("div",{staticClass:"box box1 box1-diff",on:{click:function(t){e.click()}}},[e._v("点击或悬停查看效果")]),e._v(" "),o("h3",[e._v("outline")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),o("div",{staticClass:"box box2"}),e._v(" "),o("div",{staticClass:"box box2 box2-diff"})])},staticRenderFns:[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow",target:"_blank"}},[e._v("box-shadow")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline",target:"_blank"}},[e._v("outline")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("mark",[e._v("outset")]),e._v("不会影响布局，不受\n        "),o("mark",[e._v("box-sizing")]),e._v("影响，可通过\n        "),o("mark",[e._v("padding")]),e._v(" "),o("mark",[e._v("margin")]),e._v("模拟所需空间，不会响应鼠标事件，比如悬停或点击")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"eg-code"},[o("pre",[o("code",[e._v("box-shadow: 0 0 0 10px #ccc, 0 0 0 30px #ddd;")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"eg-code"},[o("pre",[o("code",[e._v("box-shadow: 0 0 0 10px #ccc inset, 0 0 0 30px #ddd inset;")])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("类似\n        "),o("mark",[e._v("border")]),e._v("，但不会影响布局，不一定是矩形，不一定贴合"),o("mark",[e._v("border-radius")]),e._v("产生的圆角")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("mark",[e._v("outline-offset")]),e._v("可设置 正负 偏移\n    ")])}]}}});