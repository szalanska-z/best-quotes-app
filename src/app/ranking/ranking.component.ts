import { Component, OnInit, Input } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  @Input()
  listOfQuotes: Quotation[];

  @Input()
  title: string;

  constructor() {}

  ngOnInit(): void {}
}
