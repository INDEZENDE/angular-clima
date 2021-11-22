import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  // Componetes que vamos a usar
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TiempoComponent

  ],
  // Módulos importados
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  // Servicios
  providers: [],
  // Indica el punto de partida de la aplicación
  bootstrap: [AppComponent]
})
export class AppModule { }
