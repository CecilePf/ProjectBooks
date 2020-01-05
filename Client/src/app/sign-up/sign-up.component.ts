import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  signUpForm : FormGroup;
  error: string = "";

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.signUpForm = this.formBuilder.group({
      username : [''],
      password : ['' , [Validators.required , Validators.pattern(/[0-9a-zA-Z]{6,}/)]]      
    })     
  }

  onSubmit() {
    // console.log(f);
    let username = this.signUpForm.get('username').value;    
    let password = this.signUpForm.get('password').value;
    
    this.authService.signUp(username, password).subscribe(
        (res) => {
          this.router.navigate(['signIn']);
        }, (err) => {
          console.log(err);
          if(err.error.ErrorCode == 11000) {
            this.error = "Ce pseudo est déjà pris, veuillez en choisir un autre.";
          }
        }
    );
  } 

}
