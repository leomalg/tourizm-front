import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
              private activeModal: NgbActiveModal,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.step.tourId = this.tourId;
    this.createForm();
  }

  createForm() {
    this.stepForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      latitude: ['', Validators.compose([Validators.required, Validators.pattern('[-+]?\\d*\\,?\\d*')])],
      longitude: ['', Validators.compose([Validators.required, Validators.pattern('[-+]?\\d*\\,?\\d*')])],
      order: ['', Validators.compose([Validators.required, Validators.pattern('\\d*')])]
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

  controlIsInvalid(controlName: string): boolean {
    const control = this.stepForm.get(controlName);
    return control.touched && control.invalid;
  }

  controlHasError(controlName: string, error: string): boolean {
    const control = this.stepForm.get(controlName);
    return control.touched && control.invalid && control.hasError(error);
  }
}
