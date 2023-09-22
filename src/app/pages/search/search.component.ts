import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private route : ActivatedRoute , private router : Router){}

  searchitem = '';

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params.searchItem)
        this.searchitem = params.searchItem ; 
    })
  }

  search(item : string){
    if(item){
      this.router.navigate(['/search/'+item ])
    }
  }

}
