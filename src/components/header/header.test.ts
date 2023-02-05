import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instance a Header class', () => {
    test('the element should be a instance of Header', () => {
      document.body.innerHTML = '<slot></slot>';
      const element = new Header('slot');
      expect(element).toBeInstanceOf(Header);
    });
    test('the roles of h1 and p should be the heading and a phrase', () => {
      const h1 = screen.getByRole('heading');
      expect(h1).toBeInTheDocument();
      const p = screen.getByRole('phrase');
      expect(p).toBeInTheDocument();
    });
  });
});
