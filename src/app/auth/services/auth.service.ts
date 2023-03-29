import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { deezerLoginUrl } from 'src/app/constants/api.constants';
import { LoginDto } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly _http: HttpClient) {}

  $isLoggedIn = of(false);

  $token = of("")

  login() {
    const params = new HttpParams()
      .set('perms', 'basic_access,email')
      .append('app_id', '592464')
      .append('redirect_uri', 'https://fractalup.gobi.fun/')
      .append('response_type', 'token');
    return this._http.get(deezerLoginUrl, { params });
  }
}
