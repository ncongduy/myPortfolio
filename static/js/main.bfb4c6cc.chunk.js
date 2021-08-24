(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,s){},,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),i=s.n(c),n=s(8),a=s.n(n),r=s(3),j=(s(17),s(41)),l=s(42),d=s(43),o=s(44),m=s(0),b=function(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})};function h(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:t?"topbar active":"topbar",id:"topbar",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#intro",className:"logo",children:"ncd."}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("div",{className:"itemBox",children:[Object(m.jsx)(j.a,{className:"icon"}),Object(m.jsx)("span",{children:"+358 46 681 5155"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("div",{className:"itemBox",children:[Object(m.jsx)(l.a,{className:"icon"}),Object(m.jsx)("span",{children:"ncongduy@gmail.com"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsx)("span",{children:"LinkedIn"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://github.com/ncongduy?tab=repositories",target:"blank",className:"itemBox",children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("span",{children:"GitHub"})]})})]}),Object(m.jsx)(b,{menuOpen:t,setMenuOpen:s})]})})}s(23);function O(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"menu "+(t&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"My Learning"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},className:"contact",children:Object(m.jsx)("a",{href:"#contact",children:"Contact"})})]})})}s(24);var x=s(10);function u(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(x.a)(e.current,{showCursor:!1,backDelay:1500,backSpeed:60,strings:["Front-end","Back-end"]})}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{src:"/myPortfolio/assets/img/me.jpg",alt:""})})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"Hi there, I'm"}),Object(m.jsx)("h1",{children:"Duy"}),Object(m.jsxs)("h3",{children:["Developer ",Object(m.jsx)("span",{ref:e})]})]})})]})}s(25),s(26);function p(e){var t=e.id,s=e.title,c=e.active,i=e.setSelected;return Object(m.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return i(t)},children:s})}var g=[{id:1,title:"W3_band",img:"/assets/img/html-css-exercise1.jpg",link:"https://ncongduy.github.io/f8-shop/w3_band/index.html"},{id:2,title:"HTML and CSS website",img:"/assets/img/html-css.jpg",link:"#"}],f=[{id:1,title:"Matching game",img:"/assets/img/matching-game.png",link:"https://ncongduy.github.io/fend-project-memory-game/"},{id:2,title:"JavaScript app",img:"/assets/img/javascript.jpg",link:"#"}],v=[{id:1,title:"React app",img:"/assets/img/react.jpg",link:"#"},{id:2,title:"React app",img:"/assets/img/react.jpg",link:"#"}],N=[{id:1,title:"Redux app",img:"/assets/img/redux.jpg",link:"#"},{id:2,title:"Redux app",img:"/assets/img/redux.jpg",link:"#"}],k=[{id:1,title:"Node.js app",img:"/assets/img/node.jpg",link:"#"},{id:2,title:"Node.js app",img:"/assets/img/node.jpg",link:"#"}];function y(){var e=Object(c.useState)("html&css"),t=Object(r.a)(e,2),s=t[0],i=t[1],n=Object(c.useState)([]),a=Object(r.a)(n,2),j=a[0],l=a[1];return Object(c.useEffect)((function(){switch(s){case"html&css":l(g);break;case"javascript":l(f);break;case"react":l(v);break;case"redux":l(N);break;case"node.js":l(k);break;default:l(g)}}),[s]),Object(m.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)("h1",{children:"My Learning"}),Object(m.jsx)("ul",{children:[{id:"html&css",title:"HTML & CSS"},{id:"javascript",title:"JavaScript"},{id:"react",title:"React"},{id:"redux",title:"Redux"},{id:"node.js",title:"Node.js"}].map((function(e){return Object(m.jsx)(p,{id:e.id,title:e.title,active:s===e.id,setSelected:i})}))}),Object(m.jsx)("div",{className:"container",children:j.map((function(e){return Object(m.jsxs)("a",{className:"item",href:e.link,target:"blank",children:[Object(m.jsx)("img",{src:"/myPortfolio"+e.img,alt:e.title,width:"440px"}),Object(m.jsx)("h3",{children:e.title})]})}))})]})}s(27);function C(){return Object(m.jsxs)("div",{className:"contact",id:"contact",children:[Object(m.jsx)("h1",{children:"Contact"}),Object(m.jsxs)("div",{className:"boxContainer",children:[Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("div",{href:"#intro",className:"itemBox",children:[Object(m.jsx)(j.a,{className:"icon"}),Object(m.jsx)("span",{children:"+358 46 681 5155"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("div",{href:"#intro",className:"itemBox",children:[Object(m.jsx)(l.a,{className:"icon"}),Object(m.jsx)("span",{children:"ncongduy@gmail.com"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsx)("span",{children:"LinkedIn"})]})}),Object(m.jsx)("div",{className:"itemContainer",children:Object(m.jsxs)("a",{href:"https://github.com/ncongduy?tab=repositories",target:"blank",className:"itemBox",children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("span",{children:"GitHub"})]})})]})]})}s(28);var w=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],i=t[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(h,{menuOpen:s,setMenuOpen:i}),Object(m.jsx)(O,{menuOpen:s,setMenuOpen:i}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(u,{}),Object(m.jsx)(y,{}),Object(m.jsx)(C,{})]})]})};a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.bfb4c6cc.chunk.js.map