import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {



  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:8080/Users');
  }

}
