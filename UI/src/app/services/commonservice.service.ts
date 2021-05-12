import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Base_Url } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class CommonserviceService {
  private httpOptions: any;
  private baseUrl = Base_Url;
  public dataResponse;

  // error messages received from the login attempt
  public errors: any = [];
  postId: any;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  public login(userDetails) {
    let dataResponse;
    this.http
      .post(this.baseUrl + 'auth/login/', userDetails, this.httpOptions)
      .subscribe((data) => {
        dataResponse = data;
      });
    return dataResponse;
  }

  public category(category) {
    let dataResponse;
    this.http
      .post(this.baseUrl + 'api/projectcategory/', category, this.httpOptions)
      .subscribe((data) => {
        dataResponse = data;
      });
    return dataResponse;
  }

  public project(project) {
    let dataResponse;
    this.http
      .post(this.baseUrl + 'api/projectdetails/', project, this.httpOptions)
      .subscribe((data) => {
        dataResponse = data;
      });
    return dataResponse;
  }
  public categoryList(): Observable<any> {
    return this.http.get(
      this.baseUrl + 'api/projectcategory/',
      this.httpOptions
    );
  }
  public projectList(): Observable<any> {
    return this.http.get(
      this.baseUrl + 'api/projectdetails/',
      this.httpOptions
    );
  }
  public userList(): Observable<any> {
    return this.http.get(
      this.baseUrl + 'api/userDetails/',
      this.httpOptions
    );
  }

}
