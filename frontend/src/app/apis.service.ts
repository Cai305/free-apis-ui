import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Api } from './api.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  baseurl = "https://api.publicapis.org/entries"
  constructor(private http: HttpClient) { }

  getAllApis():Observable<any>{
    return this.http.get(this.baseurl)
  }
}
