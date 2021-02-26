import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Menu} from './menu'
import {Category} from '../site-layout/category'

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpclient:HttpClient) { }

  getAllMenu():Observable<Menu>{
    const menuUrl ="http://localhost:3000/menu";
    return this.httpclient.get<Menu>(menuUrl);
  }
  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpclient.get<Category>(categoriesUrl);
  }
  
  createMenu (menuBody:any):Observable<Menu>{
  const  menuUrl="http://localhost:3000/menu";
  return this.httpclient.post<Menu>(menuUrl, menuBody);
  }
  viewMenu (menuID:any):Observable<Menu>{
    const  menuUrl=`http://localhost:3000/menu/${menuID}`;
    return this.httpclient.get<Menu>(menuUrl);
    }
  updateMenu (menuId:any, menuBody:any):Observable<Menu>{
    const  menuUrl="http://localhost:3000/menu/" +menuId;
    return this.httpclient.put<Menu>(menuUrl, menuBody);
    }
    deleteMenu (menuId:any):Observable<Menu>{
      const  menuUrl="http://localhost:3000/menu/" +menuId;
      return this.httpclient.delete<Menu>(menuUrl,);
      }
      searchCategoryMenu (categoryId:any):Observable<Menu>{
        const  menuUrl="http://localhost:3000/menu?categoryId=" +categoryId;
        return this.httpclient.get<Menu>(menuUrl,);
        }
        searchDateMenu (dateParam:any):Observable<Menu>{
          const  menuUrl="http://localhost:3000/menu/date=" +dateParam;
          return this.httpclient.get<Menu>(menuUrl,);
          }
         
      
}
