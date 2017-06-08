import { Injectable } from '@angular/core';
import { HTTPService } from "app/http.service";
import { CommonURL } from './commons/common';

@Injectable()
export class ConnectorFactoryService {

  constructor(private httpService: HTTPService) { 

  }

  // factory data 
  private parameters = {
      'user_session_key': "de43wty56",
      'connector_id': 123456789
  }

  // factory events
  getConnectorList_Names(callback){

    let searchParams = this.httpService.prepareRequestParams(this.parameters);
    this.httpService.callGetApi(CommonURL.URL_HTTP_GET_CONNECTOR_LIST, searchParams).subscribe(
      (res) => {
        callback("success" ,res.response_data.connectors_names);
      },
      (err) => {
        console.log("Error in fetching connectors list for names");
        callback("error", err);
      }
    );
  }

  getConnectorList_Ids(callback){

    let searchParams = this.httpService.prepareRequestParams(this.parameters);
    this.httpService.callGetApi(CommonURL.URL_HTTP_GET_CONNECTOR_LIST, searchParams).subscribe(
      (res) => {
        callback("success" ,res.response_data.connectors_id);
      },
      (err) => {
        console.log("Error in fetching connectors list for Ids");
        callback("error", err);
      }
    );
  }

}
