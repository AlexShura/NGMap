import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../../item';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {

item: Item = {
  lat: 32,
  lng: 34,
  title: 'defoultTitle'
}

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
  }

  onSubmit() {
    if(this.item.title != '' && this.item.lat != 0 && this.item.lng != 0){
      this.dataService.addItem(this.item);
    }
  }


}
