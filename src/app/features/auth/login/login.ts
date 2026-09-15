import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginData = {
    email : '',
    password : ''
  };
  errorMessage = '';
  login(){
    this.errorMessage = '';
    this.authService.login(this.loginData)
      .subscribe({

        // next: (response) => {

        //   console.log('Login successful');

        //   console.log(response);

        //   localStorage.setItem(
        //     'token',
        //     response.token
        //   );
        // },
        next: (response) => {
  console.log('Login successful', response);

  this.authService.setToken(response.token);

  console.log('Token saved:', this.authService.getToken());

  this.router.navigate(['/patients']).then((success) => {
    console.log('Navigation result:', success);
  });
},

        error: (error) => {

          console.error(error);

          this.errorMessage =
            'Invalid email or password';
        }

      });
  }
}
