import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm : FormGroup;
  error: string = "";

  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router: Router) { }
  
  ngOnInit() {
    this.initForm();
  }
  
  initForm(){
    this.signInForm = this.formBuilder.group({
      username : [''],
      password : ['' , [Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/)]]      
    })     
  }
  
  onSubmit() {
    let username = this.signInForm.get('username').value;
    let password = this.signInForm.get('password').value;
    
    this.authService.signIn(username, password).subscribe(
        (res) => {
            // console.log(res);
            var token = res['token'];
            var id = res['id'];
            localStorage.setItem('token', token);
            localStorage.setItem('id', id);
            this.router.navigate(['books']);
        }, (error) => {
            // console.log(error);
            this.error = error.error.ErrorMsg;
        }
    );
  } 
  
}
