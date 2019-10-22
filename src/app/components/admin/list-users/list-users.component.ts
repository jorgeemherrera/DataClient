import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

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
