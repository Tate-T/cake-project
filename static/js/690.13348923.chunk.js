"use strict";(self.webpackChunkcake_project=self.webpackChunkcake_project||[]).push([[690],{2872:(e,c,s)=>{s.d(c,{A:()=>a});const t="SearchForm_searchform__form__E37Gu",r="SearchForm_searchform__input__KcRaO",i="SearchForm_searchform__btn__3pE-A";var l=s(579);const a=e=>{let{placeholder:c,cb:s,value:a}=e;return(0,l.jsxs)("form",{className:t,children:[(0,l.jsx)("input",{placeholder:c,className:r,onChange:s,value:a}),(0,l.jsx)("button",{className:i,children:"\u0428\u0443\u043a\u0430\u0442\u0438"})]})}},7281:(e,c,s)=>{s.r(c),s.d(c,{default:()=>b});var t=s(9379);const r={article:"Articles_article__HVFJI",container:"Articles_container__sGZJ9",articles__box:"Articles_articles__box__bzgrc",articles__filter:"Articles_articles__filter__iQ8ZO",articles__list:"Articles_articles__list__1qpcw",articles__item:"Articles_articles__item__hX6HF",articles__loadmore:"Articles_articles__loadmore__lx-TC",articles__pagination:"Articles_articles__pagination__pSRjc","articles__arrow--right":"Articles_articles__arrow--right__fBBbz","articles__arrow--left":"Articles_articles__arrow--left__J+EGf",articles__checkbox:"Articles_articles__checkbox__lHjh9"};var i=s(8516),l=s(5043);const a=s.p+"static/media/backup.8387dbc9d660338b7abd6946b617ff25.svg";var n=s(2872),_=s(3712),o=s(4292),h=s(9520),d=s(3003),x=s(8308),k=s(3978),j=s(2099);const p=e=>e.articles.value,u=(0,j.Mz)([e=>e.articles.articlesList,p],((e,c)=>(console.log(e,c),e.filter((e=>e.title.toLowerCase().includes(c.toLowerCase())||e.description.toLowerCase().includes(c.toLowerCase()))))));var A=s(9001),m=s(579);function b(){const e=(0,d.wA)();(0,l.useEffect)((()=>{e((0,x.q)())}),[e]);const[c,s]=(0,l.useState)({reception:!1,selections:!1,advicesForKitchen:!1,interestingStories:!1,workWithClients:!1}),[j,b]=(0,l.useState)([0,1]),[g,f]=(0,l.useState)([]);(0,l.useEffect)((()=>{b([0,1]);const e=[];Object.keys(c).forEach((s=>{c[s]&&e.push(s)})),f(e)}),[c]);const C=(0,d.d4)(p),v=(0,d.d4)(u).filter((e=>0===g.length||e.topic.some((e=>g.includes(e)))));return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("section",{className:r.article,children:[(0,m.jsxs)(i.A,{children:[(0,m.jsx)(h.A,{}),(0,m.jsx)(n.A,{placeholder:"\u042f\u043a \u043f\u0440\u0438\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438 \u0447\u0456\u0437\u043a\u0435\u0439\u043a",cb:c=>{b([0,1]),e((0,k.r)(c.target.value))},value:C}),(0,m.jsxs)("div",{className:r.articles__box,children:[(0,m.jsxs)("div",{className:r.articles__filter,children:[(0,m.jsx)("h2",{children:"\u0426\u0456\u043a\u0430\u0432\u0456 \u0442\u0430 \u043a\u043e\u0440\u0438\u0441\u043d\u0456 \u0441\u0442\u0430\u0442\u0442\u0456"}),(0,m.jsxs)("ul",{children:["\u0422\u0435\u043c\u0430\u0442\u0438\u043a\u0430",(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{className:r.articles__checkbox,checked:c.reception,onChange:e=>s((0,t.A)((0,t.A)({},c),{},{reception:e.target.checked})),type:"checkbox"}),"\u0420\u0435\u0446\u0435\u043f\u0442\u0438"]},(0,_.Ak)()),(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{className:r.articles__checkbox,checked:c.advicesForKitchen,onChange:e=>s((0,t.A)((0,t.A)({},c),{},{advicesForKitchen:e.target.checked})),type:"checkbox"}),"\u041a\u043e\u0440\u0438\u0441\u043d\u0456 \u043f\u043e\u0440\u0430\u0434\u0438 \u043d\u0430 \u043a\u0443\u0445\u043d\u0456"]},(0,_.Ak)()),(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{className:r.articles__checkbox,checked:c.selections,onChange:e=>s((0,t.A)((0,t.A)({},c),{},{selections:e.target.checked})),type:"checkbox"}),"\u041f\u0456\u0434\u0431\u0456\u0440\u043a\u0438"]},(0,_.Ak)()),(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{className:r.articles__checkbox,checked:c.workWithClients,onChange:e=>s((0,t.A)((0,t.A)({},c),{},{workWithClients:e.target.checked})),type:"checkbox"}),"\u0420\u043e\u0431\u043e\u0442\u0430 \u0437 \u043a\u043b\u0456\u0454\u043d\u0442\u0430\u043c\u0438"]},(0,_.Ak)()),(0,m.jsxs)("li",{children:[(0,m.jsx)("input",{className:r.articles__checkbox,checked:c.interestingStories,onChange:e=>s((0,t.A)((0,t.A)({},c),{},{interestingStories:e.target.checked})),type:"checkbox"}),"\u0426\u0456\u043a\u0430\u0432\u0456 \u0456\u0441\u0442\u043e\u0440\u0456\u0457"]},(0,_.Ak)())]})]}),(0,m.jsx)("ul",{className:r.articles__list,children:v.slice(6*j[0],6*j[1]).map((e=>(0,m.jsxs)("li",{className:r.articles__item,children:[(0,m.jsx)("img",{src:e.url,alt:"bakery"}),(0,m.jsx)("h3",{children:e.title}),(0,m.jsx)("p",{children:e.description}),(0,m.jsx)(o.N_,{to:"/articles/".concat((0,_.Ak)()),children:"\u0427\u0438\u0442\u0430\u0442\u0438 \u0434\u0430\u043b\u0456"})]},(0,_.Ak)())))})]}),(0,m.jsxs)("button",{onClick:()=>b([j[0],j[1]+1]),className:r.articles__loadmore,children:[(0,m.jsx)("img",{src:a,alt:"LoadMore"}),"\u0411\u0456\u043b\u044c\u0448\u0435 \u0441\u0442\u0430\u0442\u0435\u0439"]}),(0,m.jsxs)("div",{className:r.articles__pagination,children:[(0,m.jsx)("span",{className:r["articles__arrow--left"],children:"<"}),v.map(((e,c)=>(c+1)%6===0?j[0]+1===(c+1)/6?(0,m.jsx)("li",{style:{fontWeight:"700",background:"#FDAD6D"},onClick:()=>b([(c+1)/6-1,(c+1)/6]),children:(c+1)/6},(0,_.Ak)()):(0,m.jsx)("li",{onClick:()=>b([(c+1)/6-1,(c+1)/6]),children:(c+1)/6},(0,_.Ak)()):null)),(0,m.jsx)("span",{className:r["articles__arrow--right"],children:">"})]})]}),(0,m.jsx)(A.A,{})]})})}},3712:(e,c,s)=>{s.d(c,{Ak:()=>t});let t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,c="",s=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)c+="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[63&s[e]];return c}}}]);
//# sourceMappingURL=690.13348923.chunk.js.map