import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // Introduce letra por letra para buscar (término)
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms.pipe(
      // Espear 300 ms después de pulsar cada tecla
      // antes de considerar que es un término usable
      debounceTime(300),

      // ignora nuevos términos si es igual que el anterior
      distinctUntilChanged(),

      // Cambia cada vez que cambia el término de búsqueda
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
