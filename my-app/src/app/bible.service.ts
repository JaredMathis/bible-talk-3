import { Injectable } from '@angular/core';
import books from '../assets/kjv/Books.json';
import Genesis from '../assets/kjv/Genesis.json';
import Exodus from '../assets/kjv/Exodus.json';
import John from '../assets/kjv/John.json';

let log = true;

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  constructor() { }

  getBooks() {
    if (log) console.log(BibleService.name + '.' + this.getBooks.name, { books });
    return books;
  }

  getBook(bookName): any {
    console.log(this.getBook.name, {bookName});
    let book;

    if (bookName === 'Genesis') {
      book = Genesis;

    } else if (bookName === 'Exodus') {
      book = Exodus;

    } else if (bookName === 'John') {
      book = John;

    } else {
      throw new Error('not implemented');
    }
    
    return book;
  }

  getChapter(bookName, chapter) {
    let book = this
      .getBook(bookName);
    let result = book
      .chapters
      .filter(c => c.chapter === chapter)[0];
    return result;
  }

  getVerses(bookName, chapterNumber) {
    let chapter = this.getChapter(bookName, chapterNumber);
    console.log(BibleService.name + '.' + this.getVerses.name, {
      bookName,
      chapterNumber,
      chapter,
    });
    return chapter.verses.map(v => v.verse);
  }

  getChapters(bookName) {
    return this.getBook(bookName).chapters.map(c => c.chapter);
  }

  getVerse(bookName, chapterNumber, verseNumber) {
    if (log) console.log(this.getVerse.name, { bookName, chapterNumber, verseNumber});
    let chapter = this.getChapter(bookName, chapterNumber)
    let verse = chapter.verses
      .filter(v => v.verse === verseNumber)[0];
    let result = verse.text;
    if (log) console.log(this.getVerse.name, { chapter, verse, result});
    return result;
  }
}
