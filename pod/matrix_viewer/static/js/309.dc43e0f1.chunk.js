"use strict";(self.webpackChunkmatrixviewer=self.webpackChunkmatrixviewer||[]).push([[309],{2889:function(r,e,t){t.d(e,{Z:function(){return s}});var n=t(4165),i=t(5861),a=t(5671),o=t(3144);function u(r,e){var t=r.length-e,n=0;do{for(var i=e;i>0;i--)r[n+e]+=r[n],n++;t-=e}while(t>0)}function c(r,e,t){for(var n=0,i=r.length,a=i/t;i>e;){for(var o=e;o>0;--o)r[n+e]+=r[n],++n;i-=e}for(var u=r.slice(),c=0;c<a;++c)for(var f=0;f<t;++f)r[t*c+f]=u[(t-f-1)*a+c]}function f(r,e,t,n,i,a){if(!e||1===e)return r;for(var o=0;o<i.length;++o){if(i[o]%8!==0)throw new Error("When decoding with predictor, only multiple of 8 bits are supported.");if(i[o]!==i[0])throw new Error("When decoding with predictor, all samples must have the same size.")}for(var f=i[0]/8,s=2===a?1:i.length,h=0;h<n&&!(h*s*t*f>=r.byteLength);++h){var l=void 0;if(2===e){switch(i[0]){case 8:l=new Uint8Array(r,h*s*t*f,s*t*f);break;case 16:l=new Uint16Array(r,h*s*t*f,s*t*f/2);break;case 32:l=new Uint32Array(r,h*s*t*f,s*t*f/4);break;default:throw new Error("Predictor 2 not allowed with ".concat(i[0]," bits per sample."))}u(l,s)}else 3===e&&c(l=new Uint8Array(r,h*s*t*f,s*t*f),s,f)}return r}var s=function(){function r(){(0,a.Z)(this,r)}return(0,o.Z)(r,[{key:"decode",value:function(){var r=(0,i.Z)((0,n.Z)().mark((function r(e,t){var i,a,o,u,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,this.decodeBlock(t);case 2:if(i=r.sent,1===(a=e.Predictor||1)){r.next=9;break}return o=!e.StripOffsets,u=o?e.TileWidth:e.ImageWidth,c=o?e.TileLength:e.RowsPerStrip||e.ImageLength,r.abrupt("return",f(i,a,u,c,e.BitsPerSample,e.PlanarConfiguration));case 9:return r.abrupt("return",i);case 10:case"end":return r.stop()}}),r,this)})));return function(e,t){return r.apply(this,arguments)}}()}]),r}()},6309:function(r,e,t){t.r(e),t.d(e,{default:function(){return u}});var n=t(5671),i=t(3144),a=t(136),o=t(9388),u=function(r){(0,a.Z)(t,r);var e=(0,o.Z)(t);function t(){return(0,n.Z)(this,t),e.apply(this,arguments)}return(0,i.Z)(t,[{key:"decodeBlock",value:function(r){for(var e=new DataView(r),t=[],n=0;n<r.byteLength;++n){var i=e.getInt8(n);if(i<0){var a=e.getUint8(n+1);i=-i;for(var o=0;o<=i;++o)t.push(a);n+=1}else{for(var u=0;u<=i;++u)t.push(e.getUint8(n+u+1));n+=i+1}}return new Uint8Array(t).buffer}}]),t}(t(2889).Z)}}]);
//# sourceMappingURL=309.dc43e0f1.chunk.js.map