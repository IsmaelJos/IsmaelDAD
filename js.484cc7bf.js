parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tfqe":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function n(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(e){var r=o(e,"string");return"symbol"==t(r)?r:r+""}function o(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var u=exports.default=function(){return n(function t(r){e(this,t),this.name=r.name,this.id=r.id,this.skin="",this.barra=r.partype,this.title=r.title,this.img=r.image.full},[{key:"setSkin",value:function(t){this.skin=t}},{key:"setImg",value:function(t){this.img=t}}])}();
},{}],"QvaY":[function(require,module,exports) {
"use strict";var n=t(require("./Champ.js"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(){e=function(){return t};var n,t={},i=Object.prototype,a=i.hasOwnProperty,o=Object.defineProperty||function(n,t,r){n[t]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function d(n,t,r){return Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[t]}try{d({},"")}catch(n){d=function(n,t,r){return n[t]=r}}function v(n,t,r,e){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new F(e||[]);return o(a,"_invoke",{value:C(n,r,c)}),a}function f(n,t,r){try{return{type:"normal",arg:n.call(t,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=v;var h="suspendedStart",m="suspendedYield",p="executing",g="completed",y={};function b(){}function w(){}function x(){}var L={};d(L,s,function(){return this});var k=Object.getPrototypeOf,E=k&&k(k(H([])));E&&E!==i&&a.call(E,s)&&(L=E);var T=x.prototype=b.prototype=Object.create(L);function j(n){["next","throw","return"].forEach(function(t){d(n,t,function(n){return this._invoke(t,n)})})}function _(n,t){function e(i,o,c,s){var l=f(n[i],n,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&a.call(d,"__await")?t.resolve(d.__await).then(function(n){e("next",n,c,s)},function(n){e("throw",n,c,s)}):t.resolve(d).then(function(n){u.value=n,c(u)},function(n){return e("throw",n,c,s)})}s(l.arg)}var i;o(this,"_invoke",{value:function(n,r){function a(){return new t(function(t,i){e(n,r,t,i)})}return i=i?i.then(a,a):a()}})}function C(t,r,e){var i=h;return function(a,o){if(i===p)throw Error("Generator is already running");if(i===g){if("throw"===a)throw o;return{value:n,done:!0}}for(e.method=a,e.arg=o;;){var c=e.delegate;if(c){var s=S(c,e);if(s){if(s===y)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(i===h)throw i=g,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i=p;var l=f(t,r,e);if("normal"===l.type){if(i=e.done?g:m,l.arg===y)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(i=g,e.method="throw",e.arg=l.arg)}}}function S(t,r){var e=r.method,i=t.iterator[e];if(i===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=n,S(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var a=f(i,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function M(n){var t={tryLoc:n[0]};1 in n&&(t.catchLoc=n[1]),2 in n&&(t.finallyLoc=n[2],t.afterLoc=n[3]),this.tryEntries.push(t)}function O(n){var t=n.completion||{};t.type="normal",delete t.arg,n.completion=t}function F(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(M,this),this.reset(!0)}function H(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(a.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=n,r.done=!0,r};return o.next=o}}throw new TypeError(r(t)+" is not iterable")}return w.prototype=x,o(T,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=d(x,u,"GeneratorFunction"),t.isGeneratorFunction=function(n){var t="function"==typeof n&&n.constructor;return!!t&&(t===w||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,x):(n.__proto__=x,d(n,u,"GeneratorFunction")),n.prototype=Object.create(T),n},t.awrap=function(n){return{__await:n}},j(_.prototype),d(_.prototype,l,function(){return this}),t.AsyncIterator=_,t.async=function(n,r,e,i,a){void 0===a&&(a=Promise);var o=new _(v(n,r,e,i),a);return t.isGeneratorFunction(r)?o:o.next().then(function(n){return n.done?n.value:o.next()})},j(T),d(T,u,"Generator"),d(T,s,function(){return this}),d(T,"toString",function(){return"[object Generator]"}),t.keys=function(n){var t=Object(n),r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=H,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,i){return c.type="throw",c.arg=t,r.next=e,i&&(r.method="next",r.arg=n),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(n,t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&a.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=n,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(o)},complete:function(n,t){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&t&&(this.next=t),y},finish:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===n){var e=r.completion;if("throw"===e.type){var i=e.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:H(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),y}},t}function i(n,t,r,e,i,a,o){try{var c=n[a](o),s=c.value}catch(n){return void r(n)}c.done?t(s):Promise.resolve(s).then(e,i)}function a(n){return function(){var t=this,r=arguments;return new Promise(function(e,a){var o=n.apply(t,r);function c(n){i(o,e,a,c,s,"next",n)}function s(n){i(o,e,a,c,s,"throw",n)}c(void 0)})}}var o=[],c=document.querySelector("button");c.addEventListener("click",function(){document.querySelector("#button").style.visibility="hidden",document.querySelector("#wiki").style.visibility="visible",s()});var s=function(){var t=a(e().mark(function t(){return e().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ddragon.leagueoflegends.com/cdn/13.18.1/data/es_ES/champion.json").then(function(n){return n.json()}).then(function(t){for(var r in t.data){var e=t.data[r],i=new n.default(e);i.setImg("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(i.id,"_0.jpg")),i.setSkin("https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(i.id,"_1.jpg")),l(i),console.log(i)}});case 2:return t.next=4,u();case 4:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();function l(n){o.push(n)}var u=function(){var n=a(e().mark(function n(){var t,r;return e().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=document.getElementById("wiki"),r=0;case 2:if(!(r<o.length)){n.next=30;break}n.t0=o[r].barra,n.next="Pozo sangriento"===n.t0?6:"Energía"===n.t0?8:"Ferocidad"===n.t0?10:"Escudo"===n.t0?12:"Furia"===n.t0?14:"Flujo"===n.t0?16:"Coraje"===n.t0?18:"Calor"===n.t0?20:"Ráfaga carmesí"===n.t0?22:"Maná"===n.t0?24:26;break;case 6:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="PozoSangriento">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 8:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Energía">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 10:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Ferocidad">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 12:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Escudo">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 14:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Furia">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 16:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Flujo">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 18:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Coraje">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 20:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="Calor">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 22:return t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="RáfagaCarmesí">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>"),n.abrupt("break",27);case 24:return t.innerHTML+='<div class="card">\n                                        <img  src="'.concat(o[r].img,'">\n                                        <img class="front" src="').concat(o[r].skin,'">\n                                        <div class="textoCard">\n                                            <div class="nombreTitulo">\n                                                <div class="nombre">\n                                                    ').concat(o[r].name,'\n                                                </div>\n                                                <div class="titulo">\n                                                    ').concat(o[r].title,'\n                                                </div>\n                                            </div>\n                                            <div class="Maná">\n                                                ').concat(o[r].barra,"\n                                            </div>\n                                        </div>\n                                    </div>"),n.abrupt("break",27);case 26:t.innerHTML+='<div class="card">\n                                    <img  src="'.concat(o[r].img,'">\n                                    <img class="front" src="').concat(o[r].skin,'">\n                                    <div class="textoCard">\n                                        <div class="nombreTitulo">\n                                            <div class="nombre">\n                                                ').concat(o[r].name,'\n                                            </div>\n                                            <div class="titulo">\n                                                ').concat(o[r].title,'\n                                            </div>\n                                        </div>\n                                        <div class="nada">\n                                            ').concat(o[r].barra,"\n                                        </div>\n                                    </div>\n                                </div>");case 27:r++,n.next=2;break;case 30:case"end":return n.stop()}},n)}));return function(){return n.apply(this,arguments)}}();
},{"./Champ.js":"tfqe"}]},{},["QvaY"], null)
//# sourceMappingURL=/IsmaelDAD/js.484cc7bf.js.map