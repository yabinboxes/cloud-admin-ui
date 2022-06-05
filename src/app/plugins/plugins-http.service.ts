import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PluginsHttpService {

  constructor(private _http: HttpClient) { }

  getPlugins() {
    return this._http.get('http://localhost:5000/plugins')
  }
}
