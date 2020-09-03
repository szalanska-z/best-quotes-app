import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Output()
  clickButton = new EventEmitter<void>();
  @Input()
  customClasses: string;
  @Input() value: number;
  constructor() {}

  ngOnInit(): void {}
}
