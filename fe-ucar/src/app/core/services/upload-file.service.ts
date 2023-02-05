import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UploadFileService{
    
    private pathApi = 'upload-file'

    constructor(private _httpClient: HttpClient){}

    public getBase64(img: File, callback: (img: string) => void): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result!.toString()));
        reader.readAsDataURL(img);
    }


    public uploadFile(file: File):Observable<any>{

        const formData = new FormData();
        formData.append("file", file);

        const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}`
        return this._httpClient.post<any[]>(url,formData)
    }

    public getFileBase64ToFileName(file_name: string ):Observable<any>{
        const url = `${environment.apiUrl}${environment.apiVersion1}${this.pathApi}/${file_name}`
        return this._httpClient.get<any[]>(url)
    }

}