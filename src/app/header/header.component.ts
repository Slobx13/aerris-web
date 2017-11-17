import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 @Input() img: string = 'http://www.mynd.works/wp-content/uploads/2015/02/contact-header.jpg';
  constructor() { }

  ngOnInit() {
  }

}
