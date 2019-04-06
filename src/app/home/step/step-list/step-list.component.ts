import {Component, Input, OnInit} from '@angular/core';
import {Step} from '../../../model/step.model';
import {isNullOrUndefined} from 'util';
import {StepService} from '../../../services/step.service';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})
export class StepListComponent implements OnInit {

  @Input() steps: Step[];
  @Input() tourId: number;

  constructor(private stepService: StepService) { }

  ngOnInit() {
  }

  stepsEmpty(): boolean {
    return isNullOrUndefined(this.steps) || this.steps.length === 0;
  }

  deleteStep(id: number) {
    this.stepService.deleteStep(this.tourId, id).pipe().subscribe(() => this.loadSteps());
  }

  loadSteps() {
    this.stepService.getStepsByTourId(this.tourId).pipe().subscribe(value => this.steps = value);
  }
}
