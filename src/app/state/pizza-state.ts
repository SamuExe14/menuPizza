import { Injectable } from '@angular/core';
import { Pizza } from '../models/jsonPizza-state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PizzaState {
  pizza: Pizza[] = [];

  constructor(public http: HttpClient) {}

  getPizza() {
    return this.http
      .get<Pizza[]>('https://github.com/zoelounge/menupizza/blob/main/db.json')
      .subscribe((res) => {
        console.log('pizza = ', res);
      });
  }
}
