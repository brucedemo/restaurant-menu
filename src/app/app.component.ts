import { Component ,OnInit} from '@angular/core';
import {AppService}from './app.service'
import {Category} from './app.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   categories:Category[];
   type:string;
   constructor(private appservice:AppService){

   }
  ngOnInit(){
    this.appservice.FetchCategories().subscribe((res:Category[])=>{
        this.categories=res;
        console.log(this.categories);
    })
  }

  handleClick(name){
    this.type=name;
  }

}
