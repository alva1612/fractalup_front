import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { deezerBaseUrl } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private readonly _http: HttpClient) { }

  history() {
    return this._http.get(`${deezerBaseUrl}/user/history`)
  }
}
