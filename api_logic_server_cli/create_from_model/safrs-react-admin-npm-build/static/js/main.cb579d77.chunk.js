(this["webpackJsonpreact-apilogicserver"]=this["webpackJsonpreact-apilogicserver"]||[]).push([[3],{309:function(e){e.exports=JSON.parse('{"api_root":"//thomaxxl.pythonanywhere.com/api","resources":{"People":{"type":"Person","user_key":"name","columns":[{"name":"id","hidden":true},{"name":"name"},{"name":"email"},{"name":"comment"},{"name":"dob"},{"name":"employer_id"},{"name":"_password"}],"relationships":[{"name":"books_read","target":"Books","fks":["reader_id"],"direction":"tomany"},{"name":"books_written","target":"Books","fks":["author_id"],"direction":"tomany"},{"name":"reviews","target":"Reviews","fks":["reader_id"],"direction":"tomany"},{"name":"friends","target":"People","fks":["friend_a_id","friend_b_id"],"direction":"tomany"}],"label":null},"Books":{"type":"Book","user_key":"title","columns":[{"name":"id","hidden":true},{"name":"title"},{"name":"reader_id"},{"name":"author_id"},{"name":"publisher_id"},{"name":"published"}],"relationships":[{"name":"publisher","target":"Publishers","fks":["publisher_id"],"direction":"toone"},{"name":"reviews","target":"Reviews","fks":["book_id"],"direction":"tomany"},{"name":"reader","target":"People","fks":["reader_id"],"direction":"toone"},{"name":"author","target":"People","fks":["author_id"],"direction":"toone"}],"label":null},"Reviews":{"type":"Review","columns":[{"name":"book_id"},{"name":"reader_id"},{"name":"review"},{"name":"created"}],"relationships":[{"name":"book","target":"Books","fks":["book_id"],"direction":"toone"},{"name":"reader","target":"People","fks":["reader_id"],"direction":"toone"}],"label":null},"Publishers":{"type":"Publisher","columns":[{"name":"id"},{"name":"name"}],"relationships":[{"name":"books","target":"Books","fks":["publisher_id"],"direction":"tomany"}],"label":null}}}')},707:function(e,t,n){},893:function(e,t){},926:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(86),c=n.n(o),i=n(22),s=n(238),l=n(1056),u=n(1042),d=n(1060),j=n(120),b=n(499),f=n(264),h=n(590),p=n(1),O=n(6),m=n(7),v=n(200),g=n(398),y=(Error,function(e){Object(O.a)(n,e);var t=Object(m.a)(n);function n(e,r,a){var o;return Object(p.a)(this,n),(o=t.call(this,e,r,a)).name="SafrsHttpError",o}return n}(g.a)),x={total:"total",headers:{Accept:"application/vnd.api+json; charset=utf-8","Content-Type":"application/vnd.api+json; charset=utf-8"},updateMethod:"PATCH",arrayFormat:"brackets",includeRelations:[],errorHandler:function(e){var t=e.body;return(null===t||void 0===t?void 0:t.errors.length)>0?(alert("Error "+t.errors[0].title),new y(t.errors[0].title,e.status,t.errors[0].code)):(console.log("Unsopported Http Error Body",e.body),e)},endpointToTypeStripLastLetters:["Model","s"]},w=n(8),S=n(25),k=n(2),_=function(){function e(t){if(Object(p.a)(this,e),this.lookup=void 0,this.includes=void 0,this.lookup=new Map,this.includes=[],"object"===typeof t){var n;n=Object.prototype.hasOwnProperty.call(t,"included")?[].concat(Object(S.a)(t.data),Object(S.a)(t.included)):t.data;var r,a=Object(w.a)(n);try{for(a.s();!(r=a.n()).done;){var o=r.value,c=this.getKey(o);this.lookup.set(c,o)}}catch(i){a.e(i)}finally{a.f()}}}return Object(k.a)(e,[{key:"getKey",value:function(e){return"".concat(e.type,":").concat(e.id)}},{key:"get",value:function(e){return this.has(e)?this.lookup.get(this.getKey(e)):e}},{key:"has",value:function(e){return this.lookup.has(this.getKey(e))}},{key:"unwrapData",value:function(e,t){var n=Object.assign({id:e.id,ja_type:e.type},e.attributes);return 0===t.length||Object.prototype.hasOwnProperty.call(e,"relationships")&&(n.relationships=e.relationships),n}}]),e}();var P=n(309);var C=function(){var e=n(524);"raconf"in localStorage||(console.log("Init Configuration"),localStorage.setItem("raconf",JSON.stringify(P)),window.location.reload());var t={},r={},a="";if(a=function(e){var t=null,n=new XMLHttpRequest;n.open("GET",e,!1);try{n.send()}catch(r){console.warn("Failed to send loadFile ".concat(r.toString()))}return 200===n.status&&(t=n.responseText),t}("/ui/admin/admin.yaml"),"undefined"!==typeof a&&null!==a)a=(a=a.replace("<pre>","")).replace("</pre>",""),r=e.load(a),Object.entries(r.resources),t=r.resources;else{null;var o=localStorage.getItem("raconf");try{r=JSON.parse(o)||(JSON.parse(JSON.stringify(P))||{}),Object.entries(r.resources)}catch(L){console.warn("Failed to parse config ".concat(o)),localStorage.setItem("raconf",JSON.stringify(P))}r.resources||(r.resources={}),t=r.resources}for(var c=0,s=Object.entries(t||{});c<s.length;c++){var l=Object(i.a)(s[c],2),u=l[0],d=l[1];if(d.hasOwnProperty("attributes")){d.columns=[],d.relationships=[],d.search_cols=[];var j,b=Object(w.a)(d.attributes);try{for(b.s();!(j=b.n()).done;){var f=j.value;if("string"==typeof f){var h={};h.name=f,d.columns.push(h)}else if("object"==typeof f&&null!==f){var p={},O=Object.keys(f)[0];p.name=Object.keys(f)[0],f[O].hasOwnProperty("search")&&(p.search=f[O].search),f[O].hasOwnProperty("label")&&(p.label=f[O].label),d.columns.push(p)}else console.log("ignoring ".concat(f," in config"))}}catch(M){b.e(M)}finally{b.f()}for(var m=0,v=Object.entries(d.tab_groups||{});m<v.length;m++){var g=Object(i.a)(v[m],2),y=g[0],x=g[1],S={};S.name=y,S.fks=x.fks,S.direction=x.direction,"toone"===x.direction?S.target=x.target:(x.direction,S.target=x.resource),d.relationships.push(S)}}if(d.columns instanceof Array||d.relationships instanceof Array){d.type||(d.type=u),d.search_cols=[],r.resources[u].name=u;var k,_=Object(w.a)(d.columns);try{for(_.s();!(k=_.n()).done;){var C,E=k.value,T=Object(w.a)(d.relationships||[]);try{for(T.s();!(C=T.n()).done;){var A,J=C.value,R=Object(w.a)(J.fks||[]);try{for(R.s();!(A=R.n()).done;){var I=A.value;E.name===I&&(E.relationship=J,E.relationship.target_resource=r.resources[E.relationship.target])}}catch(M){R.e(M)}finally{R.f()}}}catch(M){T.e(M)}finally{T.f()}E.search&&d.search_cols.push(E)}}catch(M){_.e(M)}finally{_.f()}console.log("".concat(u," search cols"),d.search_cols)}}r||N();return r||N()},N=function(e){return console.log("Resetting conf",P),localStorage.setItem("raconf",JSON.stringify(P)),e&&window.location.reload(),P},E=(C(),C());var T=n(637),A=n.n(T),J=n(1022),R=n(1028),I=n(1030),L=n(1054),M=n(1053),H=n(1039),B=n(1080),D=n(1076),F=n(1077),U=n(282),W=n(1062),q=n(1052),G=n(1065),K=n(1081),z=n(1040),V=n(510),X=n(1041),Q=n(1063),Y=n(347),Z=n(937),$=n(1029),ee=n(240),te=n.n(ee),ne=n(621),re=n.n(ne),ae=n(622),oe=n.n(ae),ce=n(500),ie=n(935),se=n(1057),le=n(1067),ue=n(24),de={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"};function je(e){var t=e.label,n=e.content,a=e.resource_name,o=r.useState(!1),c=Object(i.a)(o,2),s=c[0],l=c[1];return Object(ue.jsxs)("div",{children:[Object(ue.jsxs)("span",{onClick:function(e){l(!0),e.stopPropagation()},className:"JoinedField",title:a,children:[t," "]}),Object(ue.jsx)(le.a,{open:s,onClose:function(e){e.stopPropagation(),l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(ue.jsxs)(se.a,{sx:de,children:[Object(ue.jsx)(Y.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:t}),Object(ue.jsx)(Y.a,{id:"modal-modal-description",sx:{mt:2},children:n})]})})]})}var be=n(1059),fe=n(1064),he=n(641),pe=(n(707),n(237)),Oe=n(423),me=n(1033),ve=C(),ge=[Object(ue.jsx)(F.a,{source:"q",label:"Search",alwaysOn:!0})],ye=function(e){var t=e.column,r=t.component,a=t.style||{},o=Object(ue.jsx)(J.a,{source:t.name,style:a},t.name);if(!r)return o;try{var c=Object(ce.a)((function(){return n.e(0).then(n.bind(null,1089))}),{resolveComponent:function(e){return e[r]}});return Object(ue.jsx)(c,{column:t})}catch(i){alert("Custom component error"),console.error("Custom component error",i)}return o},xe=function(e){var t,r,a=e.column,o=e.join,c=Object(U.b)();(null===c||void 0===c?void 0:c.attributes)&&Object.assign(c,c.attributes);var i=o.name,s=o.target,l=o.fks[0],u=null===(t=ve.resources[o.target])||void 0===t?void 0:t.user_key,d=Object(pe.a)({type:"getOne",resource:s,payload:{id:c?c[l]:null}}),j=d.data;d.loading,d.error;if(!c)return null;var b=j||c[i],f=null===(r=ve.resources[o.target])||void 0===r?void 0:r.user_component,h=null===b||void 0===b?void 0:b.id;if(b&&f)h=function(e,t){try{var r=Object(ce.a)((function(){return n.e(0).then(n.bind(null,1089))}),{resolveComponent:function(t){return t["".concat(e)]}});return Object(ue.jsx)(r,{instance:t})}catch(a){alert("Custom component error"),console.error("Custom component error",a)}return null}(f,b);else if((null===b||void 0===b?void 0:b.attributes)&&u){a.relationship.target_resource.columns.filter((function(e){return e.name==u}));h=Object(ue.jsx)("span",{children:b.attributes[u]||b.id})}var p=Object(ue.jsx)(Te,{instance:b,resource_name:o.target});return Object(ue.jsx)(je,{label:h,content:p,resource_name:o.target},a.name)},we=function(e,t){if(!t)return[];var n=t.filter((function(e){return"toone"===e.direction}));return e.map((function(e){if(e.hidden)return null;var t,r=Object(w.a)(n);try{for(r.s();!(t=r.n()).done;){var a,o=t.value,c=Object(w.a)(o.fks);try{for(c.s();!(a=c.n()).done;){var i=a.value;if(e.name==i)return Object(ue.jsx)(xe,{column:e,join:o,label:e.label?e.label:e.name},e.name)}}catch(s){c.e(s)}finally{c.f()}}}catch(s){r.e(s)}finally{r.f()}return Object(ue.jsx)(ye,{column:e,label:e.label?e.label:e.name,style:e.header_style},e.name)}))},Se=function(e){return Object(ue.jsx)(he.a,Object(j.a)({rowsPerPageOptions:[10,25,50,100],perPage:e.perPage||25},e))},ke=function(e,t,n,r){console.log("Delete",n),e.delete(t,n).then((function(){r()})).catch((function(e){return alert("error")}))},_e=function(e){var t,n=e.column;e.resource;if("toone"==(null===(t=n.relationship)||void 0===t?void 0:t.direction)&&n.relationship.target){var r=ve.resources[n.relationship.target].search_cols,a=Object(ue.jsx)(be.a,{optionText:""},n.name);return r?0==r.length?console.warn("no searchable columns configured for ".concat(n.relationship.target)):a=Object(ue.jsx)(be.a,{optionText:r[0].name},n.name):console.error("no searchable columns configured"),Object(ue.jsx)(fe.a,{source:n.name,label:"".concat(n.relationship.name," (").concat(n.name,")"),reference:n.relationship.target,children:a})}return Object(ue.jsx)(F.a,{source:n.name})},Pe=function(e){var t=e.record;return Object(ue.jsx)("span",{children:t?"".concat(t.type?t.type+" ":""," #").concat(t.id," "):""})},Ce=function(e){var t=e.source,n=Object(U.b)();return n?Object(ue.jsx)(Ne,{label:t,value:n[t]}):null},Ne=function(e){var t=e.label,n=e.value;return Object(ue.jsxs)(H.a,{item:!0,xs:3,children:[Object(ue.jsx)(Y.a,{variant:"body2",color:"textSecondary",component:"p",children:t}),Object(ue.jsx)(Y.a,{variant:"body2",component:"p",children:n})]})},Ee=function(e){var t=e.columns,n=e.relationships,a=e.resource_name,o=e.id,c=Object(ue.jsxs)(Y.a,{variant:"h5",component:"h5",style:{margin:"30px 0px 30px"},children:[a,Object(ue.jsxs)("i",{style:{color:"#ccc"},children:[" #",o]})]});return Object(ue.jsxs)(z.a,{children:[c,Object(ue.jsx)(H.a,{container:!0,spacing:3,margin:5,m:40,children:t.map((function(e){return Object(ue.jsx)(Ce,{source:e.name})}))}),Object(ue.jsx)("hr",{style:{margin:"30px 0px 30px"}}),Object(ue.jsx)(D.a,{tabs:Object(ue.jsx)(V.a,{variant:"scrollable",scrollButtons:"auto"}),children:n.map((function(e){return"tomany"===e.direction?function(e,t,n){var a=Object(r.useState)(!0),o=Object(i.a)(a,2),c=(o[0],o[1]),l=Object(r.useState)(),u=Object(i.a)(l,2),d=(u[0],u[1]),j=Object(r.useState)(!1),b=Object(i.a)(j,2),f=(b[0],b[1]),h=Object(s.a)();Object(r.useEffect)((function(){h.getOne(e,{id:t}).then((function(e){var t=e.data;f(t.relationships),c(!1)})).catch((function(e){d(e),c(!1)}))}),[]);var p=ve.resources[n.target];if(!p)return console.warn("".concat(e,": No resource conf for ").concat(p)),Object(ue.jsx)("span",{});if(!(null===p||void 0===p?void 0:p.columns))return console.log("No target resource columns"),Object(ue.jsx)("div",{});var O=p.columns.filter((function(t){var n;return(null===(n=t.relationship)||void 0===n?void 0:n.target)!==e})),m=null===p||void 0===p?void 0:p.relationships,v=we(O,m);n.source=e;var g=n.fks[0];return Object(ue.jsx)(B.a,{label:n.name,children:Object(ue.jsx)(K.a,{reference:n.target,target:g,addLabel:!1,pagination:Object(ue.jsx)(Se,{perPage:10}),children:Object(ue.jsxs)(M.a,{rowClick:"show",children:[v,Object(ue.jsx)(R.a,{})]})})},n.name)}(a,o,e):function(e,t,n){var a=Object(r.useState)(!0),o=Object(i.a)(a,2),c=(o[0],o[1]),l=Object(r.useState)(),u=Object(i.a)(l,2),d=(u[0],u[1]),j=Object(r.useState)(!1),b=Object(i.a)(j,2),f=b[0],h=b[1],p=Object(s.a)();return Object(r.useEffect)((function(){p.getOne(e,{id:t}).then((function(e){var t,r,a=e.data;return{rel_resource:null===(t=a[n.target])||void 0===t?void 0:t.data.type,rel_id:null===(r=a[n.target])||void 0===r?void 0:r.data.id}})).then((function(e){var t=e.rel_resource,n=e.rel_id;p.getOne(t,{id:n}).then((function(e){var t=e.data;return console.log(t),h(t)})).then((function(){return console.log(f)})),c(!1)})).catch((function(e){d(e),c(!1)}))}),[]),Object(ue.jsx)(B.a,{label:n.name,children:Object(ue.jsx)(Te,{instance:f})},n.name)}(a,o,e)}))})]})},Te=function(e){var t=e.instance,n=function(e){for(var t=0,n=Object.entries(null===ve||void 0===ve?void 0:ve.resources);t<n.length;t++){var r=Object(i.a)(n[t],2),a=r[0];if(r[1].type===e)return a}return console.warn('No resource for type "'.concat(e)),ve[e]}(null===t||void 0===t?void 0:t.type);if(!t||!n)return Object(ue.jsx)("span",{});var r=ve.resources[n],a=(null===r||void 0===r?void 0:r.columns)||[];null===r||void 0===r||r.relationships;return Object(ue.jsxs)("div",{style:{left:"-16px",position:"relative"},children:[Object(ue.jsxs)("div",{style:{textAlign:"right",width:"100%"},children:[Object(ue.jsxs)(ie.a,{title:"edit",component:X.a,to:{pathname:"".concat(n,"/").concat(t.id)},label:"Link",children:[Object(ue.jsx)(re.a,{}),"Edit"]}),Object(ue.jsxs)(ie.a,{title:"view",component:X.a,to:{pathname:"/".concat(n,"/").concat(t.id,"/show")},label:"Link",children:[Object(ue.jsx)(oe.a,{}),"View"]})]}),Object(ue.jsx)(H.a,{container:!0,title:"qsd",children:a.map((function(e){return Object(ue.jsx)(Ne,{label:e.name,value:t.attributes[e.name]},e.name)}))})]})},Ae=function(e){window.addEventListener("storage",(function(){return window.location.reload()}));var t=a.a.useState(),n=(Object(i.a)(t,2)[1],Object(r.useState)(ve.resources[e.name])),o=Object(i.a)(n,2),c=o[0],l=(o[1],Object(r.useMemo)((function(){return e=c,function(t){var n=function(t){var n=Object(s.a)(),r=Object(Z.a)();return[!1!==e.edit?Object(ue.jsx)(R.a,Object(j.a)({title:"Edit",label:""},t),e.name):null,!1!==e.delete?Object(ue.jsx)($.a,Object(j.a)({title:"Delete",onClick:function(e){e.stopPropagation()},render:function(e){return Object(ue.jsxs)(ie.a,{children:[" ",Object(ue.jsx)(te.a,{style:{fill:"#3f51b5"},onClick:function(a){return ke(n,t.resource,e,r)}})," "]})}},t),e.name):null,Object(ue.jsx)(I.a,Object(j.a)({title:"Show",label:""},t))]},r=e.columns,a=e.relationships,o=we(r,a),c=function(e){return Object(ue.jsx)("div",{children:Object(ue.jsx)("pre",{children:JSON.stringify(e,null,4)})})};return Object(ue.jsx)(L.a,Object(j.a)(Object(j.a)({filters:ge,pagination:Object(ue.jsx)(Se,{perPage:e.perPage}),sort:e.sort||""},t),{},{children:Object(ue.jsxs)(M.a,{rowClick:"show",expand:Object(ue.jsx)(c,{}),children:[o,Object(ue.jsx)(n,Object(j.a)({resource:e},t))]})}))};var e}),[c])),d=Object(r.useMemo)((function(){return e=c,function(t){return Object(ue.jsx)(G.a,Object(j.a)(Object(j.a)({},t),{},{children:Object(ue.jsx)(q.a,{children:e.columns.map((function(t){return Object(ue.jsx)(_e,{column:t,resource:e},t.name)}))})}))};var e}),[c]),b=Object(r.useMemo)((function(){return function(e){var t=e.columns;return function(e){Object(Oe.a)();var n=Object(Z.a)(),r=Object(me.a)();return Object(ue.jsx)(W.a,Object(j.a)(Object(j.a)({},e),{},{onFailure:function(t){r("edit",e.basePath,e.id),n()},children:Object(ue.jsx)(q.a,{children:t.map((function(e){return Object(ue.jsx)(_e,{column:e},e.name)}))})}))}}(c)}),[c]),f=Object(r.useMemo)((function(){return function(e){return function(t){var n=e.columns,r=e.relationships;return Object(ue.jsx)(Q.a,Object(j.a)(Object(j.a)({title:Object(ue.jsx)(Pe,{})},t),{},{children:Object(ue.jsx)(Ee,{columns:n,relationships:r,resource_name:t.resource,id:t.id})}))}}(c)}),[c]);return Object(ue.jsx)(u.a,Object(j.a)(Object(j.a)({},e),{},{list:l,edit:b,create:d,show:f}),e.name)},Je=n(1036),Re=n(936),Ie=n(211),Le=function(){return Object(ue.jsxs)(Je.a,{children:[Object(ue.jsx)(Ie.b,{title:"Home"}),Object(ue.jsxs)(Re.a,{children:[Object(ue.jsx)("center",{children:Object(ue.jsx)("h1",{children:"Welcome to API Logic Server"})}),Object(ue.jsx)("br",{}),Object(ue.jsx)("h2",{children:"Automatic Admin App, Designed For"}),Object(ue.jsxs)("ul",{children:[Object(ue.jsxs)("li",{children:["Instant Business User Collaboration - Working Software ",Object(ue.jsx)("i",{children:"Now"})]}),Object(ue.jsx)("li",{children:"Back Office Data Maintenance"})]}),Object(ue.jsx)("br",{}),Object(ue.jsx)("h2",{children:"Key Features"}),Object(ue.jsxs)("ul",{children:[Object(ue.jsxs)("li",{children:[Object(ue.jsx)("strong",{children:"Multi-page:"})," screen transitions"]}),Object(ue.jsxs)("li",{children:[Object(ue.jsx)("strong",{children:"Multi-table:"})," child grids, parent joins"]}),Object(ue.jsxs)("li",{children:[Object(ue.jsx)("strong",{children:"Logic aware:"})," multi-table derivations and constraints, extensible with Python events for email, messages, etc"]}),Object(ue.jsxs)("li",{children:[Object(ue.jsx)("strong",{children:"Customizable:"})," see ui/admin/admin.yaml.  Use SAFRS API for custom apps."]})]}),Object(ue.jsx)("br",{}),Object(ue.jsx)("h2",{children:"Resources"}),Object(ue.jsxs)("ul",{children:[Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{className:"custom",rel:"nofollow",href:"http://localhost:5656/api",target:"_blank",children:"Swagger"})}),Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{className:"custom",rel:"nofollow",href:"https://github.com/valhuber/ApiLogicServer/blob/main/README.md/",target:"_blank",children:"API Logic Server Docs"})}),Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{className:"custom",rel:"nofollow",href:"https://github.com/valhuber/ApiLogicServer/wiki/Working-with-the-Admin-App/",target:"_blank",children:"Admin App Customization Docs"})})]})]})]})},Me=n(929),He=n(1066),Be=n(311),De=n(1049),Fe=n(639),Ue=n(1073),We=n(1071),qe=n(1058),Ge=n(1070),Ke=n(1051),ze=n(524),Ve=Object(Be.a)((function(e){return{widget:{border:"1px solid #3f51b5",marginRight:"1em",marginTop:"1em",marginBottom:"1em"},textInput:{width:"80%"}}})),Xe=function(){var e=[];try{e=JSON.parse(localStorage.getItem("raconfigs","{}"))}catch(c){}var t=r.useState(e&&e[0]),n=Object(i.a)(t,2),a=n[0],o=n[1];return Object(ue.jsx)(Ue.a,{sx:{minWidth:120},children:Object(ue.jsxs)(Ge.a,{fullWidth:!0,children:[Object(ue.jsx)(We.a,{id:"demo-simple-select-label",children:"Config"}),Object(ue.jsx)(Ke.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"Configs",size:"small",onChange:function(e){o(e.target.value)},defaultValue:"30",children:e?Object.entries(e).map((function(e){return Object(ue.jsx)(qe.a,{value:"30",children:"Ten"})})):null})]})})},Qe=function(){var e,t=Ve(),n=function(e){try{if(e){var t=JSON.parse(e);g(t.api_root)}b("#ddeedd"),localStorage.setItem("raconf",e),s||window.location.reload()}catch(n){b("red")}l(e)},a=localStorage.getItem("raconf")||JSON.stringify(N()),o=Object(r.useState)(a?JSON.stringify(JSON.parse(a),null,4):""),c=Object(i.a)(o,2),s=c[0],l=c[1],u=Object(r.useState)("black"),d=Object(i.a)(u,2),j=d[0],b=d[1],f=Object(r.useState)(!0),h=Object(i.a)(f,2),p=h[0],O=h[1],m=Object(r.useState)(null===(e=JSON.parse(a))||void 0===e?void 0:e.api_root),v=Object(i.a)(m,2),g=(v[0],v[1]);return Object(ue.jsxs)("div",{children:[Object(ue.jsxs)("div",{children:[Object(ue.jsx)(Xe,{}),Object(ue.jsx)(ie.a,{className:t.widget,onClick:function(){return n("")},color:"primary",children:"Clear"}),Object(ue.jsx)(ie.a,{className:t.widget,onClick:function(){return n(JSON.stringify(N(),null,4))},color:"primary",children:"Reset"}),Object(ue.jsx)(ie.a,{className:t.widget,onClick:function(){return window.location.reload()},color:"primary",children:"Apply"}),Object(ue.jsx)(ie.a,{className:t.widget,onClick:function(){return localStorage.getItem("raconf"),void JSON.parse(localStorage.getItem("raconfigs","{}"))},color:"primary",children:"Save"}),Object(ue.jsx)(De.a,{control:Object(ue.jsx)(He.a,{checked:p,onChange:function(e){O(e.target.checked)}}),label:"Auto Save Config"})]}),Object(ue.jsx)("div",{children:Object(ue.jsxs)(D.a,{children:[Object(ue.jsx)(B.a,{label:"yaml",children:Object(ue.jsx)(Fe.a,{language:"yaml",value:ze.dump(JSON.parse(s)),options:{theme:"vs-dark"},height:"1000px",style:{borderLeft:"8px solid ".concat(j)},onChange:function(e,t){return function(e,t){console.log(e);try{var r=ze.load(e);n(JSON.stringify(r)),b("black")}catch(a){console.warn("Failed to process",e),b("red")}}(e)}})}),Object(ue.jsx)(B.a,{label:"json",children:Object(ue.jsx)(Me.a,{variant:"outlined",minRows:3,style:{width:"80%",backgroundColor:"white"},value:JSON.stringify(JSON.parse(s),null,4),onChange:function(e){return n(e.target.value)}})})]})})]})},Ye=n(1055),Ze=n(51),$e=n(299),et=n(626),tt=n(444),nt=n(627),rt=n(445),at=n.n(rt),ot=function(e){},ct=function(e){var t=Object(Ze.f)($e.b);return Object(ue.jsxs)(et.a,Object(j.a)(Object(j.a)({},e),{},{children:[t.map((function(e){return Object(ue.jsx)(tt.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?Object(ue.jsx)(e.icon,{}):Object(ue.jsx)(at.a,{}),onClick:ot,sidebarIsOpen:true},e.name)})),Object(ue.jsx)(nt.a,{})]}))},it=function(e){return Object(ue.jsx)(Ye.a,Object(j.a)(Object(j.a)({},e),{},{menu:ct}))},st=n(50),lt=n(14),ut=n.n(lt),dt=n(150),jt=n(253),bt=n(572),ft=n(452),ht=(n(138),n(344)),pt=n(310),Ot=n(1061),mt=C();var vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e},gt=function(e){for(var t=0,n=Object.entries(mt.resources);t<n.length;t++){var r=Object(i.a)(n[t],2),a=r[0];if(r[1].type===e)return a}return!1},yt=function(e,t){var n,r,a,o,c=Object(ht.a)(e,t);if("CRUD_GET_ONE_SUCCESS"==t.type)return c;var s,l=new Set,u=Object(w.a)((null===(o=t.payload)||void 0===o?void 0:o.included)||[]);try{for(u.s();!(s=u.n()).done;){var d=s.value,j=gt(d.type);void 0!==d.type&&void 0!==d.id&&j&&(c.resources[j]||(c.resources[j]={}),c.resources[j][d.id]=d,l.add(j))}}catch(x){u.e(x)}finally{u.f()}var b,f=Object(w.a)(l);try{for(f.s();!(b=f.n()).done;)b.value}catch(x){f.e(x)}finally{f.f()}if(Array.isArray(null===(n=t.payload)||void 0===n?void 0:n.data)){var h=t.payload.data;Array.isArray(t.payload.included);var p,O=Object(w.a)(h);try{for(O.s();!(p=O.n()).done;){var m=p.value;if(m.relationships)for(var v=function(){var e,t,n=Object(i.a)(y[g],2),r=n[0],a=n[1],o=gt(null===(e=a.data)||void 0===e?void 0:e.type);o&&(Array.isArray(a.data)?m.relationships[r]=m[r]=a.data.map((function(e){return c.resources[o][e.id]})):(null===(t=a.data)||void 0===t?void 0:t.id)&&(m.relationships[r]=m[r]=c.resources[o][a.data.id]))},g=0,y=Object.entries(m.relationships);g<y.length;g++)v()}}catch(x){O.e(x)}finally{O.f()}}else null===(r=t.payload)||void 0===r||null===(a=r.data)||void 0===a||a.type;return c},xt=function(e){var t=e.authProvider,n=e.dataProvider,r=e.history,a=Object(dt.b)({admin:yt,router:Object(jt.b)(r),sReducer:vt}),o=ut.a.mark((function e(){return ut.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(st.a)([Object(Ot.a)(n,t)].map(st.f));case 2:case"end":return e.stop()}}),e)})),c=Object(ft.a)(),i=dt.c,s=Object(dt.d)((function(e,t){return a(t.type!==pt.f?e:void 0,t)}),{},i(Object(dt.a)(c,Object(bt.a)(r))));return c.run(o),s},wt=n(148),St=n(638),kt=n.n(St),_t=Object(wt.b)(),Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;return"RA/CRUD_GET_LIST_SUCCESS"===n&&(console.log("bcR",n,r),console.log(e)),e},Ct=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{conf:{}},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.a.fetchJson,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Content-Range",a=Object(h.a)(x,t);t.conf;return{getList:function(t,r){var o,c=t,i=r.pagination,s=i.page,l=i.perPage,u=E.resources[c],d=u.sort,j={"page[number]":s,"page[size]":l,"page[offset]":(s-1)*l,"page[limit]":l,sort:d||""};if(console.log(r),(null===(o=r.filter)||void 0===o?void 0:o.q)&&"resources"in E){var f=u.columns.filter((function(e){return 1==e.search})).map((function(e){return e.name}));u.sort;j.filter=JSON.stringify(f.map((function(e){return{name:e,op:"like",val:"".concat(r.filter.q,"%")}})))}else Object.keys(r.filter||{}).forEach((function(e){j["filter[".concat(e,"]")]=r.filter[e]}));if(r.sort&&r.sort.field){var h="ASC"===r.sort.order?"":"-";j.sort="".concat(h).concat(r.sort.field)}var p=(E.resources[c].relationships||[]).map((function(e){return e.name}));j.include=p.join(",");var O="".concat(e,"/").concat(t,"?").concat(Object(b.stringify)(j));return n(O).then((function(e){var t=e.json,n=0;t.meta&&a.total&&(n=t.meta[a.total]),n=n||t.data.length;var r=new _(t),o=t.data.map((function(e){return r.unwrapData(e,p)}));return{data:o,included:t.included,total:n}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},getOne:function(t,r){var a=E.resources[t];if(!a)return console.warn("Invalid resource ".concat(t)),new Promise((function(){}));var o=((null===a||void 0===a?void 0:a.relationships)||[]).map((function(e){return e.name})).join(","),c="".concat(e,"/").concat(t,"/").concat(r.id,"?include=").concat(o);return n(c).then((function(e){var t=e.json.data,n=t.id,r=t.attributes,a=t.relationships,o=t.type;return Object.assign(r,a,{type:o},{relationships:a},{attributes:Object(j.a)({},r)}),{data:Object(j.a)({id:n},r)}}))},getMany:function(t,r){t=t;var o="filter[id]="+JSON.stringify(r.ids),c="".concat(e,"/").concat(t,"?").concat(o);return n(c).then((function(e){var t=e.json;console.log("gtMany",t);var n=0;return t.meta&&a.total&&(n=t.meta[a.total]),n=n||t.data.length,{data:t.data.map((function(e){return Object.assign({id:e.id,type:e.type},e.attributes)})),total:n}}))},getManyReference:function(t,o){console.log("GMR",o),console.log(t,o.target);var c=o.target,i=o.pagination,s=i.page,l=i.perPage,u=o.sort,d=u.field,j=u.order,f={sort:JSON.stringify([d,j])};f["filter[".concat(c,"]")]=o.id,f["page[limit]"]=l,f["page[offset]"]=(s-1)*l;var h="".concat(e,"/").concat(t,"?").concat(Object(b.stringify)(f),"&include=%2Ball");return n(h,{}).then((function(e){var t,n=e.headers,o=e.json;n.has(r)||console.debug("The ".concat(r," header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ").concat(r," in the Access-Control-Expose-Headers header?"));var c=null===(t=o.meta)||void 0===t?void 0:t.total;return o.meta&&a.total&&(c=o.meta[a.total]),console.log(o.meta),c=c||o.data.length,{data:o.data,total:c}}))},update:function(t,r){var o=E.resources[t].type,c=a.endpointToTypeStripLastLetters;for(var i in c)if(t.endsWith(c[i])){o=t.slice(0,-1*c[i].length);break}var s={data:{id:r.id,type:o,attributes:r.data}};return n("".concat(e,"/").concat(t,"/").concat(r.id),{method:a.updateMethod,body:JSON.stringify(s)}).then((function(e){var t=e.json.data,n=t.id,r=t.attributes;return{data:Object(j.a)({id:n},r)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},updateMany:function(t,r){return Promise.all(r.ids.map((function(a){return n("".concat(e,"/").concat(t,"/").concat(a),{method:"PUT",body:JSON.stringify(r.data)})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},create:function(t,r){var o=t,c=a.endpointToTypeStripLastLetters;for(var i in c)if(t.endsWith(c[i])){o=t.slice(0,-1*c[i].length);break}var s={data:{type:o,attributes:r.data}};return n("".concat(e,"/").concat(t),{method:"POST",body:JSON.stringify(s)}).then((function(e){var t=e.json.data,n=t.id,r=t.attributes;return{data:Object(j.a)({id:n},r)}})).catch((function(e){console.log("catch Error",e.body);var t=a.errorHandler;return Promise.reject(t(e))}))},delete:function(t,r){return n("".concat(e,"/").concat(t,"/").concat(r.id),{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})}).then((function(e){return{data:e.json}}))},deleteMany:function(t,r){return Promise.all(r.ids.map((function(r){return n("".concat(e,"/").concat(t,"/").concat(r),{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},getResources:function(){return E?Promise.resolve({data:E}):n("".concat(e,"/schema"),{method:"GET"}).then((function(e){var t=e.json;return localStorage.setItem("raconf",JSON.stringify(t)),{data:t}})).catch((function(){return{data:{}}}))}}}(C().api_root,{}),Nt=function(){return Promise.resolve()},Et=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],o=Object(s.a)();return Object(r.useEffect)((function(){o.getResources().then((function(e){var t=Object.keys(e.data.resources).map((function(e){return{name:e}}));a(t)})).catch((function(e){console.warn(e),a([])}))}),[]),!1===n?Object(ue.jsx)("div",{children:"Loading..."}):Object(ue.jsx)(Ze.a,{store:xt({authProvider:Nt,dataProvider:o,history:_t}),children:Object(ue.jsxs)(l.a,{layout:it,children:[Object(ue.jsx)(u.a,{name:"Home",show:Le,list:Le,options:{label:"Home"},icon:A.a}),Object(ue.jsx)(u.a,{name:"Configuration",show:Qe,list:Qe,options:{label:"Configuration"},icon:kt.a}),n.map((function(e){return Object(ue.jsx)(Ae,{name:e.name},e.name)}))]})})},Tt=function(){return Object(ue.jsx)(d.a,{dataProvider:Ct,customReducers:{admin2:Pt},children:Object(ue.jsx)(Et,{})})},At=function(e){e&&e instanceof Function&&n.e(84).then(n.bind(null,1165)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};c.a.render(Object(ue.jsx)(Tt,{}),document.getElementById("root")),At()}},[[926,4,5]]]);
//# sourceMappingURL=main.cb579d77.chunk.js.map