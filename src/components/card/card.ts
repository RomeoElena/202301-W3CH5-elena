/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './card.scss';
import { PokesStructure } from '../../models/pokesStructure';

export class Card extends Component {
  constructor(public selector: string, public pokemons: PokesStructure) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
    this.pokemons = { ...pokemons };
  }

  private createTemplate() {
    return `
              <li class="card"><img src="${this.pokemons.img}" alt="" width="200px" class="card__img">
              <p class="card__name">${this.pokemons.name}</p><button>💟</button></li>
    `;
  }
}
