import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users')
  }

}

