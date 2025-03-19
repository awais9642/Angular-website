import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url='http://localhost:5500';
  // private apiUrl = 'http://localhost:3000/test'; Express server URL

  constructor(private http: HttpClient) { }
 

  // Fetch users from Express backend
//   getUsers(): Observable<any> {
//     return this.http.get<any[]>('http://localhost:3000/test');
//   }

//   getList(): Observable<any>{
//       return this.http.get<any[]>('http://localhost:3000/users');
//  }
//  getProducts(): Observable<any>{
//   return this.http.get<any[]>('http://localhost:3000/products');
//  }

getcartinfo(email: string): Observable<any[]> {
  return this.http.get<any[]>(`http://localhost:3000/cartinfo?email=${email}`);
}


 getProductsList(): Observable<any>{
  return this.http.get<any[]>(this.url +'/product_details');
 }

Login(email: string, password: string):Observable<any>{
  return this.http.post(this.url + '/login',{ email, password });
}

checkout(userdata: any): Observable<any> {
  return this.http.post(this.url + '/checkout', userdata, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}
}
