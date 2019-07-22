import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  options = [
    {
      type: 'cap',
      price: 15
    },
    {
      type: 'shirt',
      price: 30
    },
    {
      type: 'jeans',
      price: 25
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
