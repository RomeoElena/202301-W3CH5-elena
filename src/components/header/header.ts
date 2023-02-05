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
        <img class ="header__logo"src="pokemon-logo.svg" alt="" srcset="">
          <h1 class="header__tittle">Digi-Evolution</h1>

      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
