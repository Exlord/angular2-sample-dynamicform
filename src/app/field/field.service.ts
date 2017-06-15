/**
 * Created by Exlord on 6/13/2017.
 */
import {Injectable}    from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Field} from './field';
import {FieldType} from './field-type.enum';

@Injectable()
export class FieldService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private fieldsUrl = 'api/fields';  // URL to web api

  constructor(private http: Http) {
  }

  getFields(): Promise<Field[]> {
    return this.http.get(this.fieldsUrl)
      .toPromise()
      .then(response => response.json().data as Field[])
      .catch(this.handleError);
  }


  // getHero(id: number): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Hero)
  //     .catch(this.handleError);
  // }

  delete(id: number): Promise<void> {
    const url = `${this.fieldsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  save(field: Field): Promise<Field> {
    return field.id == null ? this.create(field) : this.update(field);
  }

  create(field: Field): Promise<Field> {
    return this.http
      .post(this.fieldsUrl, JSON.stringify(field), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Field)
      .catch(this.handleError);
  }

  update(field: Field): Promise<Field> {
    const url = `${this.fieldsUrl}/${field.id}`;
    return this.http
      .put(url, JSON.stringify(field), {headers: this.headers})
      .toPromise()
      .then(() => field)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
