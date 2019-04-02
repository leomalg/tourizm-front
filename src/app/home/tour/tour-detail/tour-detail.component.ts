import {Component, OnInit, ViewChild} from '@angular/core';
import {Tour} from '../../model/tour.model';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateStepComponent} from '../../step/create-step/create-step.component';
import {StepListComponent} from '../../step/step-list/step-list.component';

@Component({
  selector: 'app-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss']
})
export class TourDetailComponent implements OnInit {
  @ViewChild(StepListComponent) child: StepListComponent;
  tour: Tour;

  constructor(private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tour = data.tour;
    });
  }

  openCreateStepModal() {
    const modalRef = this.modalService.open(CreateStepComponent);
    modalRef.componentInstance.tourId = this.tour.id;
    modalRef.result.then(() => this.child.loadSteps()).catch(reason => console.error(reason));
  }
}
