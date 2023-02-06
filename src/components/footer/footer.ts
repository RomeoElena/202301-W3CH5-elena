import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return `
      <footer class="footer">
        <adress class="footer__adress">Pokemon api project</adress>
      </footer>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
