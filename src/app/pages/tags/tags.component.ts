import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/model/tags.model';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  constructor(private _food : FoodService){}
  tags : Tag[] = []
  
  
  ngOnInit(): void {
    this.tags = this._food.getAllTag()
  }
}
