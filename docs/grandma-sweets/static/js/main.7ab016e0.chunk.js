(this["webpackJsonpgrandma-sweets"]=this["webpackJsonpgrandma-sweets"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),l=(a(13),a(1)),o=a(3),s=a(2),m={items:[]},u=Object(n.createContext)([{},function(){}]),f=function(e){var t=Object(n.useState)(m),a=Object(l.a)(t,2),r=a[0],i=a[1],f=function(){var e=new(window.AudioContext||window.webkitAudioContext),t=e.createBiquadFilter(),a=e.createOscillator();a.type="square",a.connect(t),t.connect(e.destination),t.type="highpass",t.frequency.setTargetAtTime(2e3,e.currentTime,1),a.start(),setTimeout((function(){a.stop()}),150)};return c.a.createElement(u.Provider,{value:[r,function(e){var t=Object(o.a)(r.items),a=t.findIndex((function(t){return t.id===e.id}));a>-1?t[a].quantity=t[a].quantity+1:t.push(Object(s.a)({},e,{quantity:1})),i(Object(s.a)({},r,{items:t})),f()},function(e){var t=Object(o.a)(r.items),a=t.findIndex((function(t){return t.id===e.id}));t.splice(a,1),i(Object(s.a)({},r,{items:t}))},function(e){var t=Object(o.a)(r.items),a=t.findIndex((function(t){return t.id===e.id}));a>-1&&(t[a].quantity=e.quantity),i(Object(s.a)({},r,{items:t})),f()},function(){i(m)}]},e.children)};var p=function(e){var t=e.item,a=e.onClick,r=Object(n.useContext)(u),i=Object(l.a)(r,2)[1];return c.a.createElement("a",{href:"/",onClick:a},c.a.createElement("div",{className:"store-item ".concat(t.type)},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:t.src,className:"store-img",alt:t.name}),c.a.createElement("span",{className:"store-item-icon",onClick:function(e){e.preventDefault(),e.stopPropagation(),i(t)}},c.a.createElement("i",{className:"fas fa-shopping-cart"}))),c.a.createElement("div",{className:"item-text"},c.a.createElement("h5",null,t.name),c.a.createElement("h5",{className:"store-item-value"},c.a.createElement("span",null,"$ \xa0"),c.a.createElement("strong",null,t.price)))))};var d=function(e){var t=e.handelSearch,a=Object(n.useRef)(null),r=Object(n.useState)(""),i=Object(l.a)(r,2),o=i[0],s=i[1];return c.a.createElement("div",{className:"search-input"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o)}},c.a.createElement("div",{className:"input-group"},c.a.createElement("span",{className:"input-group-text search-box",onClick:function(e){e.preventDefault(),a.current.focus(),t(o)}},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("input",{type:"text",ref:a,"aria-label":"search",className:"form-control",placeholder:"item....",value:o,onChange:function(e){return s(e.target.value)},onKeyPress:function(e){13===e.target.charCode&&(e.preventDefault(),t(o))}}))))},g=function(e){var t=e.filters,a=e.activeFilter,n=e.handelFilters;return c.a.createElement("div",{className:"sortBtn"},t.map((function(e){return c.a.createElement("button",{key:e,className:"btn btn-black filter-btn ".concat(a===e?"active":""),onClick:function(t){return function(e,t){e.preventDefault(),n(t)}(t,e)}},e)})))},v=(a(14),function(e){var t=e.item,a=e.onClose;return c.a.createElement("div",{className:"row lightbox-container"},c.a.createElement("div",{className:"lightbox-holder"},c.a.createElement("span",{className:"lightbox-close",onClick:a},c.a.createElement("i",{className:"fas fa-window-close"})),c.a.createElement("div",{className:"lightbox-item",style:{backgroundImage:"url('".concat(t.src,"')")}}),c.a.createElement("span",{className:"lightbox-control btnLeft"},c.a.createElement("i",{className:"fas fa-caret-left"})),c.a.createElement("span",{className:"lightbox-control btnRight"},c.a.createElement("i",{className:"fas fa-caret-right"}))))}),E=(a(15),[{src:"./img/sweets-1.jpeg",name:"Sweet Item",price:5,type:"sweets",id:101},{src:"./img/cupcake-1.jpeg",name:"Cupcake Item",price:5,type:"cupcakes",id:102},{src:"./img/cake-1.jpeg",name:"Cake Item",price:5,type:"cakes",id:103},{src:"./img/doughnut-1.jpeg",name:"Dougnut Item",price:5,type:"dougnuts",id:104},{src:"./img/sweets-2.jpeg",name:"Sweet Item",price:10,type:"sweets",id:105},{src:"./img/cupcake-2.jpeg",name:"Cupcake Item",price:10,type:"cupcakes",id:106},{src:"./img/cake-2.jpeg",name:"Cake Item",price:10,type:"cakes",id:107},{src:"./img/doughnut-2.jpeg",name:"Dougnut Item",price:10,type:"dougnuts",id:108},{src:"./img/sweets-3.jpeg",name:"Sweet Item",price:15,type:"sweets",id:109},{src:"./img/cupcake-3.jpeg",name:"Cupcake Item",price:15,type:"cupcakes",id:110},{src:"./img/cake-3.jpeg",name:"Cake Item",price:15,type:"cakes",id:111},{src:"./img/doughnut-3.jpeg",name:"Dougnut Item",price:15,type:"dougnuts",id:112}]),b=Array.from(new Set(["all"].concat(Object(o.a)(E.map((function(e){return e.type})))))),h=function(){var e=Object(n.useState)(E),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("all"),o=Object(l.a)(i,2),s=o[0],m=o[1],u=Object(n.useRef)(null),f=Object(n.useState)(!1),h=Object(l.a)(f,2),N=h[0],k=h[1];return c.a.createElement("div",{className:"store",id:"store"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"store-header"},"our ",c.a.createElement("strong",{className:"banner-title "},"store")),c.a.createElement(g,{filters:b,activeFilter:s,handelFilters:function(e){if(m(e),e&&"all"===e.toLowerCase())r(E);else{var t=E.filter((function(t){return t.type===e}));r(t)}}}),c.a.createElement(d,{handelSearch:function(e){var t=E.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));r(t),m("all")}}),c.a.createElement("div",{className:"store-items"},a.map((function(e,t){return c.a.createElement(p,{key:t,item:e,onClick:function(t){return function(e,t){e.preventDefault(),k(!N),u.current=t}(t,e)}})})))),N?c.a.createElement(v,{item:u.current,onClose:function(){k(!N),u.current=null}}):"")},N='linear-gradient(rgba(249, 228, 148, 0.5), rgba(249, 228, 148, 0.5)), url("'.concat(".",'/img/headerBcg.jpeg")'),k=function(){return c.a.createElement("div",{className:"max-height",style:{backgroundImage:N},id:"home"},c.a.createElement("div",{className:"banner"},c.a.createElement("h1",null,"welcome to ",c.a.createElement("strong",{className:"banner-title "},"grandma's")),c.a.createElement("a",{href:"/",className:"btn banner-link text-uppercase my-2",onClick:function(e){e.preventDefault();var t=document.querySelector("#store").offsetTop;window.scrollTo({top:t,behavior:"smooth"})}},"explore")))},w=(a(16),function(e){var t=e.item,a=e.onDelete,n=e.onUpdateQuantity;return c.a.createElement("div",{key:t.id,className:"cart-item "},c.a.createElement("img",{src:t.src,alt:t.name}),c.a.createElement("div",{className:"item-text"},c.a.createElement("p",{className:"font-weight-bold mb-0"},t.name),t.quantity," * ",c.a.createElement("span",null,"$\xa0"),c.a.createElement("span",{className:"cart-item-price"},t.price)),c.a.createElement("div",{className:"cart-actions"},c.a.createElement("button",{title:"decrement",onClick:function(e){e.preventDefault(),t.quantity>=2?n(t.quantity-1):a(t)}},1===t.quantity?c.a.createElement("span",{className:"cart-item-remove",title:"remove"},c.a.createElement("i",{className:"fas fa-trash"})):"-"),c.a.createElement("input",{value:t.quantity,readOnly:!0}),c.a.createElement("button",{title:"increment",onClick:function(e){e.preventDefault(),t.quantity<99&&n(t.quantity+1)}},"+")))}),y=function(e){var t=e.onToggleCart,a=Object(n.useContext)(u),r=Object(l.a)(a,5),i=r[0],o=r[2],m=r[3],f=r[4],p=i.items.reduce((function(e,t){return e+t.quantity*parseInt(t.price)}),0),d=function(e){o(e)};return c.a.createElement("div",{className:"cart"},i.items.map((function(e){return c.a.createElement(w,{key:e.id,item:e,onDelete:d,onUpdateQuantity:function(t){return m(Object(s.a)({},e,{quantity:t}))}})})),i.items&&i.items.length?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-total-container"},c.a.createElement("h5",null,"total"),c.a.createElement("h5",null,c.a.createElement("strong",{id:"cart-total",className:"font-weight-bold"},"$ ",p))),c.a.createElement("div",{className:"cart-buttons-container"},c.a.createElement("a",{href:"/",className:"btn btn-black",onClick:function(e){e.preventDefault(),f(),t()}},"clear cart"),c.a.createElement("a",{href:"/",className:"btn btn-pink",onClick:function(e){e.preventDefault(),t(),alert("Checkout")}},"checkout"))):c.a.createElement("p",{className:"empty-cart"},"Cart is empty :("))};a(17);var j=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!1),o=Object(l.a)(i,2),s=o[0],m=o[1],f=Object(n.useState)(!1),p=Object(l.a)(f,2),d=p[0],g=p[1],v=Object(n.useContext)(u),E=Object(l.a)(v,1)[0],b=E.items.reduce((function(e,t){return e+t.quantity*parseInt(t.price)}),0),h=function(){r(!a)},N=function(e){e.preventDefault();var t=e.target.href.split("/").pop(),a=document.querySelector("#".concat(t)).offsetTop;window.scrollTo({top:a-80,behavior:"smooth"})};function k(e){e.matches?g(!0):g(!1)}return Object(n.useEffect)((function(){var e=window.matchMedia("(max-width: 700px)");return k(e),e.addListener(k),function(){e.removeEventListener(k)}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar ".concat(d?"mobile-navbar":"")},c.a.createElement("a",{className:"navbar-brand",href:"/"},c.a.createElement("img",{src:"img/logo.svg",alt:"logo"})),d&&c.a.createElement("button",{className:"navbar-toggler","aria-label":"menu",onClick:function(e){return m(!s)}},c.a.createElement("span",{className:"toggler-icon"},c.a.createElement("i",{className:"fas fa-bars"}))),(!d||s)&&c.a.createElement("div",{className:"navbar-collapse ".concat(d?"d-block":"")},c.a.createElement("ul",{className:"navbar-nav ".concat(d?"column":"")},c.a.createElement("li",{className:"nav-item active"},c.a.createElement("a",{className:"nav-link",href:"/home",onClick:N},"home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/about",onClick:N},"about")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",href:"/store",onClick:N},"store"))),!d&&c.a.createElement("div",{className:"nav-info-items"},c.a.createElement("div",{className:"nav-info"},c.a.createElement("i",{className:"fas fa-phone"}),c.a.createElement("a",{href:"tel:+ 123456789"},"+ 123 456 789")),c.a.createElement("div",{onClick:function(e){return h()},className:"nav-info cart-info"},c.a.createElement("i",{className:"fas fa-shopping-cart"}),E.items&&E.items.length?c.a.createElement("p",{className:""},c.a.createElement("span",{id:"item-count"},E.items.length," "),"items - $",c.a.createElement("span",{className:"item-total"},b)):"Cart")))),a?c.a.createElement(y,{onToggleCart:function(e){return h()}}):"")},C=(a(18),function(){return c.a.createElement("div",{className:"container"},c.a.createElement("section",{className:"about",id:"about"},c.a.createElement("div",{className:""},c.a.createElement("h1",{className:"about-title"},"about ",c.a.createElement("strong",{className:"banner-title"},"us")),c.a.createElement("p",{className:"about-desc"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis porro at dolorum! Ad!"),c.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault();var t=document.querySelector("#store").offsetTop;window.scrollTo({top:t,behavior:"smooth"})},className:"btn  btn-black"},"explore")),c.a.createElement("div",{className:"align-self-center"},c.a.createElement("div",{className:"about-img__container"},c.a.createElement("img",{src:"img/sweets-1.jpeg",className:"img-fluid",alt:""})))))}),O=function(e){var t=e.onClick;return c.a.createElement("div",{className:"back-to-top",onClick:t},c.a.createElement("i",{className:"fas fa-arrow-up"}))};var x=function(){return c.a.createElement(f,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(j,null),c.a.createElement(k,null),c.a.createElement(C,null),c.a.createElement(h,null),c.a.createElement(O,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.7ab016e0.chunk.js.map