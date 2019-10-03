import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchTerm:string;
  @Output () findresult = new EventEmitter<any>();

  onClickSearch(){
    this.findresult.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit() {
  }

}
