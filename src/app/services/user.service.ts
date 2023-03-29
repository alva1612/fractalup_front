import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deezerBaseUrl } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _http: HttpClient ) { }
  history() {
    return this._http.get(`${deezerBaseUrl}/user/history`)
  }
}
