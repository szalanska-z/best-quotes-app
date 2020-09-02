import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showForm = false;
  titleMain = 'Najlepsze cytaty';
  titleBest = 'Najlepsze';
  titleWorst = 'Najgorsze';

  quotes: Quotation[] = QUOTES;

  quotation: Quotation = {
    author: '',
    sentence: '',
    votes: 0,
  };

  value = 1;

  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = {
      author: '',
      sentence: '',
      votes: 0,
    };
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += this.value;
  }

  removeVote(quotation: Quotation, value: number) {
    quotation.votes -= this.value;
  }

  bestQuotes() {
    return this.quotes.filter((item) => item.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter((item) => item.votes < 0);
  }
}
