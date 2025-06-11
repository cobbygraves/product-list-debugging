import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Dessert } from '../models/dessert';

@Injectable({
  providedIn: 'root',
})
export class DessertService {
  private dataURL = 'data.json';
  private dessertsSubject: BehaviorSubject<Dessert[]> = new BehaviorSubject<
    Dessert[]
  >([]);
  desserts$ = this.dessertsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<Dessert[]>(this.dataURL).subscribe((data) => {
      this.dessertsSubject.next(data);
    });
  }

  getDesserts(): Observable<Dessert[]> {
    return this.desserts$;
  }
}
