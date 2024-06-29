import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MailBody } from '../models/mailBody.model';

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
    return this.http.post( 'https://servicio-correo-node-efb3ac491db9.herokuapp.com/send-email', mailBody,{ responseType: 'text'});
  }
}
