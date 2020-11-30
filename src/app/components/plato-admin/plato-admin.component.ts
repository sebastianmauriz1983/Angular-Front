import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Plato } from 'src/app/entidades/Plato';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plato-admin',
  templateUrl: './plato-admin.component.html',
  styleUrls: ['./plato-admin.component.css']
})
export class PlatoAdminComponent implements OnInit {


  plato:Plato = {
    id: 0,
    nombre:"",
    precio: 0,
    rubro:"",
    pathImagen:"",
    ingrediente:[]
  };
  new = false;
  idplato: string;
  resultadoOperacion = "";
  
  constructor(private servicioDelivery:DeliveryService, private router:Router, private activeRoute:ActivatedRoute) {
    this.activeRoute.params
    .subscribe(
      parametros => {
        this.idplato = parametros['id'];
        if(this.idplato != "nuevo"){
          servicioDelivery.getPlatoEnBaseDatosXId(this.idplato)
          .subscribe(platoEncontrado => this.plato = platoEncontrado as Plato);
        }else{
          console.log("ES NUEVO");
        }
      }
    );

  }

  ngOnInit() {
  }

  save() {
    if(!this.validarSiNumero(this.plato.precio)){
      this.resultadoOperacion = ("Ingrese un numero para el precio.");
      return;
    }
    if ( this.idplato === 'nuevo') {
      console.log('nuevo');
      this.servicioDelivery.newPlato(this.plato)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }
        },
        error => console.error(error));
    } else {
      console.log(`Update ${ this.idplato }`);
      this.servicioDelivery.updatePlato(this.plato)
        .subscribe( data => {
          if(data && data.id){
            this.resultadoOperacion = "Operación finalizada con exito";
            this.router.navigate(['/lista']);
            console.log(data);
          }else{
            this.resultadoOperacion = "Error en la operación, verifique los datos";
          }         
        },
        error => console.error(error));
    }
  }


  addNew(formu: NgForm) {
    this.router.navigate(['/admin', 'nuevo']);
    formu.reset({
      id:"0",
      nombre:"",
      precio:"",
      rubro:"",
      imagenPath:""
    });
  }

  validarSiNumero(numero:number):boolean{
    if(!/^([0-9])*$/.test(numero.toString())) 
        return false;
    return true;
    
  }
  
}
