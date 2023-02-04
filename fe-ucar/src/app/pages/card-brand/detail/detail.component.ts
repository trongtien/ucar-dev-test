import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ICommonSelect } from '@app/core/models';
import { CardBrandService, UploadFileService } from '@app/core/services';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public formDetail!: UntypedFormGroup;
  public isUpdate: boolean = false;
  public optionBrandStatus: Array<ICommonSelect> = []

  // Upload file
  public avatarUrl?: string;
  public loadingUploadFile: boolean = false
  public msgErrUpload: string | null = null


  private initDataForm: any = {
    brand_name: [null, [Validators.required]],
    brand_status: [0, [Validators.required]],
    brand_description: [null]
  }

  constructor(
    private _formModal: UntypedFormBuilder,
    private _uploadFileService: UploadFileService,
    private _cardBrandService: CardBrandService,
    private _location: Location
  ) { }



  public ngOnInit(): void {
    this.optionBrandStatus = this._cardBrandService.optionBrandStatus
    this.formDetail = this._formModal.group(this.initDataForm)
  }

  public setIsUpdate(){
    this.isUpdate = !this.isUpdate
  }

  public onBackRoute(){
    this._location.back()
  }

  public submitForm(): void {


  }

  public handleChangeFile(info: { file: NzUploadFile }): void {
    this._uploadFileService.getBase64(info.file!.originFileObj!, (img: string) => {
      this.loadingUploadFile = false;
      this.avatarUrl = img;
    });
    // console.log('info_handleChangeFile', info.file)
    // switch (info.file.status) {
    //   case 'uploading':
    //     this.loadingUploadFile = true;
    //     break;
        
    //   case 'done':
    //     this._uploadFileService.getBase64(info.file!.originFileObj!, (img: string) => {
    //       this.loadingUploadFile = false;
    //       this.avatarUrl = img;
    //     });
    //     break;

    //   case 'error':
    //     this.loadingUploadFile = false;
    //     break;
    // }
  }
}
