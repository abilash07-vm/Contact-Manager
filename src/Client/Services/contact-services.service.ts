import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactServices {
  constructor(private http: HttpClient) {}
  baseurl = '/api';

  getAllContacts() {
    return this.http.get(this.baseurl + '/contacts');
  }
}
