(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(9),a=c.n(n),r=c(3),j=(c(17),c(0)),l=function(){var e=Object(s.useContext)(J),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return i(!c)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})},o=c(41),d=c(42),b=c(43),m=c(44),h=function(){return Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"ncd."}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{className:"itemBox",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"+358 46 681 5155"})]})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{className:"itemBox",children:[Object(j.jsx)(d.a,{className:"icon"}),Object(j.jsx)("span",{children:"ncongduy@gmail.com"})]})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(j.jsx)(b.a,{className:"icon"}),Object(j.jsx)("span",{children:"LinkedIn"})]})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://github.com/ncongduy?tab=repositories",target:"blank",className:"itemBox",children:[Object(j.jsx)(m.a,{className:"icon"}),Object(j.jsx)("span",{children:"GitHub"})]})})]})};function x(){var e=Object(s.useContext)(J),t=Object(r.a)(e,1)[0];return Object(j.jsx)("div",{className:t?"topbar active":"topbar",id:"topbar",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(h,{}),Object(j.jsx)(l,{})]})})}c(23);function u(){var e=Object(s.useContext)(J),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(j.jsx)("div",{className:c?"menu active":"menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return i(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return i(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"My Learning"})}),Object(j.jsx)("li",{onClick:function(){return i(!1)},className:"contact",children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})}c(24);var O=c(11),g=function(){return Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:"/myPortfolio/assets/img/me.jpg",alt:""})})})},f=function(e){var t=e.textRef;return Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi there, I'm"}),Object(j.jsx)("h1",{children:"Duy"}),Object(j.jsxs)("h3",{children:["Developer ",Object(j.jsx)("span",{ref:t})]})]})})};function p(){var e=Object(s.useRef)();return Object(s.useEffect)((function(){Object(O.a)(e.current,{showCursor:!1,backDelay:1500,backSpeed:60,strings:["Front-end"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)(g,{}),Object(j.jsx)(f,{textRef:e})]})}c(25);var v=[{id:"html&css",title:"HTML & CSS"},{id:"javascript",title:"JavaScript"},{id:"react",title:"React"},{id:"redux",title:"Redux"}],N=[{id:1,title:"W3_band",img:"/assets/img/html-css-exercise1.jpg",link:"https://ncongduy.github.io/f8-shop/w3_band/index.html"}],k=[{id:1,title:"Matching game",img:"/assets/img/matching-game.png",link:"https://ncongduy.github.io/fend-project-memory-game/"},{id:2,title:"Music Player",img:"/assets/img/music-player.jpg",link:"https://ncongduy.github.io/music-player/"}],y=[{id:1,title:"Jamming",img:"/assets/img/react1.jpg",link:"https://ncongduy.github.io/jamming/"},{id:2,title:"Alarm clock",img:"/assets/img/react2.jpg",link:"https://ncongduy.github.io/alarm-clock/"}],C=[{id:1,title:"Redux Matching Memory",img:"/assets/img/redux1.jpg",link:"https://ncongduy.github.io/redux-matching-memory/"}],w=function(e){var t=e.data;return Object(j.jsx)("div",{className:"container",children:t.map((function(e){return Object(j.jsxs)("a",{className:"item",href:e.link,target:"blank",children:[Object(j.jsx)("img",{src:"/myPortfolio"+e.img,alt:e.title,width:"440px"}),Object(j.jsx)("h3",{children:e.title})]},e.id)}))})},S=(c(26),function(e){var t=e.list,c=e.selected,s=e.setSelected;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{className:c===e.id?"portfolioList active":"portfolioList",onClick:function(){return s(e.id)},children:e.title},e.id)}))})});function B(){var e=Object(s.useState)("html&css"),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)([]),a=Object(r.a)(n,2),l=a[0],o=a[1];return Object(s.useEffect)((function(){switch(c){case"html&css":o(N);break;case"javascript":o(k);break;case"react":o(y);break;case"redux":o(C);break;default:o(N)}}),[c]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"My Learning"}),Object(j.jsx)(S,{list:v,selected:c,setSelected:i}),Object(j.jsx)(w,{data:l})]})}c(27);var M=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{href:"#intro",className:"itemBox",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"+358 46 681 5155"})]})})},L=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{href:"#intro",className:"itemBox",children:[Object(j.jsx)(d.a,{className:"icon"}),Object(j.jsx)("span",{children:"ncongduy@gmail.com"})]})})},R=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(j.jsx)(b.a,{className:"icon"}),Object(j.jsx)("span",{children:"LinkedIn"})]})})},H=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://github.com/ncongduy?tab=repositories",target:"blank",className:"itemBox",children:[Object(j.jsx)(m.a,{className:"icon"}),Object(j.jsx)("span",{children:"GitHub"})]})})};function I(){return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("h1",{children:"Contact"}),Object(j.jsxs)("div",{className:"boxContainer",children:[Object(j.jsx)(M,{}),Object(j.jsx)(L,{}),Object(j.jsx)(R,{}),Object(j.jsx)(H,{})]})]})}c(28);var J=i.a.createContext();var P=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(J.Provider,{value:[c,i],children:[Object(j.jsx)(x,{}),Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(p,{}),Object(j.jsx)(B,{}),Object(j.jsx)(I,{})]})]})})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(P,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.aec950f0.chunk.js.map