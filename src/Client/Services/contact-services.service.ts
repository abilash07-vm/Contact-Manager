import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../interfaces/contact';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactServices {
  constructor(private http: HttpClient) {}
  baseurl = environment.apiurl;

  getAllContacts() {
    return this.http.get(this.baseurl + '/contacts');
  }

  postAContact(contact: Contact) {
    return this.http.post(this.baseurl + '/contacts', contact);
  }
}
