(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{90:function(n,e,a){},91:function(n,e,a){"use strict";a.r(e);var i,t,c=a(3),o=a.n(c),s=a(68),l=a.n(s),m=a(75),d=a(92),r=a(34),j=a(11),p=a(49),u=a(28),b=Object(u.a)(i||(i=Object(p.a)(["\n  query pokemons($first: Int!) {\n    pokemons(first: $first) {\n      id\n      name\n      image\n      maxHP\n      maxCP\n      attacks {\n        special {\n          name\n          damage\n        }\n      }\n    }\n  }\n"]))),v=Object(u.a)(t||(t=Object(p.a)(["\n  query pokemon($id: String!) {\n    pokemon(id: $id) {\n      id\n      number\n      name\n      weight {\n        minimum\n        maximum\n      }\n      height {\n        minimum\n        maximum\n      }\n      classification\n      types\n      resistant\n      attacks {\n        fast {\n          name\n          type\n          damage\n        }\n        special {\n          name\n          type\n          damage\n        }\n      }\n      weaknesses\n      fleeRate\n      maxCP\n      evolutions {\n        id\n      }\n      evolutionRequirements {\n        amount\n        name\n      }\n      maxHP\n      image\n    }\n  }\n"]))),x=a(6),h=function(n){var e,a=n.pokemon,i=new Intl.NumberFormat("en-GB");return Object(x.jsxs)("div",{className:"pokemon",children:[Object(x.jsx)("div",{className:"pokemon__name",children:Object(x.jsx)("p",{children:a.name})}),Object(x.jsxs)("div",{className:"pokemon__meta",children:[Object(x.jsx)("span",{children:i.format(a.maxHP)}),Object(x.jsx)("span",{children:i.format(a.maxCP)})]}),Object(x.jsx)("div",{className:"pokemon__image",children:Object(x.jsx)("img",{src:a.image,alt:a.name})}),Object(x.jsx)("div",{className:"pokemon__attacks",children:null===a||void 0===a||null===(e=a.attacks)||void 0===e?void 0:e.special.slice(0,3).map((function(n){return Object(x.jsx)("span",{children:n.name},"".concat(n.name,"-").concat(n.damage))}))})]})},O=function(){var n,e=Object(d.useQuery)(b,{variables:{first:15}}),a=e.loading,i=e.error,t=e.data;return a?Object(x.jsx)("p",{children:"Loading ..."}):i?Object(x.jsx)("pre",{children:i}):Object(x.jsx)("div",{className:"container pokemons",children:null===t||void 0===t||null===(n=t.pokemons)||void 0===n?void 0:n.map((function(n){return Object(x.jsx)(r.b,{to:"/pokemon/".concat(n.id),children:Object(x.jsx)(h,{pokemon:n})},n.id)}))})},k=function(){var n,e,a,i,t,c,o,s,l=new Intl.NumberFormat("en-GB"),m=Object(j.g)(),r=Object(j.f)(),p=Object(d.useQuery)(v,{variables:{id:m.id}}),u=p.loading,b=p.error,h=p.data;return u?Object(x.jsx)("p",{children:"Loading ..."}):b?Object(x.jsx)("pre",{children:b}):Object(x.jsxs)("div",{className:"pokemondetail",children:[Object(x.jsx)("button",{onClick:function(){r.goBack()},children:" Back"}),Object(x.jsxs)("div",{className:"pokemon",children:[Object(x.jsx)("div",{className:"pokemon__name",children:Object(x.jsx)("h1",{children:null===h||void 0===h?void 0:h.pokemon.name})}),Object(x.jsxs)("h4",{children:["Classification: ",null===h||void 0===h?void 0:h.pokemon.classification]}),Object(x.jsxs)("div",{className:"pokemon__meta",children:[Object(x.jsxs)("span",{children:["maxHP: ",l.format(null===h||void 0===h?void 0:h.pokemon.maxHP)," \xa0"]}),Object(x.jsxs)("span",{children:["maxCP: ",l.format(null===h||void 0===h?void 0:h.pokemon.maxCP)]})]}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"pokemon__image",children:Object(x.jsx)("img",{src:null===h||void 0===h?void 0:h.pokemon.image,alt:null===h||void 0===h?void 0:h.pokemon.name})}),Object(x.jsx)("h1",{children:"Resistant"}),Object(x.jsx)("div",{className:"pokemon__attacks",children:null===h||void 0===h||null===(n=h.pokemon)||void 0===n||null===(e=n.resistant)||void 0===e?void 0:e.map((function(n,e){return Object(x.jsxs)("span",{children:[n," "]},e)}))}),Object(x.jsx)("h1",{children:"Weaknesses"}),Object(x.jsx)("div",{className:"pokemon__attacks",children:null===h||void 0===h||null===(a=h.pokemon)||void 0===a||null===(i=a.weaknesses)||void 0===i?void 0:i.join(", ")}),Object(x.jsx)("h1",{children:"Attacks"}),Object(x.jsxs)("div",{className:"pokemon__attacks",children:[Object(x.jsx)("p",{children:null===h||void 0===h||null===(t=h.pokemon)||void 0===t||null===(c=t.attacks)||void 0===c?void 0:c.fast.map((function(n){return n.name})).join(", ")}),Object(x.jsx)("p",{children:null===h||void 0===h||null===(o=h.pokemon)||void 0===o||null===(s=o.attacks)||void 0===s?void 0:s.special.map((function(n){return n.name})).join(", ")})]})]})]})};a(90);var f=function(){var n=new m.a({uri:"https://graphql-pokemon2.vercel.app/"});return Object(x.jsx)(d.ApolloProvider,{client:n,children:Object(x.jsx)(r.a,{hashType:"slash",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/",children:Object(x.jsx)(O,{})}),Object(x.jsx)(j.a,{exact:!0,path:"/pokemon/:id",children:Object(x.jsx)(k,{})})]})})})},g=function(n){n&&n instanceof Function&&a.e(3).then(a.bind(null,94)).then((function(e){var a=e.getCLS,i=e.getFID,t=e.getFCP,c=e.getLCP,o=e.getTTFB;a(n),i(n),t(n),c(n),o(n)}))};l.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),g()}},[[91,1,2]]]);
//# sourceMappingURL=main.0e8ea3f9.chunk.js.map