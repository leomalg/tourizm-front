import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Step} from '../../../model/step.model';
import {StepService} from '../../../services/step.service';

@Component({
  selector: 'app-create-step',
  templateUrl: './create-step.component.html',
  styleUrls: ['./create-step.component.scss']
})
export class CreateStepComponent implements OnInit {
  @Input() tourId: number;

  stepForm: FormGroup;
  step = new Step();

  constructor(private stepService: StepService,
              private activeModal: NgbActiveModal) {
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
    this.step.tourId = this.tourId;
    this.stepService.createStep(this.tourId, this.step).pipe().subscribe(tour => {
        this.close();
      },
      error => console.error(error)
    );
  }

  close() {
    this.activeModal.close();
  }

  dismiss() {
    this.activeModal.dismiss();
  }
}
