import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { MenuComponent } from './menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ViewAllMenuComponent } from './view-all-menu/view-all-menu.component';
import { ViewMenuByCategoryComponent } from './view-menu-by-category/view-menu-by-category.component';
import { ViewMenuByDateComponent } from './view-menu-by-date/view-menu-by-date.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';

const routes: Routes = [
  { path: '', component:  ViewAllMenuComponent },
  { path: 'add-menu', component: AddMenuComponent },
  { path: 'delete-menu/:id', component: DeleteMenuComponent },
  { path: 'update-menu/:id', component: UpdateMenuComponent },
  // { path: 'list-menu', component: ViewAllMenuComponent },
  { path: 'view-menu/:id', component: ViewMenuComponent },
  { path: 'category/:id', component: ViewMenuByCategoryComponent },
  { path: 'search-date', component: ViewMenuByDateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
