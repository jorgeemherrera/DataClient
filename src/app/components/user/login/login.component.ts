import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  private user: UserInterface = {
    email: '',
    password: ''
  }

  ngOnInit() {
  }

  login() {
    return this.authService.loginUser(this.user.email, this.user.password)
      .subscribe(data => {
        // console.log('logueado!!!!!', data);
        this.authService.setUser(data.user);
        let token = data.token;
        this.authService.setToken(token);
        this.router.navigate(['user/profile']);
      },
        err => console.log(err)
      );
  }

}
