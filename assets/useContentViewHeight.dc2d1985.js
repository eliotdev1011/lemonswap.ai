var H=(t,i,e)=>new Promise((a,o)=>{var f=n=>{try{u(e.next(n))}catch(s){o(s)}},w=n=>{try{u(e.throw(n))}catch(s){o(s)}},u=n=>n.done?a(n.value):Promise.resolve(n.value).then(f,w);u((e=e.apply(t,i)).next())});import{ai as d,r,b as m,o as c}from"./index.d1971cae.js";import{u as l}from"./useWindowSizeFn.53d85835.js";const p=Symbol();function v(t){return d(t,p,{native:!0})}const g=r(0),h=r(0);function b(){function t(e){g.value=e}function i(e){h.value=e}return{headerHeightRef:g,footerHeightRef:h,setHeaderHeight:t,setFooterHeight:i}}function F(){const t=r(window.innerHeight),i=r(window.innerHeight),e=m(()=>c(t)-c(g)-c(h)||0);l(()=>{t.value=window.innerHeight},100,{immediate:!0});function a(o){return H(this,null,function*(){i.value=o})}v({contentHeight:e,setPageHeight:a,pageHeight:i})}export{b as a,F as u};
