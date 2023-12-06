import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza/pizza.components';
@Injectable({
  providedIn: 'root'
})
export class PizzaCardService {
  pizza: Pizza[] = [];
  constructor() { }
}
