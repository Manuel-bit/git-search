import { Component, OnInit } from '@angular/core';
import { GitUser} from '../git-user';
import {GitRepos} from '../git-repos';
import {GitHttpServiceService} from '../git-http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public searchTerm : string = 'Manuel-bit';
  user : GitUser;
  repos : GitRepos;

  constructor(public getUser:GitHttpServiceService, private getRepos:GitHttpServiceService) { }

  ngOnInit() {
    this.onClickGetRepos();
  }
  onClickGetRepos(){
    this.getUser.fetchUserData(this.searchTerm).then(
      ()=>{
        this.user = this.getUser.user;
      },(error)=>{
        console.log(error);
      }
    )
    this.getRepos.fetchRepos(this.searchTerm).then(
      ()=>{
        this.repos = this.getRepos.repo;
      },(error)=>{
        console.log(error);
      }
    )
  }

}
