import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public app_name = 'Data Client Resolve Studio';

  ngOnInit() {
  }

  logOutUser():void {
    this.authService.logOut();
  }


}
