import { Injectable } from '@angular/core';
import books from '../assets/Books.json';
import bible from '../assets/kjv/Bible.json';

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
    let book = bible.filter(b => b.book === bookName)[0];
    if (!book) {
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
    if (log) console.log(this.getVerse.name, { bookName, chapterNumber, verseNumber });
    let chapter = this.getChapter(bookName, chapterNumber)
    let verse = chapter.verses
      .filter(v => v.verse === verseNumber)[0];
    let result = verse.text;
    if (log) console.log(this.getVerse.name, { chapter, verse, result});
    return result;
  }
}
