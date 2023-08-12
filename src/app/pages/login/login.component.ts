import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OauthService } from 'src/app/providers/services/oauth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private oauthservice: OauthService, private router: Router){}
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required]),
  });
  public login(): void {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      
      this.oauthservice.authenticate(this.loginForm.value).subscribe(response => {
        
        if (response && localStorage.getItem('token')) {
          this.router.navigate(['/posts'])
        }
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido a tu Sistema',
          showConfirmButton: false,
          timer: 1000
        })
      }, error =>{
        console.log(error);
        
        Swal.fire({
          icon: 'error',
          title: error.error.detail,
          showConfirmButton: false,
          timer: 1000
        })
      });
    }
  }

}
