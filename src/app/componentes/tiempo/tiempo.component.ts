import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from '../../service/temperatura.service'



@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {
  // Declaro un objedo de la clase FormGroup
  formulario!: FormGroup;
  tiempo: any;
  name: any;
  temperatura: any;
  humedad: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  showError: boolean = false;
  mensajeError: string = "";
  fecha = new Date();

  // Inyectamos la clase FormBuilder (validaciones y controlar cada campo)
  constructor(private fb: FormBuilder, private _tiempo: TemperaturaService) {
    this.iniciaFormulario();
   }

  ngOnInit(): void {
  }
  // Método que crea e inicia un formulario
  iniciaFormulario(){
    this.formulario! = this.fb. group({
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    })
  }

  consultar(){
    console.log(this.formulario);
    this._tiempo.getEstadoTiempo( this.formulario.get('ciudad')!.value)
      .subscribe(respuesta => {
        this.tiempo = respuesta;
        this.name = this.tiempo.name;
        this.temperatura = this.tiempo.main.temp;
        this.humedad = this.tiempo.main.humidity;
        this.latitud = this.tiempo.coord.lat;
        this.longitud = this.tiempo.coord.lon;
        this.descripcion = this.tiempo.weather[0].description;
        console.log(respuesta);
      },
      // Manejo de errores
      error => {
        this.showError = true;
        this.mensajeError = "Error al consultar el tiempo. Inténtelo nuevamente"
        console.log(this.showError);
        console.log(this.mensajeError);
      })
  }

}
