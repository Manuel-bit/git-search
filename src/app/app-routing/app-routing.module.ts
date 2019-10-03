import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { SearchReposComponent } from '../search-repos/search-repos.component';
import { DisplaySearchComponent } from '../display-search/display-search.component';


const routes: Routes = [
  {path:'home', component:UserComponent},
  {path:'display_results', component:DisplaySearchComponent},
  {path:'search-repos', component:SearchReposComponent},
  {'pathMatch':'full','redirectTo':'home','path':''},

];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
