import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css'
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  loading = true;
  erro = '';

  constructor(
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe({
      next: (data: any) => {
        this.pokemons = data.results.map((p: any, i: number) => ({
          id: i + 1,
          idFormatado: String(i + 1).padStart(3, '0'),
          name: p.name,
          imagem: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i + 1}.png`
        }));
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Erro ao carregar os Pokémon.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
