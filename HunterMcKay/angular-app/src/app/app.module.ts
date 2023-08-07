import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { HamgurgerMenuComponent } from './hamgurger-menu/hamgurger-menu.component';
import { PicturesPageComponent } from './pictures-page/pictures-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { KariSydneyPageComponent } from './kari-sydney-page/kari-sydney-page.component';
import { DhavalSandeepPageComponent } from './dhaval-sandeep-page/dhaval-sandeep-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HamgurgerMenuComponent,
    PicturesPageComponent,
    HomeComponentComponent,
    KariSydneyPageComponent,
    DhavalSandeepPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
