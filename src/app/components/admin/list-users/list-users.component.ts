import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
  standalone: false
})
export class ListUsersComponent implements OnInit {

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) { }
  users: UserInterface[] = [];

  ngOnInit() {
        // this.user = this.authService.getCurrentUser();
        this.getListUsers();
  }

  getListUsers() {
    this.authService.getAllUsers()
      .subscribe((response: { users: UserInterface[] }) => {
        this.users = response.users;
        this.cdr.markForCheck();
      });
  }
}
