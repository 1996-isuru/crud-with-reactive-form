import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FetchapiComponent } from './fetchapi/fetchapi.component';

import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    FetchapiComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
