import { Component, OnInit } from '@angular/core';
import {Tour} from '../../model/tour.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  tour: Tour;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tour = data.tour;
    });
  }

}
