(function(){"use strict";var t={2011:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container is-fluid"},[n("navbar")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"container is-fluid"},[n("div",{staticClass:"mb-5 p-3",attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"title is-title mb-6"},[t._v("Must ")])]),n("span",{staticClass:"is-size-6"},[t._v("Movies")])],1)]),n("router-view",{key:t.$route.name})],1)},s=[],c=(n(7327),n(1539),n(6699),n(2023),n(4916),n(4765),{data:function(){return{}},computed:{filteredMovies:function(){var t=this;return this.$store.state.movies.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}))}}}),u=c,l=n(1001),d=(0,l.Z)(u,a,s,!1,null,null,null),f=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"cat"}},[n("div",{staticClass:"p-1"},[n("br"),n("br"),n("div",{attrs:{id:"category"}},[n("div",{staticClass:"control is-flex-direction-row"},[n("b-button",{staticClass:"button is-rounded m-1",attrs:{tag:"router-link",to:"/top"}},[t._v(" Top Rated ")])],1)])])])},m=[],p={},h=p,b=(0,l.Z)(h,v,m,!1,null,null,null),g=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("homepage")],1)},y=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("div",[n("b-field",{staticClass:"input p-5 is-center",attrs:{id:"search-bg"}},[n("div",{attrs:{id:"inputfield"}},[n("b-input",{staticClass:"input",attrs:{placeholder:"Search Movie ..."},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("b-button",{staticClass:"p-4",attrs:{type:"is-info"},on:{click:t.searchmethod}},[t._v("Search")])],1)])],1),n("div",{staticClass:"columns is-mobile"},[n("div",{staticClass:"column is-3",attrs:{id:"cat"}},[n("p",{staticClass:"bd-notification is-info"}),n("sidebar")],1),n("div",{staticClass:"column is-9"},[t._m(0),t._l(t.movies.results,(function(e){return n("div",{key:e.id,staticClass:"content",attrs:{id:"main-card"}},[n("router-link",{attrs:{to:{name:"movie",params:{id:e.id}},id:"link"}},[n("div",{staticClass:"media-left pt-5"},[n("img",{staticClass:"m-3",attrs:{src:"https://image.tmdb.org/t/p/w200/"+e.poster_path,alt:"Placeholder image"}})]),n("div",{staticClass:"media-right"},[n("div",{staticClass:"media-content"},[n("p",{staticClass:"title is-4"},[t._v(t._s(e.title))])]),n("div",{staticClass:"overview-content"},[t._v(" "+t._s(e.overview)+" "),n("br"),n("div",{attrs:{id:"buttonloc"}},[n("div",[n("p",{},[t._v(" lang: "+t._s(e.original_language)+" ")]),n("div",{attrs:{id:"age"}},[!0===e.adult?n("p",{},[t._v(" Adult Content. PG 21+ ")]):n("p",[t._v("Suitable For General Family Viewing")])]),n("div",{attrs:{id:"dates"}},[n("b",[t._v(" Rating: "+t._s(e.vote_average)+"/10 "),n("br"),t._v(" Votes: "+t._s(e.vote_count)+" "),n("span",{staticClass:"ml-4"},[t._v(" Released on: "+t._s(e.release_date))])])])])])])])])],1)}))],2)])])])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"m-3"},[n("b",[t._v(" Ordered by Popularity")])])}],k={name:"home",components:{sidebar:g,navbar:f},data:function(){return{search:""}},computed:{movies:function(){return this.$store.state.movies}},mounted:function(){this.$store.dispatch("getMovies")},methods:{searchmethod:function(){this.$store.dispatch("searchMovies",this.search)}}},w=k,S=(0,l.Z)(w,C,E,!1,null,"e3cbcc06",null),T=S.exports,O={name:"HomeView",components:{homepage:T}},Z=O,M=(0,l.Z)(Z,_,y,!1,null,null,null),P=M.exports,$={components:{navbar:f}},x=$,A=(0,l.Z)(x,o,r,!1,null,null,null),j=A.exports,L=(n(8783),n(3948),n(629)),N=n(8345),F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",[t._v("404")]),n("p",[t._v("Page not found")])])}],I={},V=I,q=(0,l.Z)(V,F,D,!1,null,null,null),B=q.exports;i.Z.use(N.Z),i.Z.use(L.ZP);var R=[{path:"/",name:"home",component:P},{path:"/movie/:id(\\d+)",name:"movie",component:function(){return n.e(629).then(n.bind(n,6298))},props:!0},{path:"/top",name:"top",component:function(){return n.e(583).then(n.bind(n,5583))}},{path:"/:catchAll(.*)",name:"NotFound",component:B}],G=new N.Z({mode:"history",base:"/must_movie/",routes:R}),H=G,U=n(9669),z=n.n(U);i.Z.use(L.ZP);var K={movies:[],movie:{},top:[]},J={},Q={getMovies:function(t){var e=t.commit;z().get("https://api.themoviedb.org/3/movie/popular?api_key=22f3e85e05becdb7e502c1f391dbd90d").then((function(t){e("SET_Movies",t.data),console.log(t.data)}))},searchMovies:function(t,e){var n=t.commit;z().get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=22f3e85e05becdb7e502c1f391dbd90d")).then((function(t){n("SET_Movies",t.data)}))},movieDetails:function(t,e){var n=t.commit;z().get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=22f3e85e05becdb7e502c1f391dbd90d&language=en-US")).then((function(t){n("SET_MOVIE_DETAILS",t.data)}))},getTop:function(t){var e=t.commit;z().get("https://api.themoviedb.org/3/movie/top_rated?api_key=22f3e85e05becdb7e502c1f391dbd90d").then((function(t){e("SET_Top",t.data),console.log(t.data)}))}},W={SET_Movies:function(t,e){t.movies=e},SET_MOVIE_DETAILS:function(t,e){t.movie=e},SET_Top:function(t,e){t.top=e}},X=new L.ZP.Store({state:K,getters:J,mutations:W,actions:Q}),Y=n(589);n(1588);i.Z.config.productionTip=!1,i.Z.use(Y.ZP),new i.Z({router:H,store:X,render:function(t){return t(j)}}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var a=1/0;for(l=0;l<t.length;l++){i=t[l][0],o=t[l][1],r=t[l][2];for(var s=!0,c=0;c<i.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(s=!1,r<a&&(a=r));if(s){t.splice(l--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var l=t.length;l>0&&t[l-1][2]>r;l--)t[l]=t[l-1];t[l]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{583:"d1e93c51",629:"466fcb44"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{583:"dd17cf4d",629:"6aa3e8ae"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="movie_must:";n.l=function(i,o,r,a){if(t[i])t[i].push(o);else{var s,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+r){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+r),s.src=i),t[i]=[o];var f=function(e,n){s.onerror=s.onload=null,clearTimeout(v);var o=t[i];if(delete t[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/must_movie/"}(),function(){var t=function(t,e,n,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,o.parentNode.removeChild(o),i(c)}};return o.onerror=o.onload=r,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===t||r===e))return o}var a=document.getElementsByTagName("style");for(i=0;i<a.length;i++){o=a[i],r=o.getAttribute("data-href");if(r===t||r===e)return o}},i=function(i){return new Promise((function(o,r){var a=n.miniCssF(i),s=n.p+a;if(e(a,s))return o();t(i,s,o,r)}))},o={143:0};n.f.miniCss=function(t,e){var n={583:1,629:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=i(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=r);var a=n.p+n.u(e),s=new Error,c=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,a=i[0],s=i[1],c=i[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var l=c(n)}for(e&&e(i);u<a.length;u++)r=a[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(l)},i=self["webpackChunkmovie_must"]=self["webpackChunkmovie_must"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2011)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.3ac44d48.js.map