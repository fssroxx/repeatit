(this.webpackJsonprepeatit=this.webpackJsonprepeatit||[]).push([[0],{68:function(t,e,c){},74:function(t,e,c){},77:function(t,e,c){},78:function(t,e,c){},79:function(t,e,c){},80:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(12),r=c.n(a),s=(c(68),c(8)),i=c(120),o=c(121),u=c(122),j="GET_AREAS",d="GET_AREA_ID",b="GET_DISTRICTS",l="GET_DISTRICT_ID",p="SHOW_SUBJECTS",h="FORM_SUBJECT_ID",O="FORM_SUBJECT_NAME",f="GET_TEACHERS",m="GET_TEACHERS_CARDS",v="SHOW_MORE_CARDS",y=function(){return function(t){fetch("https://api.repetit.ru/public/subjects").then((function(t){return t.json()})).then((function(e){return t({type:p,payload:e})}))}},x=c(13),g=c(6);var C=function(){return function(t){fetch("https://api.repetit.ru/public/areas").then((function(t){return t.json()})).then((function(e){return t({type:j,payload:e})}))}},I=function(t){return function(e){fetch("https://api.repetit.ru/public/districts?AreaId=".concat(t),{method:"GET",headers:{"Access-Control-Allow-Origin":"*","Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){return e({type:b,payload:t})}))}},_=(c(74),c(28)),w=c.n(_),E=c(40),T={"Cache-Control":"no-cache no-store, max-age=0",Pragma:"no-cache","Content-Type":"application/json",Accept:"application/json","Access-Control-Allow-Origin":"*"};function N(t,e){return S.apply(this,arguments)}function S(){return(S=Object(E.a)(w.a.mark((function t(e,c){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e,Object(s.a)({headers:T},c));case 3:return n=t.sent,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 9:throw t.prev=9,t.t0=t.catch(0),console.warn(t.t0.toString()),t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}var A=function(){var t=Object(x.b)(),e=Object(x.c)((function(t){return t.subjects.subjects})),c=Object(x.c)((function(t){return t.areas.areas})),a=Object(x.c)((function(t){return t.areas.districts})),r=Object(x.c)((function(t){return t.areas.areaId})),j=Object(x.c)((function(t){return t.areas.districtId})),b=Object(x.c)((function(t){return t.subjects.subjectId}));Object(n.useEffect)((function(){t(y()),t(C())}),[]);var p=function(e){var c;t((c=e.id,{type:h,payload:c})),t(function(t){return{type:O,payload:t}}(e.name))},f=function(e){var c;t((c=e.id,{type:d,payload:c})),t(I(e.id)),console.log(e.id)},v=function(e){var c;t((c=e.id,{type:l,payload:c}))},_=function(){t(function(t,e,c){return function(){var n=Object(E.a)(w.a.mark((function n(a){var r,s,i;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N("http://api.repetit.ru/public/search/teacherIds?AreaId=".concat(t,"&DistrictId=").concat(e,"&SubjectId=").concat(c),{method:"GET"});case 3:return r=n.sent,s=r.map((function(t,e){return"Ids[".concat(e,"]=").concat(t)})).join("&"),n.next=7,N("http://api.repetit.ru/public/teachers/short?".concat(s),{method:"GET"});case 7:i=n.sent,a({type:m,payload:i}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t){return n.apply(this,arguments)}}()}(r,j,b))};return Object(g.jsxs)("div",{className:"search",children:[Object(g.jsx)("div",{className:"search__list",children:Object(g.jsx)(u.a,{id:"combo-box-demo",options:e,onChange:function(t,e){p(e)},getOptionLabel:function(t){return t.name},style:{width:300,marginRight:"10px"},renderInput:function(t){return Object(g.jsx)(o.a,Object(s.a)(Object(s.a)({},t),{},{label:"\u041f\u0440\u0435\u0434\u043c\u0435\u0442",variant:"outlined"}))}})}),Object(g.jsx)("div",{className:"search__list",children:Object(g.jsx)(u.a,{id:"combo-box-demo",options:c,onChange:function(t,e){f(e)},getOptionLabel:function(t){return t.cityName},style:{width:300,marginRight:"10px"},renderInput:function(t){return Object(g.jsx)(o.a,Object(s.a)(Object(s.a)({},t),{},{label:"\u0413\u043e\u0440\u043e\u0434",variant:"outlined"}))}})}),Object(g.jsx)("div",{className:"search__list",children:Object(g.jsx)(u.a,{id:"combo-box-demo",options:a,onChange:function(t,e){v(e)},getOptionLabel:function(t){return t.name},style:{width:300,marginRight:"10px"},renderInput:function(t){return Object(g.jsx)(o.a,Object(s.a)(Object(s.a)({},t),{},{label:"\u0420\u0430\u0439\u043e\u043d",variant:"outlined"}))}})}),Object(g.jsx)("div",{className:"search__button",children:Object(g.jsx)(i.a,{color:"primary",variant:"contained",onClick:function(){_()},children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u0438\u043b\u044c\u0442\u0440"})})]})},R=(c(77),function(){var t=Object(x.c)((function(t){return t.teachers.teachersCards})),e=Object(x.c)((function(t){return t.subjects.subjectName})),c=Object(x.c)((function(t){return t.cards.showCards})),n=t.slice(0,c).map((function(t){return Object(g.jsxs)("div",{className:"teacher-list-item",children:[Object(g.jsx)("img",{src:t.photoPathSquare}),Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"name",children:"".concat(t.firstName," ").concat(t.patrName)}),Object(g.jsx)("div",{className:"subject",children:e}),Object(g.jsxs)("div",{className:"price",children:["\u043e\u0442 ",t.minPricePerHour," \u0440"]})]})]})}));return Object(g.jsx)("div",{children:n})}),D=(c(78),function(){var t=Object(x.b)(),e=Object(x.c)((function(t){return t.teachers.teachersCards})).length>0?Object(g.jsx)(i.a,{onClick:function(){t({type:v,payload:10})},variant:"contained",color:"primary",style:{marginTop:"10px",width:"336px",height:"45px"},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0415\u0449\u0435"}):null;return Object(g.jsxs)("div",{className:"main",children:[Object(g.jsx)(R,{}),e]})});c(79);var G=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(A,{}),Object(g.jsx)(D,{className:"list"})]})},k=c(23),H=c(54),J={showCards:10},M=c(22),B={subjects:[],subjectId:"",subjectName:""},P={areas:[],areaId:"",districts:[],districtId:""},U={teachers:[],teachersCards:[]},F=c(55),L=Object(k.combineReducers)({cards:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(s.a)(Object(s.a)({},t),{},{showCards:t.showCards+e.payload});default:return t}},subjects:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case h:return Object(s.a)(Object(s.a)({},t),{},{subjectId:e.payload});case O:return Object(s.a)(Object(s.a)({},t),{},{subjectName:e.payload});case p:return Object(s.a)(Object(s.a)({},t),{},{subjects:Object(M.a)(e.payload)});default:return t}},areas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(s.a)(Object(s.a)({},t),{},{areas:Object(M.a)(e.payload)});case d:return Object(s.a)(Object(s.a)({},t),{},{areaId:e.payload});case b:return Object(s.a)(Object(s.a)({},t),{},{districts:Object(M.a)(e.payload)});case l:return Object(s.a)(Object(s.a)({},t),{},{districtId:e.payload});default:return t}},teachers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(s.a)(Object(s.a)({},t),{},{teachers:Object(M.a)(e.payload)});case m:return Object(s.a)(Object(s.a)({},t),{},{teachersCards:Object(M.a)(e.payload)});default:return t}}}),W=Object(k.createStore)(L,Object(F.composeWithDevTools)(Object(k.applyMiddleware)(H.a)));r.a.render(Object(g.jsx)(x.a,{store:W,children:Object(g.jsx)(G,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.b591a938.chunk.js.map