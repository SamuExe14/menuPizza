import { Injectable } from '@angular/core';
import { Pizza } from '../models/jsonPizza-state';

@Injectable({
  providedIn: 'root',
})
export class PizzaState {
  pizza: Pizza[] = [];
}
