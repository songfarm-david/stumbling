!function(e,o){for(var t in o)e[t]=o[t]}(exports,function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1)}([function(e,o,t){"use strict";t.r(o),o.default=function(e="",o={},t=null){return fetch(e,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(o)}).then(e=>{if(e.ok)return e.json();throw new Error("Network response was not ok.",e)}).then(e=>(console.log("Success:",JSON.stringify(e)),JSON.stringify(e))).catch(e=>{throw console.log("Error:",e,e.message),new Error("In the catch.",e)})}},function(e,o,t){"use strict";t.r(o);t(0);exports.handler=(async(e,o,t)=>{let n,r;console.log("httpMethod: ",e.httpMethod);try{const o=JSON.parse(e.body).payload;"subscription-form"==o.form_name&&(n="mailchimp endpoint",r={}),"comment-form"==o.form_name&&(console.log("this is a comment"),n="https://stumblingtowardsenlightenment.com/wp-json/wp/v2/comments",r={postId:o.data.postId,name:o.data.name,comment:o.data.comment},console.log(n,r)),console.log("about to post fetch"),fetch("https://stumblingtowardsenlightenment.com/wp-json/jwt-auth/v1/token",{}).then(e=>(console.log("Did we get a response? ",e),e.json())).then(e=>{console.log(JSON.stringify(e))}).catch(e=>{throw console.log("error: ",e),new Error("Something bad happened.",e)}),fetch("urlToApi").then(e=>(console.log("Did we get a response? ",e),e.json())).then(e=>{console.log(JSON.stringify(e))}).catch(e=>{throw console.log("error: ",e),new Error("Something bad happened.",e)})}catch(e){t(null,{statusCode:500,body:"Internal Server Error: "+e})}})}]));