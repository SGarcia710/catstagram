(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return 0===Object.keys(t).length}function c(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}let a;function u(t){a=t}new Set,new Set;const d=[],f=[],h=[],p=[],$=Promise.resolve();let m=!1;function g(t){h.push(t)}let y=!1;const b=new Set;function _(){if(!y){y=!0;do{for(let t=0;t<d.length;t+=1){const e=d[t];u(e),x(e.$$)}for(u(null),d.length=0;f.length;)f.pop()();for(let t=0;t<h.length;t+=1){const e=h[t];b.has(e)||(b.add(e),e())}h.length=0}while(d.length);for(;p.length;)p.pop()();m=!1,y=!1,b.clear()}}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(g)}}const k=new Set;let w;function v(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(s,l,i,f,h,p,y=[-1]){const b=a;u(s);const x=s.$$={fragment:null,ctx:null,props:p,update:t,not_equal:h,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(b?b.$$.context:[]),callbacks:n(),dirty:y,skip_bound:!1};let w=!1;if(x.ctx=i?i(s,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return x.ctx&&h(x.ctx[t],x.ctx[t]=o)&&(!x.skip_bound&&x.bound[t]&&x.bound[t](o),w&&function(t,e){-1===t.$$.dirty[0]&&(d.push(t),m||(m=!0,$.then(_)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e})):[],x.update(),w=!0,o(x.before_update),x.fragment=!!f&&f(x.ctx),l.target){if(l.hydrate){const t=(E=l.target,Array.from(E.childNodes));x.fragment&&x.fragment.l(t),t.forEach(c)}else x.fragment&&x.fragment.c();l.intro&&((v=s.$$.fragment)&&v.i&&(k.delete(v),v.i(C))),function(t,n,s){const{fragment:l,on_mount:c,on_destroy:i,after_update:a}=t.$$;l&&l.m(n,s),g((()=>{const n=c.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(g)}(s,l.target,l.anchor),_()}var v,C,E;u(b)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(w=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){v(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function E(e){let n;return{c(){var t,e,o;n=i("div"),n.innerHTML="<h1>Hello Catstagram</h1>",t=n,e="class",null==(o="main")?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)},m(t,e){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,e)},p:t,i:t,o:t,d(t){t&&c(n)}}}new class extends class{$destroy(){v(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!l(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){var e,n,o;super(),document.getElementById("svelte-19hxupt-style")||((e=i("style")).id="svelte-19hxupt-style",e.textContent="body{background-color:#676778;color:white}",n=document.head,o=e,n.appendChild(o)),C(this,t,null,E,s,{})}}({target:document.querySelector("main")})})();