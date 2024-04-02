import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentService {


  constructor(private _http: HttpClient) {

  }
  apiURL = "https://66096cfc0f324a9a28834187.mockapi.io/student/";

  getAll() {
    return this._http.get(this.apiURL);
  }

  getByID(id: any) {
    return this._http.get(this.apiURL + id);
  }

  deleteByID(id: any) {
    return this._http.delete(this.apiURL + id);
  }

  insert(form: any) {
    return this._http.post(this.apiURL, form);
  }

  edit(id: any, form: any) {
    return this._http.put(this.apiURL + id, form);
  }
}
