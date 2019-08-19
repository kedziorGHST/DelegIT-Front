import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ride } from './rides.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Cars } from 'app/cars/cars.model';
import { User } from 'app/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class RidesService {

  formData: Ride;
  readonly rootURL = 'http://localhost:5000/api';
  list: Ride[];
  rideList: Ride[];
  carList: Cars[];
  userList: User[];

  constructor(private http: HttpClient) { }

  postRide() {
    console.log(this.formData);
    return this.http.post(this.rootURL + '/Rides', this.formData);
  }

  putRide() {
    return this.http.put(this.rootURL + '/Rides/' + this.formData.id, this.formData);
  }

  deleteRide(id) {
    return this.http.delete(this.rootURL + '/Rides/' + id);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Rides')
    .toPromise()
    .then(res => this.list = res as Ride[]);
  }

  userRideList() {
    return this.http.get(this.rootURL + '/Rides/list/1')
    .toPromise()
    .then(res => this.rideList = res as Ride[]); // TO DO - Invalid
  }

  numberOfRides() {
    var obj = this.http.get(this.rootURL + '/Rides/list/1');
    var count = Object.keys(obj).length;
    return count;
  }

  getCars() {
    return this.http.get(this.rootURL + '/Cars')
    .toPromise()
    .then(res => this.carList = res as Cars[]);
  }

  getUsers() {
    return this.http.get(this.rootURL + '/Users')
    .toPromise()
    .then(res => this.userList = res as User[]);
  }
}
