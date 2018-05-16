import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
// Importo todas las librerias necesarias

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  // VOy a tener un heroe modificable en tiempo real
  @Input() hero: Hero;

  // Para usar la ruta que tenga activa en el momento usaré el Activated
  // Y para volver a la ruta anterior el Location
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Comienzo con el getHero
    this.getHero();
  }

  getHero(): void {
    // Obtengo la id de la ruta donde estoy
    const id = +this.route.snapshot.paramMap.get('id');
    // A partir de la id ya consigo al hero completo
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    // vuelvo a la ruta anterior
    this.location.back();
  }

 save(): void {
   // Modificacion de un heroe con el heroSerivce update
    this.heroService.updateHero(this.hero)
    // Y al realizarse el update me vuelvo a la ruta anterior  
    .subscribe(() => this.goBack());
      
  }
}
