class PokemonController < ApplicationController

    def index
        @pokemon = PokeApi.get(pokemon: (1..807).to_a.sample).sprites.front_shiny
    end
end
