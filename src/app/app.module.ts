import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { TermComponent } from './loan/term/term.component';
import { VehicleComponent } from './loan/vehicle/vehicle.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { InterestRatesComponent } from './interest-rates/interest-rates.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    HomeMenuComponent,
    ContactUsComponent,
    GallaryComponent,
    FaqComponent,
    FooterComponent,
    ServicesComponent,
    TermComponent,
    VehicleComponent,
    HomeloanComponent,
    InterestRatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
