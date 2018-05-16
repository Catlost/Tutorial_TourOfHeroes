import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  // array con los heroes
  
  // Le pasaré el HeroService que es el que tiene todo los servicios
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // Al iniciar llamaré al método getHeroes
    this.getHeroes();
  }

  getHeroes(): void {
    // A su vez este llamara el método getHeroes del HeroService
    this.heroService.getHeroes()
    // controlo los heroes
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    // Si no hay nombre no hará nada
    if (!name) { return; }
    // Si lo hay añadirá un nuevo heroe con ese nombre al array de heroes que tengo usando el heroService
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        // y la añado a la lista
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    // Lo limpio de la lista de heroes que tengo
    this.heroes = this.heroes.filter(h => h !== hero);
    // Y luego lo elimino con el heroService 
    this.heroService.deleteHero(hero).subscribe();
  }

}
