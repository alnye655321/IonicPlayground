import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetService {

    url: string = 'https://.herokuapp.com/get';
  data1: any;
  response: any;
  testAuthObj: any;

  constructor(public http: Http) {
    console.log('Hello Provider');    
  }

    getTips(getID) {
    if (this.response) {
      return Promise.resolve(this.response);
    }

    return new Promise(resolve => {
      this.http.get(this.url + '/' + getID)
        .map(res => res.json())
        .subscribe(data => {
          this.response = data;
          resolve(this.response);
        });
    });
  }
  
}