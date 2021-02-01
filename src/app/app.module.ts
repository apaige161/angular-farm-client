import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';

import { ContactComponent } from './components/contact/contact.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MastheadComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
