import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http : HttpClient) { }

  public getUser(email:string){
    const body = {
        email: email
    }
    return this.http.post<User>(
      "http://localhost:3333/api/user/getUser",
      body, this.options)
      .pipe(catchError(this.handleError<User>('getUser', {} as User)));
    }

  public createUser(user : User){
    const body = {
        user: user
    }
    return this.http.post<boolean>(
      "http://localhost:3333/api/user/createUser",
      body, this.options)
      .pipe(catchError(this.handleError<boolean>('createUser', false)));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (error: any): Observable<T> => {
          console.error(error);
          console.log(`${operation} failed: ${error.messgae}`);
    
          return of(result as T);
        };
      }

  }

