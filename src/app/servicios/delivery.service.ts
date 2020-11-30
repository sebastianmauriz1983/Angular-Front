import { Injectable } from '@angular/core';
//import  *  as  data  from  'src/assets/datos/platos.json';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Plato } from '../entidades/Plato';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  //platosFile:any  = (data  as  any).default;
  public platosData:Plato[]=[];
  public platoEncontrado:Plato;

  constructor(public http: HttpClient) {
    console.log("Servicio Cargado!!!");
   }
   
  public getPlatos():any[]{
    return this.platosData;
    console.log(this.platosData);
  }

  public getPlatoXId(idx:number):any{
      for(let plato of this.platosData){
          if(plato.id == idx){
            return plato;
          } 
      }
  }


  getPlatosFromDataBase(){
    return this.http.get("http://localhost:9000/api/v1/angular/").pipe(
      map( platosData => platosData));
  }

  //busca un plato por el id
  getPlatoEnBaseDatosXId(idx:string){
    return this.http.get("http://localhost:9000/api/v1/angular/" + idx).pipe(
      map( platoEncontrado => platoEncontrado));
  }

  //busca los platos por un terminode busqueda
  getPlatosBusquedaFromDataBase(termino:string){
    return this.http.get("http://localhost:9000/api/v1/angular/search?filtro=" + termino).pipe(
      map( platosSearch => platosSearch));
  }



  platoAdminUrl:string = "http://localhost:9000/api/v1/angular/";
  //array
  //ingre:string[];
  ingre = ["masa","queso"]; 
  
  //ingre = "masa";

 

 newPlato( platoNuevo: Plato) {
  const headers = { 'content-type': 'application/json'} 
  const body=JSON.stringify(platoNuevo);

  return this.http.post<Plato>( this.platoAdminUrl, body,{'headers':headers}).pipe(map( nuevoPlato => {
          //console.log(nuevoPlato.nombre);
          return nuevoPlato;
        }));
}

  

   updatePlato( platoUpdate: Plato) {
    const headers = { 'content-type': 'application/json'} 
    const body=JSON.stringify(platoUpdate);
    return this.http.put<Plato>( this.platoAdminUrl+platoUpdate.id, body,{'headers':headers} ).pipe(map( res => {
            console.log(res.nombre);
            return res;
          }));
  }

    deletePlato(idPlato: string){
      return this.http.delete( this.platoAdminUrl+idPlato)
            .pipe(
            map( res => {
              console.log(res);
              return res;
            }));
    }

  }