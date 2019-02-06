import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesJSON: HeroesService) { }

  ngOnInit() {
    this.heroes = this.heroesJSON.getHeroes();
    console.log(this.heroes);
  }

}
