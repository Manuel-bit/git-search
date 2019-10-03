import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  searchTerm:string;
  @Output () emitresult = new EventEmitter<any>();

  onClickSearch(){
    this.emitresult.emit(this.searchTerm);
  }

  constructor() { }

  ngOnInit() {
  }

}
