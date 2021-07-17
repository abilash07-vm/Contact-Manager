import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/Client/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.loginFormGroup = formBuilder.group({
      username: formBuilder.control('', [Validators.required]),
      admin: formBuilder.control(false),
      password: formBuilder.control('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.loginFormGroup.valid) {
      this.authservice
        .login(this.loginFormGroup.value)
        .subscribe((data: any) => {
          if (data.token) {
            this.authservice.setToken(data.token);
            this.router.navigate(['/', 'contacts']);
          }
        });
    }
  }
}
