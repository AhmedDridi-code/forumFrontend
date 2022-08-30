import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'}) 
  url:string = environment.apiUrl
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url+"user",{headers: this.headers})
  }

  getUser(id:string){
    return this.http.get(this.url+"user/"+id)
  }

  deleteUser(id:string){
    return this.http.delete(this.url+"user/"+id,{headers: this.headers})
  }

}
