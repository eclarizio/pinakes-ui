"use strict";(self.webpackChunkcatalog=self.webpackChunkcatalog||[]).push([[4727],{47179:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var r=n(87462),a=n(29439),l=n(4942),i=n(30624),o=n.n(i),c=n(45237),u=n(48794),s=n(63035),p=n(66678),f=n(7247),m=n(11608),d=n(49827),g=n(44056),h=n(12700),y=n(33188),v=n(81624),Z=n(59837),F=n(6202),O=n(77172),w=n(92183),b=n(47786),V=n(36722),P=n(97881),E=n(53352),j=n(23349);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D={filterValue:"",isOpen:!1,isFetching:!0,isFiltering:!1},R=function(e,t){switch(t.type){case"setFetching":return x(x({},e),{},{isFetching:t.payload});case"setFilterValue":return x(x({},e),{},{filterValue:t.payload});case"setFilteringFlag":return x(x({},e),{},{isFiltering:t.payload});default:return e}},I=(0,v.Z)((function(e,t,n,r){var a,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:f.he;r(!0),n(null!==(a=window.catalog)&&void 0!==a&&a.standalone?(0,d.Vx)(e,t,l):(0,m.Vx)(e,t,l)).then((function(){return r(!1)}))}),1e3);const S=function(){var e=(0,j.Z)(),t=(0,b.Z)(["platform"]),n=(0,a.Z)(t,1)[0].platform,l=(0,i.useReducer)(R,D),v=(0,a.Z)(l,2),k=v[0],S=k.filterValue,C=k.isFetching,M=k.isFiltering,T=v[1],q=(0,c.useSelector)((function(e){var t=e.platformReducer.platformItems;return t[n]?t[n]:{data:[],results:[],meta:f.he,count:0}})),A=q.data,B=q.results,L=q.count,z=q.meta,G=(0,c.useSelector)((function(e){var t=e.platformReducer;return{platform:t.selectedPlatform,platformIconMapping:t.platformIconMapping}})),H=G.platform,J=G.platformIconMapping,K=(0,c.useDispatch)();(0,i.useEffect)((function(){var e;K(null!==(e=window.catalog)&&void 0!==e&&e.standalone?(0,d.Vx)(n,S,f.he):(0,m.Vx)(n,S,f.he)).then((function(){return T({type:"setFetching",payload:!1})})),(0,s.k3)()}),[n]);var N=A||B,Q=z||{count:L},U=function(e){T({type:"setFilterValue",payload:e}),I(n,e,K,(function(e){return T({type:"setFilteringFlag",payload:e})}),x(x({},Q),{},{offset:0}))},W={items:N?N.map((function(e){return o().createElement(g.Z,(0,r.Z)({key:e.id,pathname:V.rg,searchParams:{service:e.id},preserveSearch:!0,src:J[n]},e))})):[]},X=H?H.name:"";return o().createElement(i.Fragment,null,o().createElement(p.Z,{schema:(0,h.At)({onFilterChange:U,searchValue:S,filterPlaceholder:e(E.Z.templatesFilter),meta:Q,apiRequest:function(e,t){var r;return K(null!==(r=window.catalog)&&void 0!==r&&r.standalone?(0,d.Vx)(n,S,t):(0,m.Vx)(n,S,t))}})}),o().createElement(Z.Z,(0,r.Z)({title:X,isLoading:C||M,renderEmptyState:function(){return o().createElement(y.Z,{title:e(""===S?E.Z.noTemplatesTitle:P.Z.noResults),Icon:u.ZP,PrimaryAction:function(){return""!==S?o().createElement(F.Button,{ouiaId:"clear-filters",onClick:function(){return U("")},variant:"link"},e(P.Z.clearFilters)):null},description:e(""===S?E.Z.noTemplatesDescription:P.Z.noResultsDescription)})}},W)),Q.count>0&&o().createElement(w.Z,null,o().createElement(O.Z,{dropDirection:"up",meta:Q,apiRequest:function(e,t){var r;return K(null!==(r=window.catalog)&&void 0!==r&&r.standalone?(0,d.Vx)(n,S,t):(0,m.Vx)(n,S,t))}})))}}}]);
//# sourceMappingURL=../sourcemaps/platform-templates.15f7315c8e5bf952564c6a3819cba196.js.map