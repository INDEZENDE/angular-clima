import { Injectable } from '@angular/core';
// Se ocupa para hacer la petición
import { HttpClient } from '@angular/common/http';
// Variables que utiliza el servicio para funcionar
const urlBase: string = 'https://api.openweathermap.org/data/2.5/weather?q=';
const appId: string = '8242b4b4702364827a06457d89f265ce'


@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) { }

  getEstadoTiempo(ciudad: string){
    // URL de la petición
    const url =`${urlBase}${ciudad}&appid=${appId}`
    // Respuesta
    return this.http.get(url);
  }
}
