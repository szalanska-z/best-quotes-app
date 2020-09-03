import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  showForm = false;

  @Output() newQuotation = new EventEmitter<Quotation>();

  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0,
  };

  constructor() {}

  ngOnInit(): void {}

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0,
    };
  }
}
