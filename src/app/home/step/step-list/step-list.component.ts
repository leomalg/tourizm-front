import {Component, Input, OnInit} from '@angular/core';
import {Step} from '../../model/step.model';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-step-list',
  templateUrl: './step-list.component.html',
  styleUrls: ['./step-list.component.scss']
})
export class StepListComponent implements OnInit {

  @Input() steps: Step[];

  constructor() { }

  ngOnInit() {
  }

  stepsEmpty(): boolean {
    return isNullOrUndefined(this.steps) || this.steps.length === 0;
  }
}
