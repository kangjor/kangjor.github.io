(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{M4XY:function(t,e,n){(function(e){n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("SRfc"),n("Oyvg");var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+u+"]",c="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",f="\\d+",i="[\\u2700-\\u27bf]",s="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+u+f+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",b="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+s+"|"+l+")",m="(?:"+b+"|"+l+")",O="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",j="[\\ufe0e\\ufe0f]?"+O+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,x].join("|")+")[\\ufe0e\\ufe0f]?"+O+")*"),h="(?:"+[i,d,x].join("|")+")"+j,g=RegExp("['’]","g"),v=RegExp(c,"g"),y=RegExp([b+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,b,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,b+p,"$"].join("|")+")",b+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?",f,h].join("|"),"g"),E=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,T="object"==typeof e&&e&&e.Object===Object&&e,z="object"==typeof self&&self&&self.Object===Object&&self,S=T||z||Function("return this")();var w,L=(w={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(t){return null==w?void 0:w[t]});var A=Object.prototype.toString,C=S.Symbol,I=C?C.prototype:void 0,R=I?I.toString:void 0;function D(t){if("string"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==A.call(t)}(t))return R?R.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function P(t){return null==t?"":D(t)}var N,U=(N=function(t,e,n){return t+(n?"-":"")+e.toLowerCase()},function(t){return function(t,e,n,o){var r=-1,u=t?t.length:0;for(o&&u&&(n=t[++r]);++r<u;)n=e(n,t[r],r,t);return n}(function(t,e,n){return t=P(t),void 0===(e=n?void 0:e)?function(t){return E.test(t)}(t)?function(t){return t.match(y)||[]}(t):function(t){return t.match(o)||[]}(t):t.match(e)||[]}(function(t){return(t=P(t))&&t.replace(r,L).replace(v,"")}(t).replace(g,"")),N,"")});t.exports=U}).call(this,n("yLpj"))},W27q:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),u=n("txSG"),a=n("Wbzz"),c=n("Q3iF"),f=(n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("7ljp")),i=n("a9fL"),s=n("EtCU"),l=n("izhR"),d=n("n/Q7"),x=n("M4XY"),b=n.n(x),p=function(){var t=Object(s.a)(),e=t.tagsPath,n=t.basePath;return r.a.createElement(a.StaticQuery,{query:"3751729484",render:function(t){return r.a.createElement(r.a.Fragment,null,t.allPost.group.map((function(t){return r.a.createElement(l.e,{href:Object(d.a)("/"+n+"/"+e+"/"+b()(t.fieldValue))},r.a.createElement(l.b,{mr:2,variant:"secondary",sx:{cursor:"pointer"}},t.fieldValue," (",t.totalCount,")"))})))},data:i})};var m,O=(m="Text",function(t){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),Object(f.mdx)("div",t)}),j={_frontmatter:{}};function h(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,r={},u=Object.keys(t);for(o=0;o<u.length;o++)n=u[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(f.mdx)("wrapper",Object.assign({},j,n,{components:e,mdxType:"MDXLayout"}),Object(f.mdx)(O,{sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"},mdxType:"Text"},"Hi."),Object(f.mdx)("p",null,"I write about"),Object(f.mdx)(p,{mdxType:"TagsList"}))}h.isMDXComponent=!0;var g=function(t){return function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),Object(f.mdx)("div",e)}}("Title"),v={_frontmatter:{}};function y(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,o,r={},u=Object.keys(t);for(o=0;o<u.length;o++)n=u[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(f.mdx)("wrapper",Object.assign({},v,n,{components:e,mdxType:"MDXLayout"}),Object(f.mdx)(g,{text:"Projects",mdxType:"Title"}),Object(f.mdx)("ul",null,Object(f.mdx)("li",{parentName:"ul"},Object(f.mdx)("a",Object.assign({parentName:"li"},{href:"https://score.zone"}),"ScoreZone: 스포츠 정보 공유 커뮤니티"))))}y.isMDXComponent=!0;var E=n("oymC"),T=n("b+HC"),z=function(t){var e=t.children;return Object(u.h)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3},a:{variant:"links.listItem"}}},e)},S=function(t){var e=t.posts,n=Object(s.a)(),o=n.basePath,r=n.blogPath;return Object(u.h)(c.a,null,Object(u.h)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2}}},Object(u.h)(h,null)),Object(u.h)(E.a,{text:"Latest Posts"},Object(u.h)(a.Link,{to:Object(d.a)("/"+o+"/"+r)},"Read all posts")),Object(u.h)(T.a,{posts:e,showTags:!1}),Object(u.h)(z,null,Object(u.h)(y,null)))};n.d(e,"query",(function(){return w}));e.default=function(t){var e=t.data.allPost;return r.a.createElement(S,{posts:e.nodes})};var w="1942025912"},a9fL:function(t){t.exports=JSON.parse('{"data":{"allPost":{"group":[{"fieldValue":"DevOps","totalCount":1}]}}}')},"b+HC":function(t,e,n){"use strict";var o=n("txSG"),r=n("q1tI"),u=n.n(r),a=n("izhR"),c=n("Wbzz"),f=n("TI0m"),i=function(t){var e=t.post,n=t.showTags,r=void 0===n||n;return Object(o.h)(a.a,{mb:4},Object(o.h)(o.d.a,{as:c.Link,to:e.slug,sx:{fontSize:[1,2,3],color:"text"}},e.title),Object(o.h)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(o.h)("time",null,e.date),e.tags&&r&&Object(o.h)(u.a.Fragment,null," — ",Object(o.h)(f.a,{tags:e.tags}))))};e.a=function(t){var e=t.posts,n=t.className,r=t.showTags,u=void 0===r||r;return Object(o.h)("section",{sx:{mb:[5,6,7]},className:n},e.map((function(t){return Object(o.h)(i,{key:t.slug,post:t,showTags:u})})))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-b49262e74afb3f2e2e5c.js.map