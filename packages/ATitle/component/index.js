"use strict";var script={name:"ATitle"};function normalizeComponent(e,n,t,i,s,a,o,r,l,_){"boolean"!=typeof o&&(l=r,r=o,o=!1);var d,c="function"==typeof t?t.options:t;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),a?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,l(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=d):n&&(d=o?function(){n.call(this,_(this.$root.$options.shadowRoot))}:function(e){n.call(this,r(e))}),d)if(c.functional){var p=c.render;c.render=function(e,n){return d.call(n),p(e,n)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,d):[d]}return t}var normalizeComponent_1=normalizeComponent,isOldIE="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function createInjector(e){return function(e,n){return addStyle(e,n)}}var HEAD=document.head||document.getElementsByTagName("head")[0],styles={};function addStyle(e,n){var t=isOldIE?n.media||"default":e,i=styles[t]||(styles[t]={ids:new Set,styles:[]});if(!i.ids.has(e)){i.ids.add(e);var s=n.source;if(n.map&&(s+="\n/*# sourceURL="+n.map.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),i.element||(i.element=document.createElement("style"),i.element.type="text/css",n.media&&i.element.setAttribute("media",n.media),HEAD.appendChild(i.element)),"styleSheet"in i.element)i.styles.push(s),i.element.styleSheet.cssText=i.styles.filter(Boolean).join("\n");else{var a=i.ids.size-1,o=document.createTextNode(s),r=i.element.childNodes;r[a]&&i.element.removeChild(r[a]),r.length?i.element.insertBefore(o,r[a]):i.element.appendChild(o)}}}var browser=createInjector;const __vue_script__=script;var __vue_render__=function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("title boladao")])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=function(e){e&&e("data-v-5f758c62_0",{source:".a-title {\n  display: flex;\n  margin: 0;\n}\n.a-title > .icon {\n  margin-right: 10px;\n  vertical-align: bottom;\n  fill: black;\n}\n\n/*# sourceMappingURL=ATitle.vue.map */",map:{version:3,sources:["/Users/convenia/Desktop/convenia-spa/coemponents/packages/ATitle/ATitle.vue","ATitle.vue"],names:[],mappings:"AAWA;EACA,aAAA;EACA,SAAA;ACVA;ADcA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;ACZA;;AAEA,qCAAqC",file:"ATitle.vue",sourcesContent:["<template>\n  <div>title boladao</div>\n</template>\n\n<script>\nexport default {\n  name: 'ATitle'\n}\n<\/script>\n\n<style lang=\"scss\">\n.a-title {\n  display: flex;\n  margin: 0;\n\n  & > .text {}\n\n  & > .icon {\n    margin-right: 10px;\n    vertical-align: bottom;\n    fill: black;\n  }\n}\n</style>\n",".a-title {\n  display: flex;\n  margin: 0;\n}\n.a-title > .icon {\n  margin-right: 10px;\n  vertical-align: bottom;\n  fill: black;\n}\n\n/*# sourceMappingURL=ATitle.vue.map */"]},media:void 0})},__vue_scope_id__=void 0,__vue_module_identifier__=void 0,__vue_is_functional_template__=!1;var ATitle=normalizeComponent_1({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,void 0,!1,void 0,browser,void 0);module.exports=ATitle;
//# sourceMappingURL=index.js.map
