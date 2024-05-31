"use strict";(self.webpackChunkstarwars=self.webpackChunkstarwars||[]).push([[167],{3167:(R,g,p)=>{p.r(g),p.d(g,{StarshipsModule:()=>L});var d=p(6895),c=p(7866),n=p(4719),t=p(5062),h=p(1970),_=p(388),m=p(7185),u=p(4597);function C(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Name is mandatory! "),t.qZA())}function b(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Name must be at least 4 characters long! "),t.qZA())}function Z(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Name must have a maximum of 50 characters! "),t.qZA())}function T(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Size is mandatory! "),t.qZA())}function M(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Maximum size is 400! "),t.qZA())}function A(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Passenger is mandatory! "),t.qZA())}function x(i,o){1&i&&(t.TgZ(0,"div",21),t._uU(1," Maximum quantity is 2.000! "),t.qZA())}function y(i,o){if(1&i){const s=t.EpF();t.TgZ(0,"div",22)(1,"p"),t._uU(2,"Want to add a new starship?"),t.qZA(),t.TgZ(3,"button",23),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.confirm())}),t._uU(4,"Yes"),t.qZA(),t.TgZ(5,"button",24),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.decline())}),t._uU(6,"No"),t.qZA()()}}let N=(()=>{class i{get f(){return this.form.controls}constructor(s,e,r,a,l){this.fb=s,this.starshipService=e,this.modalService=r,this.toastr=a,this.spinner=l,this.starship={}}ngOnInit(){this.validation()}validation(){this.form=this.fb.group({id:[{value:"",disabled:!0}],name:["",[n.kI.required,n.kI.minLength(4),n.kI.maxLength(40)]],size:["",[n.kI.required,n.kI.max(400)]],passengers:["",[n.kI.required,n.kI.max(2e3)]]})}onSubmit(){}resetForm(){this.form.reset()}cssValidator(s){return{"is-invalid":s.errors&&s.touched}}saveStarship(s){this.spinner.show(),this.form.valid&&(this.starship=Object.assign({},this.form.value),this.starshipService.postStarship(this.starship).subscribe(()=>{this.toastr.success(`Starship: ${this.starship.name} salva com sucesso.`,"Sucesso!"),this.resetForm()},e=>{this.toastr.error(`Starship: ${this.starship.name} n\xe3o foi salva`,"Erro!"),console.error(e)}).add(()=>this.spinner.hide()),this.openModal(s))}openModal(s){this.modalRef=this.modalService.show(s,{class:"modal-sm"})}confirm(){this.modalRef.hide()}decline(){this.modalRef.hide()}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(n.qu),t.Y36(h.A),t.Y36(_.tT),t.Y36(m._W),t.Y36(u.t2))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-starship-detail"]],decls:38,vars:16,consts:[[1,"container"],[1,"card","rounded","shadow-sm"],["src","../assets/star-wars-battlefront.jpg","alt","...",1,"card-img-top"],[3,"formGroup","ngSubmit"],[1,"p-3"],[1,"form-row","d-flex","justify-content-between"],[1,"form-group","col-md-1"],["type","text","formControlName","id",1,"form-control",3,"ngClass"],[1,"form-group","col-md-11"],["type","text","formControlName","name","placeholder","Enter your Name",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["class","invalid-feedback",4,"ngIf"],[1,"form-row","d-flex","justify-content-between","mt-3","mb-4"],[1,"form-group","col-md-3"],["type","number","formControlName","size","placeholder","Size",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"form-group","col-md-4"],["type","number","formControlName","passengers","placeholder","Passengers",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"btn","btn-outline-secondary","mr-auto","border",3,"click"],[1,"btn","btn-primary",3,"disabled","click"],["template",""],[1,"invalid-feedback"],[1,"modal-body","text-center"],["type","button",1,"btn","btn-default",3,"click"],["type","button","routerLink","/starships",1,"btn","btn-primary",3,"click"]],template:function(s,e){if(1&s){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"form",3),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"label"),t._uU(8,"Id:"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",8)(11,"label"),t._uU(12,"Name:"),t.qZA(),t.TgZ(13,"input",9),t.NdJ("ngModelChange",function(l){return e.starship.name=l}),t.qZA(),t.YNc(14,C,2,0,"div",10),t.YNc(15,b,2,0,"div",10),t.YNc(16,Z,2,0,"div",10),t.qZA()(),t.TgZ(17,"div",11)(18,"div",12)(19,"label"),t._uU(20,"Size:"),t.qZA(),t.TgZ(21,"input",13),t.NdJ("ngModelChange",function(l){return e.starship.size=l}),t.qZA(),t.YNc(22,T,2,0,"div",10),t.YNc(23,M,2,0,"div",10),t.qZA(),t.TgZ(24,"div",14)(25,"label"),t._uU(26,"Passengers:"),t.qZA(),t.TgZ(27,"input",15),t.NdJ("ngModelChange",function(l){return e.starship.passengers=l}),t.qZA(),t.YNc(28,A,2,0,"div",10),t.YNc(29,x,2,0,"div",10),t.qZA()(),t.TgZ(30,"div",16)(31,"div",17)(32,"button",18),t.NdJ("click",function(){return e.resetForm()}),t._uU(33," Cancel Change "),t.qZA(),t.TgZ(34,"button",19),t.NdJ("click",function(){t.CHM(r);const l=t.MAs(37);return t.KtG(e.saveStarship(l))}),t._uU(35," Save Nave "),t.qZA()()()()()()(),t.YNc(36,y,7,0,"ng-template",null,20,t.W1O)}2&s&&(t.xp6(3),t.Q6J("formGroup",e.form),t.xp6(6),t.Q6J("ngClass",e.f.id),t.xp6(4),t.Q6J("ngClass",e.cssValidator(e.f.name))("ngModel",e.starship.name),t.xp6(1),t.Q6J("ngIf",null==e.f.name.errors?null:e.f.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.name.errors?null:e.f.name.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.f.name.errors?null:e.f.name.errors.maxlength),t.xp6(5),t.Q6J("ngClass",e.cssValidator(e.f.size))("ngModel",e.starship.size),t.xp6(1),t.Q6J("ngIf",(null==e.f.size.errors?null:e.f.size.errors.required)&&e.f.size.touched),t.xp6(1),t.Q6J("ngIf",(null==e.f.size.errors?null:e.f.size.errors.max)&&e.f.size.touched),t.xp6(4),t.Q6J("ngClass",e.cssValidator(e.f.passengers))("ngModel",e.starship.passengers),t.xp6(1),t.Q6J("ngIf",(null==e.f.passengers.errors?null:e.f.passengers.errors.required)&&e.f.passengers.touched),t.xp6(1),t.Q6J("ngIf",(null==e.f.passengers.errors?null:e.f.passengers.errors.max)&&e.f.passengers.touched),t.xp6(5),t.Q6J("disabled",!e.form.valid))},dependencies:[d.mk,d.O5,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u,c.rH],styles:[".container[_ngcontent-%COMP%]{width:700px;margin:130px auto 5px}.card[_ngcontent-%COMP%]{border:4px solid #1F2738}"]}),i})();var v=p(9456);function w(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Name is mandatory! "),t.qZA())}function k(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Name must be at least 4 characters long! "),t.qZA())}function q(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Name must have a maximum of 50 characters! "),t.qZA())}function J(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Size is mandatory! "),t.qZA())}function I(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Maximum size is 400! "),t.qZA())}function E(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Passenger is mandatory! "),t.qZA())}function U(i,o){1&i&&(t.TgZ(0,"div",20),t._uU(1," Maximum quantity is 2.000! "),t.qZA())}let Y=(()=>{class i{get f(){return this.form.controls}constructor(s,e,r,a,l){this.fb=s,this.starshipService=e,this.config=r,this.toastr=a,this.spinner=l,this.starshipId=0,this.starship={},this.starshipId=this.config.data.starshipId}carregarStarship(){null!==this.starshipId&&0!==this.starshipId&&(this.spinner.show(),this.starshipService.getStarshipById(this.starshipId).subscribe(s=>{this.starship=Object.assign({},s),this.form.patchValue(this.starship)},s=>{this.toastr.error("Erro ao tentar carregar Piloto.","Erro!"),console.error(s)}).add(()=>this.spinner.hide()))}ngOnInit(){this.carregarStarship(),this.createForm()}createForm(){this.form=this.fb.group({id:[{value:this.starshipId,disabled:!0}],name:["",[n.kI.required,n.kI.minLength(4),n.kI.maxLength(40)]],size:["",[n.kI.required,n.kI.max(400)]],passengers:["",[n.kI.required,n.kI.max(2e3)]]})}onSubmit(){}resetForm(){window.location.reload()}cssValidator(s){return{"is-invalid":s.errors&&s.touched}}saveStarship(){this.spinner.show(),this.form.valid&&(this.starship=Object.assign({},this.form.value),this.starshipService.updateStarship(this.starship,this.starshipId).subscribe(()=>this.toastr.success(`Starship: ${this.starship.name} atualizado com sucesso.`,"Sucesso!"),s=>{this.toastr.error(`Starship: ${this.starship.name} n\xe3o foi salvo`,"Erro!"),console.error(s)}).add(()=>this.spinner.hide()))}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(n.qu),t.Y36(h.A),t.Y36(v.S),t.Y36(m._W),t.Y36(u.t2))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-modal-edit-starship"]],decls:36,vars:16,consts:[[1,"container"],[1,"card","rounded","shadow-sm","mb-3"],["src","../assets/star-wars-battlefront.jpg","alt","...",1,"card-img-top"],[3,"formGroup","ngSubmit"],[1,"p-3"],[1,"form-row","d-flex","justify-content-between"],[1,"form-group","col-md-2"],["type","text","formControlName","id",1,"form-control",3,"ngClass"],[1,"form-group","col-md-10"],["type","text","formControlName","name","placeholder","Enter your Name",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["class","invalid-feedback",4,"ngIf"],[1,"form-row","d-flex","justify-content-between","mt-3","mb-4"],[1,"form-group","col-md-3"],["type","number","formControlName","size","placeholder","Size",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"form-group","col-md-4"],["type","number","formControlName","passengers","placeholder","Passengers",1,"form-control",3,"ngClass","ngModel","ngModelChange"],[1,"card-footer"],[1,"d-flex","justify-content-between"],[1,"btn","btn-outline-secondary","mr-auto","border",3,"click"],[1,"btn","btn-primary",3,"disabled","click"],[1,"invalid-feedback"]],template:function(s,e){1&s&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"form",3),t.NdJ("ngSubmit",function(){return e.onSubmit()}),t.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"label"),t._uU(8,"Id:"),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",8)(11,"label"),t._uU(12,"Name:"),t.qZA(),t.TgZ(13,"input",9),t.NdJ("ngModelChange",function(a){return e.starship.name=a}),t.qZA(),t.YNc(14,w,2,0,"div",10),t.YNc(15,k,2,0,"div",10),t.YNc(16,q,2,0,"div",10),t.qZA()(),t.TgZ(17,"div",11)(18,"div",12)(19,"label"),t._uU(20,"Size:"),t.qZA(),t.TgZ(21,"input",13),t.NdJ("ngModelChange",function(a){return e.starship.size=a}),t.qZA(),t.YNc(22,J,2,0,"div",10),t.YNc(23,I,2,0,"div",10),t.qZA(),t.TgZ(24,"div",14)(25,"label"),t._uU(26,"Passengers:"),t.qZA(),t.TgZ(27,"input",15),t.NdJ("ngModelChange",function(a){return e.starship.passengers=a}),t.qZA(),t.YNc(28,E,2,0,"div",10),t.YNc(29,U,2,0,"div",10),t.qZA()(),t.TgZ(30,"div",16)(31,"div",17)(32,"button",18),t.NdJ("click",function(){return e.resetForm()}),t._uU(33," Cancel Change "),t.qZA(),t.TgZ(34,"button",19),t.NdJ("click",function(){return e.saveStarship()}),t._uU(35," Save Nave "),t.qZA()()()()()()()),2&s&&(t.xp6(3),t.Q6J("formGroup",e.form),t.xp6(6),t.Q6J("ngClass",e.f.id),t.xp6(4),t.Q6J("ngClass",e.cssValidator(e.f.name))("ngModel",e.starship.name),t.xp6(1),t.Q6J("ngIf",null==e.f.name.errors?null:e.f.name.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.f.name.errors?null:e.f.name.errors.minlength),t.xp6(1),t.Q6J("ngIf",null==e.f.name.errors?null:e.f.name.errors.maxlength),t.xp6(5),t.Q6J("ngClass",e.cssValidator(e.f.size))("ngModel",e.starship.size),t.xp6(1),t.Q6J("ngIf",(null==e.f.size.errors?null:e.f.size.errors.required)&&e.f.size.touched),t.xp6(1),t.Q6J("ngIf",(null==e.f.size.errors?null:e.f.size.errors.max)&&e.f.size.touched),t.xp6(4),t.Q6J("ngClass",e.cssValidator(e.f.passengers))("ngModel",e.starship.passengers),t.xp6(1),t.Q6J("ngIf",(null==e.f.passengers.errors?null:e.f.passengers.errors.required)&&e.f.passengers.touched),t.xp6(1),t.Q6J("ngIf",(null==e.f.passengers.errors?null:e.f.passengers.errors.max)&&e.f.passengers.touched),t.xp6(5),t.Q6J("disabled",!e.form.valid))},dependencies:[d.mk,d.O5,n._Y,n.Fj,n.wV,n.JJ,n.JL,n.sg,n.u],styles:[".container[_ngcontent-%COMP%]{width:500px}.title[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:40px;color:#000;font-weight:700}"]}),i})();var S=p(7240);function z(i,o){1&i&&(t.TgZ(0,"div",15),t._uU(1," There are no registered Starships... "),t.qZA())}function F(i,o){if(1&i){const s=t.EpF();t.TgZ(0,"div",18)(1,"div",19),t._UZ(2,"img",20),t.TgZ(3,"div",21)(4,"small",22),t._uU(5),t.qZA(),t.TgZ(6,"div",23)(7,"i",24),t.NdJ("click",function(r){const l=t.CHM(s).$implicit,f=t.oxw(2),H=t.MAs(19);return t.KtG(f.openModalDelete(r,H,l.id,l.name))}),t.qZA(),t._uU(8," \xa0\xa0"),t.TgZ(9,"i",25),t.NdJ("click",function(r){const l=t.CHM(s).$implicit,f=t.oxw(2);return t.KtG(f.detalheEditStarship(r,l.id))}),t.qZA()()()()()}if(2&i){const s=o.$implicit;t.xp6(5),t.hij("",s.name," "),t.xp6(4),t.Tol("fa fa-edit")}}function O(i,o){if(1&i&&(t.TgZ(0,"div",16),t.YNc(1,F,10,4,"div",17),t.qZA()),2&i){const s=t.oxw();t.xp6(1),t.Q6J("ngForOf",s.starshipsFiltered)}}function Q(i,o){if(1&i){const s=t.EpF();t.TgZ(0,"button",26),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.viewButton=!r.viewButton)})("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.loading())}),t._uU(1),t.qZA()}if(2&i){const s=t.oxw();t.xp6(1),t.Oqu(s.nameButton)}}function D(i,o){if(1&i){const s=t.EpF();t.TgZ(0,"div",27)(1,"p"),t._uU(2,"Want to add a new starship?"),t.qZA(),t.TgZ(3,"button",28),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.confirmAddStarship())}),t._uU(4,"Yes"),t.qZA(),t.TgZ(5,"button",29),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.declineStarship())}),t._uU(6,"No"),t.qZA()()}}function P(i,o){if(1&i){const s=t.EpF();t.TgZ(0,"div",27)(1,"p"),t._uU(2),t.qZA(),t.TgZ(3,"button",30),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.confirmDeleteStarship())}),t._uU(4,"Yes"),t.qZA(),t.TgZ(5,"button",29),t.NdJ("click",function(){t.CHM(s);const r=t.oxw();return t.KtG(r.declineDeleteStarship())}),t._uU(6,"No"),t.qZA()()}if(2&i){const s=t.oxw();t.xp6(2),t.hij("Are you sure you want to delete Starship: ",s.starshipName,"?")}}const j=[{path:"",component:(()=>{class i{get filterList(){return this.listedFilter}set filterList(s){this.listedFilter=s,this.starshipsFiltered=this.filterList?this.filterStarships(this.filterList):this.starships}constructor(s,e,r,a,l){this.spinner=s,this.starshipService=e,this.dialogService=r,this.modalService=a,this.toastr=l,this.starships=[],this.starshipsFiltered=[],this.starship={},this.pagina=1,this.viewButton=!0,this.nameButton="",this.listedFilter=""}ngOnInit(){this.spinner.show(),this.GetAllStarship()}filterStarships(s){return s=s.toLocaleLowerCase(),this.starships.filter(e=>-1!==e.name.toLocaleLowerCase().indexOf(s))}GetAllStarship(){this.starshipService.getStarship().subscribe(s=>{this.starships=s,this.starshipsFiltered=this.starships,this.loading(),0===this.starships.length?this.toastr.error("No registered starships.","Error!"):this.toastr.success("Data loaded.","Success!")},s=>{this.toastr.error("Error loading data.","Error!"),console.error(s)}).add(()=>this.spinner.hide())}loading(){if(this.viewButton){var s=this.starshipsFiltered.slice(0,6);this.starshipsFiltered=s,this.nameButton="View More"}else this.starships.length>6?(this.starshipsFiltered=this.starships,this.nameButton="View Less"):this.toastr.error(`There are only: ${this.starshipsFiltered.length} registered starships.`,"Error!")}GetAllStarshipPage(){this.starshipService.getStarshipPage(this.pagina).subscribe(s=>{this.starships=s,this.starshipsFiltered=this.starships,this.toastr.success("Data loaded.","Success!")},s=>{this.toastr.error("Error loading data.","Error!"),console.error(s)}).add(()=>this.spinner.hide())}openModalAddStarship(s){this.modalRef=this.modalService.show(s,{class:"modal-sm"})}openModalDelete(s,e,r,a){s.stopPropagation(),this.starshipId=r,this.starshipName=a,this.modalRef=this.modalService.show(e,{class:"modal-sm"})}confirmAddStarship(){this.modalRef.hide()}declineStarship(){this.modalRef.hide()}declineDeleteStarship(){this.modalRef.hide()}confirmDeleteStarship(){this.modalRef.hide(),this.spinner.show(),this.starshipService.deleteStarshipById(this.starshipId).subscribe(()=>{var s="";this.starships.forEach(e=>{s=e.name}),this.toastr.success(`The Starship ${s} was successfully deleted.`,"Success!"),window.location.reload()},s=>{this.toastr.error(`Error when trying to delete Starship ${this.starshipName}.`,"Error!"),console.error(s)}).add(()=>this.spinner.hide())}detalheEditStarship(s,e){s.stopPropagation(),this.dialogService.open(Y,{header:"Edit Starship",data:{starshipId:e}})}}return i.\u0275fac=function(s){return new(s||i)(t.Y36(u.t2),t.Y36(h.A),t.Y36(v.xA),t.Y36(_.tT),t.Y36(m._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-starships"]],decls:20,vars:4,consts:[[1,"container"],["id","starships",1,"title"],[1,"d-flex","mb-3"],[1,"flex-fill","pr-3"],[1,"input-group","mb-2"],["type","search","placeholder","Filter by name","id","search",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-md-2","d-flex"],[1,"d-flex","btn","btn-outline-primary",3,"click"],[1,"fa","fa-plus-circle","my-1"],[1,"ml-1","d-none","d-sm-block"],["class","d-flex justify-content-center","style","color:white; font-size: 20px",4,"ngIf"],["class","row row-cols-1 row-cols-md-3 g-4",4,"ngIf"],["style","font-weight: 600;","class","btn mt-3",3,"click",4,"ngIf"],["templateAdd",""],["templateDelete",""],[1,"d-flex","justify-content-center",2,"color","white","font-size","20px"],[1,"row","row-cols-1","row-cols-md-3","g-4"],["class","col","style","cursor: pointer;",4,"ngFor","ngForOf"],[1,"col",2,"cursor","pointer"],[1,"card"],["src","../assets/star-wars.jpg","alt","...",1,"card-img-top"],[1,"card-footer","d-flex","justify-content-between"],[1,""],[1,"d-flex","align-items-center"],["tooltip","Delete",1,"fa","fa-trash",3,"click"],["tooltip","Edit",3,"click"],[1,"btn","mt-3",2,"font-weight","600",3,"click"],[1,"modal-body","text-center"],["type","button","routerLink","/starships/detail",1,"btn","btn-default",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-default",3,"click"]],template:function(s,e){if(1&s){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"p"),t._uU(3,"Starships"),t.qZA()(),t.TgZ(4,"div",2)(5,"div",3)(6,"div",4)(7,"input",5),t.NdJ("ngModelChange",function(l){return e.filterList=l}),t.qZA()()()(),t.TgZ(8,"div",6)(9,"a",7),t.NdJ("click",function(){t.CHM(r);const l=t.MAs(17);return t.KtG(e.openModalAddStarship(l))}),t._UZ(10,"i",8),t.TgZ(11,"b",9),t._uU(12,"Add Starship"),t.qZA()()(),t.YNc(13,z,2,0,"div",10),t.YNc(14,O,2,1,"div",11),t.YNc(15,Q,2,1,"button",12),t.qZA(),t.YNc(16,D,7,0,"ng-template",null,13,t.W1O),t.YNc(18,P,7,1,"ng-template",null,14,t.W1O)}2&s&&(t.xp6(7),t.Q6J("ngModel",e.filterList),t.xp6(6),t.Q6J("ngIf",0===e.starships.length),t.xp6(1),t.Q6J("ngIf",e.starships.length>0),t.xp6(1),t.Q6J("ngIf",e.starships.length>6))},dependencies:[d.sg,d.O5,n.Fj,n.JJ,n.On,c.rH,S.i9],styles:["#starships[_ngcontent-%COMP%]{margin:100px auto 5px}.card-deck[_ngcontent-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{border:2px solid #1F2738!important}.card[_ngcontent-%COMP%]:hover{border:2px solid #facc00!important}.btn[_ngcontent-%COMP%]{color:#1f2738;background-color:#eee!important;border:#EEEEEE!important}.btn[_ngcontent-%COMP%]:hover{color:#eee;background-color:#facc00!important;border:#facc00!important}.btn[_ngcontent-%COMP%]:focus{color:#eee;background-color:#facc00!important;border:#facc00!important}.card-footer[_ngcontent-%COMP%]{color:#eee!important;background-color:#1f2738;text-align:center}.card-footer[_ngcontent-%COMP%]:hover{color:#1f2738!important;background-color:#facc00}.title[_ngcontent-%COMP%]{display:flex;justify-content:center;font-size:60px;color:#eee;font-weight:600;text-shadow:.1em .1em .2em black}.card[_ngcontent-%COMP%]{margin-right:15px;margin-top:15px}#search[_ngcontent-%COMP%]{border-radius:20px}"]}),i})()},{path:"detail",component:N}];let G=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(j),c.Bz]}),i})(),L=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[h.A],imports:[d.ez,n.u5,n.UX,G,S.z8.forRoot()]}),i})()}}]);