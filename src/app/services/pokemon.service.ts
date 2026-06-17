import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private api = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any> {
    return this.http.get(`${this.api}/pokemon?limit=48`);
  }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.api}/pokemon/${name}`);
  }
}
