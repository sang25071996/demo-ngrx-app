import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  api = environment.api;
  public URL: string = `${this.api}/heros`;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  public getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.URL).pipe(map(heros => heros.map(hero => new Hero(hero))));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
