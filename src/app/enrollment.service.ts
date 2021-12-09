import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = "http://localhost:3000/add-new-post";
  constructor(
    private _http : HttpClient
  ) { }

  enroll(user:Ticket){
    return this._http.post<any>(this._url,user);
  }
}
