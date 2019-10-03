import { Component, OnInit } from '@angular/core';
import { GitUser} from '../git-user';
import {GitRepos} from '../git-repos';
import {GitHttpServiceService} from '../git-http-service.service';


@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.css'],
})
export class DisplaySearchComponent implements OnInit {
  public searchTerm : string;
  user : GitUser;
  repos : GitRepos;

  constructor(public getUser:GitHttpServiceService, private getRepos:GitHttpServiceService) { }

 
  onClickGetUser(searchTerm){
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
  ngOnInit() {
    this.onClickGetUser(this.searchTerm);
  }
  
}

