import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NvbarComponent } from './nvbar/nvbar.component';
import { UserComponent } from './user/user.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { SearchReposComponent } from './search-repos/search-repos.component';
import {HttpClientModule } from '@angular/common/http';
import { DisplaySearchComponent } from './display-search/display-search.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    UserComponent,
    SearchFormComponent,
    SearchReposComponent,
    DisplaySearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
