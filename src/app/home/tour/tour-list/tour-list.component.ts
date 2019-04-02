import {Component, OnInit} from '@angular/core';
import {Tour} from '../../model/tour.model';
import {ActivatedRoute} from '@angular/router';
import {TourService} from '../../../services/tour.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreateTourComponent} from '../create-tour/create-tour.component';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.scss']
})
export class TourListComponent implements OnInit {

  tours: Tour[];

  constructor(private route: ActivatedRoute,
              private tourService: TourService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.tours = data.tours;
    });
  }

  deleteTour(id: number) {
    this.tourService.deleteTour(id).subscribe(() => this.loadTours());
  }

  loadTours() {
    this.tourService.getAllTour().pipe().subscribe(values => this.tours = values);
  }

  openCreateTourModal() {
    this.modalService.open(CreateTourComponent);
  }

  toursEmpty() {
    return isNullOrUndefined(this.tours) || this.tours.length === 0;
  }
}
