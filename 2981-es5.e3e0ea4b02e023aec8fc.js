!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t,n,r,o,i,a){try{var u=e[i](a),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,s,"next",e)}function s(e){n(a,o,i,u,s,"throw",e)}u(void 0)})}}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){s=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(s)throw a}}}}function i(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}(self.webpackChunkkatsu=self.webpackChunkkatsu||[]).push([[2981],{2981:function(n,i,a){"use strict";a.r(i),a.d(i,{ion_route:function(){return p},ion_route_redirect:function(){return d},ion_router:function(){return A},ion_router_link:function(){return N}});var s=a(2322),h=a(1843),l=a(7505),f=a(4843),p=function(){function e(t){u(this,e),(0,s.r)(this,t),this.ionRouteDataChanged=(0,s.e)(this,"ionRouteDataChanged",7),this.url=""}return c(e,[{key:"onUpdate",value:function(e){this.ionRouteDataChanged.emit(e)}},{key:"onComponentProps",value:function(e,t){if(e!==t){var n=e?Object.keys(e):[],r=t?Object.keys(t):[];if(n.length===r.length){var i,a=o(n);try{for(a.s();!(i=a.n()).done;){var u=i.value;if(e[u]!==t[u])return void this.onUpdate(e)}}catch(s){a.e(s)}finally{a.f()}}else this.onUpdate(e)}}},{key:"connectedCallback",value:function(){this.ionRouteDataChanged.emit()}}],[{key:"watchers",get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}]),e}(),d=function(){function e(t){u(this,e),(0,s.r)(this,t),this.ionRouteRedirectChanged=(0,s.e)(this,"ionRouteRedirectChanged",7)}return c(e,[{key:"propDidChange",value:function(){this.ionRouteRedirectChanged.emit()}},{key:"connectedCallback",value:function(){this.ionRouteRedirectChanged.emit()}}],[{key:"watchers",get:function(){return{from:["propDidChange"],to:["propDidChange"]}}}]),e}(),v=function(e){return"/"+e.filter(function(e){return e.length>0}).join("/")},g=function(e){if(null==e)return[""];var t=e.split("?")[0].split("/").map(function(e){return e.trim()}).filter(function(e){return e.length>0});return 0===t.length?[""]:t},m=function(){var e=r(regeneratorRuntime.mark(function e(t,n,r,o){var i,a,u,s,c,l=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=l.length>4&&void 0!==l[4]&&l[4],a=l.length>5?l[5]:void 0,e.prev=2,u=y(t),!(o>=n.length)&&u){e.next=6;break}return e.abrupt("return",i);case 6:return e.next=8,new Promise(function(e){return(0,h.c)(u,e)});case 8:return s=n[o],e.next=11,u.setRouteId(s.id,s.params,r,a);case 11:return(c=e.sent).changed&&(r="root",i=!0),e.next=15,m(c.element,n,r,o+1,i,a);case 15:if(i=e.sent,e.t0=c.markVisible,!e.t0){e.next=20;break}return e.next=20,c.markVisible();case 20:return e.abrupt("return",i);case 23:return e.prev=23,e.t1=e.catch(2),e.abrupt("return",(console.error(e.t1),!1));case 26:case"end":return e.stop()}},e,null,[[2,23]])}));return function(t,n,r,o){return e.apply(this,arguments)}}(),b=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",y=function(e){if(e)return e.matches(b)?e:e.querySelector(b)||void 0},w=function(e,t){return t.find(function(t){return function(e,t){var n=t.from;if(void 0===t.to)return!1;if(n.length>e.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==e[r])return!1}return n.length===e.length}(e,t)})},k=function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n&&e[r].toLowerCase()===t[r].id;r++);return r},R=function(e,t){for(var n,r=new S(e),i=!1,a=0;a<t.length;a++){var u=t[a].path;if(""===u[0])i=!0;else{var s,c=o(u);try{for(c.s();!(s=c.n()).done;){var h=s.value,l=r.next();if(":"===h[0]){if(""===l)return null;((n=n||[])[a]||(n[a]={}))[h.slice(1)]=l}else if(l!==h)return null}}catch(f){c.e(f)}finally{c.f()}i=!1}}return i&&i!==(""===r.next())?null:n?t.map(function(e,t){return{id:e.id,path:e.path,params:x(e.params,n[t]),beforeEnter:e.beforeEnter,beforeLeave:e.beforeLeave}}):t},x=function(e,t){return e||t?Object.assign(Object.assign({},e),t):void 0},C=function(e,t){var n,r=null,i=0,a=o(t);try{for(a.s();!(n=a.n()).done;){var u=n.value,s=R(e,u);if(null!==s){var c=P(s);c>i&&(i=c,r=s)}}}catch(h){a.e(h)}finally{a.f()}return r},P=function(e){var t,n=1,r=1,i=o(e);try{for(i.s();!(t=i.n()).done;){var a,u=o(t.value.path);try{for(u.s();!(a=u.n()).done;){var s=a.value;":"===s[0]?n+=Math.pow(1,r):""!==s&&(n+=Math.pow(2,r)),r++}}catch(c){u.e(c)}finally{u.f()}}}catch(c){i.e(c)}finally{i.f()}return n},S=function(){function e(t){u(this,e),this.path=t.slice()}return c(e,[{key:"next",value:function(){return this.path.length>0?this.path.shift():""}}]),e}(),E=function(e){return Array.from(e.children).filter(function(e){return"ION-ROUTE-REDIRECT"===e.tagName}).map(function(e){var t=j(e,"to");return{from:g(j(e,"from")),to:null==t?void 0:g(t)}})},L=function(e){return O(D(e))},D=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t;return Array.from(n.children).filter(function(e){return"ION-ROUTE"===e.tagName&&e.component}).map(function(n){var r=j(n,"component");if(null==r)throw new Error("component missing in ion-route");return{path:g(j(n,"url")),id:r.toLowerCase(),params:n.componentProps,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter,children:e(t,n)}})},j=function(e,t){return t in e?e[t]:e.hasAttribute(t)?e.getAttribute(t):null},O=function(e){var t,n=[],r=o(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;U([],n,i)}}catch(a){r.e(a)}finally{r.f()}return n},U=function e(t,n,r){var i=t.slice();if(i.push({id:r.id,path:r.path,params:r.params,beforeLeave:r.beforeLeave,beforeEnter:r.beforeEnter}),0!==r.children.length){var a,u=o(r.children);try{for(u.s();!(a=u.n()).done;){e(i,n,a.value)}}catch(s){u.e(s)}finally{u.f()}}else n.push(i)},A=function(){function e(t){u(this,e),(0,s.r)(this,t),this.ionRouteWillChange=(0,s.e)(this,"ionRouteWillChange",7),this.ionRouteDidChange=(0,s.e)(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}var n,i,a,l,f,p,d,b,R,P,S;return c(e,[{key:"componentWillLoad",value:(S=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("[ion-router] router will load"),e.next=3,y(document.body)?Promise.resolve():new Promise(function(e){window.addEventListener("ionNavWillLoad",e,{once:!0})});case 3:return console.debug("[ion-router] found nav"),e.next=6,this.onRoutesChanged();case 6:case"end":return e.stop()}},e,this)})),function(){return S.apply(this,arguments)})},{key:"componentDidLoad",value:function(){window.addEventListener("ionRouteRedirectChanged",(0,h.n)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",(0,h.n)(this.onRoutesChanged.bind(this),100))}},{key:"onPopState",value:(P=r(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.historyDirection(),n=this.getPath(),e.next=4,this.runGuards(n);case 4:return r=e.sent,e.abrupt("return",!0!==r?("object"==typeof r&&(n=g(r.redirect)),!1):(console.debug("[ion-router] URL changed -> update nav",n,t),this.writeNavStateRoot(n,t)));case 6:case"end":return e.stop()}},e,this)})),function(){return P.apply(this,arguments)})},{key:"onBackButton",value:function(e){var t=this;e.detail.register(0,function(e){t.back(),e()})}},{key:"canTransition",value:(R=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.runGuards();case 2:return t=e.sent,e.abrupt("return",!0===t||"object"==typeof t&&t.redirect);case 4:case"end":return e.stop()}},e,this)})),function(){return R.apply(this,arguments)})},{key:"push",value:(b=r(regeneratorRuntime.mark(function e(t){var n,r,o,i,a,u=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"forward",r=u.length>2?u[2]:void 0,t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,n),o=g(t),i=t.split("?")[1],e.next=6,this.runGuards(o);case 6:if(!0===(a=e.sent)){e.next=11;break}if("object"==typeof a){e.next=10;break}return e.abrupt("return",!1);case 10:o=g(a.redirect),i=a.redirect.split("?")[1];case 11:return e.abrupt("return",(this.setPath(o,n,i),this.writeNavStateRoot(o,n,r)));case 12:case"end":return e.stop()}},e,this)})),function(e){return b.apply(this,arguments)})},{key:"back",value:function(){return window.history.back(),Promise.resolve(this.waitPromise)}},{key:"printDebug",value:(d=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(e){console.group("[ion-core] ROUTES[".concat(e.length,"]"));var n,r=o(e);try{var i=function(){var e=n.value,r=[];e.forEach(function(e){return r.push.apply(r,t(e.path))});var o=e.map(function(e){return e.id});console.debug("%c ".concat(v(r)),"font-weight: bold; padding-left: 20px","=>\t","(".concat(o.join(", "),")"))};for(r.s();!(n=r.n()).done;)i()}catch(a){r.e(a)}finally{r.f()}console.groupEnd()}(L(this.el)),function(e){console.group("[ion-core] REDIRECTS[".concat(e.length,"]"));var t,n=o(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;r.to&&console.debug("FROM: ","$c ".concat(v(r.from)),"font-weight: bold"," TO: ","$c ".concat(v(r.to)),"font-weight: bold")}}catch(i){n.e(i)}finally{n.f()}console.groupEnd()}(E(this.el));case 1:case"end":return e.stop()}},e,this)})),function(){return d.apply(this,arguments)})},{key:"navChanged",value:(p=r(regeneratorRuntime.mark(function e(t){var n,i,a,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.busy){e.next=2;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, navChanged was cancelled"),!1));case 2:return e.next=4,function(){var e=r(regeneratorRuntime.mark(function e(t){var n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],o=window.document.body;case 2:if(!(r=y(o))){e.next=11;break}return e.next=5,r.getRouteId();case 5:if(i=e.sent){e.next=8;break}return e.abrupt("break",11);case 8:o=i.element,i.element=void 0,n.push(i);case 9:e.next=2;break;case 11:return e.abrupt("return",{ids:n,outlet:r});case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()();case 4:if(n=e.sent,i=n.ids,a=n.outlet,u=function(e,t){var n,r=null,i=0,a=e.map(function(e){return e.id}),u=o(t);try{for(u.s();!(n=u.n()).done;){var s=n.value,c=k(a,s);c>i&&(r=s,i=c)}}catch(h){u.e(h)}finally{u.f()}return r?r.map(function(t,n){return{id:t.id,path:t.path,params:x(t.params,e[n]&&e[n].params)}}):null}(i,L(this.el))){e.next=10;break}return e.abrupt("return",(console.warn("[ion-router] no matching URL for ",i.map(function(e){return e.id})),!1));case 10:if(!(s=function(e){var t,n=[],r=o(e);try{for(r.s();!(t=r.n()).done;){var i,a=t.value,u=o(a.path);try{for(u.s();!(i=u.n()).done;){var s=i.value;if(":"===s[0]){var c=a.params&&a.params[s.slice(1)];if(!c)return null;n.push(c)}else""!==s&&n.push(s)}}catch(h){u.e(h)}finally{u.f()}}}catch(h){r.e(h)}finally{r.f()}return n}(u))){e.next=19;break}return console.debug("[ion-router] nav changed -> update URL",i,s),this.setPath(s,t),e.next=16,this.safeWriteNavState(a,u,"root",s,null,i.length);case 16:e.t0=!0,e.next=20;break;case 19:e.t0=(console.warn("[ion-router] router could not match path because some required param is missing"),!1);case 20:return e.abrupt("return",e.t0);case 21:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)})},{key:"onRedirectChanged",value:function(){var e=this.getPath();e&&w(e,E(this.el))&&this.writeNavStateRoot(e,"root")}},{key:"onRoutesChanged",value:function(){return this.writeNavStateRoot(this.getPath(),"root")}},{key:"historyDirection",value:function(){var e=window;null===e.history.state&&(this.state++,e.history.replaceState(this.state,e.document.title,e.document.location&&e.document.location.href));var t=e.history.state,n=this.lastState;return this.lastState=t,t>n||t>=n&&n>0?"forward":t<n?"back":"root"}},{key:"writeNavStateRoot",value:(f=r(regeneratorRuntime.mark(function e(t,n,r){var o,i,a,u,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",(console.error("[ion-router] URL is not part of the routing set"),!1));case 2:return o=E(this.el),i=w(t,o),a=null,i&&(this.setPath(i.to,n),a=i.from,t=i.to),u=L(this.el),s=C(t,u),e.abrupt("return",s?this.safeWriteNavState(document.body,s,n,t,a,0,r):(console.error("[ion-router] the path does not match any route"),!1));case 7:case"end":return e.stop()}},e,this)})),function(e,t,n){return f.apply(this,arguments)})},{key:"safeWriteNavState",value:(l=r(regeneratorRuntime.mark(function e(t,n,r,o,i){var a,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=h.length>5&&void 0!==h[5]?h[5]:0,u=h.length>6?h[6]:void 0,e.next=4,this.lock();case 4:return s=e.sent,c=!1,e.prev=6,e.next=9,this.writeNavState(t,n,r,o,i,a,u);case 9:c=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error(e.t0);case 15:return e.abrupt("return",(s(),c));case 16:case"end":return e.stop()}},e,this,[[6,12]])})),function(e,t,n,r,o){return l.apply(this,arguments)})},{key:"lock",value:(a=r(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.waitPromise,this.waitPromise=new Promise(function(e){return n=e}),e.t0=void 0!==t,!e.t0){e.next=6;break}return e.next=6,t;case 6:return e.abrupt("return",n);case 7:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})},{key:"runGuards",value:(i=r(regeneratorRuntime.mark(function e(){var t,n,r,o,i,a,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=h.length>0&&void 0!==h[0]?h[0]:this.getPath(),n=h.length>1&&void 0!==h[1]?h[1]:g(this.previousPath),t&&n){e.next=4;break}return e.abrupt("return",!0);case 4:if(r=L(this.el),o=C(t,r),i=C(n,r),a=o&&o[o.length-1].beforeEnter,u=i&&i[i.length-1].beforeLeave,e.t0=!u,e.t0){e.next=14;break}return e.next=13,u();case 13:e.t0=e.sent;case 14:if(!1!==(s=e.t0)&&"object"!=typeof s){e.next=17;break}return e.abrupt("return",s);case 17:if(e.t1=!a,e.t1){e.next=22;break}return e.next=21,a();case 21:e.t1=e.sent;case 22:return c=e.t1,e.abrupt("return",!1!==c&&"object"!=typeof c||c);case 24:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"writeNavState",value:(n=r(regeneratorRuntime.mark(function e(t,n,r,o,i){var a,u,s,c,h=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=h.length>5&&void 0!==h[5]?h[5]:0,u=h.length>6?h[6]:void 0,!this.busy){e.next=4;break}return e.abrupt("return",(console.warn("[ion-router] router is busy, transition was cancelled"),!1));case 4:return this.busy=!0,(s=this.routeChangeEvent(o,i))&&this.ionRouteWillChange.emit(s),e.next=9,m(t,n,r,a,!1,u);case 9:return c=e.sent,e.abrupt("return",(this.busy=!1,c&&console.debug("[ion-router] route changed",o),s&&this.ionRouteDidChange.emit(s),c));case 11:case"end":return e.stop()}},e,this)})),function(e,t,r,o,i){return n.apply(this,arguments)})},{key:"setPath",value:function(e,n,r){var o=this;this.state++,function(e,n,r,i,a,u,s){var c=v([].concat(t(g(o.root)),t(i)));r&&(c="#"+c),void 0!==s&&(c=c+"?"+s),"forward"===a?e.pushState(u,"",c):e.replaceState(u,"",c)}(window.history,0,this.useHash,e,n,this.state,r)}},{key:"getPath",value:function(){var e=this;return function(t,n,r){var o=t.pathname;if(e.useHash){var i=t.hash;o="#"===i[0]?i.slice(1):""}return function(e,t){if(e.length>t.length)return null;if(e.length<=1&&""===e[0])return t;for(var n=0;n<e.length;n++)if(e[n].length>0&&e[n]!==t[n])return null;return t.length===e.length?[""]:t.slice(e.length)}(g(n),g(o))}(window.location,this.root)}},{key:"routeChangeEvent",value:function(e,t){var n=this.previousPath,r=v(e);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:t?v(t):null,to:r}}},{key:"el",get:function(){return(0,s.i)(this)}}]),e}(),N=function(){function t(e){var n=this;u(this,t),(0,s.r)(this,e),this.routerDirection="forward",this.onClick=function(e){(0,f.o)(n.href,e,n.routerDirection,n.routerAnimation)}}return c(t,[{key:"render",value:function(){var t,n=(0,l.b)(this),r={href:this.href,rel:this.rel,target:this.target};return(0,s.h)(s.H,{onClick:this.onClick,class:(0,f.c)(this.color,(t={},e(t,n,!0),e(t,"ion-activatable",!0),t))},(0,s.h)("a",Object.assign({},r),(0,s.h)("slot",null)))}}]),t}();N.style=":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}])}();