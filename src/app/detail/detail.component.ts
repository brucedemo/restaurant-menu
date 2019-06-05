import { Component, OnInit ,Input} from '@angular/core';
import {AppService}from  '../app.service'
import {Detail} from '../categoryDetail.model'
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit,OnChanges{
  @Input() type:string;
  catetoryDetail:Detail[]=[];
  keys=['id','name',
    'description',
    'short_name',
    'small_portion_name',
    'large_portion_name',
    'price_small',
    'price_large']
  constructor(private appService:AppService) { }
  ngOnChanges(){
    if(this.type){
      this.appService.FetchDetail(this.type).subscribe((res:Detail[])=>{
        this.catetoryDetail=res;
      })
    }
    
  }
  ngOnInit() {
    
  }

}
