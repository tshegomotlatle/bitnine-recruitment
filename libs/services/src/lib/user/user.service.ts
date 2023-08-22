import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private options = {
    headers: new HttpHeaders().set('Content-Type', 'application/json'),
  };
  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  public getUser(email: string) {
    const body = {
      email: email,
    };
    return this.http
      .post<{ user: User }>(
        'http://localhost:3333/api/user/getUser',
        body,
        this.options
      )
      .pipe(
        catchError(
          this.handleError<{ user: User }>('getUser', { user: {} as User })
        )
      );
  }

  public createUser(user: User) {
    const body = {
      user: user,
    };
    return this.http
      .post<boolean>(
        'http://localhost:3333/api/user/createUser',
        body,
        this.options
      )
      .pipe(catchError(this.handleError<boolean>('createUser', false)));
  }

  public updateUser(user: User) {
    const body = {
      user: user,
    };
    return this.http
      .post<boolean>(
        'http://localhost:3333/api/user/updateUser',
        body,
        this.options
      )
      .pipe(catchError(this.handleError<boolean>('updateUser', false)));
  }

  public setLoggedIn(token: string, email: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  public getLoggedInToken() {
    return localStorage.getItem('token');
  }

  public getLoggedInEmail() {
    return localStorage.getItem('email');
  }

  public clearTokens() {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
  }

  public getJWTToken(email: string) {
    console.log('Getting JWT token');

    const body = {
      email: email,
    };
    return this.http
      .post<{ token: string }>(
        'http://localhost:3333/api/user/getJWTToken',
        body,
        this.options
      )
      .pipe(
        catchError(
          this.handleError<{ token: string }>('getJWTToken', { token: '' })
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.messgae}`);

      return of(result as T);
    };
  }

  public login(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };
    return this.http
      .post<boolean>('http://localhost:3333/api/user/login', body, this.options)
      .pipe(catchError(this.handleError<boolean>('login', false)));
  }

  public checkIfLogged() {
    const token = this.getLoggedInToken();
    let decoded: { user: string; iat: string } = {
      user:"",
      iat:""
    };
    if (token)
    {
       decoded = jwt_decode(token || '');

    }
    else
    {
      return false
    }
    const email = this.getLoggedInEmail();

    if (decoded && email)
    {
      if (decoded.user == email) 
        return true;
      else 
        return false;
    }
    else{
      return false;
    }
    
  }


}
