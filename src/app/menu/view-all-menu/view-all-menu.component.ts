import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-view-all-menu',
  templateUrl: './view-all-menu.component.html',
  styleUrls: ['./view-all-menu.component.css']
})
export class ViewAllMenuComponent implements OnInit {
  menuList : any;

  constructor(
    private menuService:MenuService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.menuService.getAllMenu().subscribe(data =>{
      this.menuList = data;
      console.log(this.menuList);
    })
  }
  // clickFunction(id:any){
  //   console.log(id);
  // }

  abc(id:any){
    this.router.navigate([`/menu/view-menu/${id}`]);
  }

}
