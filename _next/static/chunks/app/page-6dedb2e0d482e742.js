(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8387:function(e,t,A){Promise.resolve().then(A.t.bind(A,8707,23)),Promise.resolve().then(A.bind(A,6198)),Promise.resolve().then(A.bind(A,9549)),Promise.resolve().then(A.bind(A,1178)),Promise.resolve().then(A.bind(A,3523)),Promise.resolve().then(A.bind(A,3284)),Promise.resolve().then(A.bind(A,2324))},8707:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return E}});let i=A(6927),r=A(5909),n=r._(A(6006)),s=i._(A(9209)),o=A(3930),a=A(8706),l=A(3278);A(4745);let u=i._(A(8685)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0};function c(e){return void 0!==e.default}function f(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,A,i,r,n,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===A&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let A=!1,r=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>A,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{A=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function h(e){let[t,A]=n.version.split("."),i=parseInt(t,10),r=parseInt(A,10);return i>18||18===i&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let p=(0,n.forwardRef)((e,t)=>{let{imgAttributes:A,heightInt:i,widthInt:r,qualityInt:s,className:o,imgStyle:a,blurStyle:l,isLazy:u,fetchPriority:d,fill:c,placeholder:f,loading:p,srcString:m,config:E,unoptimized:O,loader:b,onLoadRef:z,onLoadingCompleteRef:w,setBlurComplete:v,setShowAltText:B,onLoad:D,onError:C,...Q}=e;return p=u?"lazy":p,n.default.createElement("img",{...Q,...h(d),loading:p,width:r,height:i,decoding:"async","data-nimg":c?"fill":"1",className:o,style:{...a,...l},...A,ref:(0,n.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,m,f,z,w,v,O))},[m,f,z,w,v,C,O,t]),onLoad:e=>{let t=e.currentTarget;g(t,m,f,z,w,v,O)},onError:e=>{B(!0),"blur"===f&&v(!0),C&&C(e)}})}),m=(0,n.forwardRef)((e,t)=>{var A;let i,r,{src:g,sizes:m,unoptimized:E=!1,priority:O=!1,loading:b,className:z,quality:w,width:v,height:B,fill:D,style:C,onLoad:Q,onLoadingComplete:y,placeholder:S="empty",blurDataURL:I,fetchPriority:x,layout:j,objectFit:_,objectPosition:P,lazyBoundary:M,lazyRoot:R,...k}=e,L=(0,n.useContext)(l.ImageConfigContext),N=(0,n.useMemo)(()=>{let e=d||L||a.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),A=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:A}},[L]),F=k.loader||u.default;delete k.loader;let U="__next_img_default"in F;if(U){if("custom"===N.loader)throw Error('Image with src "'+g+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:A,...i}=t;return e(i)}}if(j){"fill"===j&&(D=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(C={...C,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!m&&(m=t)}let H="",J=f(v),K=f(B);if("object"==typeof(A=g)&&(c(A)||void 0!==A.src)){let e=c(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(i=e.blurWidth,r=e.blurHeight,I=I||e.blurDataURL,H=e.src,!D){if(J||K){if(J&&!K){let t=J/e.width;K=Math.round(e.height*t)}else if(!J&&K){let t=K/e.height;J=Math.round(e.width*t)}}else J=e.width,K=e.height}}let G=!O&&("lazy"===b||void 0===b);(!(g="string"==typeof g?g:H)||g.startsWith("data:")||g.startsWith("blob:"))&&(E=!0,G=!1),N.unoptimized&&(E=!0),U&&g.endsWith(".svg")&&!N.dangerouslyAllowSVG&&(E=!0),O&&(x="high");let[V,T]=(0,n.useState)(!1),[W,Y]=(0,n.useState)(!1),q=f(w),X=Object.assign(D?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:P}:{},W?{}:{color:"transparent"},C),Z="blur"===S&&I&&!V?{backgroundSize:X.objectFit||"cover",backgroundPosition:X.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:J,heightInt:K,blurWidth:i,blurHeight:r,blurDataURL:I,objectFit:X.objectFit})+'")'}:{},$=function(e){let{config:t,src:A,unoptimized:i,width:r,quality:n,sizes:s,loader:o}=e;if(i)return{src:A,srcSet:void 0,sizes:void 0};let{widths:a,kind:l}=function(e,t,A){let{deviceSizes:i,allSizes:r}=e;if(A){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(A);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let n=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:n,kind:"x"}}(t,r,s),u=a.length-1;return{sizes:s||"w"!==l?s:"100vw",srcSet:a.map((e,i)=>o({config:t,src:A,quality:n,width:e})+" "+("w"===l?e:i+1)+l).join(", "),src:o({config:t,src:A,quality:n,width:a[u]})}}({config:N,src:g,unoptimized:E,width:J,quality:q,sizes:m,loader:F}),ee=g,et=(0,n.useRef)(Q);(0,n.useEffect)(()=>{et.current=Q},[Q]);let eA=(0,n.useRef)(y);(0,n.useEffect)(()=>{eA.current=y},[y]);let ei={isLazy:G,imgAttributes:$,heightInt:K,widthInt:J,qualityInt:q,className:z,imgStyle:X,blurStyle:Z,loading:b,config:N,fetchPriority:x,fill:D,unoptimized:E,placeholder:S,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:eA,setBlurComplete:T,setShowAltText:Y,...k};return n.default.createElement(n.default.Fragment,null,n.default.createElement(p,{...ei,ref:t}),O?n.default.createElement(s.default,null,n.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imageSrcSet:$.srcSet,imageSizes:$.sizes,crossOrigin:k.crossOrigin,referrerPolicy:k.referrerPolicy,...h(x)})):null)}),E=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1909:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let i=A(6927),r=i._(A(6006)),n=r.default.createContext({})},7060:function(e,t){"use strict";function A(e){let{ampFirst:t=!1,hybrid:A=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||A&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return A}})},9209:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var A in t)Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}(t,{defaultHead:function(){return u},default:function(){return g}});let i=A(6927),r=A(5909),n=r._(A(6006)),s=i._(A(9797)),o=A(1909),a=A(5415),l=A(7060);function u(e){void 0===e&&(e=!1);let t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}A(4745);let c=["name","httpEquiv","charSet","itemProp"];function f(e,t){let{inAmpMode:A}=t;return e.reduce(d,[]).reverse().concat(u(A).reverse()).filter(function(){let e=new Set,t=new Set,A=new Set,i={};return r=>{let n=!0,s=!1;if(r.key&&"number"!=typeof r.key&&r.key.indexOf("$")>0){s=!0;let t=r.key.slice(r.key.indexOf("$")+1);e.has(t)?n=!1:e.add(t)}switch(r.type){case"title":case"base":t.has(r.type)?n=!1:t.add(r.type);break;case"meta":for(let e=0,t=c.length;e<t;e++){let t=c[e];if(r.props.hasOwnProperty(t)){if("charSet"===t)A.has(t)?n=!1:A.add(t);else{let e=r.props[t],A=i[t]||new Set;("name"!==t||!s)&&A.has(e)?n=!1:(A.add(e),i[t]=A)}}}}return n}}()).reverse().map((e,t)=>{let i=e.key||t;if(!A&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,n.default.cloneElement(e,t)}return n.default.cloneElement(e,{key:i})})}let g=function(e){let{children:t}=e,A=(0,n.useContext)(o.AmpStateContext),i=(0,n.useContext)(a.HeadManagerContext);return n.default.createElement(s.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,l.isInAmpMode)(A)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3930:function(e,t){"use strict";function A(e){let{widthInt:t,heightInt:A,blurWidth:i,blurHeight:r,blurDataURL:n,objectFit:s}=e,o=i||t,a=r||A,l=n.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&a?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+o+" "+a+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(i&&r?"1":"20")+"'/%3E"+l+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return A}})},3278:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let i=A(6927),r=i._(A(6006)),n=A(8706),s=r.default.createContext(n.imageConfigDefault)},8706:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var A in t)Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}(t,{VALID_LOADERS:function(){return A},imageConfigDefault:function(){return i}});let A=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8685:function(e,t){"use strict";function A(e){let{config:t,src:A,width:i,quality:r}=e;return t.path+"?url="+encodeURIComponent(A)+"&w="+i+"&q="+(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),A.__next_img_default=!0;let i=A},9797:function(e,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let i=A(5909),r=i._(A(6006)),n=r.useLayoutEffect,s=r.useEffect;function o(e){let{headManager:t,reduceComponentsToState:A}=e;function i(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(A(i,e))}}return n(()=>{var A;return null==t||null==(A=t.mountedInstances)||A.add(e.children),()=>{var A;null==t||null==(A=t.mountedInstances)||A.delete(e.children)}}),n(()=>(t&&(t._pendingUpdate=i),()=>{t&&(t._pendingUpdate=i)})),s(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4745:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return A}});let A=e=>{}},6198:function(e,t,A){"use strict";A.r(t),t.default={src:"https://anatoliitrehub.github.io/_next/static/media/imgbox1.9cae0c8a.jpg",height:294,width:370,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAdEAACAgIDAQAAAAAAAAAAAAABAgAEAzEFESES/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAaEQACAwEBAAAAAAAAAAAAAAABAgADBBEh/9oADAMBAAIRAxEAPwCP5LgxSq47DjDYQN2EdSAv154BvQ2YiJfXPU3pWGfRYp4DP//Z",blurWidth:8,blurHeight:6}},9549:function(e,t,A){"use strict";A.r(t),t.default={src:"https://anatoliitrehub.github.io/_next/static/media/imgbox2.ad13e760.jpg",height:294,width:370,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAeEAABBAIDAQAAAAAAAAAAAAACAAEEBSExAwYSEf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECAyH/2gAMAwEAAhEDEQA/AJYdzCXbMVlTRpPGMdvPGJEPkd7z9fOsMiInKayhPiP/2Q==",blurWidth:8,blurHeight:6}},1178:function(e,t,A){"use strict";A.r(t),t.default={src:"https://anatoliitrehub.github.io/_next/static/media/imgbox3.8e087736.jpg",height:294,width:370,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwQDAQAAAAAAAAAAAAACAAEDBAUhQRESMVH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARITH/2gAMAwEAAhEDEQA/AIUbR3q0lVVbzBLIYDCQSds85c2fL+/d6REQ1bjgVP/Z",blurWidth:8,blurHeight:6}},3284:function(e,t,A){"use strict";A.r(t),t.default={src:"https://anatoliitrehub.github.io/_next/static/media/imgihor.62e21bb3.jpg",height:780,width:810,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABBAIBBQAAAAAAAAAAAAABAAIDEQUhBAcSF1GB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhEDEQA/AKLyLjz1FONibM6MvHCc69GTuqwL00HXs/EREReo/9k=",blurWidth:8,blurHeight:8}},2324:function(e,t,A){"use strict";A.r(t),t.default={src:"https://anatoliitrehub.github.io/_next/static/media/imgihor_mob.7bea2cf6.jpg",height:460,width:450,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABBAIBBQAAAAAAAAAAAAABAAIDEQUhFwQSMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIx/9oADAMBAAIRAxEAPwCh5Fx3Ihx8TZnRl46JzrsGTuqxvTQdfT59IiIRdLD/2Q==",blurWidth:8,blurHeight:8}},3523:function(e,t,A){"use strict";A.r(t),t.default={src:"https://anatoliitrehub.github.io/_next/static/media/imgihor_tab.077649fd.jpg",height:374,width:354,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAABAwMEAwAAAAAAAAAAAAABAAIDBBIhBQcRMRdBYf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIRAxEAPwCgO42m+QjRRNmdFeKJ7+w6S4jkZw0HH3v0iIiKaj//2Q==",blurWidth:8,blurHeight:8}}},function(e){e.O(0,[667,488,744],function(){return e(e.s=8387)}),_N_E=e.O()}]);