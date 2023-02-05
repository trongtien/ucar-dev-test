import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ICommonSelect, IRequestCardBrandItem } from '@app/core/models';
import { CardBrandService } from '@app/core/services';
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
  public avatarUrl?: string;
  public loadingUploadFile: boolean = false
  public msgErrUpload: string | null = null

  private initDataForm: any = {
    brand_name: [null, [Validators.required]],
    brand_status: [0, [Validators.required]],
    brand_description: [null]
  }

  constructor(private formModal: UntypedFormBuilder, private _cardBrandService: CardBrandService) { }

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

  public handleCloseModal(isReload?: boolean): void {
    if(isReload){
      this.closeModal.emit(false)
    } else {
      this.closeModal.emit(true)
    }
    this.validateForm.reset();
  }

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  public handleChangeFile(info: { file: NzUploadFile }): void {
    console.log('info_handleChangeFile', info.file)
    switch (info.file.status) {
      case 'uploading':
        this.loadingUploadFile = true;
        break;
        
      case 'done':
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loadingUploadFile = false;
          this.avatarUrl = img;
        });
        break;

      case 'error':
        this.loadingUploadFile = false;
        break;
    }
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      const valueForm = this.validateForm.value
      this._cardBrandService.create({
        description: valueForm.brand_description,
        logo: null,
        name: valueForm.brand_name,
        status: valueForm.brand_status.value
      }).subscribe((response: any) => {
        if(response.code = 1){
          this.handleCloseModal()
        }
      });
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
