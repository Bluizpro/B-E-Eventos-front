import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lote } from '@pp/models/lote';
import { Observable, take } from 'rxjs';

@Injectable()
export class LoteService {


[key: string]: any
baseURL = 'https://localhost:7203/api/lotes'
 constructor( private http: HttpClient) { }


 public getLotesByEventoId(eventoId: number): Observable<Lote[]> {
  return this.http.get<Lote[]>(`${this.baseURL}/${eventoId}`).pipe(take(1));
}

public saveLotes(eventoId: number, lotes: Lote[]): Observable<Lote[]> {
  return this.http
    .put<Lote[]>(`${this.baseURL}/${eventoId}`, lotes)
    .pipe(take(1));
}

public deleteLote(eventoId: number, loteId: number): Observable<any> {
  return this.http
    .delete(`${this.baseURL}/${eventoId}/${loteId}`)
    .pipe(take(1));
}
}
