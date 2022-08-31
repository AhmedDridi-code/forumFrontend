import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }
  url = environment.apiUrl;

  addRating(rating:any){
    return this.http.post(this.url+"rating",rating)
  }

  editRating(rating:any){
    return this.http.put(this.url+"rating",rating)
  }

  getRating(postId:number, sujetId:number){
    let request = { postId:postId, sujetId:sujetId }
    return this.http.get(this.url+`rating?sujetId=${postId}&userId=${sujetId}`)
  }

}
