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

@NgModule({
  declarations: [
    AppComponent,
    MarkersComponent,
    AdminComponent
  ],
  imports: [ 
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [DataService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
