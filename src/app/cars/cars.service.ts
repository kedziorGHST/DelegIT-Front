import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cars } from './cars.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  formData: Cars;
  readonly rootURL = 'http://localhost:5000/api';
  list: Cars[];

  constructor(private http: HttpClient) { }

  postCar() {
    console.log(this.formData);
    return this.http.post(this.rootURL + '/Cars', this.formData);
  }

  putCar() {
    return this.http.put(this.rootURL + '/Cars/' + this.formData.id, this.formData);
  }

  deleteCar(id) {
    return this.http.delete(this.rootURL + '/Cars/' + id);
  }

  getCars() {
    return this.http.get(this.rootURL + '/Cars')
    .toPromise()
    .then(res => this.list = res as Cars[]);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Cars')
    .toPromise()
    .then(res => this.list = res as Cars[]);
  }
}
