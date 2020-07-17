import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BibleService } from '../bible.service';

let log = true;

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.css']
})
export class VerseComponent implements OnInit {
  form = new FormGroup({
    selectedBook: new FormControl(''),
    selectedChapter: new FormControl(''),
    selectedVerse: new FormControl(''),
  });
  selectedBook;
  selectedChapter;
  selectedVerse;
  books;
  verses = [];
  chapters = [];
  verse;

  constructor(private bible: BibleService) {
    if (log) console.log(VerseComponent.name + '.ctor', { bible });
    this.books = bible.getBooks();
  }

  bookChanged($event) {
    this.chapters = this.bible.getChapters(this.selectedBook);
    this.selectedChapter = '1';
    this.verses = this.bible.getVerses(this.selectedBook, this.selectedChapter);
    this.selectedChapter = '1';
    this.selectedVerse = '1';
    this.verse = this.bible
      .getVerse(
        this.selectedBook,
        this.selectedChapter,
        this.selectedVerse);
  }

  ngOnInit(): void {
    this.selectedBook = 'John';
    this.bookChanged('');
  }
}
