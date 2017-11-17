import {Component, Renderer, Renderer2} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-aerris',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router) {
		this.router.events.subscribe(
			() => window.scrollTo(0, 0)
		);
	}
}
