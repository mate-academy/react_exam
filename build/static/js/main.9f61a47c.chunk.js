(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(28)},21:function(e,t,n){},22:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(5),o=n.n(u),c=(n(21),n(22),n(4)),i=n(6);function l(e){var t=e.author,n=e.removeAuthor,a=e.index,u=e.itemClicked,o=e.addValueToInput;return r.a.createElement("div",{className:"author-item"},r.a.createElement("span",{className:"author",onClick:function(){return u(a)}},t),r.a.createElement("button",{type:"button",onClick:function(){return o(t)}},"Edit"),r.a.createElement("span",{className:"remove-author",onClick:function(){return n(a)}},"\xd7"))}n(27);var d="load_data",s="display_data",p="remove_author",m="select_item",v="move_up",h="move_down",f="remove_select",b="add_value_to_input",x="change_input_value",E="save_canged_value";function y(){return function(e){e({type:d});var t=new XMLHttpRequest;t.open("GET","http://my-json-server.typicode.com/mate-academy/literary-blog/authors"),t.responseType="json",t.addEventListener("load",function(){var n=t.response;e(function(e){return{type:s,authorList:e}}(n))}),t.send()}}var j=Object(i.b)(function(e){return console.log(e.input),{index:e.selectedIndex,authorsRequested:e.requested,authorList:e.authorList,input:e.input}},function(e){return{buttonClicked:function(){return e(y())},removeAuthor:function(t){return e(function(e){return{type:p,index:e}}(t))},itemClicked:function(t){return e(function(e){return{type:m,index:e}}(t))},moveUp:function(t){return e({type:v})},moveDown:function(t){return e({type:h})},removeSelect:function(){return e({type:f})},addValueToInput:function(t){return e(function(e){return{type:b,input:e}}(t))},changeInputValue:function(t){return e({type:x,value:t})}}})(function(e){var t=e.authorList,n=e.authorsRequested,a=e.buttonClicked,u=e.removeAuthor,o=e.itemClicked,c=e.addValueToInput,i=e.input,d=e.changeInputValue;return n?null===t?r.a.createElement("span",null,"Loading..."):r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(l,{itemClicked:o,author:e,index:t,removeAuthor:u,addValueToInput:c}))}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.moveUp(e.index)},disabled:0===e.index||null===e.index},"Move Up"),r.a.createElement("button",{onClick:function(){return e.moveDown(e.index)},disabled:e.index===e.authorList.length-1||null===e.index},"Move Down")),r.a.createElement("label",null,"Editor",r.a.createElement("input",{type:"text",name:"edit",defaultValue:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement("button",{type:"button"},"Save")):r.a.createElement("button",{onClick:a},"Load")}),w=n(10),O=n(11),g=n(1),k={selectedIndex:null,requested:!1,authorList:null,input:""};var L=n(15),I=Object(c.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=e.selectedIndex,a=e.authorList;switch(t.type){case d:return Object(g.a)({},e,{requested:!0});case s:return Object(g.a)({},e,{authorList:t.authorList});case p:return Object(g.a)({},e,{authorList:a.slice(0,t.index).concat(a.slice(t.index+1))});case m:return null===n||n!==t.index?Object(g.a)({},e,{selectedIndex:t.index}):Object(g.a)({},e,{selectedIndex:null});case f:return Object(g.a)({},e,{selectedIndex:null});case v:if(0===n)return e;var r=Object(O.a)(a),u=r.splice(n,1),o=Object(w.a)(u,1)[0];return r.splice(n-1,0,o),Object(g.a)({},e,{authorList:r,selectedIndex:n-1});case h:if(n===a.length-1)return e;var c=Object(O.a)(a),i=c.splice(n,1),l=Object(w.a)(i,1)[0];return c.splice(n+1,0,l),Object(g.a)({},e,{authorList:c,selectedIndex:n+1});case b:return Object(g.a)({},e,{input:a.find(function(e){return e===t.input})});case x:return Object(g.a)({},e,{input:t.value});case E:return Object(g.a)({},e);default:return e}},Object(c.a)(L.a));var _=function(){return r.a.createElement(i.a,{store:I},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.9f61a47c.chunk.js.map