"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[926],{7926:(y,p,n)=>{n.r(p),n.d(p,{AuthModule:()=>l});var Z=n(6895),a=n(3060),t=n(4650);class r{}r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[a.lC],encapsulation:2});var h=n(6518),g=n(4859),m=n(9549),d=n(7392),f=n(4144);class i{constructor(e,s){this.authService=e,this.router=s}onLogin(){this.authService.login("a@gmail.com","hola").subscribe(e=>{this.router.navigateByUrl("/")})}}i.\u0275fac=function(e){return new(e||i)(t.Y36(h.e),t.Y36(a.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Contrase\xf1a"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"button",4),t.NdJ("click",function(){return s.onLogin()}),t.TgZ(12,"mat-icon"),t._uU(13,"save"),t.qZA(),t._uU(14," Ingresar "),t.qZA(),t.TgZ(15,"div",5)(16,"a",6),t._uU(17,"\xbfYa tienes cuenta?"),t.qZA()()())},dependencies:[a.rH,g.lW,m.KE,m.hX,d.Hw,f.Nt],encapsulation:2});class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-register-page"]],decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2,"Registro"),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Usuario"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Nombre"),t.qZA(),t._UZ(10,"input",2),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Contrase\xf1a"),t.qZA(),t._UZ(14,"input",3),t.qZA(),t.TgZ(15,"button",4)(16,"mat-icon"),t._uU(17,"save"),t.qZA(),t._uU(18," Crear cuenta "),t.qZA(),t.TgZ(19,"div",5)(20,"a",6),t._uU(21,"\xbfNo tienes cuenta?"),t.qZA()()())},dependencies:[a.rH,g.lW,m.KE,m.hX,d.Hw,f.Nt],encapsulation:2});const A=[{path:"",component:r,children:[{path:"login",component:i},{path:"new-account",component:c},{path:"**",redirectTo:"login"}]}];class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[a.Bz.forChild(A),a.Bz]});var v=n(898);class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[Z.ez,u,v.q]})}}]);