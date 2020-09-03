import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.css'],
})
export class VoteButtonsComponent {
  @Input() value: number;
  @Output() addVoteValue = new EventEmitter<number>();
  @Output() removeVoteValue = new EventEmitter<number>();
}
