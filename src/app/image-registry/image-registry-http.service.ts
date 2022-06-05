import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageRegistryHttpService {

  constructor(private _http: HttpClient) { }

  getImages() {
    return this._http.get('http://localhost:5000/images')
  }
}
