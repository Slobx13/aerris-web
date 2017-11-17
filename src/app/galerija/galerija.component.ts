import { Component, OnInit } from '@angular/core';
import {APARTMANS} from '../apartmani/apartmans.mock';
import {Apartman} from '../apartmani/apartman.model';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.scss']
})
export class GalerijaComponent implements OnInit {
	header = '../../assets/photos/header/gallery.png';

	apartmans: Apartman[] = APARTMANS;


	private mouseIn = false;
	private mouse(mouseIn: boolean) {
		this.mouseIn = mouseIn;
	}
  constructor() { }

  ngOnInit() {
  }
}
