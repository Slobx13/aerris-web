import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Apartman} from '../../apartmani/apartman.model';
import * as ApartMock from '../../apartmani/apartmans.mock';

@Component({
  selector: 'app-galerija-details',
  templateUrl: './galerija-details.component.html',
  styleUrls: ['./galerija-details.component.scss']
})
export class GalerijaDetailsComponent implements OnInit {
	head = '../../assets/photos/header/gallery.png';
	id: number;
	apartment: Apartman;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {

		this.route.params.subscribe(params => {
			this.id = params['id'];

			const fetchId = this.id < 10 ? '0' + this.id : this.id;

			this.apartment = ApartMock['APP_' + fetchId];
		});
	}
}
