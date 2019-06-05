import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(private http:HttpClient){

    }

    FetchCategories(){
        return this.http.get('https://stream-restaurant-menu-svc.herokuapp.com/category');
    }
    FetchDetail(type){
        return this.http.get(`https://stream-restaurant-menu-svc.herokuapp.com/item?category=${type}`)
    }
}