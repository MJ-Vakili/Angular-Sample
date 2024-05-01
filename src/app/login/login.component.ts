import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom: FormGroup;
  userName = new FormControl('');
  password = new FormControl('');
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    //this.loginBtn = this.formBuilder.
  }
  loginBtn(): void {

    alert("login:" + this.userName.value + ' ' + this.password.value)
  }
}
