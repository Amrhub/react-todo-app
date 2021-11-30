(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{11:function(e,t,n){e.exports={item:"TodoItem_item__AOsZh",checkbox:"TodoItem_checkbox__kjf67","item-title":"TodoItem_item-title__1gn6V",textInput:"TodoItem_textInput__3U4fL","delete-icon":"TodoItem_delete-icon__383lT"}},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(21),i=n.n(a),s=n(8),r=n(25),l=n(14),u=n(9),d=n(3),j=n(42),b=n(2),h=function(){return Object(b.jsx)("header",{className:"todo-header",children:Object(b.jsx)("h1",{className:"todo-header__title",children:"todo"})})},p=n(16),m=function(e){var t=e.addItem,n=Object(c.useState)(""),o=Object(u.a)(n,2),a=o[0],i=o[1];return Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==a.trim().length?(t(a.trim()),i("")):alert("Please write item")},className:"form-container",children:[Object(b.jsx)("input",{type:"text",placeholder:"Add Todo...",onChange:function(e){i(e.target.value)},name:"title",value:a,className:"input-text"}),Object(b.jsx)("button",{type:"submit",className:"input-submit",children:Object(b.jsx)(p.a,{})})]})},O=n(11),x=n.n(O),f=function(e){var t=e.todo,n=e.handleChangeProps,o=e.delTodoProps,a=e.updateItemProps,i=Object(c.useState)(!1),s=Object(u.a)(i,2),r=s[0],l=s[1],d={},j={};r?d={display:"none"}:j={display:"none"};return Object(b.jsxs)("li",{className:x.a.item,children:[Object(b.jsxs)("div",{onDoubleClick:function(){l(!0)},style:d,children:[Object(b.jsx)("input",{type:"checkbox",checked:t.completed,onChange:function(){return n(t.id)},className:x.a.checkbox}),Object(b.jsx)("span",{className:x.a["item-title"],children:t.title}),Object(b.jsx)("button",{type:"button",onClick:function(){return o(t.id)},children:Object(b.jsx)(p.b,{className:x.a["delete-icon"]})})]}),Object(b.jsx)("input",{type:"text",className:x.a.textInput,style:j,value:t.title,onChange:function(e){a(e.target.value,t.id)},onKeyDown:function(e){"Enter"===e.key&&(""===e.target.value.trim()?o(t.id):l(!1))}})]})},g=function(e){var t=e.todos,n=e.handleChangeProps,c=e.delTodoProps,o=e.updateItemProps;return Object(b.jsx)("ul",{className:"todo--list",children:t.map((function(e){return Object(b.jsx)(f,{todo:e,handleChangeProps:n,delTodoProps:c,updateItemProps:o},e.id)}))})},v=function(){var e=Object(d.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Amr Ahmed, a self-taught web developer, Following tutorial of Ibas Majid, He is also a self-taught web developer and a technical writer opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(b.jsxs)("div",{className:"main__content",children:[Object(b.jsx)("h1",{children:n}),Object(b.jsx)("p",{children:c})]})},_=function(e){var t=e.pushContent,n=Object(d.g)(),c=n.url,o=n.path;return Object(b.jsxs)("div",{className:t?"about__content about__content--pushed":"about__content",children:[Object(b.jsxs)("ul",{className:"about__list",children:[Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"".concat(c,"/about-app"),children:"About App"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.b,{to:"".concat(c,"/about-author"),children:"About Author"})})]}),Object(b.jsx)(d.a,{path:"".concat(o,"/:slug"),children:Object(b.jsx)(v,{})})]})},y=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"No match for this page"})})},N=n(23),I=n(24),k=function(e){var t=e.aboutContentPush,n=Object(c.useState)(!1),o=Object(u.a)(n,2),a=o[0],i=o[1],r=function(){i((function(e){return!e})),t()};return Object(b.jsxs)("nav",{className:"navBar",children:[Object(b.jsx)("button",{type:"button",onClick:r,children:a?Object(b.jsx)(N.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(b.jsx)(I.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(b.jsx)("ul",{className:"menuNav ".concat(a?" showMenu":""),children:[{id:1,link:"/",name:"Home"},{id:2,link:"/about",name:"About"}].map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:e.link,activeClassName:"active-link",exact:!0,onClick:r,children:e.name})},e.id)}))})]})},w=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),s=i[0],p=i[1],O=Object(c.useRef)(n);Object(c.useEffect)((function(){O.current!==n&&(localStorage.setItem("todoItems",JSON.stringify(n)),O.current=n)}),[n]),Object(c.useEffect)((function(){var e=localStorage.getItem("todoItems"),t=JSON.parse(e);t&&o(t)}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(k,{aboutContentPush:function(){p((function(e){return!e}))}}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"inner",children:[Object(b.jsx)(h,{}),Object(b.jsx)(m,{addItem:function(e){var t={id:Object(j.a)(),title:e,completed:!1},c=[].concat(Object(r.a)(n),[t]);o(c)}}),Object(b.jsx)(g,{todos:n,handleChangeProps:function(e){var t=n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}));o(t)},delTodoProps:function(e){var t=n.filter((function(t){return t.id!==e}));o(t)},updateItemProps:function(e,t){var c=n.map((function(n){return n.id===t?Object(l.a)(Object(l.a)({},n),{},{title:e}):n}));o(c)}})]})})}),Object(b.jsx)(d.a,{path:"/about",children:Object(b.jsx)(_,{pushContent:s})}),Object(b.jsx)(d.a,{path:"*",children:Object(b.jsx)(y,{})})]})]})};n(39);i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.17112c02.chunk.js.map