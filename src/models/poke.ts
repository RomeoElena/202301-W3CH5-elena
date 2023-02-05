type HasId = {
  id: string;
};

export type ProtoPokesStructure = {
  name: string;
  url: string;
  isFavorite: boolean;
};

export type PokesStructure = HasId & ProtoPokesStructure;

export class Pokemon implements PokesStructure {
  public isFavorite: boolean;
  public id!: string;

  constructor(
    // eslint-disable-next-line no-unused-vars
    public name: string,
    // eslint-disable-next-line no-unused-vars
    public url: string
  ) {
    this.isFavorite = false;
  }
}
