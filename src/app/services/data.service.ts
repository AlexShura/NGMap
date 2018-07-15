import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from '../../item';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<any>;

  constructor(public afs: AngularFirestore) { 
   // this.items = this.afs.collection('items').valueChanges();
   this.items = this.afs.collection('items').snapshotChanges().pipe(map(changes =>{
     return changes.map(a => {
       const data = a.payload.doc.data() as Item;
       data.id = a.payload.doc.id;
       return data;
     })
   }))
  }

  addItem(data){
    this.afs.collection('items').add(data);
  }
 
  getItems(){
    return this.items;
  }

}

