import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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
  return this.http.get<any[]>('http://localhost:3000/product_details');
 }

Login(email: string, password: string):Observable<any>{
  return this.http.post('http://localhost:3000/login',{ email, password });
}

checkout(userdata: any): Observable<any> {
  return this.http.post('http://localhost:3000/checkout', userdata, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  });
}

// confirmOrder(): Observable<any>{
// return this.http.post('http://localhost:3000/send-confirmation-email',{
//   //headers:new HttpHeaders({'Content-Type':'application/json'})
//  });
// }
confirmOrder(): Observable<any> {
  return this.http.post('http://localhost:3000/send-confirmation-email', {email: 'shakirawais66@gmail.com'});
}
}
