import { Injectable } from '@angular/core';
import { HTTPService } from "app/http.service";
import { CommonURL } from './commons/common';

@Injectable()
export class JobFactoryService {

  constructor(private httpService: HTTPService) { }

  // factory data 
  private parameters = {
      'user_session_key': "de43wty56",
      'job_id': 123467689
  }

  // factory events
  getJobsList_Ids(callback){

    let searchParams = this.httpService.prepareRequestParams(this.parameters);
    this.httpService.callGetApi(CommonURL.URL_HTPP_GET_JOBS_LIST, searchParams).subscribe(
      (res) => {
        callback("success" ,res.response_data.jobs_id);
      },
      (err) => {
        console.log("Error in fetching jobs list for Ids");
        callback("error", err);
      }
    );
  }

  getJobsList_Names(callback){

    let searchParams = this.httpService.prepareRequestParams(this.parameters);
    this.httpService.callGetApi(CommonURL.URL_HTPP_GET_JOBS_LIST, searchParams).subscribe(
      (res) => {
        callback("success" ,res.response_data.jobs_names);
      },
      (err) => {
        console.log("Error in fetching jobs list for Ids");
        callback("error", err);
      }
    );
  }

}
