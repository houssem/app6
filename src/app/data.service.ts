import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log("Get users");
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    console.log("User ID:"+userId);
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    console.log("Get posts");
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
}
