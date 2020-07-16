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
  books;
  verses = [];
  chapters = [];
  verse;

  constructor(private bible: BibleService) {
    if (log) console.log(VerseComponent.name + '.ctor', { bible });
    this.books = bible.getBooks();
  }

  ngOnInit(): void {
    this.form.controls.selectedBook.setValue('Genesis');
    this.form.controls.selectedChapter.setValue('1');
    this.form.controls.selectedVerse.setValue('1');
    this.update();
    this.form.valueChanges.subscribe(val => {
      this.update();
    });
  }

  update() {
    let c = this.form.controls;
    this.chapters = this.bible.getChapters(c.selectedBook.value);
    this.verses = this.bible.getVerses(c.selectedBook.value, c.selectedChapter.value);
    if (log) console.log(VerseComponent.name + '.' + this.update.name, {
      val: c,
      'this.chapters': this.chapters,
      'this.verses': this.verses,
    });
    this.verse = this.bible
      .getVerse(
        c.selectedBook.value,
        c.selectedChapter.value,
        c.selectedVerse.value);
  }
}
