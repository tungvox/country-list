(this["webpackJsonpfast-track-typescript-redux-template"]=this["webpackJsonpfast-track-typescript-redux-template"]||[]).push([[0],{129:function(e,t,a){e.exports=a(152)},138:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},145:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(33),l=a.n(c),o=a(31),i=a(37),u=a(17),s=(a(137),a(13)),m=a(168),d=a(116);a(138);function f(e){var t=e.countries,a=Object(s.f)().name,n=t.find((function(e){return e.name===a}));return n?r.a.createElement("div",{className:"single-country"},r.a.createElement(m.a,null,r.a.createElement(d.a,{src:n.flag,wrapped:!0,ui:!1}),r.a.createElement(m.a.Content,null,r.a.createElement(m.a.Header,null,n.name),r.a.createElement(m.a.Meta,null,r.a.createElement("span",{className:"date"},"Region: ",n.region)),r.a.createElement(m.a.Description,null,"Languages:",r.a.createElement("td",{className:"align-middle"},n.languages.map((function(e){return r.a.createElement("li",{className:"languages",key:e.name},e.name)}))))),r.a.createElement(m.a.Content,{extra:!0},"Population:"," ",n.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))):r.a.createElement("div",null,"Product not found")}var g,p=a(20),b=(a(142),a(171)),E=a(169),v=a(63),h=a(88),O=a(172),C=a(173),y=a(167),j=a(29),k=a(166),N=(a(143),{cursor:"pointer"}),w=Object(j.a)((function(e){var t=e.handleClick;return r.a.createElement("thead",null,r.a.createElement("tr",null,["Flag","Name","Languages","Population","Region","Add to cart"].map((function(e){return"Flag"!==e&&"Add to cart"!==e?r.a.createElement("th",{key:e,className:"sortable-header",style:N,onClick:function(){return t(e)}},e," ",r.a.createElement("i",{className:"fas fa-sort"})):r.a.createElement("th",{key:e},e)}))))})),x=(a(144),Object(j.a)((function(e){var t=e.imageURL;return r.a.createElement("img",{className:"flag",alt:"Flag",src:t})}))),R=a(174),A=(a(145),Object(j.a)((function(e){var t=e.key,a=e.name,n=e.flagURL,c=e.languages,l=e.population,u=e.region,s=e.handleAddCountry,m=c,d={key:t,name:a,flag:n,languages:c,population:l,region:u},f=Object(o.c)((function(e){return e.country.inCart}));return r.a.createElement("tr",{className:"table-row"},r.a.createElement("td",{className:"align-middle"},r.a.createElement(x,{imageURL:n})),r.a.createElement("td",{className:"country-name-text align-middle"},r.a.createElement(i.b,{to:"/countries/".concat(a)},a)),r.a.createElement("td",{className:"align-middle"},m.map((function(e){return r.a.createElement("li",{className:"languages",key:e.name},e.name)}))),r.a.createElement("td",{className:"align-middle"},l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),r.a.createElement("td",{className:"align-middle"},u),r.a.createElement("td",{className:"align-middle"},r.a.createElement(R.a,{disabled:function(e){return!!f.find((function(t){return t.name===e}))}(a),onClick:function(){s(d)},variant:"info"},"Add")))}))),S=(a(146),Object(j.a)((function(e){var t=e.theme,a=e.data,n=e.handleClick,c=e.handleAddCountry;return r.a.createElement(k.a,{responsive:"md",striped:!0,hover:!0},r.a.createElement(w,{handleClick:n}),r.a.createElement("tbody",{style:t,id:"table-body"},a.map((function(e){return r.a.createElement(A,{key:e.name,flagURL:e.flag,name:e.name,languages:e.languages,population:e.population,region:e.region,handleAddCountry:c})}))))}))),D=(a(147),Object(j.a)((function(e){var t=e.handleChange;return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{id:"my-input",type:"text",onChange:function(e){return t(e)},placeholder:"Search by name..."}))})));function U(e){return{type:"ADD_COUNTRY",payload:{country:e}}}!function(e){e.SignIn="signIn",e.SignUp="signUp"}(g||(g={}));var L=r.a.createContext(void 0),T=function(e){var t=e.children,a=r.a.useState("light"),n=Object(u.a)(a,2),c=n[0],l=n[1];return r.a.useEffect((function(){l("light")}),[]),r.a.createElement(L.Provider,{value:{theme:c,setTheme:l}},t)},I=(a(148),{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row"}),P={backgroundColor:"#E0DDCF",color:"black"},_={backgroundColor:"#C5BAAF",color:"white"},B=function(e){var t=e.inCart,a=e.isFiltered,n=e.filtered,c=e.all,l=e.handleClick,s=e.handleAddCountry,m=e.handleChange,d=r.a.useState(!1),f=Object(u.a)(d,2),g=f[0],p=f[1],j=Object(o.b)(),k=r.a.useContext(L),N=k.theme,w=k.setTheme,R=Object(o.c)((function(e){return e.country.inCart})).length,A=function(){if(0!==R){if(!1===g)return!1;if(!0===g)return!0}else if(0===R)return!1;return!1},U=function(){return"light"===N?P:_};return r.a.createElement(b.a,{columns:1},r.a.createElement(b.a.Column,null,r.a.createElement("div",{id:"nav-container",style:U()},r.a.createElement(D,{handleChange:m}),r.a.createElement(E.a.Group,null,r.a.createElement(E.a,{style:P,onClick:function(e){return w(e.currentTarget.value)},value:"light"},r.a.createElement(v.a,{name:"sun"})),r.a.createElement(E.a.Or,null),r.a.createElement(E.a,{style:_,onClick:function(e){return w(e.currentTarget.value)},value:"dark"},r.a.createElement(v.a,{name:"moon"}))),r.a.createElement(E.a,{onClick:function(){return p(!0)},as:"div"},r.a.createElement(E.a,{color:"red"},r.a.createElement(v.a,{name:"shopping cart"})),r.a.createElement(h.a,{as:"a",basic:!0,color:"red",pointing:"left"},R)))),r.a.createElement(b.a.Column,null,r.a.createElement(O.a.Pushable,{as:C.a},r.a.createElement(O.a,{as:y.a,animation:"overlay",direction:"right",icon:"labeled",inverted:!0,onHide:function(){return p(!1)},vertical:!0,visible:A(),width:"thin",style:U()},t?t.map((function(e){return r.a.createElement(y.a.Item,{style:I,key:e.key,as:"div"},r.a.createElement(x,{imageURL:e.flagURL}),r.a.createElement(i.b,{to:"/countries/".concat(e.name)},e.name),r.a.createElement(E.a,{onClick:function(){return j({type:"REMOVE_COUNTRY",payload:{country:e}})}},"Remove"))})):r.a.createElement("p",null,"Nothing in cart")),r.a.createElement(O.a.Pusher,{dimmed:A()},r.a.createElement(C.a,{basic:!0},a?r.a.createElement("div",{className:"table-container"},r.a.createElement(S,{theme:U(),data:n,handleClick:l,handleAddCountry:s})):r.a.createElement("div",{className:"table-container"},r.a.createElement(S,{theme:U(),data:c,handleClick:l,handleAddCountry:s})))))))},F=(a(149),function(e){var t=e.countries,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=(c[0],c[1]),i=Object(n.useState)("Name"),s=Object(u.a)(i,2),m=(s[0],s[1],Object(n.useState)(!1)),d=Object(u.a)(m,2),f=d[0],g=d[1],b=Object(n.useState)([]),E=Object(u.a)(b,2),v=E[0],h=E[1],O=Object(n.useState)(!1),C=Object(u.a)(O,2),y=C[0],j=C[1],k=Object(o.b)(),N=Object(o.c)((function(e){return e.country.inCart})),w=Object(n.useCallback)((function(e){if("flag"===e.toLowerCase())return null;switch(f||g(!0),e.toLowerCase()){case"name":j(!y);var a=Object(p.a)(t).sort((function(e,t){return y?e.name.localeCompare(t.name):t.name.localeCompare(e.name)}));h(a);break;case"languages":j(!y);var n=Object(p.a)(t).sort((function(e,t){return y?e.languages[0].name.localeCompare(t.languages[0].name):t.languages[0].name.localeCompare(e.languages[0].name)}));h(n);break;case"population":j(!y);var r=Object(p.a)(t).sort((function(e,t){return y?e.population-t.population:t.population-e.population}));h(r);break;case"region":j(!y);var c=Object(p.a)(t).sort((function(e,t){return y?e.region.localeCompare(t.region):t.region.localeCompare(e.region)}));h(c);break;default:h([])}}),[t,f,y]);return r.a.createElement("div",{className:"main"},r.a.createElement(T,null,r.a.createElement(B,{inCart:N,isFiltered:f,filtered:v,all:t,handleClick:w,handleAddCountry:function(e){var t={key:e.name,name:e.name,flagURL:e.flag,languages:e.languages,population:e.population,region:e.region};console.log(t),k(U(t))},handleChange:function(e){var t,a,n;for(e.preventDefault(),l(e.target.value),t=e.target.value.toUpperCase(),a=document.getElementById("table-body").getElementsByClassName("table-row"),n=0;n<a.length;n++)a[n].getElementsByClassName("country-name-text")[0].innerText.toUpperCase().indexOf(t)>-1?a[n].style.display="":a[n].style.display="none"}})))}),G=function(e){var t=e.countries;return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(F,Object.assign({},e,{countries:t}))}}),r.a.createElement(s.a,{exact:!0,path:"/countries/:name",render:function(e){return r.a.createElement(f,Object.assign({},e,{countries:t}))}}))},J=a(24),M=a.n(J),Y=a(113),V=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(u.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){var e=!1;return function(){var t=Object(Y.a)(M.a.mark((function t(){var a,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("https://restcountries.eu/rest/v2/all",t.prev=1,e){t.next=10;break}return t.next=5,fetch("https://restcountries.eu/rest/v2/all");case 5:return a=t.sent,t.next=8,a.json();case 8:n=t.sent,r(n);case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),e||i(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}()(),function(){e=!0}}),[]),[a,o]};function H(){var e=V(),t=Object(u.a)(e,2),a=t[0];t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(G,{countries:a}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(30),$=a(117),q=a(114),z=a(115),K=a.n(z),Q=a(18);function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inCart:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT":var a=t.payload.product;return e.inCart.find((function(e){return e.id===a.id}))?e:Object(Q.a)(Object(Q.a)({},e),{},{inCart:[].concat(Object(p.a)(e.inCart),[a])});case"REMOVE_PRODUCT":var n=t.payload.product,r=e.inCart.findIndex((function(e){return e.id===n.id}));return r>=0?(e.inCart.splice(r,1),Object(Q.a)(Object(Q.a)({},e),{},{inCart:Object(p.a)(e.inCart)})):e;default:return e}}var Z=a(87),ee={dialogOpen:{}};function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_DIALOG":return Object(Q.a)(Object(Q.a)({},e),{},{dialogOpen:Object(Q.a)(Object(Q.a)({},e.dialogOpen),{},Object(Z.a)({},t.payload.dialog,!e.dialogOpen[t.payload.dialog]))});default:return e}}function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inCart:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COUNTRY":var a=t.payload.country;return e.inCart.find((function(e){return e.name===a.name}))?e:Object(Q.a)(Object(Q.a)({},e),{},{inCart:[].concat(Object(p.a)(e.inCart),[a])});case"REMOVE_COUNTRY":var n=t.payload.country,r=e.inCart.findIndex((function(e){return e.name===n.name}));return r>=0?(e.inCart.splice(r,1),Object(Q.a)(Object(Q.a)({},e),{},{inCart:Object(p.a)(e.inCart)})):e;default:return e}}var ne=function(){return Object(W.c)({product:X,country:ae,ui:te})},re=a(60),ce=M.a.mark(le);function le(e){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,console.log(e);case 2:case"end":return t.stop()}}),ce)}var oe=[Object(re.b)("ADD_PRODUCT",le)],ie=M.a.mark(ue);function ue(e){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,console.log(e);case 2:case"end":return t.stop()}}),ie)}var se=[Object(re.b)("TOGGLE_DIALOG",ue)],me=M.a.mark(de);function de(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(re.a)([].concat(Object(p.a)(oe),Object(p.a)(se)));case 2:case"end":return e.stop()}}),me)}var fe=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}},ge=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}},pe=fe()?fe().country.inCart:[];console.log(pe);var be={product:{inCart:[]},country:{inCart:pe},ui:{dialogOpen:{}}};a(151);var Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=Object($.a)(),a=[t,q.a],n=W.d,r=Object(W.e)(ne(),e,n(W.a.apply(void 0,a)));return r.subscribe(K()((function(){ge({country:{inCart:r.getState().country.inCart}})}),1e3)),t.run(de),r}(),ve=function(){return r.a.createElement(o.a,{store:Ee},r.a.createElement(i.a,null,r.a.createElement(H,null)))};l.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[129,1,2]]]);
//# sourceMappingURL=main.c2cb1dcd.chunk.js.map