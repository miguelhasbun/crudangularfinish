import { Component, OnInit } from '@angular/core';
import { Lado_Fuerza } from './models/Lado_Fuerza';
import {FuerzaService} from './fuerza.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jediarray: any=[];
  selectJedi: Lado_Fuerza= new Lado_Fuerza();

  constructor(private fuerzaService: FuerzaService){}

  ngOnInit(){
    this.fuerzaService.getJedi()
    .subscribe(
      res=>{
        console.log(res);
        this.jediarray= res;
      },
      err=> console.log(err)
    )
  }  

  openforUpdate(jedi:Lado_Fuerza){
    this.selectJedi= jedi; 
  }

  addOrUpdate(){
    //create 
    console.log('hola');
    if (this.selectJedi.id === 0){
      this.selectJedi.id= this.jediarray[this.jediarray.length - 1].id + 1;
      this.jediarray.push(this.selectJedi);
      console.log(this.selectJedi);
      this.fuerzaService.saveJedi(this.selectJedi)
      .subscribe(
        res=>{
          console.log(res)
        },
        err=>console.log(err)
      );
    }
    //edit
    else{
      this.fuerzaService.updateJedi(this.selectJedi)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      );
    }

    this.selectJedi= new Lado_Fuerza();
  }

  

  delete(){
    if(confirm('¿Estas seguro de eliminar el jedi?')){
      this.jediarray= this.jediarray.filter(x=> x!=this.selectJedi)
      //delete on database
      this.fuerzaService.deleteJedi(this.selectJedi.id)
      .subscribe(
        res=>console.log(res),
        err=>console.log(err)
      );
      this.selectJedi= new Lado_Fuerza();
    }
  }

}
