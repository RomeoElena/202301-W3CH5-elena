import { PokesStructure } from '../models/pokesStructure';

export class PokeApiRepo {
  url: string;
  constructor() {
    this.url = 'https://pokeapi.co/api/v2/';
  }

  async getPokes(): Promise<PokesStructure[]> {
    const resp = await fetch(this.url);
    const data = (await resp.json()) as { name: string; url: string }[];
    return Promise.all(
      data.map(async (poke) => ({
        name: poke.name,
        img: await this.getPokesImage(poke.url),
      }))
    );
  }

  async getPokesImage(url: string): Promise<string> {
    const resp = await fetch(url);
    const data = (await resp.json()).sprites.front_default as string;
    return data;
  }
}
