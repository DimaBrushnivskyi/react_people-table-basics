(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(11),r=n.n(c),a=n(6),s=n(0),j=(n(16),n(2)),l=n(10),i=n(7),o=n(4),b=n(5),h=n.n(b),d=function(){var e=Object(i.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error("Status: ".concat(t.status,"\n      - StatusText: ").concat(t.statusText));case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=n(1),x=function(e){var t,n,c,r,a=e.person;return Object(u.jsxs)("tr",{className:"Person",children:[Object(u.jsx)("td",{children:a.name}),Object(u.jsx)("td",{children:a.sex}),Object(u.jsx)("td",{children:a.born}),Object(u.jsx)("td",{children:a.died}),Object(u.jsx)("td",{children:null!==(t=a.mother)&&void 0!==t&&t.name?null===(n=a.mother)||void 0===n?void 0:n.name:"No Data"}),Object(u.jsx)("td",{children:null!==(c=a.father)&&void 0!==c&&c.name?null===(r=a.father)||void 0===r?void 0:r.name:"No Data"})]},a.slug)},O=function(e){var t=e.arrayOfPeople;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("table",{className:"PeopleTable",style:{borderCollapse:"collapse"},children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Sex"}),Object(u.jsx)("th",{children:"Born"}),Object(u.jsx)("th",{children:"Died"}),Object(u.jsx)("th",{children:"Mother"}),Object(u.jsx)("th",{children:"Father"})]})}),Object(u.jsx)("tbody",{children:t.map((function(e){return Object(u.jsx)(x,{person:e})}))})]})})},p=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(i.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){r()}),[]);var a=n.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{father:n.find((function(t){return t.name===e.fatherName}))||null,mother:n.find((function(t){return t.name===e.motherName}))||null})}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:"People Page"}),Object(u.jsx)(O,{arrayOfPeople:a})]})},m=function(){return Object(u.jsx)("h3",{children:"Home page"})},f=function(){return Object(u.jsx)("p",{children:"Page not found"})},v=function(e){return Object(u.jsx)("header",{className:"header",children:e.children})},N=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"title",children:"People table"}),Object(u.jsx)(v,{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{className:"nav-bar",children:[Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/home",className:"nav-bar__link",title:"Visit Home Page",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(a.b,{to:"/people",className:"nav-bar__link",title:"Visit People Table",children:"People"})})]})})}),Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{path:"/people",element:Object(u.jsx)(p,{})}),Object(u.jsx)(j.b,{path:"/home",element:Object(u.jsx)(m,{})}),Object(u.jsx)(j.b,{path:"/",element:Object(u.jsx)(j.a,{replace:!0,to:"/home"})}),Object(u.jsx)(j.b,{path:"*",element:Object(u.jsx)(f,{})})]})]})};r.a.render(Object(u.jsx)(a.a,{children:Object(u.jsx)(N,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.76164510.chunk.js.map