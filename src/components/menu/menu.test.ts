import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Menu } from './menu';

describe('Given Menu component', () => {
  describe('When we instance a Menu class', () => {
    test('the element should be a instance of Menu', (MenuOption) => {
      document.body.innerHTML = '<li></li>';
      const element = new Menu('li', MenuOption[]);
      expect(element).toBeInstanceOf(Menu);
    });
    test('the roles of h1 and p should be the heading and a phrase', () => {
      const li = screen.getByRole('heading');
      expect(li).toBeInTheDocument();
      const a = screen.getByRole('phrase');
      expect(a).toBeInTheDocument();
    });
  });
});
