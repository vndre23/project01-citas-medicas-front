import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CustomerRequest, CustomerResponse, TypeDocument } from '../interfaces/customer.interface';
import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class TypeDocumentService {
  private http = inject(HttpClient);

  getAllDocuments() : Observable<TypeDocument[]> {
    return this.http
      .get<TypeDocument[]>(`${baseUrl}/type-documents`)
      .pipe(tap((resp)=> console.log(resp)));
  }
}
