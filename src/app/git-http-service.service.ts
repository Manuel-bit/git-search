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
  repo: any = [];



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
   fetchUserRepos(searchTerm:string){
     interface userRepos{
       name:string;
       html_url:string;
       description:string;
     }
     let userReposPromise = new Promise((resolve,reject)=>{
       this.http.get<userRepos>('https://api.github.com/users/'+searchTerm+'/repos?order=created&sort=asc?access_token='+environment.apiKey).toPromise().then(
         (userRepos)=>{
           this.repo = userRepos;
           resolve()
         },error=>{
           reject(error);
         }
       )
     })
     return userReposPromise;
   }
   fetchRepos(searchTerm:string){
     interface RepoData{
       name:string;
       html_url:string;
       description:string;
       
     }
     let repoPromise = new Promise((resolve,reject)=>{
       this.http.get<RepoData>('https://api.github.com/search/repositories?q='+searchTerm+'&per_page="+10+"&sort=forks&order=asc?access_token='+environment.apiKey).toPromise().then(
         (repoData)=>{
           this.repo.push = repoData;
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
