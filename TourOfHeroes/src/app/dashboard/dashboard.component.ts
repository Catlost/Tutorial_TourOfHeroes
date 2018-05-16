import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  // Le pasaré un heroService ya que en el uso http y el message
  constructor(private heroService: HeroService) { }
  

  ngOnInit() {
    // al iniciar llamare al metodo getHeroes
    this.getHeroes();
  }

  getHeroes(): void {
    // El cuál me dara la lista de heroes pero reducida a 4
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
