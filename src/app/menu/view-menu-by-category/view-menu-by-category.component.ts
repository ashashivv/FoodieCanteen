import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MenuService } from '../menu.service';


@Component({
  selector: 'app-view-menu-by-category',
  templateUrl: './view-menu-by-category.component.html',
  styleUrls: ['./view-menu-by-category.component.css']
})
export class ViewMenuByCategoryComponent implements OnInit {
searchCategory:any;
menuList:any;


  constructor(private activatedRoute:ActivatedRoute,
    private menuService:MenuService,
    private router: Router) { }

  ngOnInit(): void {
 this.activatedRoute.params.subscribe(data =>{
   this.searchCategory = data.id;

   this.menuService.searchCategoryMenu(this.searchCategory).subscribe(categoryData=>{
     this.menuList = categoryData;
   })
 })

}
abc(id:any){
  this.router.navigate([`/menu/view-menu/${id}`]);
}
}