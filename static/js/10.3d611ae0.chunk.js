(window.webpackJsonpsebtons=window.webpackJsonpsebtons||[]).push([[10],{142:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=(n(96),n(9)),o=n(74),c=n(84),i=Object(c.a)([function(e){return e.allProperties}],(function(e){return e.properties})),s=n(77),p=n(7),u=n.n(p),m=n(81),f=n.n(m);t.default=Object(l.b)((function(e){return{allProperties:i(e),isFetching:e.allProperties.isFetching}}),(function(e){return{fetchAllPropertiesStartAsync:function(){return e((function(e){var t=[];e({type:"FETCH_ALL_PROPERTIES_START"}),o.a.collection("properties").get().then((function(n){n.forEach((function(e){var n=e.data();t.push(n)})),e(function(e){return{type:"FETCH_ALL_PROPERTIES_SUCCESS",payload:e}}(t))})).catch((function(t){return e({type:"FETCH_ALL_PROPERTIES_FAILURE",payload:t.message})}))}))}}}))((function(e){var t=e.isFetching,n=e.allProperties,l=e.fetchAllPropertiesStartAsync,o=e.routeObject;return Object(r.useEffect)((function(){window.scrollTo(0,0),l()}),[l]),a.a.createElement("div",{className:"all-properties-page-container"},a.a.createElement(u.a,{left:!0},a.a.createElement("h2",{className:"all-properties-title"},"Properties")),t?a.a.createElement(f.a,{type:"cylon",color:"#ffde59",height:"%20",width:"40%"}):a.a.createElement("div",{className:"property-cards-layout-container"},n.map((function(e,t){var n=e.photos,r=e.propertyTitle,l=e.bedrooms,c=e.bathrooms,i=e.price,p=e.location,m=e.propertyPageUrl;return a.a.createElement(u.a,{key:t},a.a.createElement(s.a,{routeObject:o,photos:n,price:i,location:p,propertyPageUrl:m,propertyTitle:r,bedrooms:l,bathrooms:c}))}))))}))},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(75);n(76);r.initializeApp({apiKey:"AIzaSyDX0CMo94Nhb6UBPA4Q9IQzpwYNrYMTHnw",authDomain:"sebtons.firebaseapp.com",databaseURL:"https://sebtons.firebaseio.com",projectId:"sebtons",storageBucket:"",messagingSenderId:"49894577074",appId:"1:49894577074:web:d6eadd04075fca88d0caab",measurementId:"G-3RSK3GH2F1"});var a=r.firestore()},77:function(e,t,n){"use strict";var r=n(0),a=n.n(r),l=(n(78),n(30));t.a=function(e){var t=e.routeObject,n=e.photos,r=e.propertyPageUrl,o=e.propertyTitle,c=e.bedrooms,i=e.bathrooms,s=e.price,p=e.location,u=e.imageUrl,m=e.altDescription,f=e.wifi,d=e.minStay;return a.a.createElement("div",{className:"property-card-container"},u&&m&&r?a.a.createElement("div",{className:"property-page-link-container",onClick:function(){return t.history.push("properties/".concat(r))}},a.a.createElement("img",{className:"property-image",src:u,alt:m}),a.a.createElement("p",{className:"featured-property-title"},o)):null,n&&r?a.a.createElement("div",null,a.a.createElement(l.a,{photosArray:n}),a.a.createElement("div",{className:"property-page-link-container",onClick:function(){return t.history.push("properties/".concat(r))}},a.a.createElement("p",{className:"all-property-title"},o))):null,a.a.createElement("div",{className:"property-details-container"},a.a.createElement("div",{className:"details-container"},a.a.createElement("span",null,"Bedrooms"),a.a.createElement("span",null,c)),a.a.createElement("div",{className:"details-container"},a.a.createElement("span",null,"Bathrooms"),a.a.createElement("span",null,i)),p?a.a.createElement("div",{className:"details-container"},a.a.createElement("span",null,"Location"),a.a.createElement("span",null,p)):null,s?a.a.createElement("div",{className:"details-container"},a.a.createElement("span",null,"Price"),a.a.createElement("span",null,s)):null,f?a.a.createElement("div",{className:"details-container"},a.a.createElement("span",null,"Wifi"),a.a.createElement("span",null,f)):null,d?a.a.createElement("div",{className:"details-container"},a.a.createElement("span",null,"Min Stay"),a.a.createElement("span",null,d)):null))}},78:function(e,t,n){},84:function(e,t,n){"use strict";function r(e,t){return e===t}function a(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}n.d(t,"a",(function(){return o}));var o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var o=0,c=r.pop(),i=l(r),s=e.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(n)),p=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return s.apply(null,e)}));return p.resultFunc=c,p.dependencies=i,p.recomputations=function(){return o},p.resetRecomputations=function(){return o=0},p}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,l=null;return function(){return a(t,n,arguments)||(l=e.apply(null,arguments)),n=arguments,l}}))},96:function(e,t,n){}}]);
//# sourceMappingURL=10.3d611ae0.chunk.js.map