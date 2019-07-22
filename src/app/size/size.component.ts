import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  sizes = ['xl', 'l', 'm', 's'];
  @Output() selectSize = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(size) {
    this.selectSize.emit(size);
  }

}
