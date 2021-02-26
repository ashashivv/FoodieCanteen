import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  
  {component:LoginComponent, path:'login'},
  {component:RegisterComponent, path:'register'},
  {component:ListOrdersComponent, path:'orders'},

  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
