import { Component, OnInit } from '@angular/core';
import { GitHttpServiceService } from  '../git-http-service.service';
import {RepoList} from '../repo-list'; 

@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {
  searchTerm:string;
  repos:any;
  constructor( private searchService:GitHttpServiceService) {

   }

  ngOnInit() {
  }
  onClickGetRepos(searchTerm){
    this.searchService.fetchRepos(searchTerm).then(()=>{
      this.repos = this.searchService.repo;
    }),(error)=>{
      console.log(error);
    }
  }

}
