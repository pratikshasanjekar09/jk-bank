import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FaqComponent } from './faq/faq.component';
import { ServicesComponent } from './services/services.component';
import { HomeloanComponent } from './homeloan/homeloan.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { TermComponent } from './term/term.component';
import { InterestRatesComponent } from './interest-rates/interest-rates.component';

const routes: Routes = [
  { path: '', component: HomeMenuComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'gallary', component: GallaryComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'interest-rates', component: InterestRatesComponent },
  {
    path: 'loans',
    children: [
      { path: 'vehicle-loan', component: VehicleComponent },
      { path: 'term-loan', component: TermComponent },
      { path: 'home-loan', component: HomeloanComponent },
      // Add more loan types as needed
    ]
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
