(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nVOV:function(n,a,l){"use strict";l.r(a);var t=l("CcnG"),e=function(){},u=l("ZYCi"),i=l("jvbL"),o=(l("cwSc"),l("hzLA"),function(){function n(n,a,l,t){this.communicator=n,this.themeService=a,this.router=l,this.document=t,this.alive=!0}return n.prototype.ngOnInit=function(){this.setupId(),this.subscribeOnThemeSwitch()},n.prototype.ngAfterViewInit=function(){this.sendHeight()},n.prototype.ngOnDestroy=function(){this.alive=!1},n.prototype.setupId=function(){this.id=this.getId()},n.prototype.subscribeOnThemeSwitch=function(){var n=this;this.communicator.receive(this.id).pipe(Object(i.a)(function(){return n.alive})).subscribe(function(a){return n.changeTheme(a)})},n.prototype.changeTheme=function(n){this.themeService.changeTheme(n.theme)},n.prototype.getId=function(){var n=this.router.url.split("/");return n.splice(0,2),n.join("/")},n.prototype.sendHeight=function(){this.communicator.send({id:this.id,height:this.document.body.clientHeight})},n}()),c=l("VkvS"),r=l("4vXS"),s=l("MGne"),h=t.La({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block;background-color:#f1f2f3}"]],data:{}});function p(n){return t.hb(0,[(n()(),t.Na(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.Ma(1,212992,null,0,u.q,[u.b,t.N,t.j,[8,null],t.h],null,null)],function(n,a){n(a,1,0)},null)}var d=t.Ja("ngd-example",o,function(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"ngd-example",[],null,null,null,p,h)),t.Ma(1,4440064,null,0,o,[c.a,r.a,u.l,s.b],null,null)],function(n,a){n(a,1,0)},null)},{},{},[]),f=l("KM9H"),V=l("vuB0"),m=l("7uv5"),b=l("NfCQ"),g=function(n){this.themeService=n,this.themeService.changeTheme("default")},y=t.La({encapsulation:0,styles:[["nb-layout-column{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:5rem}"]],data:{}});function v(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null]],[["window","resize"]],function(n,a,l){var e=!0;return"window:resize"===a&&(e=!1!==t.Xa(n,1).onResize(l)&&e),e},f.f,f.b)),t.Ma(1,4440064,null,0,V.b,[r.a,m.a,t.j,t.k,t.B,u.l,s.f,s.b,t.z,b.c],null,null),(n()(),t.Na(2,0,null,2,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,f.e,f.a)),t.Ma(3,49152,null,0,V.a,[],null,null),(n()(),t.fb(-1,0,["Example not found."]))],function(n,a){n(a,1,0)},function(n,a){n(a,0,0,t.Xa(a,1).windowModeValue,t.Xa(a,1).withScrollValue),n(a,2,0,t.Xa(a,3).leftValue,t.Xa(a,3).startValue)})}var w=t.Ja("ngd-example-404",g,function(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"ngd-example-404",[],null,null,null,v,y)),t.Ma(1,49152,null,0,g,[r.a],null,null)],null,null)},{},{},[]),x=l("Ip0R"),M=l("gIcY"),k=l("rMZ+"),N=l("Jtdv"),S=l("9/DE"),j=l("SaRX"),I=l("WlUk"),J=l("RmBe"),O=l("t/Na"),T=l("YZsg"),X=l("TjMZ"),E=l("l3En"),z=l("pPp6"),C=l("0/97"),K=function(){},Y=l("i6JN"),Z=l("F4EV"),A=l("q1xA"),B=l("0AKQ"),H=l("gM8K"),L=l("sQZK"),R=l("9bB3"),D=l("DJEY"),P=l("lnUJ");l.d(a,"NgdExampleModuleNgFactory",function(){return Q});var Q=t.Ka(e,[],function(n){return t.Ua([t.Va(512,t.j,t.Y,[[8,[d,w]],[3,t.j],t.v]),t.Va(4608,x.n,x.m,[t.s,[2,x.w]]),t.Va(4608,M.x,M.x,[]),t.Va(4608,M.d,M.d,[]),t.Va(4608,k.a,k.a,[]),t.Va(4608,N.a,N.a,[k.a]),t.Va(4608,S.a,S.a,[]),t.Va(4608,j.a,j.a,[N.a,S.a,I.c,I.b]),t.Va(4608,J.a,J.a,[O.c]),t.Va(4608,c.a,c.a,[s.f]),t.Va(4608,T.a,T.a,[I.b]),t.Va(4608,X.a,X.a,[]),t.Va(4608,E.a,E.a,[]),t.Va(4608,z.a,z.a,[j.a,N.a,C.a]),t.Va(1073742336,u.p,u.p,[[2,u.u],[2,u.l]]),t.Va(1073742336,K,K,[]),t.Va(1073742336,x.c,x.c,[]),t.Va(1073742336,M.v,M.v,[]),t.Va(1073742336,M.g,M.g,[]),t.Va(1073742336,Y.a,Y.a,[]),t.Va(1073742336,Z.a,Z.a,[]),t.Va(1073742336,A.a,A.a,[]),t.Va(1073742336,B.a,B.a,[]),t.Va(1073742336,H.a,H.a,[]),t.Va(1073742336,L.a,L.a,[]),t.Va(1073742336,R.a,R.a,[]),t.Va(1073742336,M.s,M.s,[]),t.Va(1073742336,D.a,D.a,[]),t.Va(1073742336,P.a,P.a,[]),t.Va(1073742336,e,e,[]),t.Va(1024,u.j,function(){return[[{path:"",component:o,children:[{path:"",loadChildren:"../../../src/playground/playground.module#NbPlaygroundModule"},{path:"**",component:g}]}]]},[])])})}}]);