import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MenuService } from '../menu.service';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {
menuID:any;
menuDetails: any;
image: any;
  constructor(private activatedRoute:ActivatedRoute,
    private menuService:MenuService,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.menuID = data.id;
    })
    this.menuService.viewMenu(this.menuID).subscribe(viewData=>{
      this.menuDetails = viewData;
      this.image = this.menuDetails.menuImage;

    })
  }
  btn(log:any){
//  alert("good night")
 this.router.navigate(['/login']);
  }

}
