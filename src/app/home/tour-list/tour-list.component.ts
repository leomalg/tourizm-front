import {Component, OnInit} from '@angular/core';
import {Tour} from '../model/tour.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  tours: Tour[];
  columnsToDisplay = ['name', 'desc', 'duration', 'stepCount'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.tours = data.tours;
      // console.log(this.tours);
    });
  }
}
