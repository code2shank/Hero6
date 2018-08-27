import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../core/classes/hero';
import {Location } from '@angular/common';
import {ActivatedRoute } from '@angular/router';
import { HeroService} from '../core/services/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }


  getHero() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
