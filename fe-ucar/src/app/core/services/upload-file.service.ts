import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UploadFileService{
    
    constructor(){}

    public getBase64(img: File, callback: (img: string) => void): void {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result!.toString()));
        reader.readAsDataURL(img);
    }
}