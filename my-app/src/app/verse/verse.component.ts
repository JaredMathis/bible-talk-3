import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { BibleService } from '../bible.service';

let log = false;

@Component({
  selector: 'app-verse',
  templateUrl: './verse.component.html',
  styleUrls: ['./verse.component.css']
})
export class VerseComponent implements OnInit {
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
  books;

  constructor(private bible: BibleService) {
    if (log) console.log(VerseComponent.name, {bible});
    this.books = bible.getBooks();
  }

  ngOnInit(): void {
  }

}
