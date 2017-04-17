import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './map/map.component';
import { ContentComponent } from './content/content.component';
import { SliderComponent } from './slider/slider.component';

// Google maps
import { AgmCoreModule } from 'angular2-google-maps/core';
// Firebase
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCZVjGfLAc_Wy5ecxZ3FS9s_os2Q9FtltQ',
  authDomain: 'ipialesapp.firebaseapp.com',
  databaseURL: 'https://ipialesapp.firebaseio.com',
  projectId: 'ipialesapp',
  storageBucket: 'ipialesapp.appspot.com',
  messagingSenderId: '658712497572'
};

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MapComponent,
    ContentComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBinSnoYcLVV3e4NoSb0ZdrJmokC6RA960'
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
