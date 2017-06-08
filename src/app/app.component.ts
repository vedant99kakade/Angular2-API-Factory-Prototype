import { Component } from '@angular/core';
import { ConnectorFactoryService } from "app/connector-factory.service";
import { JobFactoryService } from "app/job-factory.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private connectorFactory: ConnectorFactoryService, 
    private jobFactory: JobFactoryService //inject the factories in component
  ) {

  }

  // component data
  private listOfData: any;

  // component events
  getConnectorListOfNames() {
    this.connectorFactory.getConnectorList_Names((result, response) => {
      if (result.toLowerCase().trim() === "success") {
        this.listOfData = response;
      } else {
        console.log(response);
      }
    });
  }

  getConnectorListOfIds() {
    this.connectorFactory.getConnectorList_Ids((result, response) => {
      if (result.toLowerCase().trim() === "success") {
        this.listOfData = response;
      } else {
        console.log(response);
      }
    });
  }

  getJobsListOfNames() {
    this.jobFactory.getJobsList_Names((result, response) => {
      if (result.toLowerCase().trim() === "success") {
        this.listOfData = response;
      } else {
        console.log(response);
      }
    });
  }

  getJobsListOfIds() {
    this.jobFactory.getJobsList_Ids((result, response) => {
      if (result.toLowerCase().trim() === "success") {
        this.listOfData = response;
      } else {
        console.log(response);
      }
    });
  }

}
