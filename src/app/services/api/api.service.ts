import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASEURL='http://localhost:9000'

  constructor(private http: HttpClient) { }

  private  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8100',
    'Access-Control-Allow-Methods': 'GET, POST,PUT,DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
    
    
  });

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return throwError(error);
    };
}


loginCustomer(): Observable<any> {
  console.log('loginCustomer:::', );
  return this.http.get<any>(this.BASEURL + '/customers/1',
      { headers: this.headers })
      .pipe(
          tap(res => console.log('loginCustomer',res)),
          catchError(this.handleError('loginCustomer', []))
      );
}

saveCustomer(request): Observable<any> {
  console.log('saveCustomer:::',request );
  return this.http.post<any>(this.BASEURL + '/customer/save',request,
      { headers: this.headers })
      .pipe(
          tap(res => console.log('saveCustomer',res)),
          catchError(this.handleError('saveCustomer', []))
      );
}

getCity(): Observable<any> {
  console.log('getCity:::', );
  return this.http.get<any>('http://localhost:9000' + '/city',
      { headers: this.headers })
      .pipe(
          tap(res => console.log('getCity',res)),
          catchError(this.handleError('getCity', []))
      );
}

}
