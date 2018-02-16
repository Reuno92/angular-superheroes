import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
        // A faire: envoyer le message _APRÈS_ la recupération des héros.
        this.messageService.add('HeroService: fetched heroes');
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero> {
        // A faire : Envoyer le message _APRÈS_ la récupération du héro.
        this.messageService.add(`HeroService: Fetched hero id=${id}`);
        return of(HEROES.find(hero => hero.id === id));
    }
}