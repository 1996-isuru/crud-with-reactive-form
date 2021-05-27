import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FetchapiComponent } from './fetchapi/fetchapi.component';

import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { AgePipe } from './pipes/age.pipe';
import { CustomPipePracticeComponent } from './custom-pipe-practice/custom-pipe-practice.component';
import { TitlePipe } from './pipes/title.pipe';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { TextFilterPipe } from './pipes/text-filter.pipe';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    FetchapiComponent,
    TestComponent,
    AgePipe,
    CustomPipePracticeComponent,
    TitlePipe,
    UsersComponent,
    TextFilterPipe,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
