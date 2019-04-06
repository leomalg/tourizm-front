import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbActiveModal, NgbTimeAdapter} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TourService} from '../../../services/tour.service';
import {StepService} from '../../../services/step.service';
import {Tour} from '../../../model/tour.model';
import {NgbTimeStringAdapter} from '../../../services/ngb-string-moment-adapter';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeStringAdapter}]
})
export class CreateTourComponent implements OnInit {
  tourForm: FormGroup;
  tour = new Tour();

  constructor(private tourService: TourService,
              private stepService: StepService,
              private router: Router,
              private activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.tourForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      duration: new FormControl(null),
    });
  }

  submit() {
    this.tour = this.tourForm.value;
    this.tourService.createTour(this.tour).pipe().subscribe(tour => {
        this.close();
        this.router.navigate(['/tour/' + tour.id]);
      },
      error => console.error(error)
    );
  }

  close() {
    this.activeModal.close();
  }
}
