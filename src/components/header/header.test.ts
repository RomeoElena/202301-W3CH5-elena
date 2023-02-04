/* eslint-disable no-unused-vars */
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header Component', () => {
  describe('When we instance the Header class', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');

    test('The mock element should be instance of Header', () => {
      expect(element).toBeInstanceOf(Header);
    });

    test('The element <img> of Logo should be in the document', () => {
      const imgLogo = screen.getByRole('img');
      expect(imgLogo).toBeInTheDocument();
    });
    test('The element <p> should be in the document', () => {
      const p = screen.getByRole('p');
      expect(p).toBeInTheDocument();
    });
  });
});
