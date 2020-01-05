import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Token } from '../models/token.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public jwtToken : BehaviorSubject<Token> = new BehaviorSubject({
    token : null
  });

  constructor(private httpClient: HttpClient) { 
    this.initJwtToken();
  }

  private initJwtToken() {
    const token = localStorage.getItem('token');
        if (token) {
        this.jwtToken.next({
            token : token
        });
        } else {
        this.jwtToken.next({
            token : null
        });
        }
    }

  signIn(username: string, password: string) {
    return this.httpClient.post('/api/auth/login', {username : username , password : password}).pipe(
      tap( (token) => {
        this.jwtToken.next({
          token : token['token']
        })
      })
    );
  }

  signUp(username: string, password: string) { 
    return this.httpClient.post(
      '/api/auth/signup',
      {username : username, password : password}
    )
  }

  logout() {
    this.jwtToken.next({
      token : null
    });
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    console.log(localStorage);
  }
}
