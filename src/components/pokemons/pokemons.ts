import { Card } from '../card/card';
import { Component } from '../component/component';
import { PokesStructure } from '../../models/pokesStructure';
import { PokeApiRepo } from '../../services/poke.api.repo';

export class Pokemons extends Component {
  public pokemons!: PokesStructure[];
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string, public pokeApiRepo: PokeApiRepo) {
    super();
    this.template = this.createTemplate();
    this.load();
  }

  async load() {
    this.pokemons = await this.pokeApiRepo.getPokes();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    this.pokemons.forEach((item) => {
      // eslint-disable-next-line no-new
      new Card('.pokemons__grid', item);
    });
  }

  createTemplate() {
    return `
    <section class="pokemons">
      <ul class="pokemons__grid">
      </ul>
    </section>
    `;
  }
}
