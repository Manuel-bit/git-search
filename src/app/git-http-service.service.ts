import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {GitUser} from './git-user';
import {GitRepos} from './git-repos';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GitHttpServiceService {
  user:GitUser;
  repo:GitRepos;



  constructor(private http : HttpClient) {
    this.user = new GitUser("","","",0,0,0);
    this.repo = new GitRepos("","","")
   }
   fetchUserData(searchTerm:string){
     interface UserData{
       name:string;
       avatar_url:string;
       html_url:string;
       repos:number;
       following:number;
       followers:number;
     }
     let promise = new Promise((resolve,reject)=>{
       this.http.get<UserData>('https://api.github.com/users/'+searchTerm+'?access_token='+environment.apiKey).toPromise().then(
         (result)=>{
           this.user = new GitUser(result.name,result.avatar_url,result.html_url,result.repos,result.following,result.followers)
           resolve()
           console.log(result);
         },(error)=>{
           console.log(error);
           reject(error);
         })
     })
     return promise
   }
   fetchRepos(searchTerm:string){
     interface RepoData{
       name:string;
       description:string;
       html_url:string;
     }
     let repoPromise = new Promise((resolve,reject)=>{
       this.http.get<RepoData>("https://api.github.com/users/"+searchTerm+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
         (repoData)=>{
           this.repo = new GitRepos(repoData.name,repoData.description,repoData.html_url)
           console.log(repoData)
           resolve()
         },error=>{
           reject(error);
         }
       )
     })
     return repoPromise
   }

}
