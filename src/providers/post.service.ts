import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    url: string = 'https://herokuapp.com/post';
  data1: any;
  tipsResponse: any;
  userAuthObj: any;
  userRes: any;

  constructor(public http: Http) {
    console.log('Hello Provider');
  }

    post() {
    return new Promise((resolve,reject) => {
    var json = { obj_id: 1 };
    var params = json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let postUrl = this.url + '/new';

    this.http.post(postUrl,
        params, {
            headers: headers
        })
        .map(res => res.json())
        .subscribe(data => {
            this.userRes = data;
            resolve(this.userRes);
        },
        error => reject(error),
        () => console.log("Finished")
    );
    });
  }

}