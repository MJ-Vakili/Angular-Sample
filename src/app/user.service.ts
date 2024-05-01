import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private serverUrl = "../"
  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(`${this.serverUrl}assets/User.json`);
      // .pipe(
      //   switchMap(() => {
      //     var user: User[] = [{ _id: "11111", name: "ali" }];
      //     return of(user);
      //   })
      // );
  }
}
