import { inject, Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage = inject(Storage);
 
  downloadCvFile(): Promise<string>  {
    const fileRef = ref(this.storage, 'Pdfs/esp_cv_JuanCamiloSalazarSerna_2024.pdf');
    return getDownloadURL(fileRef);
  }


}
