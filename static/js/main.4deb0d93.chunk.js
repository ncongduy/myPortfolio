(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),n=c(9),a=c.n(n),r=c(3),j=(c(17),c(0)),l=function(){var e=Object(i.useContext)(I),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return s(!c)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})},o=c(41),d=c(42),b=c(43),m=c(44),h=function(){return Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"ncd."}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{className:"itemBox",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"+358 46 681 5155"})]})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{className:"itemBox",children:[Object(j.jsx)(d.a,{className:"icon"}),Object(j.jsx)("span",{children:"ncongduy@gmail.com"})]})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(j.jsx)(b.a,{className:"icon"}),Object(j.jsx)("span",{children:"LinkedIn"})]})}),Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://github.com/ncongduy",target:"blank",className:"itemBox",children:[Object(j.jsx)(m.a,{className:"icon"}),Object(j.jsx)("span",{children:"GitHub"})]})})]})};function x(){var e=Object(i.useContext)(I),t=Object(r.a)(e,1)[0];return Object(j.jsx)("div",{className:t?"topbar active":"topbar",id:"topbar",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(h,{}),Object(j.jsx)(l,{})]})})}c(23);function O(){var e=Object(i.useContext)(I),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("div",{className:c?"menu active":"menu",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"My Learning"})}),Object(j.jsx)("li",{onClick:function(){return s(!1)},className:"contact",children:Object(j.jsx)("a",{href:"#contact",children:"Contact"})})]})})}c(24);var u=c(11),f=function(){return Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"img-container",children:Object(j.jsx)("img",{src:"/myPortfolio/assets/img/me.jpg",alt:""})})})},g=function(e){var t=e.textRef;return Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi there, I'm"}),Object(j.jsx)("h1",{children:"Duy"}),Object(j.jsxs)("h3",{children:["Developer ",Object(j.jsx)("span",{ref:t})]})]})})};function p(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(u.a)(e.current,{showCursor:!1,backDelay:1500,backSpeed:60,strings:["Front-end"]})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)(f,{}),Object(j.jsx)(g,{textRef:e})]})}c(25);var v=[{id:"html&css",title:"HTML & CSS"},{id:"javascript",title:"JavaScript"},{id:"react",title:"React"}],N=[{id:1,title:"Project 1 - Udacity",img:"/assets/img/project1-udacity.jpg",link:"https://ncongduy.github.io/personal-blog-website/homepage.html"}],k=[{id:1,title:"Matching game",img:"/assets/img/matching-game.png",link:"https://ncongduy.github.io/fend-project-memory-game/"},{id:2,title:"Project 2 - Udacity",img:"/assets/img/project2-udacity.jpg",link:"https://ncongduy.github.io/landing-page-project2-udacity/"}],y=[{id:1,title:"Jamming",img:"/assets/img/react1.jpg",link:"https://ncongduy.github.io/jamming/"},{id:2,title:"Alarm clock",img:"/assets/img/react2.jpg",link:"https://ncongduy.github.io/alarm-clock/"}],C=function(e){var t=e.data;return Object(j.jsx)("div",{className:"container",children:t.map((function(e){return Object(j.jsxs)("a",{className:"item",href:e.link,target:"blank",children:[Object(j.jsx)("img",{src:"/myPortfolio"+e.img,alt:e.title,width:"440px"}),Object(j.jsx)("h3",{children:e.title})]},e.id)}))})},w=(c(26),function(e){var t=e.list,c=e.selected,i=e.setSelected;return Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{className:c===e.id?"portfolioList active":"portfolioList",onClick:function(){return i(e.id)},children:e.title},e.id)}))})});function S(){var e=Object(i.useState)("html&css"),t=Object(r.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),a=Object(r.a)(n,2),l=a[0],o=a[1];return Object(i.useEffect)((function(){switch(c){case"html&css":o(N);break;case"javascript":o(k);break;case"react":o(y);break;default:o(N)}}),[c]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"My Learning"}),Object(j.jsx)(w,{list:v,selected:c,setSelected:s}),Object(j.jsx)(C,{data:l})]})}c(27);var B=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{href:"#intro",className:"itemBox",children:[Object(j.jsx)(o.a,{className:"icon"}),Object(j.jsx)("span",{children:"+358 46 681 5155"})]})})},L=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("div",{href:"#intro",className:"itemBox",children:[Object(j.jsx)(d.a,{className:"icon"}),Object(j.jsx)("span",{children:"ncongduy@gmail.com"})]})})},H=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(j.jsx)(b.a,{className:"icon"}),Object(j.jsx)("span",{children:"LinkedIn"})]})})},M=function(){return Object(j.jsx)("div",{className:"itemContainer",children:Object(j.jsxs)("a",{href:"https://github.com/ncongduy?tab=repositories",target:"blank",className:"itemBox",children:[Object(j.jsx)(m.a,{className:"icon"}),Object(j.jsx)("span",{children:"GitHub"})]})})};function P(){return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("h1",{children:"Contact"}),Object(j.jsxs)("div",{className:"boxContainer",children:[Object(j.jsx)(B,{}),Object(j.jsx)(L,{}),Object(j.jsx)(H,{}),Object(j.jsx)(M,{})]})]})}c(28);var I=s.a.createContext();var J=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)(I.Provider,{value:[c,s],children:[Object(j.jsx)(x,{}),Object(j.jsx)(O,{}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(p,{}),Object(j.jsx)(S,{}),Object(j.jsx)(P,{})]})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.4deb0d93.chunk.js.map