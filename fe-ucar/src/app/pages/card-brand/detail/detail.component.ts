import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ICommonSelect, IRequestCardBrandItem } from '@app/core/models';
import { CardBrandService, UploadFileService } from '@app/core/services';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public formDetail!: UntypedFormGroup;
  public isUpdate: boolean = false;
  public optionBrandStatus: Array<ICommonSelect> = []
  
 
  private idParam!: string 

  // Upload file
  public avatarUrl?: string;
  public loadingUploadFile: boolean = false
  public msgErrUpload: string | null = null

  private isChangeFile: boolean = false
  private fileUploadBase64?: File


  private initDataForm: any = {
    brand_name: [null, [Validators.required]],
    brand_status: [0, [Validators.required]],
    brand_description: [null]
  }

  constructor(
    private _formModal: UntypedFormBuilder,
    private _uploadFileService: UploadFileService,
    private _cardBrandService: CardBrandService,
    private _location: Location,
    private _router: ActivatedRoute
  ) { }



  public ngOnInit(): void {
    this.optionBrandStatus = this._cardBrandService.optionBrandStatus
    this.formDetail = this._formModal.group(this.initDataForm)
    this._router.paramMap.subscribe((params: ParamMap | null) => {
      const id = params?.get('id')
      if(id){
        this.idParam = id
        this._cardBrandService.finbdById(id).subscribe(response => {
          const item = response.data

          if(item.logo !== null){
            this._uploadFileService.getFileBase64ToFileName(item.logo).subscribe(response => {
              if(response.data === null){
                this.avatarUrl = undefined
              }
              else{
                this.avatarUrl = this._uploadFileService.convertBase64File(item.logo, response.data)
              }
            })
          } else {
            this.avatarUrl = undefined
          }

          this.formDetail.setValue({
            brand_name: item.name,
            brand_status: this._cardBrandService.optionBrandStatus.find(e => e.value === item.status),
            brand_description: item.description
          })
        })
      }
    });
   
  }

  public setIsUpdate(){
    this.isUpdate = !this.isUpdate
  }

  public onBackRoute(){
    this._location.back()
  }

  public submitForm(): void {
    if(!this.idParam) return 
    
    if (this.formDetail.valid) {
      const valueForm = this.formDetail.value

      if(this.isChangeFile && this.fileUploadBase64){
        this._uploadFileService.uploadFile(this.fileUploadBase64).subscribe( (response: any) => {
          this.callApiUpdate({
            description: valueForm.brand_description,
            logo: response.data,
            name: valueForm.brand_name,
            status: valueForm.brand_status.value
          })
        })
      } else {
        this.callApiUpdate({
          description: valueForm.brand_description,
          logo: valueForm.logo,
          name: valueForm.brand_name,
          status: valueForm.brand_status.value
        })
      }
      
    } else {
      Object.values(this.formDetail.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private callApiUpdate(valueForm: IRequestCardBrandItem){
    this._cardBrandService.update(this.idParam,valueForm).subscribe((response: any) => {
      if(response.code = 1){
        this.setIsUpdate()
      }
    });
  }

  public handleChangeFile(info: { file: NzUploadFile }): void {
    if(info.file.originFileObj){
      this.fileUploadBase64 = info.file.originFileObj
    }
    this._uploadFileService.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loadingUploadFile = false;
      this.avatarUrl = img;
      this.isChangeFile = true
    });
  }
}
