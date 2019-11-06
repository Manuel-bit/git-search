import { Component, OnInit } from '@angular/core';
import { GitHttpServiceService } from  '../git-http-service.service';
import {RepoList} from '../repo-list'; 
import { GitRepos } from '../git-repos';

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {
  searchTerm:any;
  repos:any;
  repolist:GitRepos[];
  constructor( private searchService:GitHttpServiceService) {

   }

  
  onClickGetRepos(searchTerm){
    this.searchService.fetchRepos(searchTerm).then((repodata)=>{
      this.repolist = this.searchService.onlyRepos;
      console.log(this.repos)
    }),(error)=>{
      console.log(error);
    }
  }
  ngOnInit() {
  }

}
