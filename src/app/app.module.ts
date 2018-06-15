import { HomeComponent } from './bs-navbar/home/home.component';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule } from 'angularfire2/auth';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';

import { VehiclesComponent } from './bs-navbar/vehicles/vehicles.component';
import { PerformanceComponent } from './bs-navbar/performance/performance.component';
import { CustomersComponent } from './bs-navbar/customers/customers.component';
import { HistoryComponent } from './bs-navbar/history/history.component';
import { LoginComponent } from './bs-navbar/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    VehiclesComponent,
    PerformanceComponent,
    CustomersComponent,
    HistoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'vehicles', component: VehiclesComponent},
      {path: 'performance', component: PerformanceComponent},
      {path: 'customers', component: CustomersComponent},
      {path: 'history', component: HistoryComponent},
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
