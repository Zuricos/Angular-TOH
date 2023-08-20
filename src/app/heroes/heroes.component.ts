import { Component } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { HEROES } from '../mock/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
