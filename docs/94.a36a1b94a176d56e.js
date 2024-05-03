"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[94],{9094:(ue,S,n)=>{n.r(S),n.d(S,{HeroesModule:()=>Z});var c=n(6895),a=n(4006),l=n(3060),e=n(4650),k=n(6518),h=n(4859),I=n(7392),v=n(6338),J=n(3267),M=n(3683);function j(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"mat-list-item",9),e.NdJ("click",function(){e.CHM(o),e.oxw();const u=e.MAs(2);return e.KtG(u.toggle())}),e.TgZ(1,"mat-icon",10),e._uU(2),e.qZA(),e._uU(3),e.qZA()}if(2&r){const o=t.$implicit;e.Q6J("routerLink",o.url),e.xp6(2),e.Oqu(o.icon),e.xp6(1),e.hij(" ",o.label," ")}}const $=function(){return{width:"250px"}};class T{constructor(t,o){this.authService=t,this.router=o,this.sidebarItems=[{label:"Listado",icon:"label",url:"./list"},{label:"A\xf1adir",icon:"add",url:"./new-hero"},{label:"Buscar",icon:"search",url:"./search"}]}get currentUser(){return this.authService.currentUser}onLogout(){this.authService.logout(),this.router.navigateByUrl("auth")}}T.\u0275fac=function(t){return new(t||T)(e.Y36(k.e),e.Y36(l.F0))},T.\u0275cmp=e.Xpm({type:T,selectors:[["app-layout-page"]],decls:23,vars:4,consts:[["fullscreen",""],["mode","push",3,"ngStyle"],["sidenav",""],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["color","primary"],["mat-button","",3,"click"],[1,"container","p-2"],[3,"routerLink","click"],["matListItemIcon",""]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"mat-sidenav-container",0)(1,"mat-sidenav",1,2)(3,"mat-toolbar")(4,"span"),e._uU(5,"Men\xfa"),e.qZA(),e._UZ(6,"span",3),e.TgZ(7,"button",4),e.NdJ("click",function(){e.CHM(i);const H=e.MAs(2);return e.KtG(H.toggle())}),e.TgZ(8,"mat-icon"),e._uU(9,"menu"),e.qZA()()(),e.TgZ(10,"mat-nav-list"),e.YNc(11,j,4,3,"mat-list-item",5),e.qZA()(),e.TgZ(12,"mat-toolbar",6)(13,"button",4),e.NdJ("click",function(){e.CHM(i);const H=e.MAs(2);return e.KtG(H.toggle())}),e.TgZ(14,"mat-icon"),e._uU(15,"menu"),e.qZA()(),e._UZ(16,"span",3),e.TgZ(17,"span"),e._uU(18),e.qZA(),e.TgZ(19,"button",7),e.NdJ("click",function(){return o.onLogout()}),e._uU(20," Logout "),e.qZA()(),e.TgZ(21,"div",8),e._UZ(22,"router-outlet"),e.qZA()()}2&t&&(e.xp6(1),e.Q6J("ngStyle",e.DdM(3,$)),e.xp6(10),e.Q6J("ngForOf",o.sidebarItems),e.xp6(7),e.hij("Hola ",null==o.currentUser?null:o.currentUser.user," "))},dependencies:[c.sg,c.PC,l.lC,l.rH,h.lW,h.RK,I.Hw,v.Hk,v.Tg,v.Yt,J.JX,J.TM,M.Ye],encapsulation:2});var N=n(3900),Q=n(9300),q=(()=>{return(r=q||(q={})).DCComics="DC Comics",r.MarvelComics="Marvel Comics",q;var r})(),d=n(5412);class C{constructor(t,o){this.dialogRef=t,this.data=o}onNoClick(){this.dialogRef.close(!1)}onConfirm(){this.dialogRef.close(!0)}}C.\u0275fac=function(t){return new(t||C)(e.Y36(d.so),e.Y36(d.WI))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-confirm-dialog"]],decls:11,vars:1,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","",3,"click"],[1,"spacer"],["mat-button","","color","warn","cdkFocusInitial","",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"h1",0),e._uU(1,"\xbfEst\xe1 seguro?"),e.qZA(),e.TgZ(2,"div",1)(3,"p"),e._uU(4),e.qZA()(),e.TgZ(5,"div",2)(6,"button",3),e.NdJ("click",function(){return o.onNoClick()}),e._uU(7,"No Thanks"),e.qZA(),e._UZ(8,"span",4),e.TgZ(9,"button",5),e.NdJ("click",function(){return o.onConfirm()}),e._uU(10,"Ok"),e.qZA()()),2&t&&(e.xp6(4),e.hij("Este proceso no es reversible, est\xe1 a punto de elimiar a ",o.data.superhero," ... "))},dependencies:[h.lW,d.uh,d.xY,d.H8],encapsulation:2});var x=n(262),P=n(9646),B=n(4004),D=n(8181),R=n(529);class m{constructor(t){this.http=t,this.baseUrl=D.T.baseUrl}getHeroes(){return this.http.get(`${this.baseUrl}/heroes`)}getHeroById(t){return this.http.get(`${this.baseUrl}/heroes/${t}`).pipe((0,x.K)(o=>(0,P.of)(void 0)))}getSuggestions(t){return this.http.get(`${this.baseUrl}/heroes?q=${t}&_limit=6`)}addHero(t){return this.http.post(`${this.baseUrl}/heroes`,t)}updateHero(t){if(!t.id)throw Error("Hero id is required");return this.http.patch(`${this.baseUrl}/heroes/${t.id}`,t)}deleteHero(t){return this.http.delete(`${this.baseUrl}/heroes/${t}`).pipe((0,x.K)(o=>(0,P.of)(!1)),(0,B.U)(o=>!0))}}m.\u0275fac=function(t){return new(t||m)(e.LFG(R.eN))},m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var X=n(7009),L=n(3238),s=n(3546),y=n(9549),O=n(4144),F=n(4850),G=n(4385);class p{transform(t){return t.id||t.alt_img?t.alt_img?t.alt_img:`assets/heroes/${t.id}.jpg`:"assets/no-image.png"}}function K(r,t){if(1&r&&(e.TgZ(0,"mat-option",16),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Q6J("value",o.id),e.xp6(1),e.hij(" ",o.desc," ")}}function z(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(o);const u=e.oxw();return e.KtG(u.onDeleteHero())}),e._uU(1," Borrar "),e.qZA()}}p.\u0275fac=function(t){return new(t||p)},p.\u0275pipe=e.Yjl({name:"heroImage",type:p,pure:!0});class g{constructor(t,o,i,u,H){this.heroesService=t,this.activatedRoute=o,this.router=i,this.snackbar=u,this.dialog=H,this.heroForm=new a.cw({id:new a.NI(""),superhero:new a.NI("",{nonNullable:!0}),publisher:new a.NI(q.DCComics),alter_ego:new a.NI(""),first_appearance:new a.NI(""),characters:new a.NI(""),alt_img:new a.NI("")}),this.publishers=[{id:"DC Comics",desc:"DC - Comics"},{id:"Marvel Comics",desc:"Marvel - Comics"}]}get currentHero(){return this.heroForm.value}ngOnInit(){this.router.url.includes("new-hero")||this.activatedRoute.params.pipe((0,N.w)(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigateByUrl("/");this.heroForm.reset(t)})}onSubmit(){if(!this.heroForm.invalid){if(this.currentHero.id)return void this.heroesService.updateHero(this.currentHero).subscribe(t=>{this.showSnackbar(`${t.superhero} updated!`)});this.heroesService.addHero(this.currentHero).subscribe(t=>{this.router.navigateByUrl(`heroes/edit/${t.id}`),this.showSnackbar(`${t.superhero} created!`)})}}onDeleteHero(){if(!this.currentHero.id)throw Error("Hero id is required");this.dialog.open(C,{data:this.heroForm.value}).afterClosed().pipe((0,Q.h)(o=>o),(0,N.w)(()=>this.heroesService.deleteHero(this.currentHero.id))).subscribe(o=>{this.router.navigateByUrl("/")})}showSnackbar(t){this.snackbar.open(t,"",{duration:3e3})}}g.\u0275fac=function(t){return new(t||g)(e.Y36(m),e.Y36(l.gz),e.Y36(l.F0),e.Y36(X.ux),e.Y36(d.uw))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-new-page"]],decls:47,vars:10,consts:[[1,"mb-2"],[1,"grid"],[1,"col-12","sm:col-6"],[1,"grid",3,"formGroup","ngSubmit"],["matInput","","type","text","required","","formControlName","superhero"],["matInput","","type","text","required","","formControlName","alter_ego"],[1,"col-12"],["matInput","","type","text","required","","formControlName","first_appearance"],["matInput","","type","text","required","","formControlName","characters"],["required","","formControlName","publisher"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","alt_img"],[1,"flex","justify-content-between"],["mat-flat-button","","color","warn",3,"click",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["alt","imagen del h\xe9roe","mat-card-image","",3,"src"],[3,"value"],["mat-flat-button","","color","warn",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1),e.qZA(),e._UZ(2,"mat-divider",0),e.TgZ(3,"div",1)(4,"div",2)(5,"mat-card")(6,"mat-card-content")(7,"form",3),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(8,"mat-form-field",2)(9,"mat-label"),e._uU(10,"Super h\xe9roe"),e.qZA(),e._UZ(11,"input",4),e.qZA(),e.TgZ(12,"mat-form-field",2)(13,"mat-label"),e._uU(14,"Alter ego"),e.qZA(),e._UZ(15,"input",5),e.qZA(),e.TgZ(16,"mat-form-field",6)(17,"mat-label"),e._uU(18,"Primera aparici\xf3n"),e.qZA(),e._UZ(19,"input",7),e.qZA(),e.TgZ(20,"mat-form-field",6)(21,"mat-label"),e._uU(22,"Personajes"),e.qZA(),e._UZ(23,"input",8),e.qZA(),e.TgZ(24,"mat-form-field",6)(25,"mat-label"),e._uU(26,"Creador"),e.qZA(),e.TgZ(27,"mat-select",9),e.YNc(28,K,2,2,"mat-option",10),e.qZA()(),e.TgZ(29,"mat-form-field",6)(30,"mat-label"),e._uU(31,"Im\xe1gen Alternativa"),e.qZA(),e._UZ(32,"input",11),e.qZA()(),e.TgZ(33,"div",12),e.YNc(34,z,2,0,"button",13),e._UZ(35,"span"),e.TgZ(36,"button",14),e.NdJ("click",function(){return o.onSubmit()}),e.TgZ(37,"mat-icon"),e._uU(38,"save"),e.qZA(),e._uU(39," Guardar "),e.qZA()()()()(),e.TgZ(40,"div",2)(41,"mat-card"),e._UZ(42,"img",15),e.ALo(43,"heroImage"),e.qZA()()(),e.TgZ(44,"pre"),e._uU(45),e.ALo(46,"json"),e.qZA()),2&t&&(e.xp6(1),e.hij(" ",o.currentHero.id?"Editar":"Crear"," h\xe9roe\n"),e.xp6(6),e.Q6J("formGroup",o.heroForm),e.xp6(21),e.Q6J("ngForOf",o.publishers),e.xp6(6),e.Q6J("ngIf",o.currentHero.id),e.xp6(8),e.Q6J("src",e.lcZ(43,6,o.currentHero),e.LSH),e.xp6(3),e.hij("  ",e.lcZ(46,8,o.currentHero),"\n"))},dependencies:[c.sg,c.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.sg,a.u,L.ey,h.lW,s.a8,s.dn,s.G2,y.KE,y.hX,I.Hw,O.Nt,F.d,G.gD,c.Ts,p],encapsulation:2});var w=n(3805);function W(r,t){if(1&r&&(e.TgZ(0,"mat-option",6),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.Q6J("value",o),e.xp6(1),e.hij(" ",o.superhero," ")}}function V(r,t){if(1&r&&(e.TgZ(0,"mat-option",7),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.hij(" No se encontr\xf3 nada con el t\xe9rmino ",o.searchInput.value," ")}}class U{constructor(t){this.heroesService=t,this.searchInput=new a.NI(""),this.heroes=[]}searchHero(){this.heroesService.getSuggestions(this.searchInput.value||"").subscribe(o=>this.heroes=o)}onSelectedOption(t){if(!t.option.value)return void(this.selectedHero=void 0);const o=t.option.value;this.searchInput.setValue(o.superhero),this.selectedHero=o}}U.\u0275fac=function(t){return new(t||U)(e.Y36(m))},U.\u0275cmp=e.Xpm({type:U,selectors:[["app-search-page"]],decls:13,vars:7,consts:[[1,"flex","flex-column","p-2"],["type","text","matInput","",3,"formControl","matAutocomplete","input"],["autoActiveFirstOption","",3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["value","",4,"ngIf"],[3,"value"],["value",""]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"h3"),e._uU(2,"Buscador"),e.qZA(),e.TgZ(3,"mat-form-field")(4,"mat-label"),e._uU(5,"Buscador de h\xe9roes"),e.qZA(),e.TgZ(6,"input",1),e.NdJ("input",function(){return o.searchHero()}),e.qZA(),e.TgZ(7,"mat-autocomplete",2,3),e.NdJ("optionSelected",function(u){return o.onSelectedOption(u)}),e.YNc(9,W,2,2,"mat-option",4),e.YNc(10,V,2,1,"mat-option",5),e.qZA()(),e._uU(11),e.ALo(12,"json"),e.qZA()),2&t){const i=e.MAs(8);e.xp6(6),e.Q6J("formControl",o.searchInput)("matAutocomplete",i),e.xp6(3),e.Q6J("ngForOf",o.heroes),e.xp6(1),e.Q6J("ngIf",0===o.heroes.length&&o.searchInput.value&&o.searchInput.value.length>0),e.xp6(1),e.hij(" ",e.lcZ(12,5,o.selectedHero)," ")}},dependencies:[c.sg,c.O5,a.Fj,a.JJ,a.oH,w.XC,L.ey,w.ZL,y.KE,y.hX,O.Nt,c.Ts],encapsulation:2});var Y=n(7331);function ee(r,t){if(1&r&&(e.TgZ(0,"mat-chip"),e._uU(1),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.hij(" ",o," ")}}const te=function(r){return["/heroes/edit",r]},oe=function(r){return["/heroes",r]};class A{ngOnInit(){if(!this.hero)throw Error("Hero property is required")}}function re(r,t){if(1&r&&(e.TgZ(0,"div",2),e._UZ(1,"heroes-hero-card",3),e.qZA()),2&r){const o=t.$implicit;e.xp6(1),e.Q6J("hero",o)}}A.\u0275fac=function(t){return new(t||A)},A.\u0275cmp=e.Xpm({type:A,selectors:[["heroes-hero-card"]],inputs:{hero:"hero"},decls:30,vars:19,consts:[["mat-card-image","",3,"src","alt"],[1,"mt-2"],[4,"ngFor","ngForOf"],["mat-button","","mat-raised","","color","primary",3,"routerLink"],[1,"spacer"],["mat-button","","mat-raised","",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card")(1,"mat-card-header")(2,"mat-card-title"),e._uU(3),e.qZA(),e.TgZ(4,"mat-card-subtitle"),e._uU(5),e.qZA()(),e._UZ(6,"img",0),e.ALo(7,"heroImage"),e.TgZ(8,"mat-card-content",1)(9,"h4"),e._uU(10),e.qZA(),e.TgZ(11,"p")(12,"strong"),e._uU(13,"Primera aparici\xf3n"),e.qZA(),e._uU(14),e._UZ(15,"br"),e.TgZ(16,"mat-chip-listbox"),e.YNc(17,ee,2,1,"mat-chip",2),e.ALo(18,"slice"),e.qZA()()(),e._UZ(19,"mat-divider"),e.TgZ(20,"mat-card-actions")(21,"button",3)(22,"mat-icon"),e._uU(23,"edit"),e.qZA(),e._uU(24," Editar "),e.qZA(),e._UZ(25,"span",4),e.TgZ(26,"button",5)(27,"mat-icon"),e._uU(28,"more_horiz"),e.qZA(),e._uU(29," M\xe1s "),e.qZA()()()),2&t&&(e.xp6(3),e.Oqu(o.hero.superhero),e.xp6(2),e.Oqu(o.hero.alter_ego),e.xp6(1),e.Q6J("src",e.lcZ(7,9,o.hero),e.LSH)("alt",o.hero.superhero),e.xp6(4),e.Oqu(o.hero.publisher),e.xp6(4),e.hij(" ",o.hero.first_appearance," "),e.xp6(3),e.Q6J("ngForOf",e.Dn7(18,11,o.hero.characters.split(","),0,3)),e.xp6(4),e.Q6J("routerLink",e.VKq(15,te,o.hero.id)),e.xp6(5),e.Q6J("routerLink",e.VKq(17,oe,o.hero.id)))},dependencies:[c.sg,l.rH,h.lW,s.a8,s.hq,s.dn,s.dk,s.G2,s.$j,s.n5,Y.HS,Y.z2,I.Hw,F.d,c.OU,p],encapsulation:2});class _{constructor(t){this.heroesService=t,this.heroes=[]}ngOnInit(){this.heroesService.getHeroes().subscribe(t=>this.heroes=t)}}_.\u0275fac=function(t){return new(t||_)(e.Y36(m))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-list-page"]],decls:5,vars:1,consts:[[1,"grid","bm-8","pt-2"],["class","col-12 sm:col-4 md:col-3 xl:col-2",4,"ngFor","ngForOf"],[1,"col-12","sm:col-4","md:col-3","xl:col-2"],[3,"hero"]],template:function(t,o){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Listado de H\xe9roes"),e.qZA(),e._UZ(2,"mat-divider"),e.TgZ(3,"div",0),e.YNc(4,re,2,1,"div",1),e.qZA()),2&t&&(e.xp6(4),e.Q6J("ngForOf",o.heroes))},dependencies:[c.sg,F.d,A],encapsulation:2});var E=n(782),ne=n(1572);function ae(r,t){1&r&&(e.TgZ(0,"mat-grid-list",2)(1,"mat-grid-tile"),e._UZ(2,"mat-spinner"),e.qZA()())}function ie(r,t){if(1&r){const o=e.EpF();e.TgZ(0,"div",3)(1,"mat-card",4)(2,"mat-card-header")(3,"mat-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"mat-card-subtitle"),e._uU(6),e.qZA()(),e._UZ(7,"img",5),e.ALo(8,"heroImage"),e.qZA(),e.TgZ(9,"mat-card",4)(10,"mat-card-header")(11,"mat-card-title"),e._uU(12,"Informaci\xf3n"),e.qZA(),e.TgZ(13,"mat-card-subtitle"),e._uU(14),e.qZA()(),e.TgZ(15,"mat-card-content")(16,"mat-list")(17,"mat-list-item"),e._uU(18),e.qZA(),e.TgZ(19,"mat-list-item"),e._uU(20),e.qZA(),e.TgZ(21,"mat-list-item"),e._uU(22),e.qZA(),e.TgZ(23,"mat-list-item"),e._uU(24),e.qZA()(),e.TgZ(25,"button",6),e.NdJ("click",function(){e.CHM(o);const u=e.oxw();return e.KtG(u.goBack())}),e._uU(26," Regresar "),e.qZA()()()()}if(2&r){const o=e.oxw();e.xp6(4),e.Oqu(o.hero.alter_ego),e.xp6(2),e.Oqu(o.hero.superhero),e.xp6(1),e.Q6J("src",e.lcZ(8,9,o.hero),e.LSH)("alt",o.hero.superhero),e.xp6(7),e.Oqu(o.hero.superhero),e.xp6(4),e.Oqu(o.hero.first_appearance),e.xp6(2),e.Oqu(o.hero.characters),e.xp6(2),e.Oqu(o.hero.publisher),e.xp6(2),e.Oqu(o.hero.alter_ego)}}class b{constructor(t,o,i){this.heroesService=t,this.activatedRoute=o,this.router=i}ngOnInit(){this.activatedRoute.params.pipe((0,N.w)(({id:t})=>this.heroesService.getHeroById(t))).subscribe(t=>{if(!t)return this.router.navigate(["/heroes/list"]);this.hero=t})}goBack(){this.router.navigateByUrl("heroes/list")}}b.\u0275fac=function(t){return new(t||b)(e.Y36(m),e.Y36(l.gz),e.Y36(l.F0))},b.\u0275cmp=e.Xpm({type:b,selectors:[["app-hero-page"]],decls:3,vars:2,consts:[["divLoading",""],["class","grid p-2",4,"ngIf","ngIfElse"],["cols","1"],[1,"grid","p-2"],[1,"col-12","sm:col-6"],["mat-card-image","",3,"src","alt"],["mat-button","","color","warn",3,"click"]],template:function(t,o){if(1&t&&(e.YNc(0,ae,3,0,"ng-template",null,0,e.W1O),e.YNc(2,ie,27,11,"div",1)),2&t){const i=e.MAs(1);e.xp6(2),e.Q6J("ngIf",o.hero)("ngIfElse",i)}},dependencies:[c.O5,h.lW,s.a8,s.dn,s.dk,s.G2,s.$j,s.n5,E.Il,E.DX,v.i$,v.Tg,ne.Ou,p],encapsulation:2});const se=[{path:"",component:T,children:[{path:"new-hero",component:g},{path:"search",component:U},{path:"edit/:id",component:g},{path:"list",component:_},{path:":id",component:b},{path:"**",redirectTo:"list"}]}];class f{}f.\u0275fac=function(t){return new(t||f)},f.\u0275mod=e.oAB({type:f}),f.\u0275inj=e.cJS({imports:[l.Bz.forChild(se),l.Bz]});var ce=n(898);class Z{}Z.\u0275fac=function(t){return new(t||Z)},Z.\u0275mod=e.oAB({type:Z}),Z.\u0275inj=e.cJS({imports:[c.ez,a.UX,f,ce.q]})}}]);