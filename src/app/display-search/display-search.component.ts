import { Component, OnInit } from '@angular/core';
import { GitUser} from '../git-user';
import {GitRepos} from '../git-repos';
import {GitHttpServiceService} from '../git-http-service.service';


@Component({
  selector: 'app-display-search',
  templateUrl: './display-search.component.html',
  styleUrls: ['./display-search.component.css'],
  providers :[GitHttpServiceService],
})
export class DisplaySearchComponent implements OnInit {
  public searchTerm : string='mugendinjue';
  user : GitUser;
  repo : GitRepos;

  constructor(public getUser:GitHttpServiceService, private getRepos:GitHttpServiceService) { }

  
  onClickGetUser(searchTerm){
    this.getUser.fetchUserData(this.searchTerm).then(
      ()=>{
        this.user = this.getUser.user;
      },(error)=>{
        console.log(error);
      })
    
    this.getRepos.fetchUserRepos(this.searchTerm).then(
      ()=>{
        this.repo = this.getRepos.repo;
      },(error)=>{
        console.log(error);
      })
    
  }
  
  ngOnInit() {
    this.onClickGetUser(this.searchTerm);
  }
}
