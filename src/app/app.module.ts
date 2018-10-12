import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { GetFlightsService } from '../services/get-flights.service';
import { DahsboardComponent } from './dahsboard/dahsboard.component';
import { SearchComponent } from './search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { AirportService } from '../services/airport.service';
import { FormsModule } from '@angular/forms';
import { GetDataFromLoginService } from '../services/get-data-from-login.service';
import { HeaderComponent } from './header/header.component';
import { PassFlightSharedService } from '../services/pass-flight-shared.service';
import { ClockComponent } from './clock/clock.component';
import { HomeComponent } from './home/home.component';

const routing : Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DahsboardComponent},
  { path: 'search', component: SearchComponent}  
]

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    DahsboardComponent,
    SearchComponent,
    HeaderComponent,
    ClockComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routing),
    FormsModule
  ],
  providers: [GetFlightsService, AirportService, GetDataFromLoginService, PassFlightSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
