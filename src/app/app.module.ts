import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from '../environments/environment';
import { MarkersComponent } from './markers/markers.component';
import { DataService } from './services/data.service';
import { AdminComponent } from './admin/admin.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { GoogleMapsAPIWrapper } from '@agm/core';
import { MarkerManager } from '@agm/core';
import { AddCompComponent } from './add-comp/add-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkersComponent,
    AdminComponent,
    MapComponent,
    AddCompComponent
  ],
  imports: [ 
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDqUl59BPah8bU42xoC81qknTMJofpeask'
    })
  ],
  providers: [DataService,AngularFirestore,GoogleMapsAPIWrapper,MarkerManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
