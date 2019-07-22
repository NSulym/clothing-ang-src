import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  colors = ['#000', '#008000', '#00f', '#f00'];
  @Output() selectColor = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(color) {
    this.selectColor.emit(color);
  }

}
