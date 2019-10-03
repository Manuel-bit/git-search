import { Component, OnInit } from '@angular/core';
import { GitHttpServiceService } from  '../git-http-service.service';
@Component({
  selector: 'app-search-repos',
  templateUrl: './search-repos.component.html',
  styleUrls: ['./search-repos.component.css']
})
export class SearchReposComponent implements OnInit {
  searchTerm:string;
  repo:any;
  constructor( private searchService:GitHttpServiceService) {

   }

  ngOnInit() {
  }
  onClickGetRepos(searchTerm){
    this.searchService.fetchRepos(searchTerm).then(()=>{
      this.repo = this.searchService.repo;
    }),(error)=>{
      console.log(error);
    }
  }

}
