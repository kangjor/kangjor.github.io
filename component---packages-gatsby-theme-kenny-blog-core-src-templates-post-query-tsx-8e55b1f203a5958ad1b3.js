(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+wmF":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("txSG"),s=n("Wbzz"),a=n("4n+/"),u=n("tJyV");t.a=e=>{let{tags:t}=e;const{tagsPath:n,basePath:r}=Object(a.a)();return o.a.createElement(o.a.Fragment,null,t.map((e,t)=>o.a.createElement(o.a.Fragment,{key:e.slug},!!t&&", ",o.a.createElement(i.d.a,{as:s.Link,to:Object(u.a)(`/${r}/${n}/${e.slug}`)},e.name))))}},"4M6O":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];var a=this,u=function(){r=null,n||e.apply(a,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(u,t),c&&e.apply(a,i)}},t.isReactElement=s,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!s(t[r]))return!0;return!1})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function s(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},"505s":function(e,t,n){"use strict";n.r(t);var r=n("rePB"),o=n("q1tI"),i=n.n(o),s=n("txSG"),a=n("A2+M"),u=n("DLlR"),c=n("+wmF"),l=n("mpcD"),d=n("ORnI"),p=n("4n+/");const f=["32px","16px","8px","4px"].map(e=>`rgba(0, 0, 0, 0.15) 0px ${e} ${e} 0px`);var m=e=>{let{data:{post:t}}=e;const{siteUrl:n}=Object(p.a)();let r={url:""+(n+t.slug),identifier:t.id,title:t.title};return Object(s.h)(u.a,null,Object(s.h)(l.a,{title:t.title,description:t.description?t.description:t.excerpt,image:t.banner?t.banner.childImageSharp.resize.src:void 0}),Object(s.h)(s.d.h2,null,t.title),Object(s.h)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(s.h)("time",null,t.date),t.tags&&Object(s.h)(i.a.Fragment,null," — ",Object(s.h)(c.a,{tags:t.tags}))," — ",Object(s.h)("span",null,t.timeToRead," min read")),Object(s.h)(d.CommentCount,{config:r,placeholder:"..."}),Object(s.h)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:f.join(", ")}}},Object(s.h)(a.MDXRenderer,null,t.body),Object(s.h)(d.Disqus,{sx:{mt:70},config:r})))};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=e=>{let{data:t}=e;const{post:n}=t;return i.a.createElement(m,{data:b(b({},t),{},{post:n})})}},"5Q0V":function(e,t,n){var r=n("cDf5").default;e.exports=function(e,t){if("object"!=r(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"A2+M":function(e,t,n){const r=n("X8hv");e.exports={MDXRenderer:r}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},ORnI:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VUT9"));t.Disqus=o.default;var i=r(n("qASQ"));t.CommentCount=i.default;var s=r(n("vAJ3"));t.CommentEmbed=s.default;var a=o.default;t.default=a},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.__esModule=!0,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},VUT9:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),a=r(n("q1tI")),u=r(n("17x9")),c=n("4M6O"),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="blogbykennycom",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,c.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,c.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(r){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);var t=window.document.querySelector('[id^="dsq-app"]');if(t){var n=window.document.getElementById(t.id);n.parentNode.removeChild(n)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return a.default.createElement("div",(0,o.default)({id:"disqus_thread"},t))},t}(a.default.Component);t.default=l,l.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string,language:u.default.string,remoteAuthS3:u.default.string,apiKey:u.default.string}),className:u.default.string}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},X8hv:function(e,t,n){var r=n("RIqP"),o=n("sXyB"),i=n("lSNA"),s=n("QILm");const a=["scope","children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const l=n("q1tI"),{mdx:d}=n("7ljp"),{useMDXScope:p}=n("BfwJ");e.exports=function(e){let{scope:t,children:n}=e,i=s(e,a);const u=p(t),f=l.useMemo(()=>{if(!n)return null;const e=c({React:l,mdx:d},u),t=Object.keys(e),i=t.map(t=>e[t]);return o(Function,["_fn"].concat(t,[""+n])).apply(void 0,[{}].concat(r(i)))},[n,t]);return l.createElement(f,c({},i))}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},lSNA:function(e,t,n){var r=n("o5UB");e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},o5UB:function(e,t,n){var r=n("cDf5").default,o=n("5Q0V");e.exports=function(e){var t=o(e,"string");return"symbol"==r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},qASQ:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),a=r(n("q1tI")),u=r(n("17x9")),c=n("4M6O"),l=(0,c.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="blogbykennycom",n}(0,s.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,c.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,c.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,c.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.className,r=e.placeholder,s=(0,i.default)(e,["config","className","placeholder"]),u="disqus-comment-count"+(n?" "+n:"");return a.default.createElement("span",(0,o.default)({className:u,"data-disqus-identifier":t.identifier,"data-disqus-url":t.url},s),r)},t}(a.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:u.default.shape({identifier:u.default.string,title:u.default.string,url:u.default.string}),placeholder:u.default.string,className:u.default.string}},sXyB:function(e,t,n){var r=n("SksO"),o=n("b48C");function i(t,n,s){return o()?(e.exports=i=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},e.exports.__esModule=!0,e.exports.default=e.exports),i.apply(null,arguments)}e.exports=i,e.exports.__esModule=!0,e.exports.default=e.exports},vAJ3:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),s=r(n("VbXa")),a=r(n("q1tI")),u=r(n("17x9")),c=function(e){function t(){return e.apply(this,arguments)||this}(0,s.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){var e=this.props,t=(e.commentId,e.showMedia,e.showParentComment,(0,i.default)(e,["commentId","showMedia","showParentComment"]));return a.default.createElement("iframe",(0,o.default)({src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",title:"embedded-comment"},t))},t}(a.default.Component);t.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:u.default.oneOfType([u.default.number,u.default.string]).isRequired,width:u.default.number,height:u.default.number,showMedia:u.default.bool,showParentComment:u.default.bool}}}]);
//# sourceMappingURL=component---packages-gatsby-theme-kenny-blog-core-src-templates-post-query-tsx-8e55b1f203a5958ad1b3.js.map