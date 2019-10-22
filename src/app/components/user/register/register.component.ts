import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from '../../../models/user-interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  private user: UserInterface = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    phone: '' ,
    birthday: new Date(),
    picture: ''
  };

  ngOnInit() {
  }

  register(): void {
    this.authService.registerUser(
      this.user.email,
      this.user.password
    )
      .subscribe(user => {
        this.authService.setUser(user);
        // let token = user._id;
        // this.authService.setToken(token);
        this.router.navigate(['/user/profile']);
      },
        err => console.log(err)
      )
  }

}
