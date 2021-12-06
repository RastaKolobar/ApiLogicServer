(this["webpackJsonpreact-apilogicserver"]=this["webpackJsonpreact-apilogicserver"]||[]).push([[3],{250:function(e){e.exports=JSON.parse('{"api_root":"//thomaxxl.pythonanywhere.com/api","resources":{"People":{"type":"Person","user_key":"name","attributes":[{"name":"id","hidden":true},{"name":"name"},{"name":"email"},{"name":"comment"},{"name":"dob"},{"name":"employer_id"},{"name":"_password"}],"relationships":[{"name":"books_read","target":"Books","fks":["reader_id"],"direction":"tomany"},{"name":"books_written","target":"Books","fks":["author_id"],"direction":"tomany"},{"name":"reviews","target":"Reviews","fks":["reader_id"],"direction":"tomany"},{"name":"friends","target":"People","fks":["friend_a_id","friend_b_id"],"direction":"tomany"}],"label":null},"Books":{"type":"Book","user_key":"title","attributes":[{"name":"id","hidden":true},{"name":"title"},{"name":"reader_id"},{"name":"author_id"},{"name":"publisher_id"},{"name":"published"}],"relationships":[{"name":"publisher","target":"Publishers","fks":["publisher_id"],"direction":"toone"},{"name":"reviews","target":"Reviews","fks":["book_id"],"direction":"tomany"},{"name":"reader","target":"People","fks":["reader_id"],"direction":"toone"},{"name":"author","target":"People","fks":["author_id"],"direction":"toone"}],"label":null},"Reviews":{"type":"Review","attributes":[{"name":"book_id"},{"name":"reader_id"},{"name":"review"},{"name":"created"}],"relationships":[{"name":"book","target":"Books","fks":["book_id"],"direction":"toone"},{"name":"reader","target":"People","fks":["reader_id"],"direction":"toone"}],"label":null},"Publishers":{"type":"Publisher","attributes":[{"name":"id"},{"name":"name"}],"relationships":[{"name":"books","target":"Books","fks":["publisher_id"],"direction":"tomany"}],"label":null}}}')},455:function(e){e.exports=JSON.parse('{"api_root":"//apilogicserver.pythonanywhere.com/","resources":{"Category":{"type":"Category","attributes":[{"name":"Id","hidden":true},{"name":"CategoryName","label":"Custom Column Name","component":"SampleColumnField","search":true},{"name":"Description","style":{"font-weight":"bold","color":"blue"}}],"relationships":[],"label":"null"},"Customer":{"type":"Customer","user_component":"CustomerLabel","attributes":[{"name":"Id"},{"name":"CompanyName"},{"name":"ContactName","search":true},{"name":"ContactTitle","search":true},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"Phone"},{"name":"Fax"},{"name":"Balance"},{"name":"CreditLimit"},{"name":"OrderCount"},{"name":"UnpaidOrderCount"}],"relationships":[{"name":"CustomerCustomerDemoList","target":"CustomerCustomerDemo","fks":["CustomerTypeId"],"direction":"tomany"},{"name":"OrderList","target":"Order","fks":["CustomerId"],"direction":"tomany"}],"label":null},"CustomerDemographic":{"type":"CustomerDemographic","attributes":[{"name":"Id"},{"name":"CustomerDesc"}],"relationships":[],"label":null},"Employee":{"type":"Employee","label":"emps","user_component":"EmployeeLabel","attributes":[{"name":"Id"},{"name":"LastName","search":true},{"name":"FirstName","search":true},{"name":"Title"},{"name":"TitleOfCourtesy"},{"name":"BirthDate"},{"name":"HireDate"},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"HomePhone"},{"name":"Extension"},{"name":"Photo"},{"name":"Notes"},{"name":"ReportsTo"},{"name":"PhotoPath"},{"name":"IsCommissioned"},{"name":"Salary"}],"relationships":[{"name":"Manager","target":"Employee","fks":["ReportsTo"],"direction":"toone"},{"name":"Manages","target":"Employee","fks":["ReportsTo"],"direction":"tomany"},{"name":"EmployeeAuditList","target":"EmployeeAudit","fks":["EmployeeId"],"direction":"tomany"},{"name":"EmployeeTerritoryList","target":"EmployeeTerritory","fks":["EmployeeId"],"direction":"tomany"},{"name":"OrderList","target":"Order","fks":["EmployeeId"],"direction":"tomany"}]},"Product":{"type":"Product","user_key":"ProductName","attributes":[{"name":"Id"},{"name":"ProductName","search":true},{"name":"SupplierId"},{"name":"CategoryId"},{"name":"QuantityPerUnit"},{"name":"UnitPrice"},{"name":"UnitsInStock"},{"name":"UnitsOnOrder"},{"name":"ReorderLevel"},{"name":"Discontinued"},{"name":"UnitsShipped"}],"relationships":[{"name":"OrderDetailList","target":"OrderDetail","fks":["ProductId"],"direction":"tomany"}],"label":null},"Region":{"type":"Region","attributes":[{"name":"Id"},{"name":"RegionDescription"}],"relationships":[],"label":null},"Shipper":{"type":"Shipper","attributes":[{"name":"Id"},{"name":"CompanyName"},{"name":"Phone"}],"relationships":[],"label":null},"Supplier":{"type":"Supplier","attributes":[{"name":"Id"},{"name":"CompanyName","search":true},{"name":"ContactName","search":true},{"name":"ContactTitle","search":true},{"name":"Address"},{"name":"City"},{"name":"Region"},{"name":"PostalCode"},{"name":"Country"},{"name":"Phone"},{"name":"Fax"},{"name":"HomePage"}],"relationships":[],"label":null},"Territory":{"type":"Territory","attributes":[{"name":"Id"},{"name":"TerritoryDescription"},{"name":"RegionId"}],"relationships":[{"name":"EmployeeTerritoryList","target":"EmployeeTerritory","fks":["TerritoryId"],"direction":"tomany"}],"label":null},"CustomerCustomerDemo":{"type":"CustomerCustomerDemo","attributes":[{"name":"Id"},{"name":"CustomerTypeId"}],"relationships":[{"name":"Customer","target":"Customer","fks":["CustomerTypeId"],"direction":"toone"}],"label":null},"EmployeeAudit":{"type":"EmployeeAudit","attributes":[{"name":"Id"},{"name":"Title","search":true},{"name":"Salary"},{"name":"LastName","search":true},{"name":"FirstName","search":true},{"name":"EmployeeId"},{"name":"CreatedOn"}],"relationships":[{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"}],"label":null},"EmployeeTerritory":{"type":"EmployeeTerritory","attributes":[{"name":"Id"},{"name":"EmployeeId"},{"name":"TerritoryId"}],"relationships":[{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"},{"name":"Territory","target":"Territory","fks":["TerritoryId"],"direction":"toone"}],"label":null},"Order":{"type":"Order","attributes":[{"name":"Id"},{"name":"CustomerId"},{"name":"EmployeeId"},{"name":"OrderDate"},{"name":"RequiredDate"},{"name":"ShippedDate"},{"name":"ShipVia"},{"name":"Freight"},{"name":"ShipName","search":true},{"name":"ShipAddress","search":true},{"name":"ShipCity","search":true},{"name":"ShipRegion"},{"name":"ShipPostalCode"},{"name":"ShipCountry"},{"name":"AmountTotal"}],"relationships":[{"name":"Customer","target":"Customer","fks":["CustomerId"],"direction":"toone"},{"name":"Employee","target":"Employee","fks":["EmployeeId"],"direction":"toone"},{"name":"OrderDetailList","target":"OrderDetail","fks":["OrderId"],"direction":"tomany"}],"label":null},"OrderDetail":{"type":"OrderDetail","attributes":[{"name":"Id"},{"name":"OrderId"},{"name":"ProductId"},{"name":"UnitPrice"},{"name":"Quantity"},{"name":"Discount"},{"name":"Amount"},{"name":"ShippedDate"}],"relationships":[{"name":"Order","target":"Order","fks":["OrderId"],"direction":"toone"},{"name":"Product","target":"Product","fks":["ProductId"],"direction":"toone"}],"label":null}}}')},527:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=527},528:function(e,t){},711:function(e,t,n){},713:function(e,t){},714:function(e,t){},715:function(e,t){},716:function(e,t){},717:function(e,t){},718:function(e,t){},904:function(e,t){},937:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(86),i=n.n(o),c=n(22),s=n(239),l=n(1068),u=n(1054),d=n(1072),m=n(120),b=n(501),p=n(265),j=n(592),f=n(1),h=n(6),O=n(7),g=n(200),y=n(399),v=(Error,function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e,a,r){var o;return Object(f.a)(this,n),(o=t.call(this,e,a,r)).name="SafrsHttpError",o}return n}(y.a)),x={total:"total",headers:{Accept:"application/vnd.api+json; charset=utf-8","Content-Type":"application/vnd.api+json; charset=utf-8"},updateMethod:"PATCH",arrayFormat:"brackets",includeRelations:[],errorHandler:function(e){var t=e.body;return(null===t||void 0===t?void 0:t.errors.length)>0?(alert("Error "+t.errors[0].title),new v(t.errors[0].title,e.status,t.errors[0].code)):(console.log("Unsopported Http Error Body",e.body),e)},endpointToTypeStripLastLetters:["Model","s"]},S=n(8),C=n(25),w=n(2),k=function(){function e(t){if(Object(f.a)(this,e),this.lookup=void 0,this.includes=void 0,this.lookup=new Map,this.includes=[],"object"===typeof t){var n;n=Object.prototype.hasOwnProperty.call(t,"included")?[].concat(Object(C.a)(t.data),Object(C.a)(t.included)):t.data;var a,r=Object(S.a)(n);try{for(r.s();!(a=r.n()).done;){var o=a.value,i=this.getKey(o);this.lookup.set(i,o)}}catch(c){r.e(c)}finally{r.f()}}}return Object(w.a)(e,[{key:"getKey",value:function(e){return"".concat(e.type,":").concat(e.id)}},{key:"get",value:function(e){return this.has(e)?this.lookup.get(this.getKey(e)):e}},{key:"has",value:function(e){return this.lookup.has(this.getKey(e))}},{key:"unwrapData",value:function(e,t){var n=Object.assign({id:e.id,ja_type:e.type},e.attributes);return 0===t.length||Object.prototype.hasOwnProperty.call(e,"relationships")&&(n.relationships=e.relationships),n}}]),e}();var I=n(250),_=n(455);var N=function(){var e=n(524);!1 in localStorage&&(console.log("Init Configuration"),localStorage.setItem("raconf",JSON.stringify(I)),window.location.reload());var t,a={},r=null,o=!1;if(t=function(e){var t=null,n=new XMLHttpRequest;n.open("GET",e,!1);try{n.send()}catch(a){console.warn("Failed to send loadResponse ".concat(a.toString()))}return 200===n.status&&(t=n.responseText),t}("/ui/admin/admin.yaml"),"undefined"!==typeof t&&null!==t)try{console.log("Using ApiLogicServer admin.yaml via loadResponse"),a=e.load(t),Object.entries(a.resources),o=!0}catch(E){console.warn("Failed to load ApiLogicServer admin.yaml ".concat(t))}if(!o)try{r=r||localStorage.getItem("raconf"),a=JSON.parse(r)||(JSON.parse(JSON.stringify(I))||{}),Object.entries(a.resources)}catch(E){console.warn("Failed to parse config ".concat(r)),localStorage.setItem("raconf",JSON.stringify(I))}a.resources||(a.resources={});for(var i=a.resources,s=0,l=Object.entries(i||{});s<l.length;s++){var u=Object(c.a)(l[s],2),d=u[0],m=u[1];m.relationships=m.relationships||[];for(var b=0,p=Object.entries(m.tab_groups||{});b<p.length;b++){var j=Object(c.a)(p[b],2),f=j[0],h=j[1];m.relationships.push(Object.assign(h,{name:f,target:h.resource}))}if(m.attributes instanceof Array||m.relationships instanceof Array){m.type||(m.type=d),m.search_cols=[],a.resources[d].name=d;var O,g=m.attributes||[],y=Object(S.a)(g);try{for(y.s();!(O=y.n()).done;){var v=O.value;if(v.constructor==Object){var x,C=Object(S.a)(m.relationships||[]);try{for(C.s();!(x=C.n()).done;){var w,k=x.value,_=Object(S.a)(k.fks||[]);try{for(_.s();!(w=_.n()).done;){var N=w.value;v.name==N&&(v.relationship=k,v.relationship.target_resource=a.resources[v.relationship.target])}}catch(T){_.e(T)}finally{_.f()}}}catch(T){C.e(T)}finally{C.f()}v.search&&m.search_cols.push(v)}else console.warn("Invalid attribute ".concat(v))}}catch(T){y.e(T)}finally{y.f()}}}return a||P()},P=function(e){var t={};return console.log("Resetting conf",I),localStorage.setItem("raconf",JSON.stringify(I)),t[I.api_root]=I,t[_.api_root]=_,localStorage.setItem("raconfigs",JSON.stringify(t)),e&&window.location.reload(),I},E=[_,I],T=(N(),N());var L=n(640),R=n.n(L),A=n(1034),J=n(1041),D=n(1043),M=n(1065),F=n(1064),U=n(1040),H=n(1092),B=n(1088),W=n(1089),q=n(286),G=n(1074),K=n(1066),z=n(1077),V=n(1093),Q=n(1052),X=n(512),Y=n(1053),Z=n(1075),$=n(347),ee=n(948),te=n(1042),ne=n(241),ae=n.n(ne),re=n(623),oe=n.n(re),ie=n(624),ce=n.n(ie),se=n(502),le=n(946),ue=n(1069),de=n(1078),me=n(24),be={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"};function pe(e){var t=e.label,n=e.content,r=e.resource_name,o=a.useState(!1),i=Object(c.a)(o,2),s=i[0],l=i[1];return Object(me.jsxs)("div",{children:[Object(me.jsxs)("span",{onClick:function(e){l(!0),e.stopPropagation()},className:"JoinedField",title:r,children:[t," "]}),Object(me.jsx)(de.a,{open:s,onClose:function(e){e.stopPropagation(),l(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(me.jsxs)(ue.a,{sx:be,children:[Object(me.jsx)($.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:t}),Object(me.jsx)($.a,{id:"modal-modal-description",sx:{mt:2},children:n})]})})]})}var je=n(1071),fe=n(1076),he=n(644),Oe=(n(711),n(238)),ge=n(424),ye=n(1046),ve=(n(712),N()),xe=[Object(me.jsx)(W.a,{source:"q",label:"Search",alwaysOn:!0})],Se=function(e){for(var t=0,n=Object.entries(null===ve||void 0===ve?void 0:ve.resources);t<n.length;t++){var a=Object(c.a)(n[t],2),r=a[0];if(a[1].type===e)return r}return console.warn('No resource for type "'.concat(e)),ve[e]},Ce=function(e){var t=e.attribute,a=t.component,r=t.style||{},o=Object(me.jsx)(A.a,{source:t.name,style:r},t.name);if(!a)return o;try{var i=Object(se.a)((function(){return n.e(0).then(n.bind(null,1101))}),{resolveComponent:function(e){return e[a]}});return Object(me.jsx)(i,{attribute:t})}catch(c){alert("Custom component error"),console.error("Custom component error",c)}return o},we=function(e){var t,a,r=e.attribute,o=e.join,i=Object(q.b)();(null===i||void 0===i?void 0:i.attributes)&&Object.assign(i,i.attributes);var c=o.name,s=o.target,l=o.fks[0],u=null===(t=ve.resources[o.target])||void 0===t?void 0:t.user_key,d=Object(Oe.a)({type:"getOne",resource:s,payload:{id:i?i[l]:null}}),m=d.data;d.loading,d.error;if(!i)return null;var b=m||i[c],p=null===(a=ve.resources[o.target])||void 0===a?void 0:a.user_component,j=null===b||void 0===b?void 0:b.id;if(b&&p)j=function(e,t){try{var a=Object(se.a)((function(){return n.e(0).then(n.bind(null,1101))}),{resolveComponent:function(t){return t["".concat(e)]}});return Object(me.jsx)(a,{instance:t})}catch(r){alert("Custom component error"),console.error("Custom component error",r)}return null}(p,b);else if((null===b||void 0===b?void 0:b.attributes)&&u){r.relationship.target_resource.attributes.filter((function(e){return e.name==u}));j=Object(me.jsx)("span",{children:b.attributes[u]||b.id})}var f=Object(me.jsx)(Ae,{instance:b,resource_name:o.target});return Object(me.jsx)(pe,{label:j,content:f,resource_name:o.target},r.name)},ke=function(e,t){if(!e)return console.warn("No attributes"),[];if(!t)return[];var n=t.filter((function(e){return"toone"===e.direction}));return e.map((function(e){if(Ce.hidden)return null;var t,a=Object(S.a)(n);try{for(a.s();!(t=a.n()).done;){var r,o=t.value,i=Object(S.a)(o.fks);try{for(i.s();!(r=i.n()).done;){var c=r.value;if(e.name==c)return Object(me.jsx)(we,{attribute:e,join:o,label:e.label?e.label:e.name},e.name)}}catch(s){i.e(s)}finally{i.f()}}}catch(s){a.e(s)}finally{a.f()}return Object(me.jsx)(Ce,{attribute:e,label:e.label?e.label:e.name,style:e.header_style},e.name)}))},Ie=function(e){return Object(me.jsx)(he.a,Object(m.a)({rowsPerPageOptions:[10,25,50,100],perPage:e.perPage||25},e))},_e=function(e){var t=e.attributes;return Object(me.jsx)(U.a,{container:!0,spacing:3,margin:5,m:40,children:t.map((function(e){return Object(me.jsx)(Te,{source:e.name})}))})},Ne=function(e,t,n,a){console.log("Delete",n),e.delete(t,n).then((function(){a()})).catch((function(e){return alert("error")}))},Pe=function(e){var t,n=e.attribute;e.resource;if("toone"==(null===(t=n.relationship)||void 0===t?void 0:t.direction)&&n.relationship.target){var a=ve.resources[n.relationship.target].search_cols,r=Object(me.jsx)(je.a,{optionText:""},n.name);return a?0==a.length?console.warn("no searchable attributes configured for ".concat(n.relationship.target)):r=Object(me.jsx)(je.a,{optionText:a[0].name},n.name):console.error("no searchable attributes configured"),Object(me.jsx)(fe.a,{source:n.name,label:"".concat(n.relationship.name," (").concat(n.name,")"),reference:n.relationship.target,children:r})}return Object(me.jsx)(W.a,{source:n.name})},Ee=function(e){var t=e.record;return Object(me.jsx)("span",{children:t?"".concat(t.type?t.type+" ":""," #").concat(t.id," "):""})},Te=function(e){var t=e.source,n=Object(q.b)();return n?Object(me.jsx)(Le,{label:t,value:n[t]}):null},Le=function(e){var t=e.label,n=e.value;return Object(me.jsxs)(U.a,{item:!0,xs:3,children:[Object(me.jsx)($.a,{variant:"body2",color:"textSecondary",component:"p",children:t}),Object(me.jsx)($.a,{variant:"body2",component:"p",children:n})]})},Re=function(e){var t=e.attributes,n=e.relationships,r=e.resource_name,o=e.id,i=Object(me.jsxs)($.a,{variant:"h5",component:"h5",style:{margin:"30px 0px 30px"},children:[r,Object(me.jsxs)("i",{style:{color:"#ccc"},children:[" #",o]})]});return Object(me.jsxs)(Q.a,{children:[i,Object(me.jsx)(U.a,{container:!0,spacing:3,margin:5,m:40,children:t.map((function(e){return Object(me.jsx)(Te,{source:e.name})}))}),Object(me.jsx)("hr",{style:{margin:"30px 0px 30px"}}),Object(me.jsx)(B.a,{tabs:Object(me.jsx)(X.a,{variant:"scrollable",scrollButtons:"auto"}),children:n.map((function(e){return"tomany"===e.direction?function(e,t,n){var r=Object(a.useState)(!0),o=Object(c.a)(r,2),i=(o[0],o[1]),l=Object(a.useState)(),u=Object(c.a)(l,2),d=(u[0],u[1]),m=Object(a.useState)(!1),b=Object(c.a)(m,2),p=(b[0],b[1]),j=Object(s.a)();Object(a.useEffect)((function(){j.getOne(e,{id:t}).then((function(e){var t=e.data;p(t.relationships),i(!1)})).catch((function(e){d(e),i(!1)}))}),[]);var f=ve.resources[n.target];if(!f)return console.warn("".concat(e,": No resource conf for ").concat(f)),null;if(!(null===f||void 0===f?void 0:f.attributes))return console.log("No target resource attributes"),null;var h=f.attributes.filter((function(t){var n;return(null===(n=t.relationship)||void 0===n?void 0:n.target)!==e})),O=null===f||void 0===f?void 0:f.relationships,g=ke(h,O);n.source=e;var y=f.col_nr||8,v=n.fks[0];return Object(me.jsx)(H.a,{label:n.name,children:Object(me.jsx)(V.a,{reference:n.target,target:v,addLabel:!1,pagination:Object(me.jsx)(Ie,{}),perPage:f.perPage||10,children:Object(me.jsxs)(F.a,{rowClick:"show",expand:Object(me.jsx)(_e,{attributes:f.attributes}),children:[g.slice(0,y),Object(me.jsx)(J.a,{})]})})})}(r,o,e):function(e,t,n){var r=Object(a.useState)(!0),o=Object(c.a)(r,2),i=(o[0],o[1]),l=Object(a.useState)(),u=Object(c.a)(l,2),d=(u[0],u[1]),m=Object(a.useState)(!1),b=Object(c.a)(m,2),p=b[0],j=b[1],f=Object(s.a)();console.log(e,t,n),Object(a.useEffect)((function(){f.getOne(e,{id:t}).then((function(e){var t,a,r=e.data;return{rel_resource:Se(null===(t=r[n.name])||void 0===t?void 0:t.data.type),rel_id:null===(a=r[n.name])||void 0===a?void 0:a.data.id}})).then((function(e){var t=e.rel_resource,n=e.rel_id;console.log(t,n),f.getOne(t,{id:n}).then((function(e){var t=e.data;return console.log(t),j(t)})).then((function(){return console.log(p)})),i(!1)})).catch((function(e){d(e),i(!1)}))}),[]);var h=Object(me.jsx)(Ae,{instance:p});return Object(me.jsxs)(H.a,{label:n.name,children:["ccc",h]},n.name)}(r,o,e)}))})]})},Ae=function(e){var t=e.instance,n=Se(null===t||void 0===t?void 0:t.type);if(!t||!n)return Object(me.jsx)("span",{children:"..."});var a=ve.resources[n],r=(null===a||void 0===a?void 0:a.attributes)||[];null===a||void 0===a||a.relationships;return Object(me.jsxs)("div",{style:{left:"-16px",position:"relative"},children:[Object(me.jsxs)("div",{style:{textAlign:"right",width:"100%"},children:[Object(me.jsxs)(le.a,{title:"edit",component:Y.a,to:{pathname:"".concat(n,"/").concat(t.id)},label:"Link",children:[Object(me.jsx)(oe.a,{}),"Edit"]}),Object(me.jsxs)(le.a,{title:"view",component:Y.a,to:{pathname:"/".concat(n,"/").concat(t.id,"/show")},label:"Link",children:[Object(me.jsx)(ce.a,{}),"View"]})]}),Object(me.jsx)(U.a,{container:!0,title:"qsd",children:r.map((function(e){return Object(me.jsx)(Le,{label:e.name,value:t.attributes[e.name]},e.name)}))})]})},Je=function(e){window.addEventListener("storage",(function(){return window.location.reload()}));var t=r.a.useState(),n=(Object(c.a)(t,2)[1],Object(a.useState)(ve.resources[e.name])),o=Object(c.a)(n,2),i=o[0],l=(o[1],Object(a.useMemo)((function(){return e=i,function(t){var n=function(t){var n=Object(s.a)(),a=Object(ee.a)();return[!1!==e.edit?Object(me.jsx)(J.a,Object(m.a)({title:"Edit",label:""},t),"".concat(e.name,"_edit")):null,!1!==e.delete?Object(me.jsx)(te.a,Object(m.a)({title:"Delete",onClick:function(e){e.stopPropagation()},render:function(e){return Object(me.jsxs)(le.a,{children:[" ",Object(me.jsx)(ae.a,{style:{fill:"#3f51b5"},onClick:function(r){return Ne(n,t.resource,e,a)}})," "]})}},t),"".concat(e.name,"_delete")):null,Object(me.jsx)(D.a,Object(m.a)({title:"Show",label:""},t))]},a=e.attributes,r=e.relationships,o=ke(a,r),i=e.col_nr||8;return Object(me.jsx)(M.a,Object(m.a)(Object(m.a)({filters:xe,perPage:e.perPage||25,pagination:Object(me.jsx)(Ie,{}),sort:e.sort||""},t),{},{children:Object(me.jsxs)(F.a,{rowClick:"show",expand:Object(me.jsx)(_e,{attributes:a}),children:[o.slice(0,i),Object(me.jsx)(n,Object(m.a)({resource:e},t))]})}))};var e}),[i])),d=Object(a.useMemo)((function(){return e=i,function(t){return Object(me.jsx)(z.a,Object(m.a)(Object(m.a)({},t),{},{children:Object(me.jsx)(K.a,{children:e.attributes.map((function(t){return Object(me.jsx)(Pe,{attribute:t,resource:e},t.name)}))})}))};var e}),[i]),b=Object(a.useMemo)((function(){return function(e){var t=e.attributes;return function(e){Object(ge.a)();var n=Object(ee.a)(),a=Object(ye.a)();return Object(me.jsx)(G.a,Object(m.a)(Object(m.a)({},e),{},{onFailure:function(t){a("edit",e.basePath,e.id),n()},children:Object(me.jsx)(K.a,{children:t.map((function(e){return Object(me.jsx)(Pe,{attribute:e},e.name)}))})}))}}(i)}),[i]),p=Object(a.useMemo)((function(){return function(e){return function(t){var n=e.attributes,a=e.relationships;return Object(me.jsx)(Z.a,Object(m.a)(Object(m.a)({title:Object(me.jsx)(Ee,{})},t),{},{children:Object(me.jsx)(Re,{attributes:n,relationships:a,resource_name:t.resource,id:t.id})}))}}(i)}),[i]);return Object(me.jsx)(u.a,Object(m.a)(Object(m.a)({},e),{},{list:l,edit:b,create:d,show:p}),e.name)},De=n(1049),Me=n(947),Fe=n(211),Ue=function(){return Object(me.jsxs)(De.a,{children:[Object(me.jsx)(Fe.b,{title:"Home"}),Object(me.jsxs)(Me.a,{children:[Object(me.jsx)("center",{children:Object(me.jsx)("h1",{children:"Welcome to API Logic Server"})}),Object(me.jsx)("br",{}),Object(me.jsx)("h2",{children:"Automatic Admin App, Designed For"}),Object(me.jsxs)("ul",{children:[Object(me.jsxs)("li",{children:["Instant Business User Collaboration - Working Software ",Object(me.jsx)("i",{children:"Now"})]}),Object(me.jsx)("li",{children:"Back Office Data Maintenance"})]}),Object(me.jsx)("br",{}),Object(me.jsx)("h2",{children:"Key Features"}),Object(me.jsxs)("ul",{children:[Object(me.jsxs)("li",{children:[Object(me.jsx)("strong",{children:"Multi-page:"})," screen transitions"]}),Object(me.jsxs)("li",{children:[Object(me.jsx)("strong",{children:"Multi-table:"})," child grids, parent joins"]}),Object(me.jsxs)("li",{children:[Object(me.jsx)("strong",{children:"Logic aware:"})," multi-table derivations and constraints, extensible with Python events for email, messages, etc"]}),Object(me.jsxs)("li",{children:[Object(me.jsx)("strong",{children:"Customizable:"})," see ui/admin/admin.yaml.  Use SAFRS API for custom apps."]})]}),Object(me.jsx)("br",{}),Object(me.jsx)("h2",{children:"Resources"}),Object(me.jsxs)("ul",{children:[Object(me.jsx)("li",{children:Object(me.jsx)("a",{className:"custom",rel:"nofollow",href:"http://localhost:5656/api",target:"_blank",children:"Swagger"})}),Object(me.jsx)("li",{children:Object(me.jsx)("a",{className:"custom",rel:"nofollow",href:"https://github.com/valhuber/ApiLogicServer/blob/main/README.md/",target:"_blank",children:"API Logic Server Docs"})}),Object(me.jsx)("li",{children:Object(me.jsx)("a",{className:"custom",rel:"nofollow",href:"https://github.com/valhuber/ApiLogicServer/wiki/Working-with-the-Admin-App/",target:"_blank",children:"Admin App Customization Docs"})})]})]})]})},He=n(1090),Be=n(940),We=n(1079),qe=n(312),Ge=n(284),Ke=n.n(Ge),ze=n(1061),Ve=n(642),Qe=n(1085),Xe=n(1083),Ye=n(1070),Ze=n(1082),$e=n(1063),et=n(524);var tt=Object(qe.a)((function(e){return{widget:{border:"1px solid #3f51b5",marginRight:"1em",marginTop:"1em",marginBottom:"1em"},textInput:{width:"80%"},modal:{position:"absolute",top:"15%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"}}})),nt=function(e){var t=function(e){try{!function(e){var t=JSON.parse(localStorage.getItem("raconfigs"));e.api_root?(t[e.api_root]=e,localStorage.setItem("raconf",JSON.stringify(e)),localStorage.setItem("raconfigs",JSON.stringify(t)),window.location.reload()):console.warn("Config has no api_root",e)}(et.load(e))}catch(t){console.warn("Failed to load yaml",e),console.error(t)}};fetch(e).then((function(e){return e.text()})).then((function(e){return t(e)})).catch((function(t){return console.warn("Failed to download yaml from ".concat(e,": ").concat(t))}))},at=function(){var e=a.useState(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],o=[];try{o=JSON.parse(localStorage.getItem("raconfigs","{}"))}catch(u){alert("Localstorage error")}var i=tt(),s=o?Object.entries(o).map((function(e){var t=Object(c.a)(e,2),n=t[0];t[1];return Object(me.jsxs)("li",{children:[n," ",Object(me.jsx)(Ke.a,{onClick:function(){return function(e){if(window.confirm('Delete configuration "'.concat(e,'" ?')))try{var t=JSON.parse(localStorage.getItem("raconfigs","{}"));delete t[e],localStorage.setItem("raconfigs",JSON.stringify(t)),window.location.reload()}catch(u){alert("Localstorage error")}}(n)}})]})})):null,l=Object(a.useRef)();return[Object(me.jsx)(le.a,{className:i.widget,onClick:function(){r(!0)},color:"primary",children:"Manage"}),Object(me.jsx)(de.a,{open:n,onClose:function(e){r(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(me.jsxs)(Qe.a,{sx:{position:"absolute",top:"25%",left:"50%",transform:"translate(-50%, -50%)",width:"75%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4,textAlign:"left"},children:[Object(me.jsx)($.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Manage Configurations"}),Object(me.jsx)($.a,{id:"modal-modal-description",sx:{mt:2},children:Object(me.jsx)("ul",{children:s})}),Object(me.jsx)($.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Load Configuration from URL"}),Object(me.jsxs)($.a,{id:"modal-modal-description",sx:{mt:2},children:[Object(me.jsx)(He.a,{label:"Config URL",style:{margin:16,width:"100%"},inputRef:l}),Object(me.jsx)(le.a,{className:i.widget,onClick:function(e){return nt(l.current.value)},color:"primary",children:"Load"})]})]})})]},rt=function(){var e=[];try{e=JSON.parse(localStorage.getItem("raconfigs","{}"))}catch(s){alert("Localstorage error")}var t=JSON.parse(localStorage.getItem("raconf","")),n=a.useState(t.api_root),r=Object(c.a)(n,2),o=r[0],i=r[1];return Object(me.jsx)(Qe.a,{sx:{minWidth:120},children:Object(me.jsxs)(Ze.a,{fullWidth:!0,children:[Object(me.jsx)(Xe.a,{id:"demo-simple-select-label",children:"Saved Configurations"}),Object(me.jsx)($e.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o,label:"Configs",size:"small",onChange:function(t){i(t.target.value);var n=e[t.target.value];n&&(localStorage.setItem("raconf",JSON.stringify(n)),window.location.reload())},defaultValue:o,children:e?Object.entries(e).map((function(e){var t=Object(c.a)(e,2),n=t[0];t[1];return Object(me.jsx)(Ye.a,{value:n,children:n})})):null})]})})},ot=function(){var e,t=function(e){try{if(e){var t=JSON.parse(e);v(t.api_root)}p("#ddeedd"),localStorage.setItem("raconf",e),l||window.location.reload()}catch(n){p("red")}u(e)},n=function(){var e={},t={};console.log("Resetting conf");var n,a=Object(S.a)(E);try{for(a.s();!(n=a.n()).done;)t=n.value,localStorage.setItem("raconf",JSON.stringify(t)),e[t.api_root]=t}catch(r){a.e(r)}finally{a.f()}return localStorage.setItem("raconfigs",JSON.stringify(e)),nt("http://localhost:5656/ui/admin/admin.yaml"),t},r=tt(),o=localStorage.getItem("raconf")||JSON.stringify(n()),i=Object(a.useState)(o?JSON.stringify(JSON.parse(o),null,4):""),s=Object(c.a)(i,2),l=s[0],u=s[1],d=Object(a.useState)("black"),m=Object(c.a)(d,2),b=m[0],p=m[1],j=Object(a.useState)(!0),f=Object(c.a)(j,2),h=f[0],O=f[1],g=Object(a.useState)(null===(e=JSON.parse(o))||void 0===e?void 0:e.api_root),y=Object(c.a)(g,2),v=(y[0],y[1]);return Object(me.jsxs)("div",{children:[Object(me.jsxs)("div",{children:[Object(me.jsx)(rt,{}),Object(me.jsx)(at,{}),Object(me.jsx)(le.a,{className:r.widget,onClick:function(){return t("")},color:"primary",children:"Clear"}),Object(me.jsx)(le.a,{className:r.widget,onClick:function(){return n()},color:"primary",children:"Reset"}),Object(me.jsx)(le.a,{className:r.widget,onClick:function(){return window.location.reload()},color:"primary",children:"Apply"}),Object(me.jsx)(le.a,{className:r.widget,onClick:function(){return function(){var e=JSON.parse(localStorage.getItem("raconf")),t=e.api_root;if(t){var n=JSON.parse(localStorage.getItem("raconfigs","{}"));n||(n={}),n[t]=e,localStorage.setItem("raconfigs",JSON.stringify(n)),window.location.reload()}else alert("Can't save: no 'api_root' set in config")}()},color:"primary",children:"Save"}),Object(me.jsx)(ze.a,{control:Object(me.jsx)(We.a,{checked:h,onChange:function(e){O(e.target.checked)}}),label:"Auto Save Config"})]}),Object(me.jsx)("div",{children:Object(me.jsxs)(B.a,{children:[Object(me.jsx)(H.a,{label:"yaml",children:Object(me.jsx)(Ve.a,{language:"yaml",value:et.dump(JSON.parse(l)),options:{theme:"vs-dark"},height:"1000px",style:{borderLeft:"8px solid ".concat(b)},onChange:function(e,n){return function(e,n){try{var a=et.load(e);t(JSON.stringify(a)),p("black")}catch(r){console.warn("Failed to process",e),p("red")}}(e)}})}),Object(me.jsx)(H.a,{label:"json",children:Object(me.jsx)(Be.a,{variant:"outlined",minRows:3,style:{width:"80%",backgroundColor:"white"},value:JSON.stringify(JSON.parse(l),null,4),onChange:function(e){return t(e.target.value)}})})]})})]})},it=n(1067),ct=n(51),st=n(302),lt=n(629),ut=n(445),dt=n(630),mt=n(446),bt=n.n(mt),pt=function(e){},jt=function(e){var t=Object(ct.f)(st.b);return Object(me.jsxs)(lt.a,Object(m.a)(Object(m.a)({},e),{},{children:[t.map((function(e){return Object(me.jsx)(ut.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,leftIcon:e.icon?Object(me.jsx)(e.icon,{}):Object(me.jsx)(bt.a,{}),onClick:pt,sidebarIsOpen:true},e.name)})),Object(me.jsx)(dt.a,{})]}))},ft=function(e){return Object(me.jsx)(it.a,Object(m.a)(Object(m.a)({},e),{},{menu:jt}))},ht=n(50),Ot=n(14),gt=n.n(Ot),yt=n(150),vt=n(254),xt=n(574),St=n(453),Ct=(n(138),n(344)),wt=n(311),kt=n(1073),It=N();var _t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;t.type,t.payload;return e},Nt=function(e){for(var t=0,n=Object.entries(It.resources);t<n.length;t++){var a=Object(c.a)(n[t],2),r=a[0];if(a[1].type===e)return r}return!1},Pt=function(e,t){var n,a,r,o,i=Object(Ct.a)(e,t);if("CRUD_GET_ONE_SUCCESS"==t.type)return i;var s,l=new Set,u=Object(S.a)((null===(o=t.payload)||void 0===o?void 0:o.included)||[]);try{for(u.s();!(s=u.n()).done;){var d=s.value,m=Nt(d.type);void 0!==d.type&&void 0!==d.id&&m&&(i.resources[m]||(i.resources[m]={}),i.resources[m][d.id]=d,l.add(m))}}catch(x){u.e(x)}finally{u.f()}var b,p=Object(S.a)(l);try{for(p.s();!(b=p.n()).done;)b.value}catch(x){p.e(x)}finally{p.f()}if(Array.isArray(null===(n=t.payload)||void 0===n?void 0:n.data)){var j=t.payload.data;Array.isArray(t.payload.included);var f,h=Object(S.a)(j);try{for(h.s();!(f=h.n()).done;){var O=f.value;if(O.relationships)for(var g=function(){var e,t,n=Object(c.a)(v[y],2),a=n[0],r=n[1],o=Nt(null===(e=r.data)||void 0===e?void 0:e.type);o&&(Array.isArray(r.data)?O.relationships[a]=O[a]=r.data.map((function(e){return i.resources[o][e.id]})):(null===(t=r.data)||void 0===t?void 0:t.id)&&(O.relationships[a]=O[a]=i.resources[o][r.data.id]))},y=0,v=Object.entries(O.relationships);y<v.length;y++)g()}}catch(x){h.e(x)}finally{h.f()}}else null===(a=t.payload)||void 0===a||null===(r=a.data)||void 0===r||r.type;return i},Et=function(e){var t=e.authProvider,n=e.dataProvider,a=e.history,r=Object(yt.b)({admin:Pt,router:Object(vt.b)(a),sReducer:_t}),o=gt.a.mark((function e(){return gt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ht.a)([Object(kt.a)(n,t)].map(ht.f));case 2:case"end":return e.stop()}}),e)})),i=Object(St.a)(),c=yt.c,s=Object(yt.d)((function(e,t){return r(t.type!==wt.f?e:void 0,t)}),{},c(Object(yt.a)(i,Object(xt.a)(a))));return i.run(o),s},Tt=n(148),Lt=n(641),Rt=n.n(Lt),At=Object(Tt.b)(),Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;return"RA/CRUD_GET_LIST_SUCCESS"===n&&(console.log("bcR",n,a),console.log(e)),e},Dt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{conf:{}},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:p.a.fetchJson,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Content-Range",r=Object(j.a)(x,t);t.conf;return{getList:function(t,a){var o,i=t,c=a.pagination,s=c.page,l=c.perPage,u=T.resources[i],d=u.sort,m={"page[number]":s,"page[size]":l,"page[offset]":(s-1)*l,"page[limit]":l,sort:d||""};if(console.log(a),(null===(o=a.filter)||void 0===o?void 0:o.q)&&"resources"in T){var p=u.attributes.filter((function(e){return 1==e.search})).map((function(e){return e.name})),j=(u.sort,p.map((function(e){return{name:e,op:"like",val:"".concat(a.filter.q,"%")}})));console.log(j),m.filter=JSON.stringify(j)}else Object.keys(a.filter||{}).forEach((function(e){m["filter[".concat(e,"]")]=a.filter[e]}));if(a.sort&&a.sort.field){var f="ASC"===a.sort.order?"":"-";m.sort="".concat(f).concat(a.sort.field)}var h=(T.resources[i].relationships||[]).map((function(e){return e.name}));m.include=h.join(",");var O="".concat(e,"/").concat(t,"?").concat(Object(b.stringify)(m));return n(O).then((function(e){var t=e.json,n=0;t.meta&&r.total&&(n=t.meta[r.total]),n=n||t.data.length;var a=new k(t),o=t.data.map((function(e){return a.unwrapData(e,h)}));return{data:o,included:t.included,total:n}})).catch((function(e){console.log("catch Error",e.body);var t=r.errorHandler;return Promise.reject(t(e))}))},getOne:function(t,a){var r=T.resources[t];if(!r)return console.warn("Invalid resource ".concat(t)),new Promise((function(){}));var o=((null===r||void 0===r?void 0:r.relationships)||[]).map((function(e){return e.name})).join(","),i="".concat(e,"/").concat(t,"/").concat(a.id,"?include=").concat(o);return n(i).then((function(e){var t=e.json.data,n=t.id,a=t.attributes,r=t.relationships,o=t.type;return Object.assign(a,r,{type:o},{relationships:r},{attributes:Object(m.a)({},a)}),{data:Object(m.a)({id:n},a)}}))},getMany:function(t,a){t=t;var o="filter[id]="+JSON.stringify(a.ids),i="".concat(e,"/").concat(t,"?").concat(o);return n(i).then((function(e){var t=e.json;console.log("gtMany",t);var n=0;return t.meta&&r.total&&(n=t.meta[r.total]),n=n||t.data.length,{data:t.data.map((function(e){return Object.assign({id:e.id,type:e.type},e.attributes)})),total:n}}))},getManyReference:function(t,o){console.log("GMR",o),console.log(t,o.target);var i=o.target,c=o.pagination,s=c.page,l=c.perPage,u=o.sort,d=u.field,m=u.order,p={sort:JSON.stringify([d,m])};p["filter[".concat(i,"]")]=o.id,p["page[limit]"]=l,p["page[offset]"]=(s-1)*l;var j="".concat(e,"/").concat(t,"?").concat(Object(b.stringify)(p),"&include=%2Ball");return n(j,{}).then((function(e){var t,n=e.headers,o=e.json;n.has(a)||console.debug("The ".concat(a," header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ").concat(a," in the Access-Control-Expose-Headers header?"));var i=null===(t=o.meta)||void 0===t?void 0:t.total;return o.meta&&r.total&&(i=o.meta[r.total]),console.log(o),i=i||o.data.length,{data:o.data.map((function(e){return Object.assign({id:e.id,type:e.type},e.attributes)})),total:i}}))},update:function(t,a){var o=T.resources[t].type,i=r.endpointToTypeStripLastLetters;for(var c in i)if(t.endsWith(i[c])){o=t.slice(0,-1*i[c].length);break}var s={data:{id:a.id,type:o,attributes:a.data}};return n("".concat(e,"/").concat(t,"/").concat(a.id),{method:r.updateMethod,body:JSON.stringify(s)}).then((function(e){var t=e.json.data,n=t.id,a=t.attributes;return{data:Object(m.a)({id:n},a)}})).catch((function(e){console.log("catch Error",e.body);var t=r.errorHandler;return Promise.reject(t(e))}))},updateMany:function(t,a){return Promise.all(a.ids.map((function(r){return n("".concat(e,"/").concat(t,"/").concat(r),{method:"PUT",body:JSON.stringify(a.data)})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},create:function(t,a){var o=t,i=r.endpointToTypeStripLastLetters;for(var c in i)if(t.endsWith(i[c])){o=t.slice(0,-1*i[c].length);break}var s={data:{type:o,attributes:a.data}};return n("".concat(e,"/").concat(t),{method:"POST",body:JSON.stringify(s)}).then((function(e){var t=e.json.data,n=t.id,a=t.attributes;return{data:Object(m.a)({id:n},a)}})).catch((function(e){console.log("catch Error",e.body);var t=r.errorHandler;return Promise.reject(t(e))}))},delete:function(t,a){return n("".concat(e,"/").concat(t,"/").concat(a.id),{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})}).then((function(e){return{data:e.json}}))},deleteMany:function(t,a){return Promise.all(a.ids.map((function(a){return n("".concat(e,"/").concat(t,"/").concat(a),{method:"DELETE",headers:new Headers({"Content-Type":"text/plain"})})}))).then((function(e){return{data:e.map((function(e){return e.json.id}))}}))},getResources:function(){return T?Promise.resolve({data:T}):n("".concat(e,"/schema"),{method:"GET"}).then((function(e){var t=e.json;return localStorage.setItem("raconf",JSON.stringify(t)),{data:t}})).catch((function(){return{data:{}}}))}}}(N().api_root,{}),Mt=function(){return Promise.resolve()},Ft=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),n=t[0],r=t[1],o=Object(s.a)();return Object(a.useEffect)((function(){o.getResources().then((function(e){var t=Object.keys(e.data.resources).map((function(e){return{name:e}}));r(t)})).catch((function(e){console.warn(e),r([])}))}),[]),!1===n?Object(me.jsx)("div",{children:"Loading..."}):Object(me.jsx)(ct.a,{store:Et({authProvider:Mt,dataProvider:o,history:At}),children:Object(me.jsxs)(l.a,{layout:ft,children:[Object(me.jsx)(u.a,{name:"Home",show:Ue,list:Ue,options:{label:"Home"},icon:R.a}),Object(me.jsx)(u.a,{name:"Configuration",show:ot,list:ot,options:{label:"Configuration"},icon:Rt.a}),n.map((function(e){return Object(me.jsx)(Je,{name:e.name},e.name)}))]})})},Ut=function(){return Object(me.jsx)(d.a,{dataProvider:Dt,customReducers:{admin2:Jt},children:Object(me.jsx)(Ft,{})})},Ht=function(e){e&&e instanceof Function&&n.e(84).then(n.bind(null,1177)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))};i.a.render(Object(me.jsx)(Ut,{}),document.getElementById("root")),Ht()}},[[937,4,5]]]);
//# sourceMappingURL=main.7ca6ae85.chunk.js.map