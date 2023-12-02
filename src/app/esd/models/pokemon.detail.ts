export class PokemonDetail {
    id: number;
    order: number;
    name: string;
    height: number;
    abilities: Ability[];
    species: Species;
    types: Type[];
    weight: number;
    sprites: Sprite;
    stats: Stat[];
    constructor() {
        this.id = 0;
        this.order = 0;
        this.name = '';
        this.height = 0;
        this.weight = 0;
        this.species = { url: '' };
        this.abilities = [];
        this.types = [];
        this.sprites = { front_default: '' };
        this.stats = [];
    };

}

class Ability {
    ability: {
        name: string
    }
    constructor() {
        this.ability = { name: '' };
    }
}

class Species {
    url: string;
    constructor() {
        this.url = '';
    }
}

class Sprite {
    front_default: string;
    constructor() {
        this.front_default = '';
    }
}

class Type {
    slot: number;
    type: {
        name: string;
    }
    constructor() {
        this.slot = 0;
        this.type = { name: '' };
    }
}
class Stat {
    base_stat: number;
    stat: {
        name: string;
    }
    constructor() {
        this.base_stat = 0;
        this.stat = { name: '' };
    }
}