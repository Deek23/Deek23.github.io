"use strict";(self.webpackChunkmatrixviewer=self.webpackChunkmatrixviewer||[]).push([[43],{9878:function(r,e,n){n.d(e,{Z:function(){return h}});var t=n(4165),a=n(5861),i=n(5671),o=n(3144);function u(r,e){var n=r.length-e,t=0;do{for(var a=e;a>0;a--)r[t+e]+=r[t],t++;n-=e}while(n>0)}function f(r,e,n){for(var t=0,a=r.length,i=a/n;a>e;){for(var o=e;o>0;--o)r[t+e]+=r[t],++t;a-=e}for(var u=r.slice(),f=0;f<i;++f)for(var c=0;c<n;++c)r[n*f+c]=u[(n-c-1)*i+f]}function c(r,e,n,t,a,i){if(!e||1===e)return r;for(var o=0;o<a.length;++o){if(a[o]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(a[o]!==a[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var c=a[0]/8,h=2===i?1:a.length,s=0;s<t&&!(s*h*n*c>=r.byteLength);++s){var l=void 0;if(2===e){switch(a[0]){case 8:l=new Uint8Array(r,s*h*n*c,h*n*c);break;case 16:l=new Uint16Array(r,s*h*n*c,h*n*c/2);break;case 32:l=new Uint32Array(r,s*h*n*c,h*n*c/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(a[0]," bits per sample."))}u(l,h)}else 3===e&&f(l=new Uint8Array(r,s*h*n*c,h*n*c),h,c)}return r}var h=function(){function r(){(0,i.Z)(this,r)}return(0,o.Z)(r,[{key:"decode",value:function(){var r=(0,a.Z)((0,t.Z)().mark((function r(e,n){var a,i,o,u,f;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(n);case 2:if(a=r.sent,1===(i=e.Predictor||1)){r.next=9;break}return o=!e.StripOffsets,u=o?e.TileWidth:e.ImageWidth,f=o?e.TileLength:e.RowsPerStrip||e.ImageLength,r.abrupt("return",c(a,i,u,f,e.BitsPerSample,e.PlanarConfiguration));case 9:return r.abrupt("return",a);case 10:case"end":return r.stop()}}),r,this)})));return function(e,n){return r.apply(this,arguments)}}()}]),r}()},3043:function(r,e,n){n.r(e),n.d(e,{default:function(){return s}});var t=n(5671),a=n(3144),i=n(136),o=n(9388),u=n(9878),f=257;function c(r,e){for(var n=e.length-1;n>=0;n--)r.push(e[n]);return r}function h(r){for(var e=new Uint16Array(4093),n=new Uint8Array(4093),t=0;t<=257;t++)e[t]=4096,n[t]=t;var a=258,i=9,o=0;function u(){a=258,i=9}function h(r){var e=function(r,e,n){var t=e%8,a=Math.floor(e/8),i=8-t,o=e+n-8*(a+1),u=8*(a+2)-(e+n),c=8*(a+2)-e;if(u=Math.max(0,u),a>=r.length)return console.warn("ran off the end of the buffer before finding EOI_CODE (end on input code)"),f;var h=r[a]&Math.pow(2,8-t)-1,s=h<<=n-i;if(a+1<r.length){var l=r[a+1]>>>u;s+=l<<=Math.max(0,n-c)}if(o>8&&a+2<r.length){var v=8*(a+3)-(e+n);s+=r[a+2]>>>v}return s}(r,o,i);return o+=i,e}function s(r,t){return n[a]=t,e[a]=r,++a-1}function l(r){for(var t=[],a=r;4096!==a;a=e[a])t.push(n[a]);return t}var v=[];u();for(var w,d=new Uint8Array(r),p=h(d);p!==f;){if(256===p){for(u(),p=h(d);256===p;)p=h(d);if(p===f)break;if(p>256)throw new Error("corrupted code at scanline ".concat(p));c(v,l(p)),w=p}else if(p<a){var g=l(p);c(v,g),s(w,g[g.length-1]),w=p}else{var y=l(w);if(!y)throw new Error("Bogus entry. Not in dictionary, ".concat(w," / ").concat(a,", position: ").concat(o));c(v,y),v.push(y[y.length-1]),s(w,y[y.length-1]),w=p}a+1>=Math.pow(2,i)&&(12===i?w=void 0:i++),p=h(d)}return new Uint8Array(v)}var s=function(r){(0,i.Z)(n,r);var e=(0,o.Z)(n);function n(){return(0,t.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"decodeBlock",value:function(r){return h(r).buffer}}]),n}(u.Z)}}]);
//# sourceMappingURL=43.49a79a88.chunk.js.map