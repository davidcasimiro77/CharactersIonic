import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Character {
  _id: number;
  real_name: string;
  alias: string;
  rol: string;
  status: string;
  origin: string;
}

@Injectable({
  providedIn: 'root'
})

export class CharacterCrudService {

  endpoint = 'http://localhost:8080/characters';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  constructor(private httpClient: HttpClient) { }

  createCharacter(character: Character): Observable<any> {
    const data = new URLSearchParams();
    data.append('real_name', character.real_name);
    data.append('alias', character.alias);
    data.append('rol', character.rol);
    data.append('status', character.status);
    data.append('origin', character.origin);
    return this.httpClient.post<Character>(this.endpoint, data.toString(), this.httpOptions)
      .pipe(
        catchError(this.handleError<Character>('Error occured'))
      );
  }

  getCharacter(id): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Character fetched: ${id}`)),
        catchError(this.handleError<Character[]>(`Get character id=${id}`))
      );
  }

  getCharacters(): Observable<Character[]> {
    console.log("takitakirumba")
    return this.httpClient.get<Character[]>(this.endpoint)
      .pipe(
        tap(characters => console.log('Characters retrieved!')),
        catchError(this.handleError<Character[]>('Get character', []))
      );
  }

  updateCharacter(id, character: Character): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(character), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Character updated: ${id}`)),
        catchError(this.handleError<Character[]>('Update character'))
      );
  }

  deleteCharacter(id): Observable<Character[]> {
    return this.httpClient.delete<Character[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Character deleted: ${id}`)),
        catchError(this.handleError<Character[]>('Delete character'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}