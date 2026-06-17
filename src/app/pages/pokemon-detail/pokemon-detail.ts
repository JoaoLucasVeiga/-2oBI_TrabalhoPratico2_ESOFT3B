import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css'
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any = null;
  loading = true;
  erro = '';

  coresTipo: { [key: string]: string } = {
    fire: '#f08030',
    water: '#6890f0',
    grass: '#78c850',
    electric: '#f8d030',
    ice: '#98d8d8',
    fighting: '#c03028',
    poison: '#a040a0',
    ground: '#e0c068',
    flying: '#a890f0',
    psychic: '#f85888',
    bug: '#a8b820',
    rock: '#b8a038',
    ghost: '#705898',
    dragon: '#7038f8',
    dark: '#705848',
    steel: '#b8b8d0',
    fairy: '#ee99ac',
    normal: '#a8a878'
  };

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const nome = this.route.snapshot.paramMap.get('name') || '';
    this.pokemonService.getPokemon(nome).subscribe({
      next: (data: any) => {
        this.pokemon = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.erro = 'Pokémon não encontrado.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  corDoTipo(tipo: string): string {
    return this.coresTipo[tipo] || '#a8a878';
  }

  formatarAltura(altura: number): string {
    return (altura / 10).toFixed(1) + ' m';
  }

  formatarPeso(peso: number): string {
    return (peso / 10).toFixed(1) + ' kg';
  }
}
