import {
	Component, Input

} from '@angular/core';



@Component({
	selector: 'app-map',
	styleUrls: ['./map.component.scss'],
	templateUrl: './map.component.html'
})

export class MapComponent
{
	@Input() markers: Marker[] = [
		{
			lat:       43.729796,
			lng:       19.693201,
			label:     '',
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
	@Input() lat : number = 43.729796;
	 @Input() lng : number= 19.693201;



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

