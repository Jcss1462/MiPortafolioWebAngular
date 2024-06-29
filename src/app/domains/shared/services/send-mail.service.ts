import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MailBody } from '../models/mailBody.model';
import { MailResponse } from '../models/mailResponse.model';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  private http = inject(HttpClient);

  constructor() { }

  addProduct(mailBody: MailBody) {

    const headers = new HttpHeaders({
      'Authorization': '',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.post<MailResponse>( 'https://api.resend.com/emails', mailBody,{ headers });
  }
}
