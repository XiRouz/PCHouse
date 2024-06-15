import { Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-all-users',
  // standalone: true,
  // imports: [],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  users: any[] = [];
  subs: Subscription[] = [];
  errorMessage: string;
  hasError = false;
  success = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.hasError = false;
    this.subs.push(this.userService.getAllUsers().subscribe((us: any) => {
      this.users = us.users;
      console.log("users:")
      console.log(this.users);      
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }
}
