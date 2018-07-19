import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../../item';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.css']
})
export class MarkersComponent implements OnInit {
  items: Item[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getItems('markers').subscribe(items => {
      //console.log(items);
      this.items =items;
    });
  }

}
