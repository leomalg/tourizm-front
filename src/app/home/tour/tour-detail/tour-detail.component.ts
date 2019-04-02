import { Component, OnInit } from '@angular/core';
import {Tour} from '../../model/tour.model';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateStepComponent} from '../../step/create-step/create-step.component';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {

  tour: Tour;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tour = data.tour;
    });
  }

  openCreateStepModal() {
    const modalRef = this.modalService.open(CreateStepComponent);
    modalRef.componentInstance.tourId = this.tour.id;
  }
}
