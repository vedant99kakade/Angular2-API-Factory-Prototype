import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from "@angular/http";


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; //package includes diffrent observable oprators
import { Observable } from "rxjs/Observable"; //http service returns observables as a response

@Injectable()
export class HTTPService {

  constructor(private http: Http) { }

  callGetApi(apiurl: string, params?: URLSearchParams) {
    return this.http.get(apiurl, {
      search: params
    }).map(
      (response: Response) => {
        return this.handleResponse(response.json());
      }
      )
      .catch(
      (error: Response) => {
        return this.handleErrorResponse(error.json());
      }
      );
  }

  callPostApi(apiurl: string, body: any, options?) {
    return this.http.post(apiurl, body, options).map(
      (response: Response) => {
        return this.handleResponse(response.json());
      }
    ).catch(
      (error: Response) => {
        return this.handleErrorResponse(error.json());
      }
      );
  }

  callPutApi(apiurl: string, body: any, params?: URLSearchParams) {
    return this.http.post(apiurl, body, {
      search: params
    }).map(
      (response: Response) => {
        return this.handleResponse(response.json());
      }
      ).catch(
      (error: Response) => {
        return this.handleErrorResponse(error.json());
      }
      );
  }

  callDeleteApi(apiurl: string, params?: URLSearchParams) {
    return this.http.post(apiurl, {
      search: params
    }).map(
      (response: Response) => {
        return this.handleResponse(response.json());
      }
      ).catch(
      (error: Response) => {
        return this.handleErrorResponse(error.json());
      }
      );
  }

  // prepares the URLSearchParams required by http methods
  prepareRequestParams(params): URLSearchParams {
    let searchParam: URLSearchParams = new URLSearchParams();
    if (typeof params == 'object') {
      for (var i in params) {
        searchParam.set(i, params[i]);
      }
      return searchParam;
    }
    return null;
  }

  // checks for response status and returns response back
  handleResponse(response) {
    if (response.status == 200) {
      return response;
    } else {
      return null;
    }
  }

  // handles error response and returns message received from server
  handleErrorResponse(error) {
    return Observable.throw(error.message || "Server Error");
  }

}
