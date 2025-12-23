import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CustomerRequest, CustomerResponse } from '../interfaces/customer.interface';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private http = inject(HttpClient);

  getAllClients() : Observable<CustomerResponse> {
    return this.http
      .get<CustomerResponse>(`${baseUrl}/customers`)
      .pipe(tap((resp)=> console.log(resp)));
  }

  saveClient(data: CustomerRequest | any) :Observable<CustomerResponse> {
    return this.http
      .post<CustomerResponse>(`${baseUrl}/customers`, data)
      .pipe(tap((resp) => console.log(resp)));
  }

  updateClient(data: CustomerRequest | any, id:string) :Observable<CustomerResponse> {
    return this.http
      .put<CustomerResponse>(`${baseUrl}/customers/${id}`, data);
  }

  deleteCustomer(id:string) {
    return this.http
      .delete(`${baseUrl}/customers/${id}`);
  }
}
