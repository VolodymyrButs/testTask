(this["webpackJsonptrial-task"]=this["webpackJsonptrial-task"]||[]).push([[0],{118:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),s=a.n(r),i=a(190),o=a(105),l=(a(118),a(27)),j=a(29),d=a(19),p=a(10),b=a(184),u=a(12),h=a(106),x=a(80),m="icons",O="list",g=a(2),f=Object(n.createContext)({viewType:m,setViewType:function(e){},isDarkTheme:!1,setIsDarkTheme:function(e){}}),v=function(){try{var e=window&&window.localStorage.getItem("state");return null===e?[]:JSON.parse(e)}catch(t){return[]}}(),k=function(e){var t=Object(n.useState)(v.viewType||m),a=Object(x.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(v.isDarkTheme||!1),i=Object(x.a)(s,2),o=i[0],l=i[1];return Object(n.useEffect)((function(){return function(e){try{var t=JSON.stringify(e);window&&window.localStorage.setItem("state",t)}catch(a){console.log(a)}}({viewType:c,isDarkTheme:o})}),[c,o]),Object(g.jsx)(f.Provider,{value:{viewType:c,setViewType:r,isDarkTheme:o,setIsDarkTheme:l},children:e.children})},w=a(43),y=a.n(w),N=a(57),C=a(58),I=a.n(C),T=a(191),D=a(189),S=a(178),_=a(25),W=a(182),B=a(180),V=a(181),z=Object(S.a)((function(e){return{root:{maxHeight:"calc(100vh - 65px)",overflowY:"scroll"},link:{textDecoration:"none"},item:{display:"flex",margin:"5px",padding:"16px",boxShadow:"inset 0 0 10px #888","&:hover":{boxShadow:"inset 0 0 20px #888"}},itemIcon:{display:"flex",flexDirection:"column",alignItems:"center",margin:5,padding:5,boxShadow:"inset 0 0 10px #888","&:hover":{boxShadow:"inset 0 0 30px #888"}},avatar:Object(_.a)({height:"40px",width:"40px",objectFit:"contain",marginRight:"10px"},e.breakpoints.up("sm"),{height:"50px",width:"50px"}),avatarIcon:{height:200,objectFit:"contain",maxWidth:"100%",margin:"10px"},info:{display:"inline-block"},infoIcon:{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",alignItems:"center"},paragraph:Object(_.a)({padding:"0 3px",margin:0,marginBottom:8,width:240,overflow:"hidden",textOverflow:"ellipsis",color:e.palette.text.primary},e.breakpoints.up("sm"),{width:280})}})),E=function(e){var t=e.data,a=Object(B.a)(),c=Object(V.a)(a.breakpoints.up("md")),r=Object(n.useContext)(f).viewType,s=z();return Object(g.jsx)(W.a,{container:!0,className:s.root,children:t.data.map((function(e){return Object(g.jsx)(W.a,{item:!0,xs:c?6:12,children:Object(g.jsx)(d.b,{to:{pathname:"/user/".concat(e.id),state:{page:t.page}},className:s.link,children:r===m?Object(g.jsxs)("div",{className:s.itemIcon,children:[Object(g.jsx)("img",{src:e.avatar,alt:"user_avatar",className:s.avatarIcon})," ",Object(g.jsxs)("div",{className:s.infoIcon,children:[Object(g.jsxs)("p",{className:s.paragraph,children:["Name: ",e.first_name," ",e.last_name]}),Object(g.jsxs)("p",{className:s.paragraph,children:["Email: ",e.email]})]})]}):Object(g.jsxs)("div",{className:s.item,children:[Object(g.jsx)("img",{src:e.avatar,alt:"user_avatar",className:s.avatar})," ",Object(g.jsxs)("div",{className:s.info,children:[Object(g.jsxs)("p",{className:s.paragraph,children:["Name: ",e.first_name," ",e.last_name]}),Object(g.jsxs)("p",{className:s.paragraph,children:["Email: ",e.email]})]})]})})},e.id)}))})},L=a(183),P=a(79),R=a.n(P),A=a(104),F=a.n(A),J=a(102),$=a.n(J),H=Object(u.a)((function(e){return{root:Object(_.a)({marginLeft:5},e.breakpoints.up("sm"),{marginLeft:110})}}))((function(e){var t=e.classes,a=Object(j.a)(e,["classes"]);return Object(g.jsx)("span",Object(l.a)({className:t.root},a))})),q=Object(u.a)((function(e){return{root:Object(_.a)({padding:"12px 5px"},e.breakpoints.up("sm"),{padding:12})}}))((function(e){var t=e.classes,a=e.onClick,n=Object(j.a)(e,["classes","onClick"]);return Object(g.jsx)(L.a,Object(l.a)({className:t.root,onClick:a},n))})),M=function(){var e=Object(n.useContext)(f),t=e.isDarkTheme,a=e.setIsDarkTheme;return Object(g.jsx)(H,{children:Object(g.jsx)(q,{onClick:function(){return a(!t)},children:Object(g.jsx)($.a,{})})})},U=a(192),Y=a(103),K=a.n(Y),Q=a(185),X=a(186),G=Object(u.a)((function(e){return{root:Object(_.a)({padding:"12px 5px"},e.breakpoints.up("sm"),{padding:12})}}))((function(e){var t=e.classes,a=e.onClick,n=Object(j.a)(e,["classes","onClick"]);return Object(g.jsx)(L.a,Object(l.a)({className:t.root,onClick:a},n))})),Z=K()((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{color:e.palette.common.white,padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,backgroundColor:e.palette.grey[400],"& + $track":{opacity:1,color:e.palette.common.white,backgroundColor:e.palette.grey[400]}},"&$focusVisible $thumb":{color:e.palette.grey[400],border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"2px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[400],color:e.palette.common.white,opacity:1,transition:e.transitions.create(["background-color","border"]),boxSizing:"border-box"},checked:{},focusVisible:{},s:{display:"flex",alignContent:"center"}}})),ee=function(){var e=Object(n.useContext)(f),t=e.viewType,a=e.setViewType,c=Z();return Object(g.jsxs)("span",{children:[Object(g.jsx)(G,{onClick:function(){return a(O)},children:Object(g.jsx)(Q.a,{})}),Object(g.jsx)("span",{children:Object(g.jsx)(U.a,{focusVisibleClassName:c.focusVisible,disableRipple:!0,checked:t===m,onChange:function(){return a(t===O?m:O)},classes:{root:c.root,switchBase:c.switchBase,thumb:c.thumb,track:c.track,checked:c.checked}})}),Object(g.jsx)(G,{onClick:function(){return a(m)},children:Object(g.jsx)(X.a,{})})]})},te=Object(S.a)((function(e){return{header:{display:"flex",justifyContent:"space-between",alignContent:"center",padding:5,height:48,color:e.palette.text.primary,backgroundColor:e.palette.background.default,borderBottom:"1px solid ".concat(e.palette.text.primary)},navWrapper:{display:"flex",alignItems:"center"},navLink:{textDecoration:"none",color:e.palette.text.primary,display:"flex",alignItems:"center"}}}));var ae=function(e){var t=e.pageCount,a=te(),n=new URLSearchParams(Object(p.f)().search).get("page"),c=Number(n)||1;return Object(g.jsxs)("div",{className:a.header,children:[Object(g.jsx)(ee,{}),Object(g.jsxs)("span",{className:a.navWrapper,children:[Object(g.jsx)(d.b,{to:"/?page=".concat(1===c?c:c-1),children:Object(g.jsx)(L.a,{color:"primary",disabled:1===c,size:"small",children:Object(g.jsx)(R.a,{})})}),Object(g.jsxs)("span",{children:["Page: ",c," "]}),Object(g.jsx)(d.b,{to:"/?page=".concat(c===t?c:c+1),children:Object(g.jsx)(L.a,{color:"primary",disabled:c===t,size:"small",edge:"end",children:Object(g.jsx)(F.a,{})})})]}),Object(g.jsx)(M,{})]})},ne=function(){var e=te(),t=Object(p.f)();return Object(g.jsxs)("div",{className:e.header,children:[Object(g.jsxs)(d.b,{to:t.state?"/?page=".concat(t.state.page):"/?page=1",className:e.navLink,children:[Object(g.jsx)(R.a,{}),"BACK"]}),Object(g.jsx)(M,{})]})},ce=a(187),re=Object(u.a)((function(e){return{root:{position:"fixed",top:0,left:0,height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.background.default,opacity:.8,zIndex:1}}}))((function(e){var t=e.classes,a=Object(j.a)(e,["classes"]);return Object(g.jsx)("div",Object(l.a)({className:t.root},a))})),se=function(){return Object(g.jsx)(re,{children:Object(g.jsx)(ce.a,{disableShrink:!0})})},ie=a(188),oe=Object(S.a)((function(e){return{root:{position:"fixed",top:0,left:0,height:"100vh",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:e.palette.background.default,opacity:.8,zIndex:1},paragraph:{textAlign:"center",color:e.palette.text.primary,fontSize:30},link:{textDecoration:"none"}}})),le=function(){var e=oe();return Object(g.jsxs)("div",{className:e.root,children:[Object(g.jsx)("p",{className:e.paragraph,children:"Something went wrong"}),Object(g.jsx)(d.b,{to:"/?page=1",className:e.link,children:Object(g.jsx)(ie.a,{variant:"contained",color:"primary",children:"To Main Page"})})]})},je=Object(S.a)({container:{padding:0}});function de(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(N.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://reqres.in/api/users?page=".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var be=function(){var e=new URLSearchParams(Object(p.f)().search).get("page"),t=Number(e),a=Object(o.b)(),c=je(),r=Object(T.a)(["users",t],(function(){return de(t)}),{staleTime:5e4}),s=r.status,i=r.data;return Object(n.useEffect)((function(){t<(null===i||void 0===i?void 0:i.total_pages)&&a.prefetchQuery(["users",t+1],(function(){return de(t+1)}))}),[i,t,a]),Object(g.jsxs)(D.a,{maxWidth:"md",className:c.container,children:[Object(g.jsx)(ae,{pageCount:Number(null===i||void 0===i?void 0:i.total_pages)}),"loading"===s&&!i&&Object(g.jsx)(se,{}),("error"===s||isNaN(t))&&Object(g.jsx)(le,{}),"success"===s&&0===i.data.length&&Object(g.jsx)(le,{}),"success"===s&&!isNaN(t)&&Object(g.jsx)(E,{data:i})]})};function ue(){return(ue=Object(N.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://reqres.in/api/users/".concat(t));case 2:return a=e.sent,n=a.data,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he=Object(S.a)((function(e){return{container:{margin:"0px auto",padding:0},root:{maxHeight:"calc(100vh - 45px)",overflowY:"scroll"},item:{display:"flex",flexDirection:"column",alignItems:"center",margin:5,padding:5},link:{textDecoration:"none",color:e.palette.text.primary,fontStyle:"italic"},avatar:{width:300,objectFit:"contain",maxWidth:"100%",margin:"10px"},info:{display:"flex",flexDirection:"column",width:"100%",textAlign:"center",alignItems:"center"},paragraph:{color:e.palette.text.primary,margin:"3px",maxWidth:280,overflow:"hidden",textOverflow:"ellipsis",fontWeight:500}}})),xe=function(){var e=Object(p.g)().id,t=Object(T.a)(["user",e],(function(){return function(e){return ue.apply(this,arguments)}(e)}),{staleTime:5e4}),a=t.data,n=t.status,c=he();return Object(g.jsxs)(D.a,{maxWidth:"md",className:c.container,children:[Object(g.jsx)(ne,{}),"loading"===n&&!a&&Object(g.jsx)(se,{}),"error"===n&&Object(g.jsx)(le,{}),"success"===n&&Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(W.a,{item:!0,className:c.root,children:Object(g.jsxs)("div",{className:c.item,children:[Object(g.jsx)("img",{src:a.avatar,alt:"user_avatar",className:c.avatar}),Object(g.jsxs)("div",{className:c.info,children:[Object(g.jsxs)("p",{className:c.paragraph,children:["Name: ",a.first_name," ",a.last_name]}),Object(g.jsxs)("p",{className:c.paragraph,children:["Email:"," ",Object(g.jsx)("a",{className:c.link,href:"mailto:".concat(a.email),target:"blank",children:a.email})]})]})]})})})]})},me=Object(u.a)((function(e){return{root:{minWidth:"100vw",minHeight:"100vh",backgroundColor:e.palette.background.default}}}))((function(e){var t=e.classes,a=Object(j.a)(e,["classes"]);return Object(g.jsx)("div",Object(l.a)({className:t.root},a))})),Oe=function(){var e=Object(n.useContext)(f).isDarkTheme,t=Object(h.a)({palette:{type:e?"dark":"light"}});return Object(g.jsx)(b.a,{theme:t,children:Object(g.jsx)(me,{children:Object(g.jsx)(d.a,{basename:"/testTask",children:Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{exact:!0,path:"/",children:Object(g.jsx)(be,{})}),Object(g.jsx)(p.a,{path:"/user/:id",children:Object(g.jsx)(xe,{})}),Object(g.jsx)(p.a,{path:"*",children:Object(g.jsx)(le,{})})]})})})})},ge=new i.a;s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(k,{children:Object(g.jsx)(o.a,{client:ge,children:Object(g.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[167,1,2]]]);
//# sourceMappingURL=main.2c9db4ed.chunk.js.map