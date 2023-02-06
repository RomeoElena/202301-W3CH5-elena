import { Header } from './components/header/header';

import './index.scss';

import { Footer } from './components/footer/footer';
import { Pokemons } from './components/pokemons/pokemons';

import { PokeApiRepo } from './services/poke.api.repo';

// eslint-disable-next-line no-new
new Header('main');
// eslint-disable-next-line no-new
new Pokemons('main', new PokeApiRepo());

// eslint-disable-next-line no-new
new Footer('main');
