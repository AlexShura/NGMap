import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { DataService } from '../services/data.service';
import {  Comp } from '../../comp';
import { randomString } from '../../randomid';

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
    items: Comp[];
    collection = 'comp';
    
    ngOnInit() {
      this.dataService.getItems('comp').subscribe(items => {
        //console.log(items);
        this.items =items;
      });
    }

    
    onSubmit() {
      if(this.item.name){
       let rs = randomString(15);
       this.item.id = rs;
       this.dataService.addItem(this.item, this.collection);
      }
    }

}
