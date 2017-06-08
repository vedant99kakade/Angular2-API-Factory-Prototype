import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HTTPService } from "app/http.service";
import { ConnectorFactoryService } from "app/connector-factory.service";
import { JobFactoryService } from "app/job-factory.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HTTPService, ConnectorFactoryService, JobFactoryService], //provider mentions the services to injector for dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
