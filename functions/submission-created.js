!function(e,t){for(var o in t)e[o]=t[o]}(exports,function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict";o.r(t),t.default=function(e="",t={},o=null){return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(t)}).then(e=>{if(e.ok)return e.json();throw new Error("Network response was not ok.",e)}).then(e=>(console.log("Success:",JSON.stringify(e)),JSON.stringify(e))).catch(e=>{throw console.log("Error:",e,e.message),new Error("In the catch.",e)})}},function(e,t,o){"use strict";o.r(t);o(0);exports.handler=(async(e,t,o)=>{let n,r;console.log("httpMethod: ",e.httpMethod);try{const t=JSON.parse(e.body).payload;"subscription-form"==t.form_name&&(n="mailchimp endpoint",r={}),"comment-form"==t.form_name&&(console.log("this is a comment"),n="https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments",r={postId:t.data.postId,name:t.data.name,comment:t.data.comment},console.log(n,r)),fetch("https://stumblingtowardsenlightenment.com/wp-json/jwt-auth/v1/token",{credentials:"include"}).then(e=>(console.log("Did we get a response? ",e),e.json())).then(e=>{console.log(JSON.stringify(e))}).catch(e=>{throw console.log("error: ",e),new Error("Something bad happened.",e)})}catch(e){o(null,{statusCode:500,body:"Internal Server Error: "+e})}})}]));