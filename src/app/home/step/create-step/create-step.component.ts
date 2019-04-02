import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Step} from '../../model/step.model';

@Component({
  selector: 'app-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.scss']
})
export class CreateStepComponent implements OnInit {
  @Input() tourId: number;
  stepForm: FormGroup;
  step = new Step();

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.step.tourId = this.tourId;
    this.createForm();
  }

  createForm() {
    this.stepForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
      order: new FormControl('', Validators.required),
    });
  }

  submit() {
    this.step = this.stepForm.value;
    console.log(this.step)
    // console.log(this.tour);
    // this.tourService.createTour(this.tour).pipe().subscribe(tour => {
    //     this.close();
    //     this.router.navigate(['/tour/' + tour.id]);
    //   },
    //   error => console.log('error')
    // );
  }

  close() {
    this.activeModal.close();
  }
}
