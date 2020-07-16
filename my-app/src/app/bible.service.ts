import { Injectable } from '@angular/core';
import books from '../assets/kjv/Books.json';

let log = false;

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor() { }

  getBooks() {
    if (log) console.log(BibleService.name + '.' + this.getBooks.name, {books});
    return books;
  }
}
