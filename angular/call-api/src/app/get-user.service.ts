import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { Observable, throwError, map, catchError, shareReplay, switchMap } from 'rxjs';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users')
  }

}

