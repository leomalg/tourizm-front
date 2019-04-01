import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TourService} from '../../../services/tour.service';
import {Tour} from '../../model/tour.model';

@Component({
  selector: 'app-create-tour',
  templateUrl: './create-tour.component.html',
  styleUrls: ['./create-tour.component.scss']
})
export class CreateTourComponent implements OnInit {
  tourForm: FormGroup;
  tour = new Tour();

  constructor(private tourService: TourService,
              private router: Router,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.tourForm = new FormGroup({
      name: new FormControl('', Validators.required),
      desc: new FormControl(''),
      duration: new FormControl(''),
    });
  }

  submit() {
    this.tour = this.tourForm.value;
    this.tourService.createTour(this.tour).pipe().subscribe(tour => {
        this.close();
        this.router.navigate(['/tour/' + tour.id]);
      },
      error => console.log('error')
    );
  }

  close() {
    this.activeModal.close();
  }
}
