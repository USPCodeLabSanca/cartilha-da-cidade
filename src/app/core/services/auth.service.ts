import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public login() {
    
  }

  constructor(private httpClient: HttpClient) { }
}
