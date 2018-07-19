import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {  Comp } from '../../comp';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  item: Comp = {
    name: 'defoultTitle',
    id:''
  }
  
  
    constructor(private dataService: DataService) { }
    collection = 'comp';
    ngOnInit() {
      
    }

    
    onSubmit() {
      if(this.item.name != ''){
        this.item.id = 'ky';
        this.dataService.addItem(this.item, this.collection);
      }
    }

}
