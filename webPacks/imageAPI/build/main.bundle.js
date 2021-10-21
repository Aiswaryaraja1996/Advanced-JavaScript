/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var e={811:(e,n)=>{var t=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,r=/\\([\u000b\u0020-\u00ff])/g,a=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;function o(e){this.parameters=Object.create(null),this.type=e}n.Q=function(e){if(!e)throw new TypeError("argument string is required");var n="object"==typeof e?function(e){var n;if("function"==typeof e.getHeader?n=e.getHeader("content-type"):"object"==typeof e.headers&&(n=e.headers&&e.headers["content-type"]),"string"!=typeof n)throw new TypeError("content-type header is missing from object");return n}(e):e;if("string"!=typeof n)throw new TypeError("argument string is required to be a string");var i=n.indexOf(";"),u=-1!==i?n.substr(0,i).trim():n.trim();if(!a.test(u))throw new TypeError("invalid media type");var s=new o(u.toLowerCase());if(-1!==i){var c,l,h;for(t.lastIndex=i;l=t.exec(n);){if(l.index!==i)throw new TypeError("invalid parameter format");i+=l[0].length,c=l[1].toLowerCase(),'"'===(h=l[2])[0]&&(h=h.substr(1,h.length-2).replace(r,"$1")),s.parameters[c]=h}if(i!==n.length)throw new TypeError("invalid parameter format")}return s}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}(()=>{var e=t(811);function n(){return n=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},n.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}var a=i((function(e){return"string"==typeof e?e:null})),o=function(e){return null!=e};function i(e){return function(n){return o(e(n))}}var u=function(e){return Object.keys(e).reduce((function(t,r){var a,i=e[r];return n({},t,o(i)?((a={})[r]=i,a):{})}),{})};function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.length-1;return function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];for(var o=n[0].apply(this,t),i=1;i<=r;i++)o=n[i].call(this,o);return o}}var c,l,h=i((function(e){return o(e)&&"object"==typeof e&&!Array.isArray(e)?e:null})),d=i((function(e){return Array.isArray(e)&&e.every(a)&&e.length>0?e:null})),p=i((function(e){return h(e)&&"errors"in e&&d(e.errors)?{errors:e.errors}:null})),f=function(e){this.message=e},m=function(n){if(function(n){var t=n.headers.get("content-type");return o(t)&&"application/json"===(0,e.Q)(t).type}(n))return n.json().catch((function(e){throw new f("unable to parse JSON response.")}));throw new f("expected JSON response from server.")},g=function(){return function(e){var n=e.response;return m(n)}},y=function(e){return function(t,a){void 0===a&&(a={});var o=e(t),i=o.headers,u=o.query;return n({},r(o,["headers","query"]),a,{query:u,headers:n({},i,a.headers)})}},v=function(e){return e},q=function(e){var t=e.accessKey,a=e.apiVersion,i=void 0===a?"v1":a,u=e.apiUrl,c=void 0===u?"https://api.unsplash.com":u,l=e.headers,h=e.fetch,d=r(e,["accessKey","apiVersion","apiUrl","headers","fetch"]);return function(e){var r=e.handleResponse;return s(e.handleRequest,(function(e){var a=e.pathname,u=e.query,s=e.method,g=void 0===s?"GET":s,y=e.headers,v=e.body,q=e.signal,b=function(e){var n=e.pathname,t=e.query;return function(e){var r=new URL(e);return function(e){return function(n){"/"===n.pathname?n.pathname=e:n.pathname+=e}}(n)(r),function(e){return function(n){Object.keys(e).forEach((function(t){return n.searchParams.set(t,e[t].toString())}))}}(t)(r),r.toString()}}({pathname:a,query:u})(c),R=n({method:g,headers:n({},l,y,{"Accept-Version":i},o(t)?{Authorization:"Client-ID "+t}:{}),body:v,signal:q},d);return(null!=h?h:fetch)(b,R).then(function(e){return function(t){return(t.ok?e({response:t}).then((function(e){return{type:"success",status:t.status,response:e,originalResponse:t}})):m(t).then((function(e){return n({type:"error",status:t.status},function(e){return p(e)?{errors:e.errors,source:"api"}:{errors:["Responded with a status code outside the 2xx range, and the response body is not recognisable."],source:"decoding"}}(e),{originalResponse:t})}))).catch((function(e){if(e instanceof f)return{type:"error",source:"decoding",status:t.status,originalResponse:t,errors:[e.message]};throw e}))}}(r))}))}},b=function(e){var n=e.headers.get("x-total");if(o(n)){var t=parseInt(n);if(Number.isInteger(t))return t;throw new f("expected x-total header to be valid integer.")}throw new f("expected x-total header to exist.")},R=function(){return function(e){var n=e.response;return g()({response:n}).then((function(e){return{results:e,total:b(n)}}))}},w=function(e){return o(e)?{collections:e.join()}:{}},I=function(e){return o(e)?{topics:e.join()}:{}},P=function(e){var n=e.page,t=e.perPage,r=e.orderBy;return u({per_page:t,order_by:r,page:n})},S=function(){var e=function(e){return"/collections/"+e.collectionId+"/photos"};return{getPathname:e,handleRequest:y((function(t){var a=t.collectionId,o=t.orientation,i=r(t,["collectionId","orientation"]);return{pathname:e({collectionId:a}),query:u(n({},P(i),{orientation:o}))}})),handleResponse:R()}}(),k=function(){var e=function(e){return"/collections/"+e.collectionId};return{getPathname:e,handleRequest:y((function(n){var t=n.collectionId;return{pathname:e({collectionId:t}),query:{}}})),handleResponse:g()}}(),E=function(){var e=function(){return"/collections"};return{getPathname:e,handleRequest:y((function(e){return void 0===e&&(e={}),{pathname:"/collections",query:P(e)}})),handleResponse:R()}}(),x=function(){var e=function(e){return"/collections/"+e.collectionId+"/related"};return{getPathname:e,handleRequest:y((function(n){var t=n.collectionId;return{pathname:e({collectionId:t}),query:{}}})),handleResponse:g()}}(),T="/photos",L=function(){return{getPathname:function(e){return T},handleRequest:y((function(e){return void 0===e&&(e={}),{pathname:T,query:u(P(e))}})),handleResponse:R()}}(),A=function(){var e=function(e){return"/photos/"+e.photoId};return{getPathname:e,handleRequest:y((function(n){var t=n.photoId;return{pathname:e({photoId:t}),query:{}}})),handleResponse:g()}}(),O=function(){var e=function(e){return"/photos/"+e.photoId+"/statistics"};return{getPathname:e,handleRequest:y((function(n){var t=n.photoId;return{pathname:e({photoId:t}),query:{}}})),handleResponse:g()}}(),j=function(){return{getPathname:function(){return"/photos/random"},handleRequest:y((function(e){var t=void 0===e?{}:e,a=t.collectionIds,o=t.contentFilter,i=t.topicIds,s=r(t,["collectionIds","contentFilter","topicIds"]);return{pathname:"/photos/random",query:u(n({},s,{content_filter:o},w(a),I(i))),headers:{"cache-control":"no-cache"}}})),handleResponse:g()}}(),C={handleRequest:y((function(e){var n=function(e){var n=new URL(e),t=n.pathname;return{query:function(e){var n={};return e.forEach((function(e,t){n[t]=e})),n}(n.searchParams),pathname:"/"===t?void 0:t}}(e.downloadLocation),t=n.pathname,r=n.query;if(!o(t))throw new Error("Could not parse pathname from url.");return{pathname:t,query:u(r)}})),handleResponse:g()},B=function(){return{getPathname:function(e){return"/search/photos"},handleRequest:y((function(e){var t=e.query,a=e.page,o=e.perPage,i=e.orderBy,s=e.collectionIds,c=e.lang,l=e.contentFilter,h=r(e,["query","page","perPage","orderBy","collectionIds","lang","contentFilter"]);return{pathname:"/search/photos",query:u(n({query:t,content_filter:l,lang:c,order_by:i},P({page:a,perPage:o}),w(s),h))}})),handleResponse:g()}}(),H=function(){return{getPathname:function(e){return"/search/collections"},handleRequest:y((function(e){var t=e.query,a=r(e,["query"]);return{pathname:"/search/collections",query:n({query:t},P(a))}})),handleResponse:g()}}(),z=function(){return{getPathname:function(e){return"/search/users"},handleRequest:y((function(e){var t=e.query,a=r(e,["query"]);return{pathname:"/search/users",query:n({query:t},P(a))}})),handleResponse:g()}}(),M=function(){var e=function(e){return"/users/"+e.username};return{getPathname:e,handleRequest:y((function(n){var t=n.username;return{pathname:e({username:t}),query:{}}})),handleResponse:g()}}(),N=function(){var e=function(e){return"/users/"+e.username+"/photos"};return{getPathname:e,handleRequest:y((function(t){var a=t.username,o=t.stats,i=t.orientation,s=r(t,["username","stats","orientation"]);return{pathname:e({username:a}),query:u(n({},P(s),{orientation:i,stats:o}))}})),handleResponse:R()}}(),K=function(){var e=function(e){return"/users/"+e.username+"/likes"};return{getPathname:e,handleRequest:y((function(t){var a=t.username,o=t.orientation,i=r(t,["username","orientation"]);return{pathname:e({username:a}),query:u(n({},P(i),{orientation:o}))}})),handleResponse:R()}}(),D=function(){var e=function(e){return"/users/"+e.username+"/collections"};return{getPathname:e,handleRequest:y((function(n){var t=n.username,a=r(n,["username"]);return{pathname:e({username:t}),query:P(a)}})),handleResponse:R()}}(),F=function(e){return"/topics/"+e.topicIdOrSlug},_=v({getPathname:F,handleRequest:function(e){var t=e.page,r=e.perPage,a=e.orderBy,o=e.topicIdsOrSlugs;return{pathname:"/topics",query:u(n({},P({page:t,perPage:r}),{ids:null==o?void 0:o.join(","),order_by:a}))}},handleResponse:R()}),U=v({getPathname:F,handleRequest:function(e){var n=e.topicIdOrSlug;return{pathname:F({topicIdOrSlug:n}),query:{}}},handleResponse:g()}),G=function(){var e=s(F,(function(e){return e+"/photos"}));return{getPathname:e,handleRequest:function(t){var a=t.topicIdOrSlug,o=t.orientation,i=r(t,["topicIdOrSlug","orientation"]);return{pathname:e({topicIdOrSlug:a}),query:u(n({},P(i),{orientation:o}))}},handleResponse:R()}}();!function(e){e.Afrikaans="af",e.Amharic="am",e.Arabic="ar",e.Azerbaijani="az",e.Belarusian="be",e.Bulgarian="bg",e.Bengali="bn",e.Bosnian="bs",e.Catalan="ca",e.Cebuano="ceb",e.Corsican="co",e.Czech="cs",e.Welsh="cy",e.Danish="da",e.German="de",e.Greek="el",e.English="en",e.Esperanto="eo",e.Spanish="es",e.Estonian="et",e.Basque="eu",e.Persian="fa",e.Finnish="fi",e.French="fr",e.Frisian="fy",e.Irish="ga",e.ScotsGaelic="gd",e.Galician="gl",e.Gujarati="gu",e.Hausa="ha",e.Hawaiian="haw",e.Hindi="hi",e.Hmong="hmn",e.Croatian="hr",e.HaitianCreole="ht",e.Hungarian="hu",e.Armenian="hy",e.Indonesian="id",e.Igbo="ig",e.Icelandic="is",e.Italian="it",e.Hebrew="iw",e.Japanese="ja",e.Javanese="jw",e.Georgian="ka",e.Kazakh="kk",e.Khmer="km",e.Kannada="kn",e.Korean="ko",e.Kurdish="ku",e.Kyrgyz="ky",e.Latin="la",e.Luxembourgish="lb",e.Lao="lo",e.Lithuanian="lt",e.Latvian="lv",e.Malagasy="mg",e.Maori="mi",e.Macedonian="mk",e.Malayalam="ml",e.Mongolian="mn",e.Marathi="mr",e.Malay="ms",e.Maltese="mt",e.Myanmar="my",e.Nepali="ne",e.Dutch="nl",e.Norwegian="no",e.Nyanja="ny",e.Oriya="or",e.Punjabi="pa",e.Polish="pl",e.Pashto="ps",e.Portuguese="pt",e.Romanian="ro",e.Russian="ru",e.Kinyarwanda="rw",e.Sindhi="sd",e.Sinhala="si",e.Slovak="sk",e.Slovenian="sl",e.Samoan="sm",e.Shona="sn",e.Somali="so",e.Albanian="sq",e.Serbian="sr",e.Sesotho="st",e.Sundanese="su",e.Swedish="sv",e.Swahili="sw",e.Tamil="ta",e.Telugu="te",e.Tajik="tg",e.Thai="th",e.Turkmen="tk",e.Filipino="tl",e.Turkish="tr",e.Tatar="tt",e.Uighur="ug",e.Ukrainian="uk",e.Urdu="ur",e.Uzbek="uz",e.Vietnamese="vi",e.Xhosa="xh",e.Yiddish="yi",e.Yoruba="yo",e.ChineseSimplified="zh",e.ChineseTraditional="zh-TW",e.Zulu="zu"}(c||(c={})),function(e){e.LATEST="latest",e.POPULAR="popular",e.VIEWS="views",e.DOWNLOADS="downloads",e.OLDEST="oldest"}(l||(l={}));const $=s(q,(function(e){return{photos:{get:e(A),list:e(L),getStats:e(O),getRandom:e(j),trackDownload:e(C)},users:{getPhotos:e(N),getCollections:e(D),getLikes:e(K),get:e(M)},search:{getCollections:e(H),getPhotos:e(B),getUsers:e(z)},collections:{getPhotos:e(S),get:e(k),list:e(E),getRelated:e(x)},topics:{list:e(_),get:e(U),getPhotos:e(G)}}}))({accessKey:"moE7Lqp87LSGPKqDWpltxt1vKKGtrukoJx9pJtDgIJk"});function J(e,n,t,r){this.id=e,this.desc=n,this.url=t,this.likes=r}var W=[],V=document.querySelector(".container");document.getElementById("header").innerHTML='<div class="searchBar">\n    <form>\n      <input\n        id="searchText"\n        type="text"\n        placeholder="Search free high-resolution images"\n        name="search"\n      />\n      <button type="submit" id="btnSearch">\n        <i class="fa fa-search"></i>\n      </button>\n    </form>\n  </div>\n  <navbar id="navbar">\n    <a href="#">3D Renders</a>\n    <a href="#">Street Photography</a>\n    <a href="#">Architecture & Interior</a>\n    <a href="#">Current Events</a>\n    <a href="#">Experimental</a>\n    <a href="#">Fashion</a>\n    <a href="#">Film</a>\n    <a href="#">Food & Drink</a>\n    <a href="#">Health & Wellness</a>\n    <a href="#">Nature</a>\n    <a href="#">People</a>\n  </navbar>';const Z=function(e,n){let t;return function(){t&&clearTimeout(t),t=setTimeout((function(){!function(){console.log(1),V.innerHTML=null;let e=document.getElementById("searchText").value;$.search.getPhotos({query:`${e}`,page:1,perPage:15,orientation:"portrait"}).then((e=>{e.errors?console.log("error occurred: ",e.errors[0]):ee(e.response.results)}))}()}),1e3)}}();document.getElementById("btnSearch");var Q=document.querySelector(".img-content"),Y=document.querySelector(".modal"),X=document.getElementById("navbar");function ee(e){V.innerHTML=null;var n=document.createElement("div");n.className="column";var t=document.createElement("div");t.className="column";var r=document.createElement("div");r.className="column";for(var a=0;a<e.length;a++)if(a<5){var o=ne(e[a]);n.append(o)}else if(a>=5&&a<10){var i=ne(e[a]);t.append(i)}else if(a>=10&&a<15){var u=ne(e[a]);r.append(u)}V.append(n,t,r);const s=document.getElementsByClassName("photo");for(const e of s)e.addEventListener("click",(()=>{te(e)}))}function ne(e){var n=new J(e.id,e.alt_description,e.urls.small,e.likes);W.push(n);const t=document.createElement("img");return t.src=e.urls.regular,t.className="photo",t.id=e.id,t}function te(e){Y.style.display="block";for(var n=0;n<W.length;n++)if(W[n].id===e.getAttribute("id")){var t=document.createElement("img");t.src=W[n].url;var r=document.createElement("h3");r.textContent=W[n].desc,Q.append(t,r);break}}document.getElementById("searchText").addEventListener("keyup",(function(){W=[],V.innerHTML=null,Z()})),X.addEventListener("click",(e=>{e.preventDefault(),document.getElementById("searchText").value=null,console.log(e.target.textContent),V.innerHTML=null,$.search.getPhotos({query:`${e.target.textContent}`,page:1,perPage:15,orientation:"portrait"}).then((e=>{e.errors?console.log("error occurred: ",e.errors[0]):ee(e.response.results)}))})),document.querySelector(".close").addEventListener("click",(()=>{Y.style.display="none",document.getElementsByClassName("img-content")[0].innerHTML=null}))})()})();