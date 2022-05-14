import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  username: string = '';
  users: any;
  today = Date.now();
  

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.username = this.userservice.username
    this.getUsers()

  }

  getUsers() {
    this.userservice.getUsers().subscribe((res: any) => {
      console.log(res)
      this.users = res;
    })
  }
}
