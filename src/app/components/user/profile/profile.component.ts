import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  users: UserInterface;

  ngOnInit() {
    // this.user = this.authService.getCurrentUser();
    this.getListUsers();
  }

  getListUsers() {
    this.authService.getAllUsers()
      .subscribe((users: UserInterface) => (
        this.users = users['users'],
        console.log('users:', this.users)
      )
      );
  }



}
