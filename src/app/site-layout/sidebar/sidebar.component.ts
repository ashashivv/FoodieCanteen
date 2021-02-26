import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/menu/menu.service';
import { Category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

categoryList: any;
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getCategories().subscribe(data =>{
      this.categoryList = data;
    })
  }

}
