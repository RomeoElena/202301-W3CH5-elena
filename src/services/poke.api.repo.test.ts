import { PokeApiRepo } from './poke.api.repo';

describe('first', () => {
  let repo: PokeApiRepo;
  beforeEach(() => {
    repo = new PokeApiRepo();
  });
  test('should first', () => {
    console.log(repo.getPokes());
  });
});
