!function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);p.length;)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={2:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"static/"+({0:"DynamicPage",1:"NoMatch"}[e]||e)+".b8de8c8d7db1f29a6f96.js"}(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var l=u;a.push([436,4,3]),n()}({169:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(7),i=n(4),c=n.n(i),u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:{};function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var l=o.a.createContext||function(e,t){var n,o,i,l="__create-react-context-"+((u[i="__global_unique_id__"]=(u[i]||0)+1)+"__"),f=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=s(t.props.value),t}Object(a.a)(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((a=r)===(i=o)?0!==a||1/a==1/i:a!=a&&i!=i)?n=0:(n="function"==typeof t?t(r,o):1073741823,0!==(n|=0)&&this.emitter.set(e.value,n))}var a,i},r.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[l]=c.a.object.isRequired,n);var p=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!=((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}Object(a.a)(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},r.getValue=function(){return this.context[l]?this.context[l].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return p.contextTypes=((o={})[l]=c.a.object,o),{Provider:f,Consumer:p}};t.a=l}).call(this,n(64))},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return g}));var r=n(7),o=n(0),a=n.n(o),i=(n(4),n(31)),c=n(169),u=n(29),s=n(1),l=n(170),f=n.n(l),p=(n(116),n(20)),h=(n(264),function(e){var t=Object(c.a)();return t.displayName=e,t}("Router-History")),d=function(e){var t=Object(c.a)();return t.displayName=e,t}("Router"),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}Object(r.a)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return a.a.createElement(d.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a.a.createElement(h.Provider,{children:this.props.children||null,value:this.props.history}))},t}(a.a.Component);a.a.Component;a.a.Component;var v={},y=0;function g(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,a=void 0!==o&&o,i=n.strict,c=void 0!==i&&i,u=n.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=v[n]||(v[n]={});if(r[e])return r[e];var o=[],a={regexp:f()(e,o,t),keys:o};return y<1e4&&(r[e]=a,y++),a}(n,{end:a,strict:c,sensitive:s}),o=r.regexp,i=r.keys,u=o.exec(e);if(!u)return null;var l=u[0],p=u.slice(1),h=e===l;return a&&!h?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:h,params:i.reduce((function(e,t,n){return e[t.name]=p[n],e}),{})}}),null)}var b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(d.Consumer,null,(function(t){t||Object(u.a)(!1);var n=e.props.location||t.location,r=e.props.computedMatch?e.props.computedMatch:e.props.path?g(n.pathname,e.props):t.match,o=Object(s.a)({},t,{location:n,match:r}),i=e.props,c=i.children,l=i.component,f=i.render;return Array.isArray(c)&&0===c.length&&(c=null),a.a.createElement(d.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:l?a.a.createElement(l,o):f?f(o):null:"function"==typeof c?c(o):null)}))},t}(a.a.Component);function w(e){return"/"===e.charAt(0)?e:"/"+e}function O(e,t){if(!e)return t;var n=w(e);return 0!==t.pathname.indexOf(n)?t:Object(s.a)({},t,{pathname:t.pathname.substr(n.length)})}function E(e){return"string"==typeof e?e:Object(i.e)(e)}function x(e){return function(){Object(u.a)(!1)}}function P(){}a.a.Component;var j=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this;return a.a.createElement(d.Consumer,null,(function(t){t||Object(u.a)(!1);var n,r,o=e.props.location||t.location;return a.a.Children.forEach(e.props.children,(function(e){if(null==r&&a.a.isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?g(o.pathname,Object(s.a)({},e.props,{path:i})):t.match}})),r?a.a.cloneElement(n,{location:o,computedMatch:r}):null}))},t}(a.a.Component);a.a.useContext},170:function(e,t,n){var r=n(437);e.exports=h,e.exports.parse=a,e.exports.compile=function(e,t){return c(a(e,t),t)},e.exports.tokensToFunction=c,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(e,t){for(var n,r=[],a=0,i=0,c="",l=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],h=n.index;if(c+=e.slice(i,h),i=h+f.length,p)c+=p[1];else{var d=e[i],m=n[2],v=n[3],y=n[4],g=n[5],b=n[6],w=n[7];c&&(r.push(c),c="");var O=null!=m&&null!=d&&d!==m,E="+"===b||"*"===b,x="?"===b||"*"===b,P=n[2]||l,j=y||g;r.push({name:v||a++,prefix:m||"",delimiter:P,optional:x,repeat:E,partial:O,asterisk:!!w,pattern:j?s(j):w?".*":"[^"+u(P)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function i(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function c(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"==typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",f(t)));return function(t,o){for(var a="",c=t||{},u=(o||{}).pretty?i:encodeURIComponent,s=0;s<e.length;s++){var l=e[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(a+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):u(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');a+=l.prefix+f}}else a+=l}return a}}function u(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,a=!1!==n.end,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),i+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(n.delimiter||"/"),m=i.slice(-d.length)===d;return o||(i=(m?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),i+=a?"$":o&&m?"":"(?="+d+"|$)",l(new RegExp("^"+i,f(n)),t)}function h(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(a(e,n),t,n)}(e,t,n)}},172:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(77),i=n(442),c=n(444),u=n(443),s=n(42),l=n(168);t.a=function(e){var t=e.children;return o.a.createElement(i.a,null,o.a.createElement(a.b,{to:"/"},o.a.createElement(c.a,{as:"h1",className:l.h1},"react-starter-boilerplate-hmr")),t,o.a.createElement(u.a,null),o.a.createElement("p",{className:l.pullRight},"Made with ",o.a.createElement(s.a,{name:"heart",color:"red"})," by Kedar Lachke"))}},264:function(e,t,n){"use strict";var r=n(116),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?i:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,h=Object.getPrototypeOf,d=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(d){var o=h(n);o&&o!==d&&e(t,o,r)}var i=l(n);f&&(i=i.concat(f(n)));for(var c=u(t),m=u(n),v=0;v<i.length;++v){var y=i[v];if(!(a[y]||r&&r[y]||m&&m[y]||c&&c[y])){var g=p(n,y);try{s(t,y,g)}catch(e){}}}}return t}},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=(r=a)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){c(this,r);var e=u(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.state={ready:!0},e}return s(r,n),o(r,[{key:"componentWillMount",value:function(){var t=this,n=e.delay,r=e.onRender,o=parseInt(n,10);o&&o>0?(this.setState({ready:!1}),this.timeout=setTimeout((function(){t.setState({ready:!0}),r&&"function"==typeof r&&r()}),n)):this.setState({ready:!0})}},{key:"componentWillUnmount",value:function(){this.timeout&&clearTimeout(this.timeout)}},{key:"render",value:function(){return this.state.ready?i.default.createElement(t,t.props):null}}]),r}(a.Component)}}},29:function(e,t,n){"use strict";t.a=function(e,t){if(!e)throw new Error("Invariant failed")}},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return k})),n.d(t,"d",(function(){return S})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return d}));var r=n(1);function o(e){return"/"===e.charAt(0)}function a(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var i=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],c=e&&o(e),u=t&&o(t),s=c||u;if(e&&o(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var l=i[i.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=i.length;p>=0;p--){var h=i[p];"."===h?a(i,p):".."===h?(a(i,p),f++):f&&(a(i,p),f--)}if(!s)for(;f--;f)i.unshift("..");!s||""===i[0]||i[0]&&o(i[0])||i.unshift("");var d=i.join("/");return n&&"/"!==d.substr(-1)&&(d+="/"),d};function c(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}var u=function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every((function(t,r){return e(t,n[r])}));if("object"==typeof t||"object"==typeof n){var r=c(t),o=c(n);return r!==t||o!==n?e(r,o):Object.keys(Object.assign({},t,n)).every((function(r){return e(t[r],n[r])}))}return!1},s=n(29);function l(e){return"/"===e.charAt(0)?e:"/"+e}function f(e){return"/"===e.charAt(0)?e.substr(1):e}function p(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function h(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function d(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function m(e,t,n,o){var a;"string"==typeof e?(a=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var a=t.indexOf("?");return-1!==a&&(n=t.substr(a),t=t.substr(0,a)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(a=Object(r.a)({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(e){throw e instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):e}return n&&(a.key=n),o?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=i(a.pathname,o.pathname)):a.pathname=o.pathname:a.pathname||(a.pathname="/"),a}function v(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&u(e.state,t.state)}function y(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var a="function"==typeof e?e(t,n):e;"string"==typeof a?"function"==typeof r?r(a,o):o(!0):o(!1!==a)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var g=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(e,t){t(window.confirm(e))}function w(){try{return window.history.state||{}}catch(e){return{}}}function O(e){void 0===e&&(e={}),g||Object(s.a)(!1);var t,n=window.history,o=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,a=!(-1===window.navigator.userAgent.indexOf("Trident")),i=e,c=i.forceRefresh,u=void 0!==c&&c,f=i.getUserConfirmation,v=void 0===f?b:f,O=i.keyLength,E=void 0===O?6:O,x=e.basename?h(l(e.basename)):"";function P(e){var t=e||{},n=t.key,r=t.state,o=window.location,a=o.pathname+o.search+o.hash;return x&&(a=p(a,x)),m(a,r,n)}function j(){return Math.random().toString(36).substr(2,E)}var k=y();function C(e){Object(r.a)(F,e),F.length=n.length,k.notifyListeners(F.location,F.action)}function S(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||T(P(e.state))}function R(){T(P(w()))}var A=!1;function T(e){if(A)A=!1,C();else{k.confirmTransitionTo(e,"POP",v,(function(t){t?C({action:"POP",location:e}):function(e){var t=F.location,n=L.indexOf(t.key);-1===n&&(n=0);var r=L.indexOf(e.key);-1===r&&(r=0);var o=n-r;o&&(A=!0,I(o))}(e)}))}}var _=P(w()),L=[_.key];function M(e){return x+d(e)}function I(e){n.go(e)}var U=0;function N(e){1===(U+=e)&&1===e?(window.addEventListener("popstate",S),a&&window.addEventListener("hashchange",R)):0===U&&(window.removeEventListener("popstate",S),a&&window.removeEventListener("hashchange",R))}var $=!1;var F={length:n.length,action:"POP",location:_,createHref:M,push:function(e,t){var r=m(e,t,j(),F.location);k.confirmTransitionTo(r,"PUSH",v,(function(e){if(e){var t=M(r),a=r.key,i=r.state;if(o)if(n.pushState({key:a,state:i},null,t),u)window.location.href=t;else{var c=L.indexOf(F.location.key),s=L.slice(0,c+1);s.push(r.key),L=s,C({action:"PUSH",location:r})}else window.location.href=t}}))},replace:function(e,t){var r=m(e,t,j(),F.location);k.confirmTransitionTo(r,"REPLACE",v,(function(e){if(e){var t=M(r),a=r.key,i=r.state;if(o)if(n.replaceState({key:a,state:i},null,t),u)window.location.replace(t);else{var c=L.indexOf(F.location.key);-1!==c&&(L[c]=r.key),C({action:"REPLACE",location:r})}else window.location.replace(t)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(e){void 0===e&&(e=!1);var t=k.setPrompt(e);return $||(N(1),$=!0),function(){return $&&($=!1,N(-1)),t()}},listen:function(e){var t=k.appendListener(e);return N(1),function(){N(-1),t()}}};return F}var E={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+f(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:f,decodePath:l},slash:{encodePath:l,decodePath:l}};function x(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function P(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function j(e){window.location.replace(x(window.location.href)+"#"+e)}function k(e){void 0===e&&(e={}),g||Object(s.a)(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),o=n.getUserConfirmation,a=void 0===o?b:o,i=n.hashType,c=void 0===i?"slash":i,u=e.basename?h(l(e.basename)):"",f=E[c],v=f.encodePath,w=f.decodePath;function O(){var e=w(P());return u&&(e=p(e,u)),m(e)}var k=y();function C(e){Object(r.a)(F,e),F.length=t.length,k.notifyListeners(F.location,F.action)}var S=!1,R=null;function A(){var e,t,n=P(),r=v(n);if(n!==r)j(r);else{var o=O(),i=F.location;if(!S&&(t=o,(e=i).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(R===d(o))return;R=null,function(e){if(S)S=!1,C();else{k.confirmTransitionTo(e,"POP",a,(function(t){t?C({action:"POP",location:e}):function(e){var t=F.location,n=M.lastIndexOf(d(t));-1===n&&(n=0);var r=M.lastIndexOf(d(e));-1===r&&(r=0);var o=n-r;o&&(S=!0,I(o))}(e)}))}}(o)}}var T=P(),_=v(T);T!==_&&j(_);var L=O(),M=[d(L)];function I(e){t.go(e)}var U=0;function N(e){1===(U+=e)&&1===e?window.addEventListener("hashchange",A):0===U&&window.removeEventListener("hashchange",A)}var $=!1;var F={length:t.length,action:"POP",location:L,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=x(window.location.href)),n+"#"+v(u+d(e))},push:function(e,t){var n=m(e,void 0,void 0,F.location);k.confirmTransitionTo(n,"PUSH",a,(function(e){if(e){var t=d(n),r=v(u+t);if(P()!==r){R=t,function(e){window.location.hash=e}(r);var o=M.lastIndexOf(d(F.location)),a=M.slice(0,o+1);a.push(t),M=a,C({action:"PUSH",location:n})}else C()}}))},replace:function(e,t){var n=m(e,void 0,void 0,F.location);k.confirmTransitionTo(n,"REPLACE",a,(function(e){if(e){var t=d(n),r=v(u+t);P()!==r&&(R=t,j(r));var o=M.indexOf(d(F.location));-1!==o&&(M[o]=t),C({action:"REPLACE",location:n})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(e){void 0===e&&(e=!1);var t=k.setPrompt(e);return $||(N(1),$=!0),function(){return $&&($=!1,N(-1)),t()}},listen:function(e){var t=k.appendListener(e);return N(1),function(){N(-1),t()}}};return F}function C(e,t,n){return Math.min(Math.max(e,t),n)}function S(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,o=t.initialEntries,a=void 0===o?["/"]:o,i=t.initialIndex,c=void 0===i?0:i,u=t.keyLength,s=void 0===u?6:u,l=y();function f(e){Object(r.a)(w,e),w.length=w.entries.length,l.notifyListeners(w.location,w.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=C(c,0,a.length-1),v=a.map((function(e){return m(e,void 0,"string"==typeof e?p():e.key||p())})),g=d;function b(e){var t=C(w.index+e,0,w.entries.length-1),r=w.entries[t];l.confirmTransitionTo(r,"POP",n,(function(e){e?f({action:"POP",location:r,index:t}):f()}))}var w={length:v.length,action:"POP",location:v[h],index:h,entries:v,createHref:g,push:function(e,t){var r=m(e,t,p(),w.location);l.confirmTransitionTo(r,"PUSH",n,(function(e){if(e){var t=w.index+1,n=w.entries.slice(0);n.length>t?n.splice(t,n.length-t,r):n.push(r),f({action:"PUSH",location:r,index:t,entries:n})}}))},replace:function(e,t){var r=m(e,t,p(),w.location);l.confirmTransitionTo(r,"REPLACE",n,(function(e){e&&(w.entries[w.index]=r,f({action:"REPLACE",location:r}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(e){var t=w.index+e;return t>=0&&t<w.entries.length},block:function(e){return void 0===e&&(e=!1),l.setPrompt(e)},listen:function(e){return l.appendListener(e)}};return w}},34:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return c}));var r=new Map,o=function(e){0},a={marks:{}},i=function(e,t){void 0===e&&(e=a),o(),t&&t.length&&t.forEach((function(t){return e.marks[t]=!0}))},c=function(e,t){r.set(JSON.stringify(e),{mark:e,loadable:t})}}).call(this,n(64))},436:function(e,t,n){e.exports=n(439)},437:function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},438:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},439:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(60),i=n.n(a),c=n(77),u=n(17);var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var f=n(59),p=n(50),h=function(e){return(e.match(/`imported_(.*?)_component`/g)||[]).map((function(e){return e&&(e.match(/`imported_(.*?)_component`/i)||[])[1].replace(/['"]/g,"")}))},d=function(e){return String(e).replace(/(["'])/g,"`").replace(/\/\*([^\*]*)\*\//gi,"").replace(/Promise.resolve\([^)]*\)/,"-we()").replace(/\w+.e\([^)]*\)/,"-we()").replace(/\w+.\w.bind\(/,"-wbind(").replace(/\w+.bind\(/,"-wbind(").replace(/([A-z0-9_]+)\(`imported_/g,"$(`imported_")},m=n(34),v=[],y=[],g=new WeakMap,b=new Map,w=function(e){return y=y.filter((function(t){return t!==e}))},O=function(e,t){return!f.a.checkSignatures&&t.join("|")||e};function E(e,t){void 0===t&&(t=!0);var n,r=e,o=function(){return Promise.all([r()].concat(v.map((function(e){return e()})))).then((function(e){return e[0]}))},a=d(r),i=h(a),c={mark:i,resolution:new Promise((function(e){n=e})),done:!1,ok:!1,error:null,payload:void 0,promise:void 0,isLoading:function(){return!!this.promise&&!this.done},reset:function(){this.done=!1,this.ok=!0,this.payload=void 0,this.promise=void 0},replaceImportFunction:function(e){r=e},get importer(){return r},then:function(e,t){return this.promise?this.promise.then(e,t):(t&&t(),Promise.reject())},loadIfNeeded:function(){return this.error&&this.reset(),this.promise||this.load(),this.promise},tryResolveSync:function(e){if(this.done){var t=e(this.payload);return{then:function(e){return e(t),Promise.resolve(t)}}}return this.loadIfNeeded().then(e)},reload:function(){return this.promise?(this.promise=void 0,this.load()):Promise.resolve()},_probeChanges:function(){var e=this;return Promise.resolve(r()).then((function(t){return t!==e.payload})).catch((function(e){throw e}))},load:function(){var e,t=this;if(!this.promise){var r=this.promise=o().then((function(e){return t.done=!0,t.ok=!0,t.payload=e,t.error=null,w(r),n(e),e}),(function(e){throw t.done=!0,t.ok=!1,t.error=e,w(r),e}));e=r,y.push(e)}return this.promise}};return i&&i.length?(b.set(O(a,i),c),Object(m.a)(i,c)):console.warn("react-imported-component: no mark found at",r,"Please check babel plugin or macro setup, as well as imported-component's limitations. See https://github.com/theKashey/react-imported-component/issues/147"),p.a&&t&&c.load(),c}var x=!1;function P(e){if("resolution"in e)return e;if(g.has(e))return g.get(e);var t=d(e),n=h(String(t)),r=O(t,n);if(b.has(r)){var o=b.get(r);return o.replaceImportFunction(e),o}n&&b.forEach((function(t){var r=t.mark,o=t.importer;r[0]===n[1]&&r.join("|")===n.join("|")&&console.warn("Another loadable found for an existing mark. That's possible, but signatures must match (https://github.com/theKashey/react-imported-component/issues/192):",{mark:r,knownImporter:o,currentImported:e,currentSignature:String(e),knownSignature:String(o)})}));var a=E(e);return g.set(e,a),a}var j=function(e){return e.default?e.default:e},k=r.createContext(m.b);k.Consumer;function C(e,t){void 0===t&&(t={});var n=Object(r.useContext)(k),o=e.done,a=Object(r.useState)({})[1];Object(r.useMemo)((function(){return!1!==t.import&&(!1!==t.track&&Object(m.c)(n,e.mark),o||function(e,t){var n=function(){return t({})};e.loadIfNeeded().then(n,n)}(e,a)),!0}),[e,t.import,t.track]),p.a&&!x&&e.isLoading()&&console.error("react-imported-component: trying to render a component which is not ready. You should `await whenComponentsReady()`?");var i=Object(r.useCallback)((function(){e&&(e.reset(),a({}))}),[e]);return Object(r.useMemo)((function(){return{loadable:e,retry:i,update:a}}),[e,i,a])}function S(e,t,n){void 0===t&&(t=j),void 0===n&&(n={});var o=C(P(e),n),a=o.loadable,i=o.retry,c=a.error,u=a.done,s=a.payload,l=a.isLoading();return Object(r.useMemo)((function(){return c?{error:c,loadable:a,retry:i}:u?{imported:t(s),loadable:a,retry:i}:{loading:l,loadable:a,retry:i}}),[c,l,s,a])}function R(e){var t=S(e.loadable),n=t.loading,o=t.error,a=t.loadable,i=t.imported,c=t.retry;if(n&&e.async)throw a.resolution;if("render"in e&&e.render)return e.render(i,{loading:n,error:o},e.forwardProps);if(i)return r.createElement(i,s({},e.forwardProps,{ref:e.forwardRef}));if(n){if(e.async)throw a.resolution;return e.LoadingComponent?r.createElement(e.LoadingComponent,s({},e.forwardProps)):null}if(o){if(console.error("react-imported-component",o),f.a.rethrowErrors&&setTimeout((function(){throw o})),e.ErrorComponent)return r.createElement(e.ErrorComponent,s({retryImport:c,error:o},e.forwardProps));throw o}return null}function A(e,t){void 0===t&&(t={});var n=P(e),o=r.forwardRef((function(e,o){var a=e.importedProps,i=void 0===a?{}:a,c=l(e,["importedProps"]),u=s({},t,i);return r.createElement(R,{loadable:n,LoadingComponent:u.LoadingComponent,ErrorComponent:u.ErrorComponent,onError:u.onError,render:u.render,async:u.async,forwardProps:c||{},forwardRef:o})}));return o.preload=function(){return n.load().catch((function(){return{}})),n.resolution},o.done=n.resolution,o}r.lazy;var T=A,_=n(254),L=n(172),M=n(484),I=function(){return o.a.createElement(M.a,null,["React 16","React Router 4","Semantic UI as the CSS Framework","Hot Module Replacement","CSS Autoprefixer","CSS Modules with SourceMap","Stage 1 Preset","Webpack 4","Code splitting by Route and Vendor",'<a href="https://github.com/th0r/webpack-bundle-analyzer" target="_blank" rel="noopener noreferrer">Webpack Bundle Analyzer</a>',"Take a look at <a href='https://github.com/esausilva/react-starter-boilerplate-hmr/blob/master/package.json' target='_blank' rel='oopener noreferrer'>package.json</a>"].map((function(e,t){return o.a.createElement(M.a.Item,{key:t},o.a.createElement(M.a.Icon,{name:"checkmark"}),o.a.createElement(M.a.Content,null,o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e}})))})))},U=(n(126),n(94),n(42),function(){return o.a.createElement(L.a,null,o.a.createElement(_.a,{stackable:!0,columns:2},o.a.createElement(_.a.Row,null,o.a.createElement(_.a.Column,null,o.a.createElement(I,null),o.a.createElement(c.b,{to:"/dynamic"},"Navigate to Dynamic Page")),o.a.createElement(_.a.Column,null))))}),N=n(485),$=n(265),F=n.n($)()({delay:300})((function(){return o.a.createElement(N.a,{active:!0,size:"massive"})})),H=T((function(){return n.e(0).then(n.bind(null,487))}),{LoadingComponent:F}),W=T((function(){return n.e(1).then(n.bind(null,488))}),{LoadingComponent:F}),B=function(){return o.a.createElement(c.a,null,o.a.createElement("div",{style:{background:"#fefefe"}},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",component:U}),o.a.createElement(u.a,{exact:!0,path:"/dynamic",component:H}),o.a.createElement(u.a,{component:W}))))},D=n(266);var K;K=B,i.a.hydrate(o.a.createElement(K,{className:D.fontFae}),document.getElementById("root")),console.log("/sw.js"),navigator.serviceWorker.register("/sw.js").then((function(e){console.warn("response ->"+e)}))},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r="undefined"==typeof window},59:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var r=n(50),o={hot:(!!e).hot,SSR:r.a,rethrowErrors:!1,fileFilter:function(e){return 0!==e.indexOf("http")},checkSignatures:!0},a={get hot(){return o.hot},get SSR(){return o.SSR},get rethrowErrors(){return o.rethrowErrors},get fileFilter(){return o.fileFilter},get checkSignatures(){return o.checkSignatures}}}).call(this,n(438)(e))},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));var r=n(17),o=n(7),a=n(0),i=n.n(a),c=n(31),u=(n(4),n(1)),s=n(20),l=n(29),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).history=Object(c.a)(t.props),t}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.b,{history:this.history,children:this.props.children})},t}(i.a.Component);i.a.Component;var p=function(e,t){return"function"==typeof e?e(t):e},h=function(e,t){return"string"==typeof e?Object(c.c)(e,null,null,t):e},d=function(e){return e},m=i.a.forwardRef;void 0===m&&(m=d);var v=m((function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,a=Object(s.a)(e,["innerRef","navigate","onClick"]),c=a.target,l=Object(u.a)({},a,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return l.ref=d!==m&&t||n,i.a.createElement("a",l)}));var y=m((function(e,t){var n=e.component,o=void 0===n?v:n,a=e.replace,c=e.to,f=e.innerRef,y=Object(s.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(r.d.Consumer,null,(function(e){e||Object(l.a)(!1);var n=e.history,r=h(p(c,e.location),e.location),s=r?n.createHref(r):"",v=Object(u.a)({},y,{href:s,navigate:function(){var t=p(c,e.location);(a?n.replace:n.push)(t)}});return d!==m?v.ref=t||f:v.innerRef=f,i.a.createElement(o,v)}))})),g=function(e){return e},b=i.a.forwardRef;void 0===b&&(b=g);b((function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,a=e.activeClassName,c=void 0===a?"active":a,f=e.activeStyle,d=e.className,m=e.exact,v=e.isActive,w=e.location,O=e.sensitive,E=e.strict,x=e.style,P=e.to,j=e.innerRef,k=Object(s.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(r.d.Consumer,null,(function(e){e||Object(l.a)(!1);var n=w||e.location,a=h(p(P,n),n),s=a.pathname,C=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),S=C?Object(r.e)(n.pathname,{path:C,exact:m,sensitive:O,strict:E}):null,R=!!(v?v(S,n):S),A=R?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(d,c):d,T=R?Object(u.a)({},x,{},f):x,_=Object(u.a)({"aria-current":R&&o||null,className:A,style:T,to:a},k);return g!==b?_.ref=t||j:_.innerRef=j,i.a.createElement(y,_)}))}))}});
//# sourceMappingURL=app.b8de8c8d7db1f29a6f96.js.map