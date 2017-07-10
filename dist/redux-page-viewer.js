!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-addons-css-transition-group"),require("react-redux")):"function"==typeof define&&define.amd?define("ReduxPageViewer",["react","prop-types","react-addons-css-transition-group","react-redux"],t):"object"==typeof exports?exports.ReduxPageViewer=t(require("react"),require("prop-types"),require("react-addons-css-transition-group"),require("react-redux")):e.ReduxPageViewer=t(e.React,e["prop-types"],e["react-addons-css-transition-group"],e["react-redux"])}(this,function(e,t,r,n){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=n(o),i=r(4),u=(n(i),function(e){var t=e.children;return a.default.createElement("div",{className:"page"},t)});t.default=u},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(!e&&"object"===!(void 0===e?"undefined":c(e)))throw"Pages needs to be an object map.";var t={};for(var r in e){var n=u(r);e[r];t[r]={id:r,slug:n,component:e[r]}}this._pages=Object.assign({},this._pages,t)}function a(){for(var e in this._pages)return Object.assign({},this._pages[e]);return null}function i(e){var t=function(t){return e.id===t.id},r=function(t){return e===t.id},n="object"===(void 0===e?"undefined":c(e))?t:r;if(!e)throw"Page missing.";var o=Object.assign({},this._pages);for(var a in o)if(n(o[a]))return o[a];return null}function u(e){return e.toLowerCase().replace(/\s/g,"-")}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=r(0),f=(n(s),r(1)),l=(n(f),{BACK:"back",BACKWARD:"back",FORWARD:"next",NEXT:"next"}),p={combinePages:o,Direction:l,getFirstPage:a,getPage:i,_pages:[]};t.default=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.init=t.gotoPage=void 0;var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a={GOTO_PAGE:"REDUX_PAGE_VIEWER_GOTO_PAGE",INIT:"REDUX_PAGE_VIEWER_INIT"};t.default=a;t.gotoPage=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=o.default.getPage(e);return{type:a.GOTO_PAGE,payload:{page:r,pageProps:t}}},t.init=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{type:a.INIT,payload:{page:e?o.default.getPage(e):o.default.getFirstPage(),pageProps:t||null}}}},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),f=n(s),l=r(4),p=(n(l),r(9)),d=n(p),g=r(10),y=r(1),b=n(y);r(8);var P=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.page,r=e.pageProps,n=e.transitionDirection;return t?f.default.createElement("div",{className:"page-viewer"},f.default.createElement(d.default,{className:"page-wrapper trans-dir-"+n,transitionName:"pageFade",transitionEnterTimeout:750,transitionLeaveTimeout:300},f.default.createElement(b.default,{key:t.slug},f.default.createElement(t.component,u({key:t.slug},r))))):null}}]),t}(s.Component);P.propTypes={transitionDirection:f.default.PropTypes.string.isRequired};var v=function(e){return{page:e.pageViewer.activePage,pageProps:e.pageViewer.activePageProps,transitionDirection:e.pageViewer.transitionDirection}},_=function(e){return{}};t.default=(0,g.connect)(v,_)(P)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1];switch(t.type){case u.default.GOTO_PAGE:return Object.assign({},e,{activePage:t.payload.page,activePageProps:t.payload.pageProps});case u.default.INIT:return Object.assign({},e,{activePage:t.payload.page||s.default.getFirstPage(),activePageProps:t.payload.pageProps||null});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var a=r(0),i=(n(a),r(3)),u=n(i),c=r(2),s=n(c),f={activePage:null,activePageProps:null,transitionDirection:s.default.Direction.FORWARD}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3);Object.defineProperty(t,"ActionTypes",{enumerable:!0,get:function(){return n(o).default}}),Object.defineProperty(t,"gotoPage",{enumerable:!0,get:function(){return o.gotoPage}}),Object.defineProperty(t,"init",{enumerable:!0,get:function(){return o.init}});var a=r(1);Object.defineProperty(t,"Page",{enumerable:!0,get:function(){return n(a).default}});var i=r(2);Object.defineProperty(t,"PageUtil",{enumerable:!0,get:function(){return n(i).default}});var u=r(5);Object.defineProperty(t,"PageViewer",{enumerable:!0,get:function(){return n(u).default}});var c=r(6);Object.defineProperty(t,"reducer",{enumerable:!0,get:function(){return n(c).default}})},function(e,t){},function(e,t){e.exports=r},function(e,t){e.exports=n}])});