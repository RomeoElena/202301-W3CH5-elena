import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <img class ="header__picture" src="pokemon-logo.svg">
          <h1 class="header__tittle">¡¡Pika pika!!</h1>
          <p class="header__p" role="phrase" >Digi-Pokemon</p>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
