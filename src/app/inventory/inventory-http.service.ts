import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryHttpService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private _http: HttpClient) { }

  getInventory() {
    return this._http.get('http://localhost:5000/inventory')
  }


}
