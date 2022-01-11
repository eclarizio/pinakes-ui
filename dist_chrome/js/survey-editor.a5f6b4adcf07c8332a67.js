"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[5201],{13148:(e,t,r)=>{r.r(t),r.d(t,{default:()=>K});var n,a=r(71002),i=r(93433),u=r(29439),o=r(87462),l=r(45987),c=r(4942),s=r(30624),d=r.n(s),p=r(45697),f=r.n(p),m=r(334),v=r(96354),h=r(13969),b=r(14512),D=r(67463),y=r(15654),E=r(35388),Z=r(8896),g=r(23811),S=r(80887),O=r(77221),P=r(12282),T=r(42697),_=r(45237),V=r(83215),R=r(30137),C=r(64124),I=["propertyValidation","children"],A=["label","initialValueOptions","value","fieldId","innerProps","onChange"],j=["validate"],w=["type"],M=["validate"],U=["type"],k=["getSchema","isValid"];function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=X(X({},b.uD.Pv),{},{propertyName:"isSubstitution",label:"Substitution"}),N=function(e){var t=e.propertyValidation.message,r=e.children,n=(0,l.Z)(e,I);return d().createElement(g.c,(0,o.Z)({helperTextInvalid:t,validated:t?"error":"default"},n),r)};N.propTypes={propertyValidation:f().shape({message:f().string}),children:f().oneOfType([f().node,f().arrayOf(f().node)])},N.defaultProps={propertyValidation:{}};var F=function(e){var t=e.label,r=e.initialValueOptions,n=e.value,c=e.fieldId,p=e.innerProps.propertyValidation,f=e.onChange,m=(0,l.Z)(e,A),v=(0,s.useState)((0,i.Z)(r)),h=(0,u.Z)(v,2),b=h[0],D=h[1],y=(0,s.useState)(!1),E=(0,u.Z)(y,2),Z=E[0],g=E[1];return b.length>0?d().createElement(N,{label:t,fieldId:c,propertyValidation:p},d().createElement(S.P,{variant:"typeahead",onToggle:g,isOpen:Z,typeAheadAriaLabel:"Select initial value",onSelect:function(e,t){f(t),g(!1)},placeholderText:"Select initial value",isCreatable:!0,onCreateOption:function(e){return D((function(t){return[].concat((0,i.Z)(t),[e])}))},selections:[n]},b.map((function(e){return d().createElement(O.SelectOption,{key:e,value:e})})))):d().createElement(s.Fragment,null,d().createElement(N,{label:t,fieldId:c,propertyValidation:p},d().createElement(P.oi,(0,o.Z)({id:c,value:void 0===(0,a.Z)(n)?"":n.toString(),onChange:f},m))))};F.propTypes={label:f().oneOfType([f().string]).isRequired,value:f().any,fieldId:f().string.isRequired,innerProps:f().shape({propertyValidation:f().shape({message:f().string})}).isRequired,onChange:f().func,initialValueOptions:f().arrayOf(f().string)},F.defaultProps={onChange:function(){},value:"",initialValueOptions:[]};var G=X(X({},b.oU),{},{input:F}),x=(n={},(0,c.Z)(n,v.Z.TEXT_FIELD,{attributes:[b.uD.GP,b.uD.bw,b.uD.l7,b.uD.Pv,b.uD.l,b.uD.aO,L]}),(0,c.Z)(n,v.Z.CHECKBOX,{attributes:[b.uD.GP,b.uD.Pv,b.uD.JY,b.uD.aO]}),(0,c.Z)(n,v.Z.SELECT,{attributes:[b.uD.JY,b.uD.GP,b.uD.Pv,b.uD.l7,b.uD.bw,b.uD.aO,L]}),(0,c.Z)(n,v.Z.DATE_PICKER,{attributes:[b.uD.GP,b.uD.ol,b.uD.SI,b.uD.fe,b.uD.u5,b.uD.aO,L]}),(0,c.Z)(n,v.Z.PLAIN_TEXT,{attributes:[b.uD.m3,L]}),(0,c.Z)(n,v.Z.RADIO,{attributes:[b.uD.GP,b.uD.Pv,b.uD.JY,b.uD.aO]}),(0,c.Z)(n,v.Z.SWITCH,{attributes:[b.uD.GP,b.uD.l,b.uD.Pv,b.uD.aO]}),(0,c.Z)(n,v.Z.TEXTAREA,{attributes:[b.uD.GP,b.uD.bw,b.uD.l,b.uD.Pv,b.uD.aO,L]}),n);x["select-field"]=x[v.Z.SELECT],x["textarea-field"]=x[v.Z.TEXTAREA];var H={componentMapper:X({},R.De),builderMapper:X({},b.tm),pickerMapper:X(X({},b.ts),{},{"select-field":b.ts[v.Z.SELECT],"textarea-field":b.ts[v.Z.TEXTAREA]}),propertiesMapper:G,componentProperties:x},J=function(e){var t=X({},e);return t.fields=t.fields.map((function(e){var t=e.validate,r=(0,l.Z)(e,j);return t?X(X({},r),{},{validate:t.map((function(e){var t=e.type;return X(X({},(0,l.Z)(e,w)),{},{type:R.NQ[t]||t})}))}):r})),t},Y=function(e){return d().createElement(h.Z,e)},B=function(e){var t=e.closeUrl,r=e.search,n=e.portfolioItem,a=(0,s.useState)(),i=(0,u.Z)(a,2),c=i[0],p=i[1],f=(0,s.useState)(!1),v=(0,u.Z)(f,2),h=v[0],g=v[1],S=(0,s.useState)(),O=(0,u.Z)(S,2),P=O[0],R=O[1],I=(0,s.useState)(),A=(0,u.Z)(I,2),j=A[0],w=A[1],q=(0,s.useState)(0),L=(0,u.Z)(q,2),N=L[0],F=L[1],G=(0,_.useDispatch)(),x=(0,m.useHistory)().push,B=(0,_.useSelector)((function(e){return e.breadcrumbsReducer.fragments})),K=function(){return(0,y.Hx)().get("".concat(E.Vs,"/portfolio_items/").concat(n.id,"/service_plans")).then((function(e){var t=(0,u.Z)(e,1)[0].create_json_schema.schema;return w(e[0]),e[0].imported?(0,y.Hx)().get("".concat(E.Vs,"/service_plans/").concat(e[0].id,"/base")).then((function(e){return R(J(e.create_json_schema.schema)),J(t)})):J(t)})).then((function(e){p(e),g(!1)}))};(0,s.useEffect)((function(){K()}),[]);var Q=function(e){return(0,y._m)().patchServicePlanModified("".concat(j.id),{modified:{schema:e}})},W=function(e){return(0,y._m)().createServicePlan({portfolio_item_id:n.id}).then((function(e){return(0,u.Z)(e,1)[0].id})).then((function(t){return(0,y._m)().patchServicePlanModified("".concat(t),{modified:{schema:e}})}))},z=function(e){return g(!0),(j.imported?Q:W)(function(e){var t=X({},e);return t.fields=t.fields.map((function(e){var t=e.validate,r=(0,l.Z)(e,M);return t?X(X({},r),{},{validate:t.map((function(e){var t=e.type;return X(X({},(0,l.Z)(e,U)),{},{type:t!==C.Z.MAX_NUMBER_VALUE&&t!==C.Z.MIN_NUMBER_VALUE?"".concat(t,"-validator"):t})}))}):r})),t}(function(e){var t=e.fields.map((function(e){var t=e;return t.isSubstitution&&(t.isDisabled=!0,t.placeholder=e.initialValue),t}));return X(X({},e),{},{fields:t})}(e))).then((function(){return g(!1),G((0,V.wN)({variant:"success",title:"Survey of ".concat(n.name," has been modified."),dismissable:!0})),x({pathname:t,search:r})})).catch((function(e){g(!1),G({type:"EDIT_SURVEY_REJECTED",payload:e})}))};return d().createElement(s.Fragment,null,c?[d().createElement(Y,(0,o.Z)({},H,{key:N,schema:c,disableDrag:!0,disableAdd:!0,schemaTemplate:P,mode:"subset",openEditor:!0}),(function(e){var a=e.getSchema,i=e.isValid,u=(0,l.Z)(e,k);return d().createElement(s.Fragment,null,d().createElement(T.X,{key:"survey-editor-toolbar",handleSaveSurvey:function(){return z(a())},isValid:i,closeUrl:t,search:r,isFetching:h||!c,modified:null==j?void 0:j.modified,breadcrumbfragments:B,handleResetSurvey:function(){return e=j.id,p(void 0),void(0,y._m)().resetServicePlanModified(e).then(K).then((function(){return F((function(e){return e+1})),G((0,V.wN)({variant:"success",title:"Survey of ".concat(n.name," has been restored."),dismissable:!0}))}));var e}}),d().createElement(b.vU,u),";")}))]:d().createElement(s.Fragment,null,d().createElement(T.X,{handleSaveSurvey:z,closeUrl:t,search:r,isFetching:!c||h}),d().createElement(Z.b,null,d().createElement(D.Spinner,null))))};B.propTypes={closeUrl:f().string.isRequired,search:f().string.isRequired,portfolioItem:f().shape({id:f().string.isRequired,name:f().string.isRequired}).isRequired,portfolio:f().object.isRequired};const K=B}}]);
//# sourceMappingURL=../sourcemaps/survey-editor.13cc580fb53ef70fa1d326397da86d85.js.map