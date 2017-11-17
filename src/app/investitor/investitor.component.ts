import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investitor',
  templateUrl: './investitor.component.html',
  styleUrls: ['./investitor.component.scss']
})
export class InvestitoriComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	 markers: Marker[] = [
		{
			lat:       43.8556166,
			lng:      19.8465159,
			label:     'A',
			draggable: true,
		},
		{
			lat:       51.373858,
			lng:       7.215982,
			label:     'B',
			draggable: false
		},
		{
			lat:       51.723858,
			lng:       7.895982,
			label:     'C',
			draggable: false
		}
	];
	// google maps zoom level
			 zoom= 16;


	// initial center position for the map
	 lat : number =43.8556166;
	 lng : number= 19.8465159;



	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`);
	}

	markerDragEnd(m: Marker, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}

}
// just an interface for type safety.
interface Marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



