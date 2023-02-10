import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICommonSelect, IRequestCardBrandItem } from '@app/core/models';
import { CardBrandService, UploadFileService } from '@app/core/services';
import { Observable, Subject, map } from 'rxjs';
@Component({
  selector: 'app-modal-cu-card-brand',
  templateUrl: './modal-cu-card-brand.component.html',
  styleUrls: ['./modal-cu-card-brand.component.scss']
})
export class ModalCuCardBrandComponent implements OnInit {

  @Input() isVisible: boolean = true
  @Output() closeModal = new EventEmitter<boolean>();

  public isConfirmLoading: boolean = false
  public validateForm!: UntypedFormGroup;
  
  // Upload file
  public fileUploadBase64?: File
  public avatarUrl?: string;
  public loadingUploadFile: boolean = false
  public msgErrUpload: string | null = null
  public selectStatus: ICommonSelect = { label: "Active", value: 1 }

  private initDataForm: any = {
    brand_name: [null, [Validators.required]],
    // brand_status: [{label: "Inactive", value: 0}, [Validators.required]],
    brand_description: [null]
  }

  constructor(
    private formModal: UntypedFormBuilder, 
    private _cardBrandService: CardBrandService,
    private _uploadFileService: UploadFileService
    ) { }

  public optionBrandStatus: Array<ICommonSelect> = [
    {
      label: "Inactive",
      value: 0
    },
    {
      label: "Active",
      value: 1
    }
  ]

  ngOnInit(): void {
    this.validateForm = this.formModal.group(this.initDataForm)

  }

  public handleCancel() {
    this.handleCloseModal()
  }

  private clearDataFile(){
    this.fileUploadBase64 = undefined
    this.avatarUrl = undefined
    this.loadingUploadFile = false
    this.msgErrUpload = null
  }

  public handleCloseModal(isReload?: boolean): void {
    if(isReload){
      this.closeModal.emit(false)
    } else {
      this.closeModal.emit(true)
    }
    this.validateForm.reset();
    this.clearDataFile()
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  public handleChangeFile(info: { file: NzUploadFile }): void {
    if(info.file.originFileObj){
      this.fileUploadBase64 = info.file.originFileObj
    }

    this.getBase64(info.file!.originFileObj!, (img: string) => {
      console.log('img', img)
      this.loadingUploadFile = false;
      this.avatarUrl = img;
    });
  }

  public onChangeStatus(option: ICommonSelect) {
    this.selectStatus = option
  }

  async submitForm(): Promise<void> {
    if (this.validateForm.valid) {
      let valueForm = this.validateForm.value
      if(this.fileUploadBase64){
        await this._uploadFileService.uploadFile(this.fileUploadBase64).subscribe( (response: any) => {
          this.callApiCreate({
            description: valueForm.brand_description,
            logo: response.data,
            name: valueForm.brand_name,
            status: +this.selectStatus.value
          })
        })
      }
      else{
        this.callApiCreate({
          description: valueForm.brand_description,
          logo: null,
          name: valueForm.brand_name,
          status: valueForm.brand_status.value
        })
      }
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  private callApiCreate(valueForm: IRequestCardBrandItem){
    this._cardBrandService.create(valueForm).subscribe((response: any) => {
      if(response.code = 1){
        this.handleCloseModal()
      }
    });
  }
}
