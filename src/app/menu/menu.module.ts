import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { ViewAllMenuComponent } from './view-all-menu/view-all-menu.component';
import { ViewMenuByDateComponent } from './view-menu-by-date/view-menu-by-date.component';
import { ViewMenuByCategoryComponent } from './view-menu-by-category/view-menu-by-category.component';


@NgModule({
  declarations: [MenuComponent, AddMenuComponent, ViewMenuComponent, UpdateMenuComponent, DeleteMenuComponent, ViewAllMenuComponent, ViewMenuByDateComponent, ViewMenuByCategoryComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
