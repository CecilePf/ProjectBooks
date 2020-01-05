import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  
  authorization: string = "";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.authorization
    })
  } 

  constructor(private http: HttpClient) { 
  }

  private getHeaders(): HttpHeaders {
    const headersParams = { 'Content-Type': 'application/json' };
    const token = localStorage.getItem('token');
    if (token) {
      Object.assign(headersParams, { 'authorization': `${token}` });
    }
    return new HttpHeaders(headersParams);
  }

  fixHeaders() {
    this.httpOptions.headers = this.getHeaders();
  }
}