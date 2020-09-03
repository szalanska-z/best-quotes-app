import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titleMain = 'Najlepsze cytaty';
  titleBest = 'Najlepsze';
  titleWorst = 'Najgorsze';

  quotes: Quotation[] = QUOTES;

  value = 1;

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

  onNewQuotation(item: Quotation) {
    this.quotes.unshift(item);
  }
}
