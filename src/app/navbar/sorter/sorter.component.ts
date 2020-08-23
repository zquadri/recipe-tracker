import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css'],
})
export class SorterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onChange(selectedVal: any) {
    switch (selectedVal) {
      case 'name':
        this.sortByName();
        break;
      case 'c_time':
        this.sortByCookTime();
        break;
      case 'difficulty':
        this.sortByDifficulty();
        break;
      case 'rating':
        this.sortByRating();
        break;
    }
  }
  sortByName() {}
  sortByCookTime() {}
  sortByDifficulty() {}
  sortByRating() {}
}
