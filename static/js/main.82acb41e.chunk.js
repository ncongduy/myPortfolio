(this.webpackJsonpmyportfolio=this.webpackJsonpmyportfolio||[]).push([[0],{32:function(t,e,i){},39:function(t,e,i){},40:function(t,e,i){},41:function(t,e,i){},42:function(t,e,i){},43:function(t,e,i){},45:function(t,e,i){"use strict";i.r(e);var c=i(0),s=i.n(c),a=i(18),n=i.n(a),o=i(7),r=i(2),l=i(19),j=i.n(l),d=i(22),m=i.n(d),b=i(21),u=i.n(b),p=(i(32),i(1));function g(){return Object(p.jsxs)("div",{className:"topbar",children:[Object(p.jsxs)(o.b,{to:"/myPortfolio",className:"topbar__item",children:[Object(p.jsx)(j.a,{className:"topbar__icon"}),Object(p.jsx)("span",{children:"Home"})]}),Object(p.jsxs)(o.b,{to:"/myPortfolio/portfolio",className:"topbar__item",children:[Object(p.jsx)(u.a,{className:"topbar__icon"}),Object(p.jsx)("span",{children:"My learning"})]}),Object(p.jsxs)(o.b,{to:"/myPortfolio/contact",className:"topbar__item",children:[Object(p.jsx)(m.a,{className:"topbar__icon"}),Object(p.jsx)("span",{children:"Contact"})]})]})}i(39);var h=i(23),x=function(){return Object(p.jsx)("div",{className:"left",children:Object(p.jsx)("div",{className:"img-container",children:Object(p.jsx)("img",{src:"/myPortfolio/assets/img/me.jpg",alt:""})})})},O=function(t){var e=t.textRef;return Object(p.jsx)("div",{className:"right",children:Object(p.jsxs)("div",{className:"wrapper",children:[Object(p.jsx)("h2",{children:"Hi there, I'm"}),Object(p.jsx)("h1",{children:"Duy"}),Object(p.jsxs)("h3",{children:["Developer ",Object(p.jsx)("span",{ref:e})]})]})})};function f(){var t=Object(c.useRef)();return Object(c.useEffect)((function(){Object(h.a)(t.current,{showCursor:!1,backDelay:1500,backSpeed:60,strings:["Front-end","Back-end","Full-stack"]})}),[]),Object(p.jsxs)("div",{className:"intro",id:"intro",children:[Object(p.jsx)(x,{}),Object(p.jsx)(O,{textRef:t})]})}var y=i(5),k=(i(40),[{id:"udacity",title:"Udacity"},{id:"codecademy",title:"Codecademy"},{id:"f8",title:"F8"}]),v=[{id:1,title:"Personal Blog Website",img:"/assets/img/udacity/project1-udacity.jpg",link:"https://ncongduy.github.io/personal-blog-website-project1-udacity/homepage.html"},{id:2,title:"Landing Page",img:"/assets/img/udacity/project2-udacity.jpg",link:"https://ncongduy.github.io/landing-page-project2-udacity/"},{id:3,title:"Weather Journal App",img:"/assets/img/udacity/project3-udacity.jpg",link:"https://weather-journal-app-project3.herokuapp.com/"},{id:4,title:"Evaluate News NLP",img:"/assets/img/udacity/project4-udacity.jpg",link:"https://evaluate-news-nlp-project4.herokuapp.com/"},{id:5,title:"Travel App",img:"/assets/img/udacity/project5-udacity.jpg",link:"https://travel-app-project5-udacity.herokuapp.com/"},{id:6,title:"Matching game",img:"/assets/img/udacity/matching-game.png",link:"https://ncongduy.github.io/fend-project-memory-game/"}],N=[{id:1,title:"React - Jamming",img:"/assets/img/codecademy/codecademy-react-jamming.jpg",link:"https://ncongduy.github.io/jamming/"},{id:2,title:"Redux - Matching Memory",img:"/assets/img/codecademy/codecademy-redux-matching-game.jpg",link:"https://ncongduy.github.io/redux-matching-memory/"},{id:3,title:"Redux - Expense Tracker",img:"/assets/img/codecademy/codecademy-expense-tracker.JPG",link:"https://ncongduy.github.io/expense-tracker/"}],P=[{id:1,title:"W3_band",img:"/assets/img/f8/f8-music-band.jpg",link:"https://ncongduy.github.io/f8-shop/w3_band/index.html"},{id:2,title:"Music Player",img:"/assets/img/f8/f8-music-player.jpg",link:"https://ncongduy.github.io/music-player/"},{id:3,title:"To do list",img:"/assets/img/f8/f8-todolist.jpg",link:"https://ncongduy.github.io/todolist/"},{id:4,title:"Tab UI",img:"/assets/img/f8/f8-tab-ui.jpg",link:"https://ncongduy.github.io/tab-UI/"}],_=function(t){var e=t.data;return Object(p.jsx)("div",{className:"container",children:e.map((function(t){return Object(p.jsxs)("a",{className:"item",href:t.link,target:"blank",children:[Object(p.jsx)("img",{src:"/myPortfolio"+t.img,alt:t.title}),Object(p.jsx)("h3",{children:t.title})]},t.id)}))})},w=(i(41),function(t){var e=t.list,i=t.selected,c=t.setSelected;return Object(p.jsx)("ul",{children:e.map((function(t){return Object(p.jsx)("li",{className:i===t.id?"portfolioList active":"portfolioList",onClick:function(){return c(t.id)},children:t.title},t.id)}))})});function C(){var t=Object(c.useState)("udacity"),e=Object(y.a)(t,2),i=e[0],s=e[1],a=Object(c.useState)([]),n=Object(y.a)(a,2),o=n[0],r=n[1];return Object(c.useEffect)((function(){switch(i){case"udacity":r(v);break;case"codecademy":r(N);break;case"f8":r(P);break;default:r(v)}}),[i]),Object(p.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(p.jsx)(w,{list:k,selected:i,setSelected:s}),Object(p.jsx)(_,{data:o})]})}i(42);var B=i(24),I=i.n(B),M=function(){return Object(p.jsx)("div",{className:"itemContainer",children:Object(p.jsxs)("div",{className:"itemBox",children:[Object(p.jsx)(I.a,{className:"icon"}),Object(p.jsx)("span",{children:"ncongduy@gmail.com"})]})})},R=i(25),S=i.n(R),E=function(){return Object(p.jsx)("div",{className:"itemContainer",children:Object(p.jsxs)("a",{href:"https://www.linkedin.com/in/duy-nguyen-55b850197/",target:"blank",className:"itemBox",children:[Object(p.jsx)(S.a,{className:"icon"}),Object(p.jsx)("span",{children:"LinkedIn"})]})})},J=i(26),L=i.n(J),T=function(){return Object(p.jsx)("div",{className:"itemContainer",children:Object(p.jsxs)("a",{href:"https://github.com/ncongduy",target:"blank",className:"itemBox",children:[Object(p.jsx)(L.a,{className:"icon"}),Object(p.jsx)("span",{children:"GitHub"})]})})};function D(){return Object(p.jsxs)("div",{className:"contact",id:"contact",children:[Object(p.jsx)("div",{className:"contactImg",children:Object(p.jsx)("img",{src:"/myPortfolio/assets/img/contact.jpg",alt:"contact"})}),Object(p.jsx)("div",{className:"boxContainer",children:Object(p.jsxs)("div",{className:"boxComponent",children:[Object(p.jsx)(M,{}),Object(p.jsx)(E,{}),Object(p.jsx)(T,{})]})})]})}var F=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(g,{}),Object(p.jsxs)(r.c,{children:[Object(p.jsx)(r.a,{path:"/myPortfolio",element:Object(p.jsx)(f,{})}),Object(p.jsx)(r.a,{path:"/myPortfolio/portfolio",element:Object(p.jsx)(C,{})}),Object(p.jsx)(r.a,{path:"/myPortfolio/contact",element:Object(p.jsx)(D,{})})]})]})};i(43);n.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(F,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.82acb41e.chunk.js.map