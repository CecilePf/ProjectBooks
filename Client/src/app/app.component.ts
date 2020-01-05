import { Component } from '@angular/core';
import { Token } from './models/token.model';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jwtToken : Token;
  subscription : Subscription;
  title = 'Client';
  
  constructor(private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.subscription = this.authService.jwtToken.subscribe((jwtToken) => {
      this.jwtToken = jwtToken
    })
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['signIn']);      
  }
}
