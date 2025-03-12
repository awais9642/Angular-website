import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/test'; // Express server URL

  constructor(private http: HttpClient) { }

  // Fetch users from Express backend
  getUsers(): Observable<any> {
    return this.http.get<any[]>('http://localhost:3000/test');
  }

  getList(): Observable<any>{
      return this.http.get<any[]>('http://localhost:3000/users');
 }
 getProducts(): Observable<any>{
  return this.http.get<any[]>('http://localhost:3000/users');
 }

}
