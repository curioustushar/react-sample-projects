(this["webpackJsonpsortable-list"]=this["webpackJsonpsortable-list"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),c=t.n(o),l=(t(12),t(3)),s=t(4),i=["Jeff Bezos","Bill Gates","Warren Buffett","Bernard Arnault","Carlos Slim Helu","Amancio Ortega","Larry Ellison","Mark Zuckerberg","Michael Bloomberg","Larry Page"],u=function(){return[].concat(i).map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,a){return e.sort-a.sort})).map((function(e){return{name:e.value,answer:""}}))};var m=function(){var e=Object(n.useState)(u()),a=Object(s.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),f=m[0],g=m[1],p=function(e){e.preventDefault()},d=function(e){},b=function(e){};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"10 Richest People"),r.a.createElement("p",null,"Drag and drop the items into their corresponding spots"),r.a.createElement("ul",{className:"draggable-list",id:"draggable-list"},t.map((function(e,a){return r.a.createElement("li",{className:e.answer,onDragOver:p,onDrop:function(e){return function(e){var a=Object(l.a)(t),n=[a[f],a[e]];a[e]=n[0],a[f]=n[1],o(a)}(a)},onDragEnter:d,onDragLeave:b,key:e.name},r.a.createElement("span",{className:"number"},a+1),r.a.createElement("div",{className:"draggable",draggable:!0,onDragStart:function(e){g(a)}},r.a.createElement("p",{className:"person-name"},e.name),r.a.createElement("i",{className:"fas fa-grip-lines"})))}))),r.a.createElement("div",null,r.a.createElement("button",{className:"rest-btn",onClick:function(){o(u())}},"Reset \xa0",r.a.createElement("i",{className:"fas fa-redo-alt"})),r.a.createElement("button",{className:"check-btn",onClick:function(e){e.stopPropagation();var a=Object(l.a)(t);i.forEach((function(e,t){a[t].answer=e===a[t].name?"right":"wrong"})),o(a)}},"Check Order \xa0",r.a.createElement("i",{className:"fas fa-paper-plane"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.81c3c68d.chunk.js.map