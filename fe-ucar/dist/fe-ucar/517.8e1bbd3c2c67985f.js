"use strict";(self.webpackChunkfe_ucar=self.webpackChunkfe_ucar||[]).push([[517],{2517:(yn,v,i)=>{i.r(v),i.d(v,{CardBrandModule:()=>p});var Z=i(3807),c=i(6895),z=i(8176),A=i(2340),n=i(4650),u=i(6387),U=i(4383),f=i(4181),F=i(8800),g=i(8231),b=i(5635),P=i(6616),x=i(7044),y=i(1811),T=i(1102),l=i(433),J=i(5861),k=i(5156),O=i(3679),_=i(6704),B=i(3224);function Q(a,e){1&a&&(n.TgZ(0,"div",4)(1,"p",5),n._uU(2,"Add Car Brand"),n.qZA(),n.TgZ(3,"p",6),n._uU(4," Setup new car brand "),n.qZA()())}function D(a,e){if(1&a&&(n.ynx(0),n._UZ(1,"span",25),n.TgZ(2,"div",26),n._uU(3,"Upload"),n.qZA(),n.BQk()),2&a){const t=n.oxw(2);n.xp6(1),n.Q6J("nzType",t.loadingUploadFile?"loading":"plus")}}function I(a,e){if(1&a&&n._UZ(0,"img",27),2&a){const t=n.oxw(2);n.Q6J("src",t.avatarUrl,n.LSH)}}function N(a,e){if(1&a&&n._UZ(0,"nz-option",28),2&a){const t=e.$implicit;n.Q6J("nzValue",t)("nzLabel",t.label)}}const E=function(){return[8,0]};function L(a,e){if(1&a){const t=n.EpF();n.TgZ(0,"form",7),n.NdJ("ngSubmit",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.submitForm())}),n.TgZ(1,"div",8)(2,"div",9)(3,"h2",10),n._uU(4,"Brand Logo"),n.qZA()(),n.TgZ(5,"div",9)(6,"nz-form-item")(7,"nz-form-label",11),n._uU(8,"Brand Logo"),n.qZA(),n.TgZ(9,"nz-form-control",12)(10,"nz-upload",13),n.NdJ("nzChange",function(r){n.CHM(t);const d=n.oxw();return n.KtG(d.handleChangeFile(r))}),n.YNc(11,D,4,1,"ng-container",14),n.YNc(12,I,1,1,"img",15),n.qZA()()()(),n.TgZ(13,"div",9)(14,"h2",10),n._uU(15,"Brand Details"),n.qZA()(),n.TgZ(16,"div",16)(17,"nz-form-item")(18,"nz-form-label",11),n._uU(19,"Brand Name"),n.qZA(),n.TgZ(20,"nz-form-control",17),n._UZ(21,"input",18),n.qZA()()(),n.TgZ(22,"div",19)(23,"nz-form-item")(24,"nz-form-label",11),n._uU(25,"Brand Status"),n.qZA(),n.TgZ(26,"nz-form-control",20)(27,"nz-select",21),n.YNc(28,N,1,2,"nz-option",22),n.qZA()()()(),n.TgZ(29,"div",9)(30,"nz-form-item")(31,"nz-form-label",11),n._uU(32,"Brand Description"),n.qZA(),n.TgZ(33,"nz-form-control",23),n._UZ(34,"textarea",24),n.qZA()()()()()}if(2&a){const t=n.oxw();n.Q6J("formGroup",t.validateForm),n.xp6(1),n.Q6J("nzGutter",n.DdM(15,E)),n.xp6(6),n.Q6J("nzSpan",24),n.xp6(2),n.Q6J("nzSpan",24)("nzErrorTip","Please input your username!"),n.xp6(1),n.Q6J("nzShowUploadList",!1),n.xp6(1),n.Q6J("ngIf",!t.avatarUrl),n.xp6(1),n.Q6J("ngIf",t.avatarUrl),n.xp6(6),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",24),n.xp6(4),n.Q6J("nzSpan",24),n.xp6(2),n.Q6J("nzSpan",24),n.xp6(2),n.Q6J("ngForOf",t.optionBrandStatus),n.xp6(3),n.Q6J("nzSpan",8),n.xp6(2),n.Q6J("nzSpan",24)}}function Y(a,e){if(1&a){const t=n.EpF();n.TgZ(0,"button",29),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.handleCancel())}),n._uU(1,"Cancel"),n.qZA(),n.TgZ(2,"button",30),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.submitForm())}),n._uU(3," Create Brand "),n.qZA()}if(2&a){const t=n.oxw();n.xp6(2),n.Q6J("nzLoading",t.isConfirmLoading)}}class C{constructor(e,t,o){this.formModal=e,this._cardBrandService=t,this._uploadFileService=o,this.isVisible=!0,this.closeModal=new n.vpe,this.isConfirmLoading=!1,this.loadingUploadFile=!1,this.msgErrUpload=null,this.initDataForm={brand_name:[null,[l.kI.required]],brand_status:[{label:"Inactive",value:0},[l.kI.required]],brand_description:[null]},this.optionBrandStatus=[{label:"Inactive",value:0},{label:"Active",value:1}]}ngOnInit(){this.validateForm=this.formModal.group(this.initDataForm)}handleCancel(){this.handleCloseModal()}clearDataFile(){this.fileUploadBase64=void 0,this.avatarUrl=void 0,this.loadingUploadFile=!1,this.msgErrUpload=null}handleCloseModal(e){this.closeModal.emit(!e),this.validateForm.reset(),this.clearDataFile()}getBase64(e,t){const o=new FileReader;o.addEventListener("load",()=>t(o.result.toString())),o.readAsDataURL(e)}handleChangeFile(e){e.file.originFileObj&&(this.fileUploadBase64=e.file.originFileObj),this.getBase64(e.file.originFileObj,t=>{console.log("img",t),this.loadingUploadFile=!1,this.avatarUrl=t})}submitForm(){var e=this;return(0,J.Z)(function*(){if(e.validateForm.valid){let t=e.validateForm.value;e.fileUploadBase64?yield e._uploadFileService.uploadFile(e.fileUploadBase64).subscribe(o=>{e.callApiCreate({description:t.brand_description,logo:o.data,name:t.brand_name,status:t.brand_status.value})}):e.callApiCreate({description:t.brand_description,logo:null,name:t.brand_name,status:t.brand_status.value})}else Object.values(e.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})})()}callApiCreate(e){this._cardBrandService.create(e).subscribe(t=>{(t.code=1)&&this.handleCloseModal()})}}function q(a,e){if(1&a&&n._UZ(0,"nz-option",16),2&a){const t=e.$implicit;n.Q6J("nzValue",t)("nzLabel",t.label)}}function V(a,e){1&a&&n._UZ(0,"span",17)}function G(a,e){1&a&&n.GkF(0)}function j(a,e){if(1&a&&(n.ynx(0),n.YNc(1,G,1,0,"ng-container",39),n.BQk()),2&a){n.oxw();const t=n.MAs(6);n.xp6(1),n.Q6J("ngTemplateOutlet",t)}}function W(a,e){1&a&&n._UZ(0,"nz-avatar",40),2&a&&n.Q6J("nzSize",55)}function R(a,e){if(1&a&&n._UZ(0,"nz-avatar",41),2&a){const t=n.oxw().$implicit,o=n.oxw();n.Q6J("nzSrc",o.linkRootPath+t.logo)("nzSize",55)}}function H(a,e){1&a&&n.GkF(0)}function K(a,e){if(1&a&&(n.ynx(0,42),n.YNc(1,H,1,0,"ng-container",39),n.BQk()),2&a){n.oxw();const t=n.MAs(18);n.xp6(1),n.Q6J("ngTemplateOutlet",t)}}function $(a,e){if(1&a&&(n.TgZ(0,"span",43),n._uU(1),n.qZA()),2&a){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",t.number_model," Models ")}}function X(a,e){if(1&a&&(n.TgZ(0,"span",44),n._uU(1),n.qZA(),n.TgZ(2,"span",45),n._uU(3),n.qZA()),2&a){const t=n.oxw().$implicit;n.xp6(1),n.hij(" ",t.description," "),n.xp6(2),n.hij(" ",t.number_model," Models ")}}function nn(a,e){1&a&&n.GkF(0)}function tn(a,e){if(1&a&&(n.ynx(0,42),n.YNc(1,nn,1,0,"ng-container",39),n.BQk()),2&a){n.oxw();const t=n.MAs(30);n.xp6(1),n.Q6J("ngTemplateOutlet",t)}}function en(a,e){1&a&&(n.TgZ(0,"span",46),n._uU(1,"Active"),n.qZA())}function an(a,e){1&a&&(n.TgZ(0,"span",47),n._uU(1,"Inactive"),n.qZA())}function on(a,e){if(1&a){const t=n.EpF();n.ynx(0),n.TgZ(1,"tr")(2,"td",18),n.NdJ("nzCheckedChange",function(r){const s=n.CHM(t).$implicit,xn=n.oxw();return n.KtG(xn.onItemChecked(s.id,r))}),n.qZA(),n.TgZ(3,"td",19),n.YNc(4,j,2,1,"ng-container",20),n.YNc(5,W,1,1,"ng-template",null,21,n.W1O),n.YNc(7,R,1,2,"ng-template",null,22,n.W1O),n.qZA(),n.TgZ(9,"td",23)(10,"div",24)(11,"p",25),n._uU(12),n.qZA(),n.TgZ(13,"p",26),n.YNc(14,K,2,1,"ng-container",27),n.YNc(15,$,2,1,"ng-template",null,28,n.W1O),n.YNc(17,X,4,2,"ng-template",null,29,n.W1O),n.qZA()()(),n.TgZ(19,"td",30)(20,"div",31)(21,"p",32),n._uU(22,"Last Update"),n.qZA(),n.TgZ(23,"p",33),n._uU(24),n.qZA()()(),n.TgZ(25,"td",30)(26,"span",34),n._UZ(27,"span",35),n.YNc(28,tn,2,1,"ng-container",27),n.YNc(29,en,2,0,"ng-template",null,36,n.W1O),n.YNc(31,an,2,0,"ng-template",null,37,n.W1O),n.qZA()(),n.TgZ(33,"td",30)(34,"button",38),n.NdJ("click",function(){const d=n.CHM(t).$implicit,s=n.oxw();return n.KtG(s.onDetail(d.id))}),n._uU(35," View Details "),n.qZA()()(),n.BQk()}if(2&a){const t=e.$implicit,o=n.MAs(8),r=n.MAs(16),d=n.MAs(32),s=n.oxw();n.xp6(2),n.Q6J("width","5%")("nzChecked",s.setOfCheckedId.has(t.id)),n.xp6(1),n.Q6J("width","10%")("align","center"),n.xp6(1),n.Q6J("ngIf",""===t.logo)("ngIfElse",o),n.xp6(5),n.Q6J("width","30%"),n.xp6(1),n.Q6J("ngClass",1===t.status?"table-body-info-card-bd-active ":"table-body-info-card-bd-inactive"),n.xp6(2),n.Oqu(t.name),n.xp6(2),n.Q6J("ngIf",null!==t.description&&t.description.length>0)("ngIfElse",r),n.xp6(5),n.Q6J("width","15%"),n.xp6(5),n.Oqu(s.transformDate(t.last_update)),n.xp6(1),n.Q6J("width","20%"),n.xp6(2),n.Q6J("ngClass",1===t.status?"table-body-status_icon-active":"table-body-status_icon-inactive"),n.xp6(1),n.Q6J("ngIf",1===t.status)("ngIfElse",d),n.xp6(5),n.Q6J("width","8%")}}C.\u0275fac=function(e){return new(e||C)(n.Y36(l.QS),n.Y36(u.kV),n.Y36(u.fl))},C.\u0275cmp=n.Xpm({type:C,selectors:[["app-modal-cu-card-brand"]],inputs:{isVisible:"isVisible"},outputs:{closeModal:"closeModal"},decls:7,vars:4,consts:[[3,"nzVisible","nzTitle","nzContent","nzFooter","nzVisibleChange","nzOnOk","nzOnCancel"],["modalTitleCustom",""],["modalContentCustom",""],["modalFooterCustom",""],[1,"modal-create-card-brand-header"],[1,"modal-create-card-brand-header_title"],[1,"modal-create-card-brand-header_description"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],["nz-row","",3,"nzGutter"],["nz-col","","nzSpan","24"],[1,"title-form-modal-card-brand"],[3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["nzAction","https://www.mocky.io/v2/5cc8019d300000980a055e76","nzName","avatar","nzListType","picture-card",1,"avatar-uploader",3,"nzShowUploadList","nzChange"],[4,"ngIf"],["style","width: 100%",3,"src",4,"ngIf"],["nz-col","","nzSpan","12"],["nzErrorTip","Please input your branch name!",3,"nzSpan"],["nz-input","","formControlName","brand_name","id","brand_name","placeholder","Input Content"],["nz-col","","nzSpan","12",1,"detail-card-brand-info_status"],["nzErrorTip","Please select your status!",3,"nzSpan"],["id","brand_status","formControlName","brand_status","nzPlaceHolder","Select a option and change input text above",1,"form-select-status"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzErrorTip","Please input your username!",3,"nzSpan"],["rows","4","formControlName","brand_description","nz-input","","id","brand_description","placeholder","input placeholder"],["nz-icon","",1,"upload-icon",3,"nzType"],[1,"ant-upload-text"],[2,"width","100%",3,"src"],[3,"nzValue","nzLabel"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary",3,"nzLoading","click"]],template:function(e,t){if(1&e&&(n.TgZ(0,"nz-modal",0),n.NdJ("nzVisibleChange",function(r){return t.isVisible=r})("nzOnOk",function(){return t.submitForm()})("nzOnCancel",function(){return t.handleCancel()}),n.YNc(1,Q,5,0,"ng-template",null,1,n.W1O),n.YNc(3,L,35,16,"ng-template",null,2,n.W1O),n.YNc(5,Y,4,1,"ng-template",null,3,n.W1O),n.qZA()),2&e){const o=n.MAs(2),r=n.MAs(4),d=n.MAs(6);n.Q6J("nzVisible",t.isVisible)("nzTitle",o)("nzContent",r)("nzFooter",d)}},dependencies:[c.sg,c.O5,g.Ip,g.Vq,b.Zp,P.ix,x.w,y.dQ,k.du,O.t3,O.SK,_.Lr,_.Nx,_.iK,_.Fd,B.FY,T.Ls,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".ant-menu[_ngcontent-%COMP%]{background:#323435!important}.ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-arrow[_ngcontent-%COMP%], .ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-expand-icon[_ngcontent-%COMP%]{color:#fff!important}.ant-menu[_ngcontent-%COMP%]   [nz-submenu-inline-child][_ngcontent-%COMP%]{padding-left:1rem!important}.ant-menu[_ngcontent-%COMP%]   [nz-submenu-inline-child][_ngcontent-%COMP%]   [nz-menu-item][_ngcontent-%COMP%]{padding-left:2rem!important}.ant-form-item[_ngcontent-%COMP%]   .ant-form-item-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-family:Poppins;color:#8c8c8c;font-weight:400;font-size:.875rem}.ant-form-item[_ngcontent-%COMP%]   [nz-input][_ngcontent-%COMP%]{border-radius:.25rem;background:#FFFFFF;border:.0625rem solid #E3E3E3;color:#232323;font-weight:400;font-size:.875rem;font-family:Poppins}.ant-form-item[_ngcontent-%COMP%]   .ant-input-status-error[_ngcontent-%COMP%]{border:.0625rem solid red!important}.ant-form-item[_ngcontent-%COMP%]   [nz-input][_ngcontent-%COMP%]::placeholder{font-family:Poppins;font-weight:400;font-size:.875rem;color:#8c8c8c}.ant-upload[_ngcontent-%COMP%]{border-radius:50%!important}.ant-btn-primary[_ngcontent-%COMP%]{background:#0F5EDD;border-radius:.25rem;padding:.5625rem 1rem;color:#fff;font-weight:500;font-size:.875rem;font-family:Poppins;line-height:0}.ant-checkbox-inner[_ngcontent-%COMP%]{border-radius:50%}.modal-create-card-brand-header[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;justify-items:center}.modal-create-card-brand-header[_ngcontent-%COMP%]   .modal-create-card-brand-header_title[_ngcontent-%COMP%]{margin-bottom:.25rem;font-weight:600;font-size:1rem;font-family:Poppins;color:#2f465f}.modal-create-card-brand-header[_ngcontent-%COMP%]   .modal-create-card-brand-header_description[_ngcontent-%COMP%]{margin-bottom:0;font-weight:400;font-size:.875rem;font-family:Poppins;color:#5f5f5f}.title-form-modal-card-brand[_ngcontent-%COMP%]{font-family:Poppins;font-weight:600;font-size:.875rem;color:#232323;padding-bottom:.75rem;border-bottom:.0625rem solid #E3E3E3}.detail-card-brand-info_status[_ngcontent-%COMP%]   .form-select-status[_ngcontent-%COMP%]{max-width:8.1875rem}.detail-card-brand-info_status[_ngcontent-%COMP%]   .form-select-status[_ngcontent-%COMP%]     .ant-select-selector{background:#CEF7E2;border-radius:3rem;width:100%}.detail-card-brand-info_status[_ngcontent-%COMP%]   .form-select-status[_ngcontent-%COMP%]     .ant-select-selector .ant-select-selection-item{font-family:Poppins;font-weight:500;font-size:1rem;color:#1f7b4d}"]});const rn=function(){return{x:"150",y:"600"}};class h{constructor(e,t,o){this._cardBrandService=e,this.route=t,this.dp=o,this.selectFilterCardBrandStatus={label:"All",value:-1},this.isModalCreateBrand=!1,this.setOfCheckedId=new Set,this.filterStatusSelect=[],this.linkRootPath=A.N.pathImage,this.dataTable=[],this.filterTable={limit:"10",page:"1"}}ngOnInit(){this.fetchApiGetAll(this.filterTable),this.filterStatusSelect=this._cardBrandService.optionFilterCardBrand,this.selectFilterCardBrandStatus=this._cardBrandService.optionFilterCardBrand[0]}transformDate(e){return this.dp.transform(e,"MM/dd/yyyy","es-ES")}fetchApiGetAll(e){this._cardBrandService.getAll(e).subscribe(t=>this.dataTable=t.data.items.map(o=>({...o,checked:!1,expand:!1,logo:null===o.logo?"":o.logo,number_model:0,last_update:null===o.updated_at?o.created_at:o.updated_at,description:null===o.description?"":o.description})))}updateCheckedSet(e,t){t?this.setOfCheckedId.add(e):this.setOfCheckedId.delete(e)}onItemChecked(e,t){this.updateCheckedSet(e,t)}changePageSize(e){this.fetchApiGetAll({...this.filterTable,limit:e.toString()}),this.filterTable={...this.filterTable,limit:e.toString()}}changePageIndex(e){this.fetchApiGetAll({...this.filterTable,page:e.toString()}),this.filterTable={...this.filterTable,page:e.toString()}}changeFilterStatus(e){this.fetchApiGetAll({...this.filterTable,search:void 0,status:+e.value,page:"1",limit:"10"}),this.selectFilterCardBrandStatus=e}setIsModalCreateBrand(e){this.isModalCreateBrand=!this.isModalCreateBrand,e&&this.fetchApiGetAll({limit:"10",page:"1"})}onChangeSearch(e){const t=e.target.value;this.fetchApiGetAll({...this.filterTable,search:0===t.length?void 0:t,page:"1",limit:"10",status:+this.selectFilterCardBrandStatus.value}),this.filterTable={...this.filterTable,search:0===t.length?void 0:t,page:"1",limit:"10"}}onDetail(e){return console.log("id onDetail",e),console.log("id onDetail",this.route.navigate([("card-brand","/card-brand"),e])),this.route.navigate(["/card-brand",e])}}function ln(a,e){if(1&a&&(n.ynx(0),n._UZ(1,"span",30),n.TgZ(2,"div",31),n._uU(3,"Upload"),n.qZA(),n.BQk()),2&a){const t=n.oxw();n.xp6(1),n.Q6J("nzType",t.loadingUploadFile?"loading":"plus")}}function dn(a,e){if(1&a&&n._UZ(0,"img",32),2&a){const t=n.oxw();n.Q6J("src",t.avatarUrl,n.LSH)}}function cn(a,e){1&a&&(n.ynx(0),n.TgZ(1,"p",33),n._uU(2,"CHANGE LOGO"),n.qZA(),n.BQk())}function sn(a,e){1&a&&n.GkF(0)}function _n(a,e){if(1&a&&(n.ynx(0),n.YNc(1,sn,1,0,"ng-container",34),n.BQk()),2&a){n.oxw();const t=n.MAs(31);n.xp6(1),n.Q6J("ngTemplateOutlet",t)}}function gn(a,e){if(1&a&&(n.TgZ(0,"span",35),n._uU(1),n.qZA()),2&a){const t=n.oxw();n.xp6(1),n.hij(" ",t.formDetail.value.brand_name," ")}}function mn(a,e){1&a&&n._UZ(0,"input",36)}function pn(a,e){if(1&a&&n._UZ(0,"nz-option",37),2&a){const t=e.$implicit;n.Q6J("nzValue",t)("nzLabel",t.label)}}function un(a,e){1&a&&n.GkF(0)}function fn(a,e){if(1&a&&(n.ynx(0),n.YNc(1,un,1,0,"ng-container",34),n.BQk()),2&a){n.oxw();const t=n.MAs(48);n.xp6(1),n.Q6J("ngTemplateOutlet",t)}}function bn(a,e){if(1&a&&(n.TgZ(0,"span",35),n._uU(1),n.qZA()),2&a){const t=n.oxw();n.xp6(1),n.hij(" ",t.formDetail.value.brand_description," ")}}function Cn(a,e){1&a&&n._UZ(0,"textarea",38)}function hn(a,e){1&a&&n.GkF(0)}function Mn(a,e){if(1&a&&(n.ynx(0,39),n.YNc(1,hn,1,0,"ng-container",34),n.BQk()),2&a){n.oxw();const t=n.MAs(54);n.xp6(1),n.Q6J("ngTemplateOutlet",t)}}function zn(a,e){if(1&a){const t=n.EpF();n.TgZ(0,"button",40),n.NdJ("click",function(){n.CHM(t);const r=n.oxw();return n.KtG(r.setIsUpdate())}),n._uU(1," Edit Information "),n.qZA()}}function On(a,e){1&a&&(n.TgZ(0,"button",41),n._uU(1,"Save Changes"),n.qZA())}h.\u0275fac=function(e){return new(e||h)(n.Y36(u.kV),n.Y36(z.F0),n.Y36(c.uU))},h.\u0275cmp=n.Xpm({type:h,selectors:[["app-card-brand"]],decls:20,vars:12,consts:[[1,"card-brand-header"],[1,"card-brand-header_left"],["nz-typography","",1,"card-brand-header_left-title"],[1,"card-brand-header_left-select-filter",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[1,"card-brand-header_left-search-filter",3,"nzPrefix"],["type","text","nz-input","","placeholder","input search text",3,"change"],["suffixIconSearch",""],[1,"card-brand-header_right"],["nz-button","","nzType","primary",1,"card-brand-header_right-button",3,"click"],["nz-icon","","nzType","plus","nzTheme","outline"],[1,"card-brand-table"],["nzShowSizeChanger","",3,"nzData","nzBordered","nzLoading","nzPageSize","nzPageIndex","nzScroll","nzPageSizeChange","nzPageIndexChange"],["cardBrandTable",""],[4,"ngFor","ngForOf"],[3,"isVisible","closeModal"],[3,"nzValue","nzLabel"],["nz-icon","","nzType","search"],[3,"width","nzChecked","nzCheckedChange"],[3,"width","align"],[4,"ngIf","ngIfElse"],["notLogo",""],["existLogo",""],["ngClass","td-info",3,"width"],[1,"table-body-info-card",3,"ngClass"],[1,"table-body-info-card_name"],[1,"table-body-info-card_note"],["class","table-body-status_name",4,"ngIf","ngIfElse"],["notExistDescription",""],["existDescription",""],[3,"width"],[1,"table-body-time"],[1,"table-body-time_title"],[1,"table-body-time_date"],[1,"table-body-status"],[1,"table-body-status_icon",3,"ngClass"],["statusCardBrandACtive",""],["statusCardBrandInactive",""],["nz-button","","nzType","default",1,"table-body-action-view",3,"click"],[4,"ngTemplateOutlet"],["nzIcon","user",3,"nzSize"],[3,"nzSrc","nzSize"],[1,"table-body-status_name"],[1,"table-body-info-card_model-number","not-exist-description"],[1,"table-body-info-card_description","table-body-eclipse"],[1,"table-body-info-card_model-number","exist-description"],[1,"table-body-status_name-active"],[1,"table-body-status_name-inactive"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),n._uU(3,"CAR BRANDS LIST"),n.qZA(),n.TgZ(4,"nz-select",3),n.NdJ("ngModelChange",function(r){return t.selectFilterCardBrandStatus=r})("ngModelChange",function(r){return t.changeFilterStatus(r)}),n.YNc(5,q,1,2,"nz-option",4),n.qZA(),n.TgZ(6,"nz-input-group",5)(7,"input",6),n.NdJ("change",function(r){return t.onChangeSearch(r)}),n.qZA()(),n.YNc(8,V,1,0,"ng-template",null,7,n.W1O),n.qZA(),n.TgZ(10,"div",8)(11,"button",9),n.NdJ("click",function(){return t.setIsModalCreateBrand()}),n._UZ(12,"span",10),n._uU(13," Add Brand "),n.qZA()()(),n.TgZ(14,"div",11)(15,"nz-table",12,13),n.NdJ("nzPageSizeChange",function(r){return t.changePageSize(r)})("nzPageIndexChange",function(r){return t.changePageIndex(r)}),n.TgZ(17,"tbody"),n.YNc(18,on,36,18,"ng-container",14),n.qZA()()(),n.TgZ(19,"app-modal-cu-card-brand",15),n.NdJ("closeModal",function(r){return t.setIsModalCreateBrand(r)}),n.qZA()),2&e){const o=n.MAs(9),r=n.MAs(16);n.xp6(4),n.Q6J("ngModel",t.selectFilterCardBrandStatus),n.xp6(1),n.Q6J("ngForOf",t.filterStatusSelect),n.xp6(1),n.Q6J("nzPrefix",o),n.xp6(9),n.Q6J("nzData",t.dataTable)("nzBordered",!1)("nzLoading",!1)("nzPageSize",t.filterTable.limit?+t.filterTable.limit:10)("nzPageIndex",t.filterTable.page?+t.filterTable.page:1)("nzScroll",n.DdM(11,rn)),n.xp6(3),n.Q6J("ngForOf",r.data),n.xp6(1),n.Q6J("isVisible",t.isModalCreateBrand)}},dependencies:[c.mk,c.sg,c.O5,c.tP,U.Dz,f.N8,f.Uo,f.h7,f.p0,f.$Z,F.ZU,g.Ip,g.Vq,b.Zp,b.gB,b.ke,P.ix,x.w,y.dQ,T.Ls,l.JJ,l.On,C],styles:[".ant-menu[_ngcontent-%COMP%]{background:#323435!important}.ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-arrow[_ngcontent-%COMP%], .ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-expand-icon[_ngcontent-%COMP%]{color:#fff!important}.ant-menu[_ngcontent-%COMP%]   [nz-submenu-inline-child][_ngcontent-%COMP%]{padding-left:1rem!important}.ant-menu[_ngcontent-%COMP%]   [nz-submenu-inline-child][_ngcontent-%COMP%]   [nz-menu-item][_ngcontent-%COMP%]{padding-left:2rem!important}.ant-form-item[_ngcontent-%COMP%]   .ant-form-item-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-family:Poppins;color:#8c8c8c;font-weight:400;font-size:.875rem}.ant-form-item[_ngcontent-%COMP%]   [nz-input][_ngcontent-%COMP%]{border-radius:.25rem;background:#FFFFFF;border:.0625rem solid #E3E3E3;color:#232323;font-weight:400;font-size:.875rem;font-family:Poppins}.ant-form-item[_ngcontent-%COMP%]   .ant-input-status-error[_ngcontent-%COMP%]{border:.0625rem solid red!important}.ant-form-item[_ngcontent-%COMP%]   [nz-input][_ngcontent-%COMP%]::placeholder{font-family:Poppins;font-weight:400;font-size:.875rem;color:#8c8c8c}.ant-upload[_ngcontent-%COMP%]{border-radius:50%!important}.ant-btn-primary[_ngcontent-%COMP%]{background:#0F5EDD;border-radius:.25rem;padding:.5625rem 1rem;color:#fff;font-weight:500;font-size:.875rem;font-family:Poppins;line-height:0}.ant-checkbox-inner[_ngcontent-%COMP%]{border-radius:50%}.card-brand-header[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;justify-items:center}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_left[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start;align-items:center;justify-items:center;gap:.5rem}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_left[_ngcontent-%COMP%]   .card-brand-header_left-title[_ngcontent-%COMP%]{color:#2f465f;font-size:1.5rem;font-weight:600;margin-bottom:0}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_left[_ngcontent-%COMP%]   .card-brand-header_left-select-filter[_ngcontent-%COMP%]{max-width:7.4375rem;max-height:2.5rem;height:100%;width:100%;border-radius:.25rem}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_left[_ngcontent-%COMP%]   .card-brand-header_left-search-filter[_ngcontent-%COMP%]{max-width:15rem;max-height:2.5rem;height:100%;width:100%;background:#F5F5F5;border-radius:624.9375rem}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_left[_ngcontent-%COMP%]   .card-brand-header_left-search-filter[_ngcontent-%COMP%]   .ant-input-prefix[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{color:#5f5f5f}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_left[_ngcontent-%COMP%]   .card-brand-header_left-search-filter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:#F5F5F5}.card-brand-header[_ngcontent-%COMP%]   .card-brand-header_right[_ngcontent-%COMP%]   .card-brand-header_right-button[_ngcontent-%COMP%]{border-radius:.25rem;background:#0F5EDD;color:#fff}.card-brand-table[_ngcontent-%COMP%]{margin-top:1.8125rem}.card-brand-table[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar{width:.5rem}.card-brand-table[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 .3125rem gray;border-radius:.5rem}.card-brand-table[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:grey;border-radius:.5rem}.card-brand-table[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:grey}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]{height:100%;max-height:7.75rem;background:#FFFFFF}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .ant-table-cell[_ngcontent-%COMP%]{padding:2.125rem 1.5rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-image[_ngcontent-%COMP%]{width:4rem;height:4rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-eclipse[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]{padding-left:0}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card-bd-active[_ngcontent-%COMP%]{border-left:.1875rem solid #0FC97B;padding-left:2.5rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card-bd-inactive[_ngcontent-%COMP%]{border-left:.1875rem solid #5F5F5F;padding-left:2.5rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card[_ngcontent-%COMP%]   .table-body-info-card_name[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:500;font-family:Poppins;color:#2f465f;margin-bottom:.25rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card[_ngcontent-%COMP%]   .table-body-info-card_note[_ngcontent-%COMP%]{display:flex;margin-bottom:0}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card[_ngcontent-%COMP%]   .table-body-info-card_note[_ngcontent-%COMP%]   .table-body-info-card_description[_ngcontent-%COMP%]{max-width:10.9375rem;font-family:Poppins;font-size:.875rem;font-weight:400;color:#8c8c8c;padding-right:1rem;border-right:1px solid #E3E3E3}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card[_ngcontent-%COMP%]   .table-body-info-card_note[_ngcontent-%COMP%]   .table-body-info-card_model-number[_ngcontent-%COMP%]{font-family:Poppins;font-size:.875rem;font-weight:500;color:#0f5edd}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card[_ngcontent-%COMP%]   .table-body-info-card_note[_ngcontent-%COMP%]   .exist-description[_ngcontent-%COMP%]{padding-left:1rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .td-info[_ngcontent-%COMP%]   .table-body-info-card[_ngcontent-%COMP%]   .table-body-info-card_note[_ngcontent-%COMP%]   .not-exist-description[_ngcontent-%COMP%]{padding-left:0rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-time[_ngcontent-%COMP%]{display:block}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-time[_ngcontent-%COMP%]   .table-body-time_title[_ngcontent-%COMP%]{font-family:Poppins;font-size:.875rem;font-weight:500;color:#2f465f;margin-bottom:.75rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-time[_ngcontent-%COMP%]   .table-body-time_date[_ngcontent-%COMP%]{font-family:Poppins;font-size:.875rem;font-weight:400;color:#8c8c8c;margin-bottom:0}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]{display:flex;gap:.5rem;justify-items:center;justify-content:center;align-items:center;width:6.9375rem;background:#FAFAFA;padding-top:.5rem;padding-bottom:.5rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]   .table-body-status_icon[_ngcontent-%COMP%]{width:.75rem;height:.75rem;border-radius:50%}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]   .table-body-status_icon-active[_ngcontent-%COMP%]{border:.0625rem solid #1F7B4D;background:#1F7B4D}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]   .table-body-status_icon-inactive[_ngcontent-%COMP%]{border:.0625rem solid #5F5F5F;background:#5F5F5F}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]   .table-body-status_name[_ngcontent-%COMP%]{font-family:Poppins;font-weight:500;font-size:1rem}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]   .table-body-status_name-active[_ngcontent-%COMP%]{color:#1f7b4d}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status[_ngcontent-%COMP%]   .table-body-status_name-inactive[_ngcontent-%COMP%]{color:#5f5f5f}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-status_name[_ngcontent-%COMP%]:before{width:12px;height:12px;border-radius:50%;background:0}.card-brand-table[_ngcontent-%COMP%]   .ant-table-row[_ngcontent-%COMP%]   .table-body-action-view[_ngcontent-%COMP%]{color:#232323;background:#FFFFFF;border:.0625rem solid #B4B4B4;border-radius:.25rem}"]});class M{constructor(e,t,o,r,d){this._formModal=e,this._uploadFileService=t,this._cardBrandService=o,this._location=r,this._router=d,this.isUpdate=!1,this.optionBrandStatus=[],this.loadingUploadFile=!1,this.msgErrUpload=null,this.isChangeFile=!1,this.initDataForm={brand_name:[null,[l.kI.required]],brand_status:[0,[l.kI.required]],brand_description:[null]}}ngOnInit(){this.optionBrandStatus=this._cardBrandService.optionBrandStatus,this.formDetail=this._formModal.group(this.initDataForm),this._router.paramMap.subscribe(e=>{const t=e?.get("id");t&&(this.idParam=t,this._cardBrandService.finbdById(t).subscribe(o=>{const r=o.data;if(null!==r.logo){const d=r.logo.split("/")[1];this._uploadFileService.getFileBase64ToFileName(d).subscribe(s=>{this.avatarUrl=null===s.data?void 0:this._uploadFileService.convertBase64File(r.logo,s.data)})}else this.avatarUrl=void 0;this.formDetail.setValue({brand_name:r.name,brand_status:this._cardBrandService.optionBrandStatus.find(d=>d.value===r.status),brand_description:r.description})}))})}setIsUpdate(){this.isUpdate=!this.isUpdate}onBackRoute(){this._location.back()}submitForm(){if(this.idParam)if(this.formDetail.valid){const e=this.formDetail.value;this.isChangeFile&&this.fileUploadBase64?this._uploadFileService.uploadFile(this.fileUploadBase64).subscribe(t=>{this.callApiUpdate({description:e.brand_description,logo:t.data,name:e.brand_name,status:e.brand_status.value})}):this.callApiUpdate({description:e.brand_description,logo:e.logo,name:e.brand_name,status:e.brand_status.value})}else Object.values(this.formDetail.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}callApiUpdate(e){this._cardBrandService.update(this.idParam,e).subscribe(t=>{(t.code=1)&&this.setIsUpdate()})}handleChangeFile(e){e.file.originFileObj&&(this.fileUploadBase64=e.file.originFileObj),this._uploadFileService.getBase64(e.file.originFileObj,t=>{this.loadingUploadFile=!1,this.avatarUrl=t,this.isChangeFile=!0})}}M.\u0275fac=function(e){return new(e||M)(n.Y36(l.QS),n.Y36(u.fl),n.Y36(u.kV),n.Y36(c.Ye),n.Y36(z.gz))},M.\u0275cmp=n.Xpm({type:M,selectors:[["app-detail"]],decls:55,vars:22,consts:[[1,"card-brand-detail"],[1,"card-brand-detail_header","mb-36"],["nz-icon","","nzType","left","nzTheme","outline","ngClass","card-brand-detail_header-icon",3,"click"],["nz-typography","","ngClass","card-brand-detail_header-title"],["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],["nz-col","","nzXl","12","nzLg","32"],[1,"title-form-card-brand"],["nz-col","","nzXl","12","nzLg","32",1,"mb-36"],[3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["nzName","avatar","nzListType","picture-card","nzAction","false","ngClass","avatar-uploader",3,"nzShowUploadList","nzChange"],[4,"ngIf"],["style","width: 100%","ngClass","card-brand-detail_img",3,"src",4,"ngIf"],["nz-col","","nzXl","12","nzLg","32",1,"detail-card-brand-info"],["nz-col","","nzXl","12","nzLg","12"],["nzErrorTip","Please input your branch name!",3,"nzSpan"],[4,"ngIf","ngIfElse"],["formView",""],["formUpdate",""],["nz-col","","nzXl","12","nzLg","12",1,"detail-card-brand-info_status"],["nzErrorTip","Please select your status!",3,"nzSpan"],["id","brand_status","formControlName","brand_status","nzPlaceHolder","Select a option and change input text above",1,"form-select-status",3,"nzDisabled"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],["nzErrorTip","Please input your username!",3,"nzSpan"],["formViewDescription",""],["formUpdateDescription",""],["nz-col","","nzXl","12","nzLg","24"],["class","table-body-status_name",4,"ngIf","ngIfElse"],["buttonUpdate",""],["buttonSave",""],["nz-icon","",1,"upload-icon",3,"nzType"],[1,"ant-upload-text"],["ngClass","card-brand-detail_img",2,"width","100%",3,"src"],["ngClass","card-brand-detail_action-change-logo"],[4,"ngTemplateOutlet"],[1,"form-view"],["nz-input","","formControlName","brand_name","id","brand_name","placeholder","Input Content"],[3,"nzValue","nzLabel"],["rows","4","formControlName","brand_description","nz-input","","id","brand_description","placeholder","input placeholder"],[1,"table-body-status_name"],["nz-button","","nzType","primary",3,"click"],["nz-button","","type","submit","nzType","primary"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"span",2),n.NdJ("click",function(){return t.onBackRoute()}),n.qZA(),n.TgZ(3,"h2",3),n._uU(4," Brand Details "),n.qZA()(),n.TgZ(5,"form",4),n.NdJ("ngSubmit",function(){return t.submitForm()}),n.TgZ(6,"div",5)(7,"h2",6),n._uU(8,"Brand Logo"),n.qZA()(),n.TgZ(9,"div",7)(10,"nz-form-item")(11,"nz-form-label",8),n._uU(12,"Brand Logo"),n.qZA(),n.TgZ(13,"nz-form-control",9)(14,"nz-upload",10),n.NdJ("nzChange",function(r){return t.handleChangeFile(r)}),n.YNc(15,ln,4,1,"ng-container",11),n.YNc(16,dn,1,1,"img",12),n.YNc(17,cn,3,0,"ng-container",11),n.qZA()()()(),n.TgZ(18,"div",5)(19,"h2",6),n._uU(20,"Brand Details"),n.qZA()(),n.TgZ(21,"div",13)(22,"div",14)(23,"nz-form-item")(24,"nz-form-label",8),n._uU(25,"Brand Name"),n.qZA(),n.TgZ(26,"nz-form-control",15),n.YNc(27,_n,2,1,"ng-container",16),n.qZA()(),n.YNc(28,gn,2,1,"ng-template",null,17,n.W1O),n.YNc(30,mn,1,0,"ng-template",null,18,n.W1O),n.qZA(),n.TgZ(32,"div",19)(33,"nz-form-item")(34,"nz-form-label",8),n._uU(35,"Brand Status"),n.qZA(),n.TgZ(36,"nz-form-control",20)(37,"nz-select",21),n.YNc(38,pn,1,2,"nz-option",22),n.qZA()()()()(),n.TgZ(39,"div",5)(40,"nz-form-item")(41,"nz-form-label",8),n._uU(42,"Brand Description"),n.qZA(),n.TgZ(43,"nz-form-control",23),n.YNc(44,fn,2,1,"ng-container",16),n.qZA()(),n.YNc(45,bn,2,1,"ng-template",null,24,n.W1O),n.YNc(47,Cn,1,0,"ng-template",null,25,n.W1O),n.qZA(),n.TgZ(49,"div",26),n.YNc(50,Mn,2,1,"ng-container",27),n.YNc(51,zn,2,0,"ng-template",null,28,n.W1O),n.YNc(53,On,2,0,"ng-template",null,29,n.W1O),n.qZA()()()),2&e){const o=n.MAs(29),r=n.MAs(46),d=n.MAs(52);n.xp6(5),n.Q6J("formGroup",t.formDetail),n.xp6(6),n.Q6J("nzSpan",24),n.xp6(2),n.Q6J("nzSpan",24)("nzErrorTip","Please input your username!"),n.xp6(1),n.Q6J("nzShowUploadList",!1),n.xp6(1),n.Q6J("ngIf",!t.avatarUrl),n.xp6(1),n.Q6J("ngIf",t.avatarUrl),n.xp6(1),n.Q6J("ngIf",t.avatarUrl),n.xp6(7),n.Q6J("nzSpan",32),n.xp6(2),n.Q6J("nzSpan",32),n.xp6(1),n.Q6J("ngIf",t.isUpdate)("ngIfElse",o),n.xp6(7),n.Q6J("nzSpan",32),n.xp6(2),n.Q6J("nzSpan",32),n.xp6(1),n.Q6J("nzDisabled",!t.isUpdate),n.xp6(1),n.Q6J("ngForOf",t.optionBrandStatus),n.xp6(3),n.Q6J("nzSpan",32),n.xp6(2),n.Q6J("nzSpan",32),n.xp6(1),n.Q6J("ngIf",t.isUpdate)("ngIfElse",r),n.xp6(6),n.Q6J("ngIf",t.isUpdate)("ngIfElse",d)}},dependencies:[c.mk,c.sg,c.O5,c.tP,F.ZU,g.Ip,g.Vq,b.Zp,P.ix,x.w,y.dQ,O.t3,O.SK,_.Lr,_.Nx,_.iK,_.Fd,B.FY,T.Ls,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u],styles:[".ant-menu[_ngcontent-%COMP%]{background:#323435!important}.ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-arrow[_ngcontent-%COMP%], .ant-menu[_ngcontent-%COMP%]   .ant-menu-submenu-expand-icon[_ngcontent-%COMP%]{color:#fff!important}.ant-menu[_ngcontent-%COMP%]   [nz-submenu-inline-child][_ngcontent-%COMP%]{padding-left:1rem!important}.ant-menu[_ngcontent-%COMP%]   [nz-submenu-inline-child][_ngcontent-%COMP%]   [nz-menu-item][_ngcontent-%COMP%]{padding-left:2rem!important}.ant-form-item[_ngcontent-%COMP%]   .ant-form-item-label[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{font-family:Poppins;color:#8c8c8c;font-weight:400;font-size:.875rem}.ant-form-item[_ngcontent-%COMP%]   [nz-input][_ngcontent-%COMP%]{border-radius:.25rem;background:#FFFFFF;border:.0625rem solid #E3E3E3;color:#232323;font-weight:400;font-size:.875rem;font-family:Poppins}.ant-form-item[_ngcontent-%COMP%]   .ant-input-status-error[_ngcontent-%COMP%]{border:.0625rem solid red!important}.ant-form-item[_ngcontent-%COMP%]   [nz-input][_ngcontent-%COMP%]::placeholder{font-family:Poppins;font-weight:400;font-size:.875rem;color:#8c8c8c}.ant-upload[_ngcontent-%COMP%]{border-radius:50%!important}.ant-btn-primary[_ngcontent-%COMP%]{background:#0F5EDD;border-radius:.25rem;padding:.5625rem 1rem;color:#fff;font-weight:500;font-size:.875rem;font-family:Poppins;line-height:0}.ant-checkbox-inner[_ngcontent-%COMP%]{border-radius:50%}.card-brand-detail[_ngcontent-%COMP%]   .mb-36[_ngcontent-%COMP%]{margin-bottom:2.25rem}.card-brand-detail[_ngcontent-%COMP%]   .card-brand-detail_header-icon[_ngcontent-%COMP%]{cursor:pointer}.card-brand-detail[_ngcontent-%COMP%]   .card-brand-detail_header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:flex-start;align-items:center;gap:1.0625rem}.card-brand-detail[_ngcontent-%COMP%]   .card-brand-detail_header[_ngcontent-%COMP%]   .card-brand-detail_header-title[_ngcontent-%COMP%]{margin-bottom:0}.card-brand-detail[_ngcontent-%COMP%]   .detail-card-brand-info[_ngcontent-%COMP%]{display:flex;gap:.25rem}.card-brand-detail[_ngcontent-%COMP%]   .title-form-card-brand[_ngcontent-%COMP%]{font-family:Poppins;font-weight:600;font-size:.875rem;color:#232323;padding-bottom:.75rem;border-bottom:.0625rem solid #E3E3E3}.card-brand-detail[_ngcontent-%COMP%]   .ant-upload[_ngcontent-%COMP%]{position:relative;z-index:1}.card-brand-detail[_ngcontent-%COMP%]   .ant-upload[_ngcontent-%COMP%]:hover   .card-brand-detail_action-change-logo[_ngcontent-%COMP%]{visibility:visible!important}.card-brand-detail[_ngcontent-%COMP%]   .card-brand-detail_img[_ngcontent-%COMP%]:hover > .card-brand-detail_action-change-logo[_ngcontent-%COMP%]{visibility:visible}.card-brand-detail[_ngcontent-%COMP%]   .card-brand-detail_action-change-logo[_ngcontent-%COMP%]{z-index:10;visibility:hidden;cursor:pointer;position:absolute;font-family:Poppins;font-weight:600;font-size:1rem;color:#fff;background:#232323;opacity:.8;overflow:hidden}.card-brand-detail[_ngcontent-%COMP%]   .form-view[_ngcontent-%COMP%]{font-weight:600;font-size:.875rem;font-family:Poppins;color:#232323;width:100%}.card-brand-detail[_ngcontent-%COMP%]   .detail-card-brand-info_status[_ngcontent-%COMP%]{margin-left:2rem}.card-brand-detail[_ngcontent-%COMP%]   .detail-card-brand-info_status[_ngcontent-%COMP%]   .form-select-status[_ngcontent-%COMP%]{max-width:8.1875rem}.card-brand-detail[_ngcontent-%COMP%]   .detail-card-brand-info_status[_ngcontent-%COMP%]   .form-select-status[_ngcontent-%COMP%]     .ant-select-selector{background:#CEF7E2;border-radius:3rem;width:100%}.card-brand-detail[_ngcontent-%COMP%]   .detail-card-brand-info_status[_ngcontent-%COMP%]   .form-select-status[_ngcontent-%COMP%]     .ant-select-selector .ant-select-selection-item{font-family:Poppins;font-weight:500;font-size:1rem;color:#1f7b4d}"]});const Pn=[{path:"",component:h},{path:":id",component:M}];class m{}m.\u0275fac=function(e){return new(e||m)},m.\u0275mod=n.oAB({type:m}),m.\u0275inj=n.cJS({imports:[z.Bz.forChild(Pn),z.Bz]});class p{}p.\u0275fac=function(e){return new(e||p)},p.\u0275mod=n.oAB({type:p}),p.\u0275inj=n.cJS({providers:[c.uU],imports:[c.ez,Z.I,m,l.u5,l.UX]})}}]);