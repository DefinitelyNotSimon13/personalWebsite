/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/intl-messageformat@10.5.8/lib/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import{__extends as e,__rest as t,__assign as r,__spreadArray as n}from"tslib";import{isLiteralElement as o,isPoundElement as a,isArgumentElement as i,isDateElement as l,isDateTimeSkeleton as u,isTimeElement as s,isNumberElement as c,isNumberSkeleton as m,isTagElement as f,isSelectElement as p,isPluralElement as h,parse as y}from"@formatjs/icu-messageformat-parser";import{memoize as v,strategies as d}from"@formatjs/fast-memoize";var g;!function(e){e.MISSING_VALUE="MISSING_VALUE",e.INVALID_VALUE="INVALID_VALUE",e.MISSING_INTL_API="MISSING_INTL_API"}(g||(g={}));var I,b=function(t){function r(e,r,n){var o=t.call(this,e)||this;return o.code=r,o.originalMessage=n,o}return e(r,t),r.prototype.toString=function(){return"[formatjs Error: ".concat(this.code,"] ").concat(this.message)},r}(Error),L=function(t){function r(e,r,n,o){return t.call(this,'Invalid values for "'.concat(e,'": "').concat(r,'". Options are "').concat(Object.keys(n).join('", "'),'"'),g.INVALID_VALUE,o)||this}return e(r,t),r}(b),w=function(t){function r(e,r,n){return t.call(this,'Value for "'.concat(e,'" must be of type ').concat(r),g.INVALID_VALUE,n)||this}return e(r,t),r}(b),N=function(t){function r(e,r){return t.call(this,'The intl string context variable "'.concat(e,'" was not provided to the string "').concat(r,'"'),g.MISSING_VALUE,r)||this}return e(r,t),r}(b);function A(e){return"function"==typeof e}function _(e,t,r,n,y,v,d){if(1===e.length&&o(e[0]))return[{type:I.literal,value:e[0].value}];for(var T=[],S=0,j=e;S<j.length;S++){var O=j[S];if(o(O))T.push({type:I.literal,value:O.value});else if(a(O))"number"==typeof v&&T.push({type:I.literal,value:r.getNumberFormat(t).format(v)});else{var D=O.value;if(!y||!(D in y))throw new N(D,d);var F=y[D];if(i(O))F&&"string"!=typeof F&&"number"!=typeof F||(F="string"==typeof F||"number"==typeof F?String(F):""),T.push({type:"string"==typeof F?I.literal:I.object,value:F});else if(l(O)){var V="string"==typeof O.style?n.date[O.style]:u(O.style)?O.style.parsedOptions:void 0;T.push({type:I.literal,value:r.getDateTimeFormat(t,V).format(F)})}else if(s(O)){V="string"==typeof O.style?n.time[O.style]:u(O.style)?O.style.parsedOptions:n.time.medium;T.push({type:I.literal,value:r.getDateTimeFormat(t,V).format(F)})}else if(c(O)){(V="string"==typeof O.style?n.number[O.style]:m(O.style)?O.style.parsedOptions:void 0)&&V.scale&&(F*=V.scale||1),T.push({type:I.literal,value:r.getNumberFormat(t,V).format(F)})}else{if(f(O)){var E=O.children,P=O.value,M=y[P];if(!A(M))throw new w(P,"function",d);var R=M(_(E,t,r,n,y,v).map((function(e){return e.value})));Array.isArray(R)||(R=[R]),T.push.apply(T,R.map((function(e){return{type:"string"==typeof e?I.literal:I.object,value:e}})))}if(p(O)){if(!(U=O.options[F]||O.options.other))throw new L(O.value,F,Object.keys(O.options),d);T.push.apply(T,_(U.value,t,r,n,y))}else if(h(O)){var U;if(!(U=O.options["=".concat(F)])){if(!Intl.PluralRules)throw new b('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',g.MISSING_INTL_API,d);var k=r.getPluralRules(t,{type:O.pluralType}).select(F-(O.offset||0));U=O.options[k]||O.options.other}if(!U)throw new L(O.value,F,Object.keys(O.options),d);T.push.apply(T,_(U.value,t,r,n,y,F-(O.offset||0)))}else;}}}return function(e){return e.length<2?e:e.reduce((function(e,t){var r=e[e.length-1];return r&&r.type===I.literal&&t.type===I.literal?r.value+=t.value:e.push(t),e}),[])}(T)}function T(e,t){return t?Object.keys(e).reduce((function(n,o){var a,i;return n[o]=(a=e[o],(i=t[o])?r(r(r({},a||{}),i||{}),Object.keys(a).reduce((function(e,t){return e[t]=r(r({},a[t]),i[t]||{}),e}),{})):a),n}),r({},e)):e}function S(e){return{create:function(){return{get:function(t){return e[t]},set:function(t,r){e[t]=r}}}}}!function(e){e[e.literal=0]="literal",e[e.object=1]="object"}(I||(I={}));var j=function(){function e(o,a,i,l){var u,s=this;if(void 0===a&&(a=e.defaultLocale),this.formatterCache={number:{},dateTime:{},pluralRules:{}},this.format=function(e){var t=s.formatToParts(e);if(1===t.length)return t[0].value;var r=t.reduce((function(e,t){return e.length&&t.type===I.literal&&"string"==typeof e[e.length-1]?e[e.length-1]+=t.value:e.push(t.value),e}),[]);return r.length<=1?r[0]||"":r},this.formatToParts=function(e){return _(s.ast,s.locales,s.formatters,s.formats,e,void 0,s.message)},this.resolvedOptions=function(){var e;return{locale:(null===(e=s.resolvedLocale)||void 0===e?void 0:e.toString())||Intl.NumberFormat.supportedLocalesOf(s.locales)[0]}},this.getAst=function(){return s.ast},this.locales=a,this.resolvedLocale=e.resolveLocale(a),"string"==typeof o){if(this.message=o,!e.__parse)throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");var c=l||{};c.formatters;var m=t(c,["formatters"]);this.ast=e.__parse(o,r(r({},m),{locale:this.resolvedLocale}))}else this.ast=o;if(!Array.isArray(this.ast))throw new TypeError("A message must be provided as a String or AST.");this.formats=T(e.formats,i),this.formatters=l&&l.formatters||(void 0===(u=this.formatterCache)&&(u={number:{},dateTime:{},pluralRules:{}}),{getNumberFormat:v((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((e=Intl.NumberFormat).bind.apply(e,n([void 0],t,!1)))}),{cache:S(u.number),strategy:d.variadic}),getDateTimeFormat:v((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((e=Intl.DateTimeFormat).bind.apply(e,n([void 0],t,!1)))}),{cache:S(u.dateTime),strategy:d.variadic}),getPluralRules:v((function(){for(var e,t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];return new((e=Intl.PluralRules).bind.apply(e,n([void 0],t,!1)))}),{cache:S(u.pluralRules),strategy:d.variadic})})}return Object.defineProperty(e,"defaultLocale",{get:function(){return e.memoizedDefaultLocale||(e.memoizedDefaultLocale=(new Intl.NumberFormat).resolvedOptions().locale),e.memoizedDefaultLocale},enumerable:!1,configurable:!0}),e.memoizedDefaultLocale=null,e.resolveLocale=function(e){if(void 0!==Intl.Locale){var t=Intl.NumberFormat.supportedLocalesOf(e);return t.length>0?new Intl.Locale(t[0]):new Intl.Locale("string"==typeof e?e:e[0])}},e.__parse=y,e.formats={number:{integer:{maximumFractionDigits:0},currency:{style:"currency"},percent:{style:"percent"}},date:{short:{month:"numeric",day:"numeric",year:"2-digit"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"},full:{weekday:"long",month:"long",day:"numeric",year:"numeric"}},time:{short:{hour:"numeric",minute:"numeric"},medium:{hour:"numeric",minute:"numeric",second:"numeric"},long:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"},full:{hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short"}}},e}();export{g as ErrorCode,b as FormatError,j as IntlMessageFormat,L as InvalidValueError,w as InvalidValueTypeError,N as MissingValueError,I as PART_TYPE,j as default,_ as formatToParts,A as isFormatXMLElementFn};