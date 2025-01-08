import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MailBody } from '../models/mailBody.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private http = inject(HttpClient);

  constructor() { }

  addProduct(mailBody: MailBody) {
    const headers = new HttpHeaders({
      "Content-Type" : 'application/json; charset=utf-8'
    });
    return this.http.post( environment.mailApi, mailBody,{ responseType: 'text'});
  }
}
