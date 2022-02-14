(this["webpackJsonppresupuestador-front"]=this["webpackJsonppresupuestador-front"]||[]).push([[0],{43:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(33),o=a.n(n),i=(a(43),a(67),a(21)),s=a(18),d=a(7),l=a(6),j=a(16),u=a(22),b=a(20),m=a(37),O=a(38),h=a(57),g=a.n(h).a.create({baseURL:"http://localhost:8080/api/",headers:{"Content-type":"application/json"}}),x=new(function(){function e(){Object(m.a)(this,e)}return Object(O.a)(e,[{key:"getAll",value:function(){return g.get("/entries")}},{key:"create",value:function(e){return g.post("/entry",e)}},{key:"delete",value:function(e){return g.delete("/entry/".concat(e))}},{key:"deleteAll",value:function(){return g.delete("/entries")}},{key:"update",value:function(e,t){return g.put("/entry/".concat(e),t)}}]),e}()),p=new(function(){function e(){Object(m.a)(this,e)}return Object(O.a)(e,[{key:"getAll",value:function(){return g.get("/budget")}},{key:"create",value:function(e){return g.post("/budget",e)}},{key:"delete",value:function(e){return g.delete("/budget/".concat(e))}},{key:"deleteAll",value:function(){return g.delete("/budget")}}]),e}()),f=a(1),v=function(){var e=Object(c.useState)({date:"",category:"",description:"",amount:"",kind:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),o=Object(d.a)(n,2),m=o[0],O=o[1],h=Object(c.useState)(!1),g=Object(d.a)(h,2),v=g[0],y=g[1],C=Object(c.useState)(""),N=Object(d.a)(C,2),S=N[0],k=N[1],E=function(e){var t=e.target,c=t.name,n=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},c,n)))},I=Object(c.useState)([]),T=Object(d.a)(I,2),w=T[0],B=T[1];Object(c.useEffect)((function(){p.getAll().then((function(e){var t=e.data;B(t.map((function(e){return e.category})))})).catch((function(){return console.log("No se pudo recuperar el listado de categor\xedas")}))}),[]);var A=w.map((function(e){return Object(f.jsx)("option",{children:e},e)}));return Object(f.jsxs)("div",{className:"centeredContainer",children:[Object(f.jsx)("h1",{children:"Desde esta secci\xf3n podes cargar los nuevos movimientos"}),m&&Object(f.jsx)(b.a,{variant:"success",dismissible:!0,children:Object(f.jsx)("p",{children:"Movimiento agregado con \xe9xito"})}),v&&Object(f.jsx)(b.a,{variant:"danger",dismissible:!0,children:Object(f.jsx)("p",{children:S||"No se pudo agregar el movimiento, error de servidor"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"(Todos los campos son obligatorios)"}),Object(f.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var t={date:a.date,category:a.category,description:a.description,amount:a.amount,kind:a.kind};x.create(t).then((function(){O(!0),setTimeout((function(){return O(!1)}),4e3)})).catch((function(e){y(!0),e.response.data.message&&k(e.response.data.message),setTimeout((function(){return y(!1)}),15e3)}))},children:[Object(f.jsx)(u.a,{md:6,className:"centeredContainer",children:Object(f.jsxs)(l.a.Group,{children:[Object(f.jsx)(l.a.Label,{children:"Fecha del movimiento: "}),Object(f.jsx)(l.a.Control,{type:"date",value:a.date,onChange:E,name:"date",required:!0}),Object(f.jsx)(l.a.Label,{children:"Concepto del movimiento: "}),Object(f.jsxs)(l.a.Control,{as:"select",value:a.category,onChange:E,name:"category",required:!0,children:[Object(f.jsx)("option",{}),A]}),Object(f.jsx)(l.a.Label,{children:"Observaciones del movimiento: "}),Object(f.jsx)(l.a.Control,{type:"text",value:a.description,onChange:E,name:"description",required:!0}),Object(f.jsx)(l.a.Label,{children:"Monto del movimiento: "}),Object(f.jsx)(l.a.Control,{type:"number",value:a.amount,onChange:E,name:"amount",max:"1000000",min:"0",required:!0}),Object(f.jsx)(l.a.Label,{children:"Tipo de movimiento (egreso/ingreso): "}),Object(f.jsxs)(l.a.Control,{as:"select",value:a.kind,onChange:E,name:"kind",required:!0,children:[Object(f.jsx)("option",{}),Object(f.jsx)("option",{value:"Egreso",children:"Egreso"}),Object(f.jsx)("option",{value:"Ingreso",children:"Ingreso"})]})]})}),Object(f.jsx)(j.a,{type:"submit",className:"spacedButton",children:"Guardar"})]})]})]})};var y=function(){var e=Object(c.useState)({category:"",description:"",limit:""}),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),o=Object(d.a)(n,2),m=o[0],O=o[1],h=Object(c.useState)(!1),g=Object(d.a)(h,2),x=g[0],v=g[1],y=function(e){var t=e.target,c=t.name,n=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},c,n)))};return Object(f.jsxs)("div",{className:"centeredContainer",children:[Object(f.jsx)("h1",{children:"Desde esta secci\xf3n pod\xe9s cargar nuevos rubros / categor\xedas para ordenar tus movimientos."}),m&&Object(f.jsx)(b.a,{variant:"success",dismissible:!0,children:Object(f.jsx)("p",{children:"Categor\xeda de presupuesto agregada con \xe9xito"})}),x&&Object(f.jsx)(b.a,{variant:"danger",dismissible:!0,children:Object(f.jsx)("p",{children:"No se pudo agregar la categor\xeda, posible duplicado o error de servidor"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:"(Todos los campos son obligatorios)"}),Object(f.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var t={category:a.category,description:a.description,limit:a.limit};p.create(t).then((function(){O(!0),setTimeout((function(){return O(!1)}),4e3)})).catch((function(){v(!0),setTimeout((function(){return v(!1)}),15e3)}))},children:[Object(f.jsx)(u.a,{md:6,className:"centeredContainer",children:Object(f.jsxs)(l.a.Group,{children:[Object(f.jsx)(l.a.Label,{children:"Nombre para el rubro / concepto: "}),Object(f.jsx)(l.a.Control,{type:"text",value:a.category,onChange:y,name:"category",required:!0}),Object(f.jsxs)(l.a.Label,{children:["Descripci\xf3n extensa sobre qu\xe9 incluye el rubro:"," "]}),Object(f.jsx)(l.a.Control,{type:"text",value:a.description,onChange:y,name:"description",required:!0}),Object(f.jsx)(l.a.Label,{children:"Monto mensual objetivo para el rubro: "}),Object(f.jsx)(l.a.Control,{type:"number",value:a.limit,onChange:y,name:"limit",max:"10000000",min:"0",required:!0})]})}),Object(f.jsx)(j.a,{type:"submit",className:"spacedButton",children:"Guardar"})]})]})]})},C=a(30),N=a(8),S=a.n(N),k=(a(46),a(11)),E=a(29);S.a.locale("es"),S.a.defaultFormat("$0,0.00");var I=function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),o=Object(d.a)(n,2),b=o[0],m=o[1],O=Object(c.useState)([]),h=Object(d.a)(O,2),g=h[0],v=h[1],y=Object(c.useState)(!!JSON.parse(localStorage.getItem("showIncome"))&&JSON.parse(localStorage.getItem("showIncome"))),N=Object(d.a)(y,2),I=N[0],T=N[1],w=Object(c.useState)(!1),B=Object(d.a)(w,2),A=B[0],F=B[1];Object(c.useEffect)((function(){x.getAll().then((function(e){var t=e.data;m(t.filter((function(e){return"Egreso"===e.kind}))),v(t.filter((function(e){return"Ingreso"===e.kind}))),r(!1)})).catch((function(){return console.log("No se han podido recuperar los movimientos del servidor")}))}),[]);var R=function(e){x.delete(e).then((function(e){console.log(e.data)})).catch((function(){return console.log("No se ha podido borrar el movimiento")})),localStorage.setItem("selectedCategory",JSON.stringify(Q)),localStorage.setItem("activeFilter",JSON.stringify(Y)),localStorage.setItem("showIncome",JSON.stringify(I)),window.location.reload()},M=Object(c.useState)(),J=Object(d.a)(M,2),L=J[0],q=J[1],D=function(e){q(I?g.filter((function(t){return t.id===e}))[0]:b.filter((function(t){return t.id===e}))[0]),F(!0)},z=function(e){var t=e.target,a=t.name,c=t.value;q(Object(s.a)(Object(s.a)({},L),{},Object(i.a)({},a,c)))},G=Object(c.useState)([]),P=Object(d.a)(G,2),$=P[0],K=P[1];Object(c.useEffect)((function(){p.getAll().then((function(e){var t=e.data;K(t.map((function(e){return e.category})))})).catch((function(){return console.log("No se han podido recuperar los datos del servidor")}))}),[]);var H=Object(c.useState)(JSON.parse(localStorage.getItem("selectedCategory"))?JSON.parse(localStorage.getItem("selectedCategory")):""),U=Object(d.a)(H,2),Q=U[0],V=U[1],W=Object(c.useState)(!!JSON.parse(localStorage.getItem("activeFilter"))&&JSON.parse(localStorage.getItem("activeFilter"))),X=Object(d.a)(W,2),Y=X[0],Z=X[1],_=g.filter((function(e){return e.category===Q})).map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.date.slice(0,10)}),Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:+e.amount.toFixed(2)}),Object(f.jsx)("td",{className:"editCell",onClick:function(){return D(e.id)},children:"Editar"}),Object(f.jsx)("td",{className:"deleteCell",onClick:function(){return R(e.id)},children:"Borrar"})]},e.id)})),ee=g.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.date.slice(0,10)}),Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:S()(e.amount).format()}),Object(f.jsx)("td",{className:"editCell",onClick:function(){return D(e.id)},children:"Editar"}),Object(f.jsx)("td",{className:"deleteCell",onClick:function(){return R(e.id)},children:"Borrar"})]},e.id)})),te=b.filter((function(e){return e.category===Q})).map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.date.slice(0,10)}),Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:+e.amount.toFixed(2)}),Object(f.jsx)("td",{className:"editCell",onClick:function(){return D(e.id)},children:"Editar"}),Object(f.jsx)("td",{className:"deleteCell",onClick:function(){return R(e.id)},children:"Borrar"})]},e.id)})),ae=b.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.date.slice(0,10)}),Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:S()(e.amount).format()}),Object(f.jsx)("td",{className:"editCell",onClick:function(){return D(e.id)},children:"Editar"}),Object(f.jsx)("td",{className:"deleteCell",onClick:function(){return R(e.id)},children:"Borrar"})]},e.id)})),ce=$.map((function(e){return Object(f.jsx)("option",{children:e},e)}));return a?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(E.a,{animation:"grow",variant:"success"})}):0===b.length&&0===g.length?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"A\xfan no ten\xe9s movimientos cargados"}),Object(f.jsx)(k.b,{to:"/add",children:Object(f.jsx)("button",{children:" Sumar movimiento "})})]}):Object(f.jsxs)("div",{children:[A?null:Object(f.jsxs)("header",{className:"centeredHeader",children:[Object(f.jsxs)("h1",{children:["Listado de ",I?"ingresos":"gastos"," cargados"]}),Object(f.jsxs)(j.a,{className:"spacedButton",onClick:function(){T(!I),localStorage.setItem("showIncome",JSON.stringify(!I))},variant:"primary",children:[" ","Mejor mostrame los ",I?"Gastos":"Ingresos"]}),Object(f.jsxs)(l.a,{children:[Object(f.jsx)(l.a.Label,{children:"Filtrame por el siguiente Rubro: "}),Object(f.jsxs)(l.a.Control,{className:"civilizedDropdown",as:"select",value:Q,onChange:function(e){Z(!0),V(e.target.value),localStorage.setItem("selectedCategory",JSON.stringify(e.target.value)),localStorage.setItem("activeFilter",JSON.stringify(!0))},name:"category",children:[Object(f.jsx)("option",{}),ce]}),Object(f.jsxs)(j.a,{className:"spacedButton",onClick:function(){Z(!1),V(""),localStorage.setItem("selectedCategory",JSON.stringify("")),localStorage.setItem("activeFilter",JSON.stringify(!1))},variant:"secondary",children:[" ","Resetear Filtro"]})]})]}),A?Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"secondaryTitle",children:"Editando movimiento:"}),Object(f.jsx)(l.a,{onSubmit:function(e){e.preventDefault();try{var t={id:L.id,date:L.date,category:L.category,description:L.description,amount:L.amount,kind:L.kind};x.update(t.id,t).then((function(e){F(!1),console.log(e.data)})).catch((function(){return console.log("No se ha podido editar el movimiento")}))}finally{F(!1),q(""),window.location.reload()}},children:Object(f.jsxs)(u.a,{md:6,className:"centeredContainer",children:[Object(f.jsx)(l.a.Label,{children:"Fecha:"}),Object(f.jsx)(l.a.Control,{value:L.date.slice(0,10),onChange:z,type:"date",name:"date",required:!0}),Object(f.jsx)(l.a.Label,{children:"Categor\xeda:"}),Object(f.jsxs)(l.a.Control,{as:"select",value:L.category,onChange:z,name:"category",required:!0,children:[Object(f.jsx)("option",{}),ce]}),Object(f.jsx)(l.a.Label,{children:"Descripci\xf3n:"}),Object(f.jsx)(l.a.Control,{value:L.description,onChange:z,type:"text",name:"description",required:!0}),Object(f.jsx)(l.a.Label,{children:"Monto:"}),Object(f.jsx)(l.a.Control,{value:L.amount,onChange:z,type:"number",name:"amount",max:"1000000",min:"0",required:!0}),Object(f.jsx)(j.a,{className:"spacedButton",type:"submit",variant:"primary",children:"Guardar Edici\xf3n"})," ",Object(f.jsx)(j.a,{className:"spacedButton",onClick:function(){F(!1),q(void 0)},variant:"secondary",children:"Cancelar Edici\xf3n"})]})})]}):null,!1===A?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(C.a,{responsive:"md",striped:!0,size:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Fecha"}),Object(f.jsx)("th",{children:"Rubro al que corresponde"}),Object(f.jsx)("th",{children:"Descripci\xf3n del gasto"}),Object(f.jsx)("th",{children:"Monto"}),Object(f.jsx)("th",{children:"Editar"}),Object(f.jsx)("th",{children:"Borrar"})]})}),Object(f.jsx)("tbody",{className:"tableText",children:!0===Y?I?_:te:I?ee:ae})]})}):null]})},T=a(62),w=a(60);var B=function(){S.a.locale("es"),S.a.defaultFormat("$0,0.00");var e=Object(c.useState)(0),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)([]),o=Object(d.a)(n,2),i=o[0],s=o[1];Object(c.useEffect)((function(){x.getAll().then((function(e){var t=e.data;s(t),r((function(e){return e+1}))})).catch((function(){return console.log("No se ha podido conectar al servidor")}))}),[]);var l=Object(c.useState)([]),j=Object(d.a)(l,2),u=j[0],b=j[1],m=Object(c.useState)([]),O=Object(d.a)(m,2),h=O[0],g=O[1];Object(c.useEffect)((function(){p.getAll().then((function(e){var t=e.data;b(t),g(t.map((function(e){return e.category}))),r((function(e){return e+1}))})).catch((function(){return console.log("No se ha podido conectar al servidor")}))}),[]);var v=Object(c.useState)([]),y=Object(d.a)(v,2),N=y[0],k=y[1];Object(c.useEffect)((function(){if(2===a){var e,t=Object(w.a)(h);try{var c=function(){var t=e.value,a=i.filter((function(e){return e.category===t})),c=a.filter((function(e){return"Ingreso"===e.kind})).reduce((function(e,t){return e+t.amount}),0)-a.filter((function(e){return"Egreso"===e.kind})).reduce((function(e,t){return e+t.amount}),0);k((function(e){return[].concat(Object(T.a)(e),[c])})),r(!0)};for(t.s();!(e=t.n()).done;)c()}catch(n){t.e(n)}finally{t.f()}}}),[a]);var I=u.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:S()(e.limit).format()}),Object(f.jsx)("td",{children:S()(N[t]).format()}),Object(f.jsx)("td",{className:e.limit-N[t]<0?"redText":"",children:N[t]>0?S()(e.limit-N[t]).format():S()(e.limit+N[t]).format()}),Object(f.jsx)("td",{className:"deleteCell",onClick:function(){return t=e.id,a=e.category,void(0===i.filter((function(e){return e.category===a})).length?(p.delete(t).then((function(e){console.log(e.data)})).catch((function(){return console.log("No se ha podido borrar la categor\xeda")})),window.location.reload()):window.alert("Esta categor\xeda a\xfan tiene movimientos. Se deben borrar todos los movimientos de la categor\xeda para poder borrarla."));var t,a},children:"Borrar"})]},e.id)})),B=S()(u.reduce((function(e,t){return e+t.limit}),0)).format(),A=S()(u.reduce((function(e,t){return e+t.limit}),0)-N.reduce((function(e,t){return t>0?e+t:e-t}),0)).format();return a&&1!==a?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Presupuesto actual"}),Object(f.jsxs)(C.a,{responsive:"md",striped:!0,size:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Rubro"}),Object(f.jsx)("th",{children:"Descripci\xf3n"}),Object(f.jsx)("th",{children:"Monto Previsto"}),Object(f.jsx)("th",{children:"Movimientos Registrados (ingresos-egreso)"}),Object(f.jsx)("th",{children:"Diferencia"}),Object(f.jsx)("th",{children:"Borrar"})]})}),Object(f.jsxs)("tbody",{className:"tableText",children:[a&&I,Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Totales:"}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:B}),Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:A}),Object(f.jsx)("th",{})]})]})]})]}):Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(E.a,{animation:"grow",variant:"success"})})},A=[{date:"2021-04-01",category:"Trabajos",description:"Trabajos de herrer\xeda realizados por Ricarda",amount:1e4,kind:"Ingreso"},{date:"2021-04-01",category:"Trabajos",description:"Trabajos de herrer\xeda realizados por Ricarda",amount:1e4,kind:"Ingreso"},{date:"2021-03-01",category:"Trabajos",description:"Trabajos de herrer\xeda realizados por Ricarda",amount:1e4,kind:"Ingreso"},{date:"2021-03-01",category:"Trabajos",description:"Trabajos de herrer\xeda realizados por Ricarda",amount:1e4,kind:"Ingreso"},{date:"2021-04-01",category:"Trabajos",description:"Trabajos de herrer\xeda realizados por Ricarda",amount:1e4,kind:"Ingreso"},{date:"2021-04-01",category:"Mercado",description:"Art\xedculos de limpieza para Ricarda",amount:3e3,kind:"Egreso"},{date:"2021-04-01",category:"Mercado",description:"Compra mensual de Ricarda",amount:7500,kind:"Egreso"},{date:"2021-04-01",category:"Mercado",description:"Compras de la verduler\xeda",amount:3e3,kind:"Egreso"},{date:"2021-03-01",category:"Mercado",description:"Art\xedculos de limpieza para Ricarda",amount:3e3,kind:"Egreso"},{date:"2021-03-01",category:"Mercado",description:"Compra mensual de Ricarda",amount:7500,kind:"Egreso"},{date:"2021-03-01",category:"Mercado",description:"Compras de la verduler\xeda",amount:3e3,kind:"Egreso"},{date:"2021-03-01",category:"Servicios",description:"Garrafa de gas",amount:1e3,kind:"Egreso"},{date:"2021-03-01",category:"Servicios",description:"Garrafa de gas",amount:1e3,kind:"Egreso"},{date:"2021-04-01",category:"Servicios",description:"Garrafa de gas",amount:1e3,kind:"Egreso"},{date:"2021-04-01",category:"Servicios",description:"Garrafa de gas",amount:1e3,kind:"Egreso"},{date:"2021-04-01",category:"Servicios",description:"Devoluci\xf3n se\xf1a",amount:500,kind:"Ingreso"},{date:"2021-04-01",category:"Servicios",description:"Electricidad del mes de marzo",amount:2e3,kind:"Egreso"},{date:"2021-04-01",category:"Servicios",description:"Agua del mes de marzo",amount:2e3,kind:"Egreso"},{date:"2021-04-01",category:"Comidas",description:"Cena cumplea\xf1os",amount:2e3,kind:"Egreso"},{date:"2021-04-01",category:"Comidas",description:"Cena cumplea\xf1os",amount:2e3,kind:"Egreso"},{date:"2021-04-01",category:"Comidas",description:"Cena cumplea\xf1os",amount:2e3,kind:"Egreso"},{date:"2021-04-01",category:"Comidas",description:"Cena cumplea\xf1os",amount:2e3,kind:"Egreso"}],F=[{category:"Comidas",description:"Gastos en comer en la calle",limit:1e4},{category:"Mercado",description:"Compras en el mercado",limit:1e4},{category:"Servicios",description:"Pagos de servicios p\xfablicos",limit:5e3},{category:"Trabajos",description:"Ingresos por trabajos",limit:8e4}];var R=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(!1),o=Object(d.a)(n,2),i=o[0],s=o[1];return Object(f.jsxs)("div",{className:"centeredContainer",children:[Object(f.jsx)("h1",{children:"Opciones de configuraci\xf3n"}),Object(f.jsx)(j.a,{className:"spacedButton",onClick:function(){var e=!0;F.forEach((function(t){var a={category:t.category,description:t.description,limit:t.limit};p.create(a).then((function(t){console.log("OK"),!0===e&&(A.forEach((function(e){var t={date:e.date,category:e.category,description:e.description,amount:e.amount,kind:e.kind};x.create(t).then((function(e){console.log("OK"),r(!0)})).catch((function(e){console.log(e),s(!0)}))})),e=!1)})).catch((function(e){console.log(e),s(!0)}))}))},variant:"secondary",children:"Cargar datos de prueba"})," ",Object(f.jsx)(j.a,{className:"spacedButton",onClick:function(){if(!0===window.confirm("Esto es irreversible, vas a borrar todos los datos y no se puede recuperar, \xbfest\xe1s seguro?"))try{p.deleteAll(),x.deleteAll()}catch(e){console.log("No se pudieron borrar los datos")}finally{window.location.reload()}},variant:"danger",children:"Borrar todos los datos"}),a&&Object(f.jsx)("div",{children:Object(f.jsxs)(b.a,{variant:"danger",dismissible:!0,children:[Object(f.jsx)("p",{className:"blueText",children:"Datos de prueba cargados exitosamente."}),Object(f.jsx)(k.b,{to:"/entries",children:Object(f.jsx)("button",{children:" Ir al listado "})})]})}),i&&Object(f.jsx)(b.a,{variant:"danger",dismissible:!0,children:Object(f.jsx)("p",{className:"redText",children:"No se han podido cargar datos de prueba, ya est\xe1n cargados o se ha producido un error."})})]})};var M=function(){S.a.locale("es"),S.a.defaultFormat("$0,0.00");var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],n=Object(c.useState)(0),o=Object(d.a)(n,2),i=o[0],s=o[1],l=Object(c.useState)(0),j=Object(d.a)(l,2),u=j[0],b=j[1],m=Object(c.useState)(!0),O=Object(d.a)(m,2),h=O[0],g=O[1];Object(c.useEffect)((function(){x.getAll().then((function(e){var t=e.data;r(t),s(t.filter((function(e){return"Egreso"===e.kind})).reduce((function(e,t){return e+t.amount}),0)),b(t.filter((function(e){return"Ingreso"===e.kind})).reduce((function(e,t){return e+t.amount}),0)),g(!1)})).catch((function(e){return console.log("No se pudo cargar la informaci\xf3n de los movimientos",e)}))}),[]);var p=a.filter((function(e){return null!==e.date})).sort((function(e,t){return e.createdAt<t.createdAt?1:-1})).slice(0,10).map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.date.slice(0,10)}),Object(f.jsx)("td",{children:e.category}),Object(f.jsx)("td",{children:e.description}),Object(f.jsx)("td",{children:S()(e.amount).format()}),Object(f.jsx)("td",{children:e.kind})]},e.id)}));return h?Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)(E.a,{animation:"grow",variant:"success"})}):Object(f.jsxs)("div",{className:"centeredContainer",children:[Object(f.jsx)("h1",{children:"Posici\xf3n consolidada"}),Object(f.jsxs)("div",{className:"budgetSummary",children:[Object(f.jsxs)("p",{children:["Total de ingresos: ",S()(u).format()]}),Object(f.jsxs)("p",{className:"redText",children:["Total de gastos: ",S()(i).format()]}),Object(f.jsxs)("p",{className:u-i>0?"budgetSummaryResult":"budgetSummaryResult redText",children:["Saldo actual: ",S()(u-i).format()]})]}),Object(f.jsx)("h2",{className:"secondaryTitle",children:"\xdaltimos 10 movimientos cargados"}),Object(f.jsxs)(C.a,{responsive:"md",hover:!0,striped:!0,size:"sm",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Fecha"}),Object(f.jsx)("th",{children:"Rubro al que corresponde"}),Object(f.jsx)("th",{children:"Descripci\xf3n del movimiento"}),Object(f.jsx)("th",{children:"Monto"}),Object(f.jsx)("th",{children:"Tipo"})]})}),Object(f.jsx)("tbody",{className:"tableText",children:p})]})]})},J=a(35),L=a(61),q=a.p+"static/media/logo.3a3d5c4c.svg";function D(){return Object(f.jsxs)(J.a,{bg:"dark",variant:"dark",sticky:"top",expand:"md",children:[Object(f.jsx)(J.a.Brand,{children:Object(f.jsxs)(k.b,{to:"/",children:["/Presupuestar\xe9/ ",Object(f.jsx)("img",{className:"logo",src:q,alt:"logo"})]})}),Object(f.jsx)(J.a.Toggle,{}),Object(f.jsx)(J.a.Collapse,{children:Object(f.jsxs)(L.a,{className:"mr-auto",children:[Object(f.jsx)(k.b,{to:"/entries",className:"nav-link",children:"Listar movimientos"}),Object(f.jsx)(k.b,{to:"/add",className:"nav-link",children:"Sumar movimiento"}),Object(f.jsx)(k.b,{to:"/addBudget",className:"nav-link",children:"Sumar categor\xeda de movimiento"}),Object(f.jsx)(k.b,{to:"/budget",className:"nav-link",children:"Presupuesto"}),Object(f.jsx)(k.b,{to:"/config",className:"nav-link",children:"Configuraci\xf3n"})]})})]})}var z=a(9);var G=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(D,{}),Object(f.jsx)("div",{children:Object(f.jsxs)(z.c,{children:[Object(f.jsx)(z.a,{exact:!0,path:"/budget",component:B}),Object(f.jsx)(z.a,{exact:!0,path:"/entries",component:I}),Object(f.jsx)(z.a,{exact:!0,path:"/add",component:v}),Object(f.jsx)(z.a,{exact:!0,path:"/addBudget",component:y}),Object(f.jsx)(z.a,{exact:!0,path:"/config",component:R}),Object(f.jsx)(z.a,{exact:!0,path:"/",component:M})]})})]})};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k.a,{children:Object(f.jsx)(G,{})})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.aa7b9329.chunk.js.map