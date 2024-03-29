import './rxjs-extensions';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import {MaterializeDirective} from "angular2-materialize";

// Home
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './home/home.component';

// Project
import { VolunteerProjectComponent }  from './project/volunteer/volunteer-project.component';
import { OrganizationProjectComponent }  from './project/organization/organization-project.component';
import { ViewProjectComponent }  from './project/view/view-project.component';
import { SearchProjectComponent }  from './project/search/search-project.component';
import { ProjectService }  from './project/project.service';

import { AboutComponent }  from './about/about.component';
import { ContactComponent }  from './contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VolunteerProjectComponent,
    OrganizationProjectComponent,
    ViewProjectComponent,
    SearchProjectComponent,    
    MaterializeDirective,
  ],
  providers: [ ProjectService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
