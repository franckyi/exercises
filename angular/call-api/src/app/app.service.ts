import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient: HttpClient) { }

  const getCoords = () => {

}


  getUsers() {
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }




}
