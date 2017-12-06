import { UserDataService } from '../user-data.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserDataService]
})
export class UserProfileComponent implements OnInit {
  public user: User;
  constructor(userDataService: UserDataService) {
    userDataService.userDetails.subscribe(item => this.user = item);
  }

  ngOnInit() {
  }

}
