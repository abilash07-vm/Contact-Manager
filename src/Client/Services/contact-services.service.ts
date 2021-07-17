import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../interfaces/contact';
import { environment } from '../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class ContactServices {
  headers: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private authService: AuthService) {
    this.setTokenkey();
  }
  setTokenkey() {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `Bearer ${this.authService.getToken()}`);
  }
  baseurl = environment.apiurl;

  getAllContacts() {
    return this.http.get(this.baseurl + '/contacts', { headers: this.headers });
  }

  postAContact(contact: Contact) {
    return this.http.post(this.baseurl + '/contacts', contact, {
      headers: this.headers,
    });
  }
}
