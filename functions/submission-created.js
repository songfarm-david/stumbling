!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){"use strict";r.r(t),t.default=function(e="",t={}){return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(e=>{if(e.ok)return e.json();throw new Error("Network response was not ok.",e)}).then(e=>(console.log("Success:",JSON.stringify(e)),JSON.stringify(e))).catch(e=>console.log("Error:",e,e.message))}},function(e,t,r){"use strict";r.r(t);var n=r(0);exports.handler=(async(e,t,r)=>{let o,a;console.log("httpMethod: ",e.httpMethod);try{const t=JSON.parse(e.body).payload;"subscription-form"==t.form_name&&(o="mailchimp endpoint",a={}),"comment-form"==t.form_name&&(o="https://stumblingtowardsenlightenment.com/wp-json",a={postId:t.data.postId,name:t.data.name,comment:t.data.comment}),Object(n.default)(o,a).then(e=>console.log("This is what postData returned: ",e))}catch(e){r(null,{statusCode:500,body:"Internal Server Error: "+e})}r(null,{statusCode:200,body:"Hello, Monkey. Here is the event: "+payload})})}]));