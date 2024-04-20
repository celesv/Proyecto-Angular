import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css'],
})
export class ListaAutosComponent implements OnInit {

  mostrarImagen = true;

  constructor() {}

  ngOnInit() {}

  mostrar () {this.mostrarImagen = !this.mostrarImagen}

  recepcion(dato:number) {
    console.log(`Dato:`, dato)
  }

  public autos = [
    {
      codigo: '001',
      marca: 'Toyota',
      modelo: 'Corolla',
      ano: 2021,
      color: 'Gris',
      km: 60000,
      precio: 20000,
      calificacion: 5,
      imagen: 'toyota-corolla.jpg',
    },
    {
      codigo: '002',
      marca: 'Honda',
      modelo: 'Civic',
      ano: 2020,
      color: 'Blanco',
      km: 45000,
      precio: 18000,
      calificacion: 4,
      imagen: 'honda-civic.jpg',
    },
    {
      codigo: '003',
      marca: 'Ford',
      modelo: 'Fusion',
      ano: 2019,
      color: 'Negro',
      km: 55000,
      precio: 16000,
      calificacion: 4,
      imagen: 'ford-fusion.jpg',
    },
    {
      codigo: '004',
      marca: 'Chevrolet',
      modelo: 'Cruze',
      ano: 2018,
      color: 'Rojo',
      km: 70000,
      precio: 15000,
      calificacion: 3,
      imagen: 'chevrolet-cruze.jpg',
    },
    {
      codigo: '005',
      marca: 'Volkswagen',
      modelo: 'Jetta',
      ano: 2017,
      color: 'Azul',
      km: 80000,
      precio: 14000,
      calificacion: 3,
      imagen: 'volkswagen-jetta.jpg',
    },
    {
      codigo: '006',
      marca: 'Nissan',
      modelo: 'Sentra',
      ano: 2016,
      color: 'Plata',
      km: 90000,
      precio: 13000,
      calificacion: 3,
      imagen: 'nissan-sentra.jpg',
    },
    {
      codigo: '007',
      marca: 'Hyundai',
      modelo: 'Elantra',
      ano: 2015,
      color: 'Blanco',
      km: 100000,
      precio: 12000,
      calificacion: 2,
      imagen: 'hyundai-elantra.jpg',
    },
  ];
}
