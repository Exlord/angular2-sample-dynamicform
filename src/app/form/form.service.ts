import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private formUrl = 'api/form';  // URL to web api

  constructor(private http: Http) {
  }

  getData(): Promise<any[]> {
    return this.http.get(this.formUrl)
      .toPromise()
      .then(response => response.json().data as any[])
      .catch(this.handleError);
  }

  create(form): Promise<any> {
    return this.http
      .post(this.formUrl, JSON.stringify(form), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
