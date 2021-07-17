import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  key: string = 'contact-manager-jwt-key';
  constructor(private http: HttpClient) {}
  baseurl = environment.apiurl;

  // Tokens
  setToken(token: string) {
    localStorage.setItem(this.key, token);
  }
  getToken() {
    return localStorage.getItem(this.key);
  }

  // Auth
  isLokedIn() {
    return localStorage.getItem(this.key) != null;
  }
  logout() {
    localStorage.removeItem(this.key);
  }

  // EndPoint
  login(payload: User) {
    return this.http.post(this.baseurl + '/authenticate', payload);
  }
}
