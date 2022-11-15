(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{316:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"fbcache挖下的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fbcache挖下的坑"}},[t._v("#")]),t._v(" fbCache挖下的坑")]),t._v(" "),a("p",[t._v("bfcache（Back/Forward cache），中文理解是往返缓存。浏览器为了提高用户体验的流畅度，在单页面进行不断的后退/前进操作时，在内存中定了一个叫bfcache的缓存机制。具体表现为：用户前往新页面时，会保存该页面的完整快照；当用户点击后退按钮的时候，将页面直接从bfcache中加载，浏览器可以快速轻松地恢复页面，节省了大部分的网络加载时间。")]),t._v(" "),a("p",[t._v("这点与http缓存不同，bfcache是内存中整个页面的快照(包括JavaScript堆)，而HTTP缓存只包含以前发出的请求的响应。由于加载页面所需的所有请求都能从HTTP缓存中得到满足的情况非常罕见，因此使用bfcache恢复进行的重复访问总是比最优化的非bfcache导航更快。")]),t._v(" "),a("p",[t._v("对于bfcache更多的知识，这里就不多追述了，给各位老们们推荐一篇博文：https://web.dev/bfcache/。")]),t._v(" "),a("h2",{attrs:{id:"有坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有坑"}},[t._v("#")]),t._v(" 有坑？")]),t._v(" "),a("p",[t._v("这么看来，bfcache是一个很美丽的东西呀，但是红颜祸水，这玩意有时候就是“好心做坏事”......")]),t._v(" "),a("p",[t._v("这里讲一个场景：这是一个在线编辑器，有各种各样的状态机制，其中有一某项操作需要跳转到第三方页面。当你在编辑器中大刀阔斧，一顿骚操作后，触发了跳转到第三方页面，你后悔了，再在返回编辑器时，这时候浏览器捕获到了bfcache，它很自信的直接从bfcache中夹在数据，恢复页面...你就会发现，编辑器回到了出事状态，中间的各种操作(跳转第三方前)没有了，唯一的方法只能重新刷新页面获取最新数据。")]),t._v(" "),a("p",[t._v("这bug级来了，我们该如何去解决它？其实可以通过load、unload等事件对fbcache进行一系列操作来控制，这里介绍一种巧妙的解决方案，直接上菜！！！")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// disable bfcache bfcache会导致页面后退时，做图记录不是最新的")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" bfWorker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Worker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createObjectURL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Blob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pagehide'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    bfWorker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("terminate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("bfcache通常的话，会缓存一些允许挂起的对象，一些不能挂起的事件，是不会进行缓存的，原因是它可能会影响同一源中打开的其他选项卡(如IndexedDB，可能会被其他标签页引用，所以无法暂停)，所以这样看来，Worker是比较好的选择，因为它不能被挂起，我们可以在跳转页面时new一个Worker对象，这样就不会被缓存了～")])])}),[],!1,null,null,null);a.default=e.exports}}]);