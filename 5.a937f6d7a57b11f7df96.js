(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{NU5W:function(n,a,e){"use strict";e.r(a);var l=e("CcnG"),t=function(){},u=e("ZYCi"),r=function(){},c=l.La({encapsulation:2,styles:[],data:{}});function o(n){return l.gb(0,[(n()(),l.Na(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.Ma(1,212992,null,0,u.q,[u.b,l.N,l.j,[8,null],l.h],null,null)],function(n,a){n(a,1,0)},null)}var i=l.Ja("nb-playground-auth",r,function(n){return l.gb(0,[(n()(),l.Na(0,0,null,null,1,"nb-playground-auth",[],null,null,null,o,c)),l.Ma(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),s=e("7lHa"),d=e("BgYQ"),p=e("K+tO"),h=e("cZ1G"),f=e("xZ8S"),g=e("WpxC"),b=e("KM9H"),m=e("vuB0"),v=e("4vXS"),V=e("7uv5"),w=e("MGne"),X=e("NfCQ"),y=e("4Ssn"),x=e("S+eJ"),A=e("Ip0R"),R=e("jvbL"),N=function(){},C=new l.o("Nebular Security Options"),k=function(n){return Object.assign({},n)},S=function(n){return Object.assign([],n)},M=function(n){var a=n.parent;return delete n.parent,a},E=function(){function n(n){void 0===n&&(n={}),this.settings=n,this.state={},n.accessControl&&this.setAccessControl(n.accessControl)}return n.prototype.setAccessControl=function(n){for(var a=0,e=Object.entries(n);a<e.length;a++){var l=e[a],t=l[0],u=k(l[1]),r=M(u);this.register(t,r,u)}},n.prototype.register=function(n,a,e){void 0===a&&(a=null),void 0===e&&(e={}),this.validateRole(n),this.state[n]={parent:a};for(var l=0,t=Object.entries(e);l<t.length;l++){var u=t[l],r=u[1];this.allow(n,u[0],S("string"==typeof r?[r]:r))}},n.prototype.allow=function(n,a,e){this.validateRole(n),this.getRole(n)||this.register(n,null,{}),e="string"==typeof e?[e]:e;var l=S(this.getRoleResources(n,a));l=l.concat(e),this.state[n][a]=l.filter(function(n,a){return l.indexOf(n)===a})},n.prototype.can=function(n,a,e){return this.validateResource(e),this.getRoleParent(n)&&this.can(this.getRoleParent(n),a,e)||this.exactCan(n,a,e)},n.prototype.getRole=function(n){return this.state[n]},n.prototype.validateRole=function(n){if(!n)throw new Error("NbAclService: role name cannot be empty")},n.prototype.validateResource=function(a){if(!a||[n.ANY_RESOURCE].includes(a))throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method")},n.prototype.exactCan=function(a,e,l){var t=this.getRoleResources(a,e);return t.includes(l)||t.includes(n.ANY_RESOURCE)},n.prototype.getRoleResources=function(n,a){return this.getRoleAbilities(n)[a]||[]},n.prototype.getRoleAbilities=function(n){var a=k(this.state[n]||{});return M(k(this.state[n]||{})),a},n.prototype.getRoleParent=function(n){return this.state[n]?this.state[n].parent:null},n.ANY_RESOURCE="*",n}(),O=e("67Y/"),j=function(){function n(n,a){this.roleProvider=n,this.acl=a}return n.prototype.isGranted=function(n,a){var e=this;return this.roleProvider.getRole().pipe(Object(O.a)(function(l){return e.acl.can(l,n,a)}))},n}(),P=function(){function n(n,a,e){this.templateRef=n,this.viewContainer=a,this.accessChecker=e,this.alive=!0,this.hasView=!1}return Object.defineProperty(n.prototype,"nbIsGranted",{set:function(n){var a=this;this.accessChecker.isGranted(n[0],n[1]).pipe(Object(R.a)(function(){return a.alive})).subscribe(function(n){n&&!a.hasView?(a.viewContainer.createEmbeddedView(a.templateRef),a.hasView=!0):!n&&a.hasView&&(a.viewContainer.clear(),a.hasView=!1)})},enumerable:!0,configurable:!0}),n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),Y=function(){function n(){}return n.forRoot=function(a){return{ngModule:n,providers:[{provide:C,useValue:a},E,j],exports:[P]}},n}(),G=function(n){this.accessChecker=n},J=l.La({encapsulation:2,styles:[],data:{}});function I(n){return l.gb(0,[(n()(),l.Na(0,0,null,null,1,"button",[],null,null,null,null,null)),(n()(),l.eb(-1,null,["Post Comment"]))],null,null)}function q(n){return l.gb(0,[(n()(),l.Na(0,0,null,null,1,"button",[],null,null,null,null,null)),(n()(),l.eb(-1,null,["Post Comment"]))],null,null)}function z(n){return l.gb(0,[(n()(),l.Na(0,0,null,null,23,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null]],[["window","resize"]],function(n,a,e){var t=!0;return"window:resize"===a&&(t=!1!==l.Xa(n,1).onResize(e)&&t),t},b.f,b.b)),l.Ma(1,4440064,null,0,m.b,[v.a,V.a,l.j,l.k,l.B,u.l,w.f,w.b,l.z,X.c],null,null),(n()(),l.Na(2,0,null,2,21,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,b.e,b.a)),l.Ma(3,49152,null,0,m.a,[],null,null),(n()(),l.Na(4,0,null,0,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,y.f,y.b)),l.Ma(5,49152,null,0,x.b,[],null,null),(n()(),l.Na(6,0,null,1,2,"nb-card-header",[],null,null,null,y.h,y.d)),l.Ma(7,49152,null,0,x.d,[],null,null),(n()(),l.eb(-1,0,["Service usage"])),(n()(),l.Na(9,0,null,2,4,"nb-card-body",[],null,null,null,y.e,y.a)),l.Ma(10,49152,null,0,x.a,[],null,null),(n()(),l.Ea(16777216,null,0,2,null,I)),l.Ma(12,16384,null,0,A.l,[l.N,l.J],{ngIf:[0,"ngIf"]},null),l.Za(131072,A.b,[l.h]),(n()(),l.Na(14,0,null,0,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,y.f,y.b)),l.Ma(15,49152,null,0,x.b,[],null,null),(n()(),l.Na(16,0,null,1,2,"nb-card-header",[],null,null,null,y.h,y.d)),l.Ma(17,49152,null,0,x.d,[],null,null),(n()(),l.eb(-1,0,["Directive usage"])),(n()(),l.Na(19,0,null,2,4,"nb-card-body",[],null,null,null,y.e,y.a)),l.Ma(20,49152,null,0,x.a,[],null,null),(n()(),l.Ea(16777216,null,0,2,null,q)),l.Ma(22,147456,null,0,P,[l.J,l.N,j],{nbIsGranted:[0,"nbIsGranted"]},null),l.Ya(23,2)],function(n,a){var e=a.component;n(a,1,0),n(a,12,0,l.fb(a,12,0,l.Xa(a,13).transform(e.accessChecker.isGranted("create","comments")))),n(a,22,0,n(a,23,0,"create","comments"))},function(n,a){n(a,0,0,l.Xa(a,1).windowModeValue,l.Xa(a,1).withScrollValue),n(a,2,0,l.Xa(a,3).leftValue,l.Xa(a,3).startValue),n(a,4,1,[l.Xa(a,5).xxsmall,l.Xa(a,5).xsmall,l.Xa(a,5).small,l.Xa(a,5).medium,l.Xa(a,5).large,l.Xa(a,5).xlarge,l.Xa(a,5).xxlarge,l.Xa(a,5).active,l.Xa(a,5).disabled,l.Xa(a,5).primary,l.Xa(a,5).info,l.Xa(a,5).success,l.Xa(a,5).warning,l.Xa(a,5).danger,l.Xa(a,5).hasAccent,l.Xa(a,5).primaryAccent,l.Xa(a,5).infoAccent,l.Xa(a,5).successAccent,l.Xa(a,5).warningAccent,l.Xa(a,5).dangerAccent,l.Xa(a,5).activeAccent,l.Xa(a,5).disabledAccent]),n(a,14,1,[l.Xa(a,15).xxsmall,l.Xa(a,15).xsmall,l.Xa(a,15).small,l.Xa(a,15).medium,l.Xa(a,15).large,l.Xa(a,15).xlarge,l.Xa(a,15).xxlarge,l.Xa(a,15).active,l.Xa(a,15).disabled,l.Xa(a,15).primary,l.Xa(a,15).info,l.Xa(a,15).success,l.Xa(a,15).warning,l.Xa(a,15).danger,l.Xa(a,15).hasAccent,l.Xa(a,15).primaryAccent,l.Xa(a,15).infoAccent,l.Xa(a,15).successAccent,l.Xa(a,15).warningAccent,l.Xa(a,15).dangerAccent,l.Xa(a,15).activeAccent,l.Xa(a,15).disabledAccent])})}var B=l.Ja("nb-actions-test",G,function(n){return l.gb(0,[(n()(),l.Na(0,0,null,null,1,"nb-actions-test",[],null,null,null,z,J)),l.Ma(1,49152,null,0,G,[j],null,null)],null,null)},{},{},[]),D=e("gIcY"),K=e("t/Na"),_=e("VP2u"),F=e("0ICW"),L=e("Abgx"),U=e("znn7"),Z=e("Y4k2"),Q=e("Bc6B"),T=e("BDhN"),H=e("6y2k"),W=e("++eV"),$=e("X/Iy"),nn=e("NGJs"),an=function(){function n(n){this.authService=n}return n.prototype.getRole=function(){return this.authService.onTokenChange().pipe(Object(O.a)(function(n){return n instanceof nn.b&&n.isValid()?n.getPayload().role:"guest"}))},n}(),en=e("xMyE"),ln=function(){function n(n,a){this.authService=n,this.router=a}return n.prototype.canActivate=function(){var n=this;return this.authService.isAuthenticated().pipe(Object(en.a)(function(a){a||n.router.navigate(["auth/login"])}))},n}(),tn=function(){},un=e("i6JN"),rn=e("0AKQ"),cn=e("F4EV"),on=e("DJEY"),sn=e("2Az5"),dn=e("DYSn"),pn=e("9S34"),hn=e("9XlZ"),fn=e("Lu/0"),gn=e("8qs0"),bn=e("4pP6"),mn=e("QEfX");e.d(a,"NbAuthPlaygroundModuleNgFactory",function(){return vn});var vn=l.Ka(t,[],function(n){return l.Ua([l.Va(512,l.j,l.Y,[[8,[i,s.a,d.a,p.a,h.a,f.a,g.a,B]],[3,l.j],l.v]),l.Va(4608,A.n,A.m,[l.s,[2,A.v]]),l.Va(4608,D.x,D.x,[]),l.Va(4608,K.j,K.p,[A.d,l.z,K.n]),l.Va(4608,K.q,K.q,[K.j,K.o]),l.Va(5120,K.a,function(n,a){return[n,new _.a(a)]},[K.q,l.p]),l.Va(4608,K.m,K.m,[]),l.Va(6144,K.k,null,[K.m]),l.Va(4608,K.i,K.i,[K.k]),l.Va(6144,K.b,null,[K.i]),l.Va(4608,K.g,K.l,[K.b,l.p]),l.Va(4608,K.c,K.c,[K.g]),l.Va(5120,F.b,L.b,[F.e]),l.Va(5120,F.c,L.c,[F.b,l.p]),l.Va(5120,F.d,L.d,[F.c]),l.Va(4608,U.b,U.b,[U.a,F.d]),l.Va(4608,Z.b,Z.a,[U.b]),l.Va(4608,Q.a,Q.a,[Z.b]),l.Va(4608,T.a,T.a,[Q.a,F.c]),l.Va(4608,H.a,H.a,[]),l.Va(4608,W.a,W.a,[K.c,u.a]),l.Va(4608,$.a,$.a,[K.c,u.a,w.f]),l.Va(4608,E,E,[[2,C]]),l.Va(4608,N,an,[T.a]),l.Va(4608,j,j,[N,E]),l.Va(4608,ln,ln,[T.a,u.l]),l.Va(1073742336,A.c,A.c,[]),l.Va(1073742336,D.v,D.v,[]),l.Va(1073742336,D.g,D.g,[]),l.Va(1073742336,K.e,K.e,[]),l.Va(1073742336,K.d,K.d,[]),l.Va(1073742336,u.p,u.p,[[2,u.u],[2,u.l]]),l.Va(1073742336,tn,tn,[]),l.Va(1073742336,un.a,un.a,[]),l.Va(1073742336,rn.a,rn.a,[]),l.Va(1073742336,cn.a,cn.a,[]),l.Va(1073742336,on.a,on.a,[]),l.Va(1073742336,L.a,L.a,[]),l.Va(1073742336,Y,Y,[]),l.Va(1073742336,t,t,[]),l.Va(256,K.n,"XSRF-TOKEN",[]),l.Va(256,K.o,"X-XSRF-TOKEN",[]),l.Va(1024,u.j,function(){return[[{path:"",component:r,children:[{path:"auth",component:sn.a,children:[{path:"",component:dn.a},{path:"login",component:dn.a},{path:"register",component:pn.a},{path:"logout",component:hn.a},{path:"request-password",component:fn.a},{path:"reset-password",component:gn.a}]}]},{path:"auth/acl/acl-test.component",component:G},{path:"auth/auth-guard.service",canActivate:[ln],component:r}],[{path:"auth",component:sn.a,children:[{path:"",component:dn.a},{path:"login",component:dn.a},{path:"register",component:pn.a},{path:"logout",component:hn.a},{path:"request-password",component:fn.a},{path:"reset-password",component:gn.a}]}]]},[]),l.Va(256,F.e,{forms:{login:{redirectDelay:3e3,socialLinks:[{url:"https://github.com/akveo",target:"_blank",title:"GitHub"},{url:"https://www.facebook.com/akveo",target:"_blank",icon:"nb-home"},{url:"https://www.facebook.com/akveo",target:"_blank",title:"Twitter"}]}},strategies:[[H.a,{name:"dummy",alwaysFail:!0,delay:1e3}],[W.a,{name:"email",token:{class:bn.a},baseEndpoint:"http://localhost:4400/api/auth/",logout:{redirect:{success:"/auth/login",failure:"/auth/login"}},requestPass:{redirect:{success:"/auth/reset-password"}},resetPass:{redirect:{success:"/auth/login"}},errors:{key:"data.errors"}}]]},[]),l.Va(256,U.a,mn.f,[]),l.Va(256,F.a,"Authorization",[]),l.Va(256,C,{accessControl:{guest:{view:["news","comments"]},user:{parent:"guest",create:"comments"},moderator:{parent:"user",create:"news",remove:"*"}}},[])])})}}]);