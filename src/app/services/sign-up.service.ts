import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  url: string = "https://bethel-bakery-backend.herokuapp.com/registerNewUser";

  constructor(private http: HttpClient) { }

  addNewUser(user:User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
}
