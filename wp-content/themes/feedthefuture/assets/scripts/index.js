!function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,i,s){for(var r,a,u=0,c=[];u<t.length;u++)a=t[u],o[a]&&c.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(n&&n(t,i,s);c.length;)c.shift()()};var i={},o={7:0};t.e=function(e){function n(){a.onerror=a.onload=null,clearTimeout(u);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var i=o[e];if(0===i)return new Promise(function(e){e()});if(i)return i[2];var s=new Promise(function(t,n){i=o[e]=[t,n]});i[2]=s;var r=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,t.nc&&a.setAttribute("nonce",t.nc),a.src=t.p+""+e+".js";var u=setTimeout(n,12e4);return a.onerror=a.onload=n,r.appendChild(a),s},t.m=e,t.c=i,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/wp-content/themes/feedthefuture/assets/scripts/",t.oe=function(e){throw console.error(e),e},t(t.s=2)}([function(e,t,n){"use strict";e.exports={mq:window.matchMedia("(min-width: 61.25em)"),keys:{DOWN:40,ENTER:13,ESC:27,TAB:9,UP:38},baseUrl:function(){var e="https://"+window.location.hostname+"/";return"localhost"===window.location.hostname&&(e="https://feedthefuture.staging.wpengine.com/"),e},themeUrl:"wp-content/themes/feedthefuture/"}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t){i(this,e),this.el=t,this.setVariables(),this.addListeners(),this.floatLabel()}return o(e,[{key:"setVariables",value:function(){this.input=this.el.querySelector("input, textarea")}},{key:"addListeners",value:function(){this.input.addEventListener("input",this.floatLabel.bind(this)),this.input.addEventListener("focus",this.toggleFocus.bind(this)),this.input.addEventListener("blur",this.toggleFocus.bind(this))}},{key:"floatLabel",value:function(){this.el.setAttribute("label-is",""!==this.input.value?"floated":"")}},{key:"toggleFocus",value:function(e){this.el.setAttribute("input-is","focus"===e.type?"focused":"")}}]),e}();t.default=s},function(e,t,n){e.exports=n(3)},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(4),s=(i(o),n(5)),r=i(s),a=n(6),u=i(a),c=n(7),l=i(c),d=n(8),h=i(d),f=n(1),p=i(f);window.searchMenu=new CustomEvent("closeSearch"),window.mobileMenu=new CustomEvent("closeMobile");for(var m=document.querySelectorAll("[data-module]"),v=0;v<m.length;v++)!function(e){var t=m[e],i=t.getAttribute("data-module");n(9)("./"+i+"/index").then(function(e){new e.default(t)})}(v);var w=document.querySelector('[data-navigation="search"]');w&&new u.default(w);var y=document.querySelector('[data-navigation="mobile"]');y&&new r.default(y);for(var b=document.querySelectorAll('[data-navigation="submenu"]'),g=0;g<b.length;g++)new l.default(b[g]);for(var k=document.getElementById("menu-list"),E=k.querySelectorAll(".site-navigation__item:not(.-search)"),L=0;L<E.length;L++)for(var M=E[L].querySelectorAll("a"),A=0;A<M.length;A++)M[A].href===window.location.href&&E[L].classList.add("-current");var x=document.querySelectorAll(".site-main a");x.length&&new h.default(x);var S=0;!function e(){S++;var t=document.querySelectorAll(".ctct-form-custom");if(t.length)for(var n=0,i=t.length;n<i;n++)new p.default(t[n]);else S<=15&&window.setTimeout(e,300)}();for(var P=document.querySelectorAll(".gfield_visibility_visible"),T=0;T<P.length;T++)new p.default(P[T])},function(e,t,n){/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.1.3
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",i=n;try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(i=window.sessionStorage.getItem("what-intent"))}catch(e){}var o=null,s=["input","select","textarea"],r=[],a=[16,17,18,91,93],u=[],c={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},l=!1,d=!1,h={x:null,y:null},f={2:"touch",3:"touch",4:"mouse"},p=!1;try{var m=Object.defineProperty({},"passive",{get:function(){p=!0}});window.addEventListener("test",null,m)}catch(e){}var v=function(){var e=!!p&&{passive:!0};window.PointerEvent?(window.addEventListener("pointerdown",w),window.addEventListener("pointermove",b)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",w),window.addEventListener("MSPointerMove",b)):(window.addEventListener("mousedown",w),window.addEventListener("mousemove",b),"ontouchstart"in window&&(window.addEventListener("touchstart",E,e),window.addEventListener("touchend",w))),window.addEventListener(M(),b,e),window.addEventListener("keydown",E),window.addEventListener("keyup",E),window.addEventListener("focusin",g),window.addEventListener("focusout",k)},w=function(e){if(!l){var t=e.which,o=c[e.type];"pointer"===o&&(o=L(e));var r=!u.length&&-1===a.indexOf(t),d=u.length&&-1!==u.indexOf(t),h="keyboard"===o&&t&&(r||d)||"mouse"===o||"touch"===o;if(n!==o&&h){n=o;try{window.sessionStorage.setItem("what-input",n)}catch(e){}y("input")}if(i!==o&&h){var f=document.activeElement;if(f&&f.nodeName&&-1===s.indexOf(f.nodeName.toLowerCase())){i=o;try{window.sessionStorage.setItem("what-intent",i)}catch(e){}y("intent")}}}},y=function(t){e.setAttribute("data-what"+t,"input"===t?n:i),A(t)},b=function(e){if(S(e),!l&&!d){var t=c[e.type];if("pointer"===t&&(t=L(e)),i!==t){i=t;try{window.sessionStorage.setItem("what-intent",i)}catch(e){}y("intent")}}},g=function(n){if(!n.target.nodeName)return void k();t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))},k=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},E=function(e){w(e),window.clearTimeout(o),l=!0,o=window.setTimeout(function(){l=!1},100)},L=function(e){return"number"==typeof e.pointerType?f[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},M=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},A=function(e){for(var t=0,o=r.length;t<o;t++)r[t].type===e&&r[t].fn.call(void 0,"input"===e?n:i)},x=function(e){for(var t=0,n=r.length;t<n;t++)if(r[t].fn===e)return t},S=function(e){h.x!==e.screenX||h.y!==e.screenY?(d=!1,h.x=e.screenX,h.y=e.screenY):d=!0};return"addEventListener"in window&&Array.prototype.indexOf&&function(){c[M()]="mouse",v(),y("input"),y("intent")}(),{ask:function(e){return"intent"===e?i:n},element:function(){return t},ignoreKeys:function(e){a=e},specificKeys:function(e){u=e},registerOnChange:function(e,t){r.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=x(e);(t||0===t)&&r.splice(t,1)}}}()}])})},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(){function e(t){i(this,e),this.el=t,this.uiBlock=document.createElement("div"),this.uiBlock.classList.add("site-navigation__ui-block","-mobile"),document.body.appendChild(this.uiBlock),this.setVariables(),this.setUp(),this.addListeners()}return o(e,[{key:"setVariables",value:function(){this.menu=document.getElementById(this.el.getAttribute("aria-controls")),this.subMenus=document.querySelectorAll('[data-navigation="submenu"], [data-navigation="search"]')}},{key:"setUp",value:function(){this.menu.setAttribute("data-hidden",r.default.mq.matches?"false":"true"),r.default.mq.matches||(this.uiBlock.setAttribute("data-is","closed"),this.el.setAttribute("aria-expanded","false"))}},{key:"addListeners",value:function(){r.default.mq.addListener(this.setUp.bind(this)),this.el.addEventListener("click",this.toggleMenu.bind(this)),this.uiBlock.addEventListener("click",this.closeMenu.bind(this)),this.menu.addEventListener("keyup",this.keyboardCloseMenu.bind(this))}},{key:"openMenu",value:function(){r.default.mq.matches||(this.uiBlock.setAttribute("data-is","open"),this.el.setAttribute("aria-expanded","true"),this.menu.setAttribute("data-hidden","false"))}},{key:"closeMenu",value:function(){if(!r.default.mq.matches){this.uiBlock.setAttribute("data-is","closed"),this.el.setAttribute("aria-expanded","false"),this.menu.setAttribute("data-hidden","true");for(var e=0,t=this.subMenus.length;e<t;e++)this.subMenus[e].dispatchEvent(window.mobileMenu)}}},{key:"toggleMenu",value:function(){"true"===this.menu.getAttribute("data-hidden")?this.openMenu():this.closeMenu()}},{key:"keyboardCloseMenu",value:function(e){e.which===r.default.keys.ESC&&(this.closeMenu(),this.el.focus())}}]),e}();t.default=a},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(){function e(t){i(this,e),this.el=t,this.uiBlock=document.createElement("div"),this.uiBlock.classList.add("site-navigation__ui-block","-search"),document.body.appendChild(this.uiBlock),this.setVariables(),this.setUp(),this.addListeners()}return o(e,[{key:"setVariables",value:function(){this.searchPanel=document.getElementById(this.el.getAttribute("aria-controls")),this.searchInput=this.searchPanel.querySelector('input[type="text"]')}},{key:"setUp",value:function(){this.searchPanel.setAttribute("data-hidden","true"),this.el.setAttribute("aria-expanded",!1)}},{key:"addListeners",value:function(){this.el.addEventListener("click",this.toggleSearch.bind(this)),this.searchPanel.addEventListener("closeSearch",function(){this.closeSearch("simple")}.bind(this)),this.el.addEventListener("closeMobile",function(){this.closeSearch("simple")}.bind(this)),this.uiBlock.addEventListener("click",this.closeSearch.bind(this)),this.searchPanel.addEventListener("keyup",this.keyboardCloseSearch.bind(this))}},{key:"openSearch",value:function(){this.uiBlock.setAttribute("data-is","open"),this.el.setAttribute("aria-expanded","true"),this.searchPanel.setAttribute("data-hidden","false"),this.searchInput.focus()}},{key:"closeSearch",value:function(e){this.uiBlock.setAttribute("data-is","closed"),this.el.setAttribute("aria-expanded","false"),"simple"!==e&&this.el.focus(),this.searchPanel.setAttribute("data-hidden","true")}},{key:"toggleSearch",value:function(){"true"===this.searchPanel.getAttribute("data-hidden")?this.openSearch():this.closeSearch()}},{key:"keyboardCloseSearch",value:function(e){e.which===r.default.keys.ESC&&this.closeSearch()}}]),e}();t.default=a},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(s),a=function(){function e(t){i(this,e),this.el=t,this.setVariables(),this.setUp(),this.addListeners()}return o(e,[{key:"setVariables",value:function(){this.hoverIntent=null,this.focusoutTimer=null,this.trigger=this.el.querySelector("[aria-controls]"),this.menu=document.getElementById(this.trigger.getAttribute("aria-controls")),this.searchMenu=document.getElementById("search")}},{key:"setUp",value:function(){this.menu.setAttribute("data-hidden","true"),this.trigger.setAttribute("aria-expanded","false"),this.uiBlock=document.createElement("div"),this.uiBlock.classList.add("site-navigation__ui-block","-menu"),document.body.appendChild(this.uiBlock)}},{key:"addListeners",value:function(){r.default.mq.addListener(this.setUp.bind(this)),this.el.addEventListener("mouseenter",this.startHoverIntent.bind(this)),this.el.addEventListener("mouseleave",this.stopHoverIntent.bind(this)),this.el.addEventListener("keydown",function(e){e.which!==r.default.keys.UP&&e.which!==r.default.keys.DOWN||e.preventDefault()}),this.el.addEventListener("keyup",this.keyboardToggleMenu.bind(this)),this.menu.addEventListener("focusout",this.a11yFocusout.bind(this)),this.menu.addEventListener("focusin",this.a11yFocusin.bind(this)),"BUTTON"===this.trigger.nodeName&&this.trigger.addEventListener("click",this.touchToggleMenu.bind(this)),this.el.addEventListener("closeMobile",this.closeMenu.bind(this))}},{key:"startHoverIntent",value:function(e){var t=this;clearTimeout(this.hoverIntent),this.hoverIntent=setTimeout(function(){t.openMenu(e)},50)}},{key:"stopHoverIntent",value:function(e){clearTimeout(this.hoverIntent),this.closeMenu(e)}},{key:"openMenu",value:function(e){("mouseenter"===e.type&&r.default.mq.matches||"click"===e.type&&!r.default.mq.matches||"keyup"===e.type)&&(this.trigger.setAttribute("aria-expanded","true"),this.menu.setAttribute("data-hidden","false"),this.uiBlock.setAttribute("data-is","open"),this.searchMenu&&r.default.mq.matches&&this.searchMenu.dispatchEvent(window.searchMenu))}},{key:"closeMenu",value:function(e){("mouseleave"===e.type&&r.default.mq.matches||"focusout"===e.type&&r.default.mq.matches||"click"===e.type&&!r.default.mq.matches||"keyup"===e.type||"closeMobile"===e.type)&&(this.uiBlock.setAttribute("data-is","closed"),this.trigger.setAttribute("aria-expanded","false"),this.menu.setAttribute("data-hidden","true"))}},{key:"keyboardToggleMenu",value:function(e){e.which===r.default.keys.DOWN?this.openMenu(e):e.which!==r.default.keys.UP&&e.which!==r.default.keys.ESC||(this.trigger.focus(),this.closeMenu(e))}},{key:"a11yFocusin",value:function(e){window.clearTimeout(this.focusoutTimer)}},{key:"a11yFocusout",value:function(e){var t=this;this.focusoutTimer=window.setTimeout(function(){t.closeMenu(e)},10)}},{key:"touchToggleMenu",value:function(e){"true"===this.menu.getAttribute("data-hidden")?this.openMenu(e):this.closeMenu(e)}}]),e}();t.default=a},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function(){function e(t){i(this,e),this.links=t,this.setUp()}return o(e,[{key:"setUp",value:function(){for(var e=0,t=this.links.length;e<t;e++)this.testLink(this.links[e])}},{key:"testLink",value:function(e){""!==e.hostname&&this.cleanHostName(e.hostname)!==this.cleanHostName(window.location.hostname)&&this.makeExternal(e)}},{key:"cleanHostName",value:function(e){return 0===e.indexOf("www.")?e.substring(4):e}},{key:"makeExternal",value:function(e){var t=e.innerHTML;e.setAttribute("rel","noopener noreferrer"),e.setAttribute("target","_blank"),e.classList.add("external-link"),e.innerHTML=t+'<span class="a11y-sr-only"> (opens in new window)</span>'}}]),e}();t.default=s},function(e,t,n){function i(e){var t=o[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./caption/index":[10,6],"./carousel-block/index":[11,5],"./label-float/index":[1],"./map/index":[12,4],"./sample/index":[13,3],"./search-filter/index":[14,2],"./search-form/index":[15,1],"./social-share/index":[16,0]};i.keys=function(){return Object.keys(o)},i.id=9,e.exports=i}]);
//# sourceMappingURL=index.js.map