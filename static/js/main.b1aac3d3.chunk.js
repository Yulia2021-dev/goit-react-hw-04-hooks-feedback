(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,function(e,t,c){},function(e,t,c){},,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),i=c(4),n=c.n(i),o=(c(11),c(2)),r=c(0),l=function(e){var t=e.title,c=e.children;return Object(r.jsxs)("section",{children:[Object(r.jsx)("h2",{className:"title",children:t}),c]})},j=c(5),b=c.n(j),d=function(e){var t=e.options,c=e.onLeaveFeedback;return Object(r.jsx)(l,{title:"Please leave feedback",className:"title",children:Object(r.jsx)("div",{className:b.a.buttons,children:t.map((function(e,t){return Object(r.jsx)("button",{className:"button",type:"button",onClick:function(){return c(e)},children:e},t)}))})})},u=(c(13),function(e){var t=e.message;return Object(r.jsx)("p",{className:"notification-title",children:t})}),h=c(6),O=c.n(h),m=function(e){var t=e.good,c=e.neutral,s=e.bad,a=e.total,i=e.positivePercentage;return Object(r.jsx)(l,{title:"Statistics",children:a?Object(r.jsx)("div",{className:O.a.Statistics,children:Object(r.jsxs)("ul",{className:"param-list",children:[Object(r.jsxs)("li",{className:"Statistics__item",children:["Good: ",t]}),Object(r.jsxs)("li",{className:"Statistics__item",children:["Neutral: ",c]}),Object(r.jsxs)("li",{className:"Statistics__item",children:["Bad: ",s]}),Object(r.jsxs)("li",{className:"Statistics__item",children:["Total: ",a]}),Object(r.jsxs)("li",{className:"Statistics__item",children:["Positive: ",i,"%"]})]})}):Object(r.jsx)(u,{message:"No feedback given"})})};c(14);function f(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(0),n=Object(o.a)(i,2),l=n[0],j=n[1],b=Object(s.useState)(0),u=Object(o.a)(b,2),h=u[0],O=u[1],f=c+l+h,x=c/f;isNaN(x)&&(x=0);var N=Math.floor(100*x);return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(d,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":a(c+1);break;case"neutral":j(l+1);break;case"bad":O(h+1);break;default:console.error("No matched option")}}}),Object(r.jsx)(m,{good:c,neutral:l,bad:h,total:f,positivePercentage:N})]})}n.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(f,{})}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.b1aac3d3.chunk.js.map