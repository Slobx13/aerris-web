import {Component, Input, OnInit} from '@angular/core';
import {CardsComponentModel} from './cards-tab.component.model';

@Component({
  selector:    'app-cards-tab',
  templateUrl: './cards-tab.component.html',
  styleUrls:   ['./cards-tab.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }


  tabs: any [] = [
	  new CardsComponentModel('Materijalizacija',
		  './assets/photos/tab1.png',
		  'Fasadni zidovi zidaju se od klima blokova debljine d=20cm.' +
		  ' Unutrašnji pregradni zidovu su od klima blokova, debljine 10 i 20 cm,' +
		  ' u svemu prema propisima i standardima u pogledu zvučne i toplotne izolacije.' +
		  ' Ukopani zidovi su od armiranog betona d=20cm...',
		  'DETALJNIJE'),
	  new CardsComponentModel('Tehnički opis',
		  './assets/photos/tab2.png',
		  'Projektovani stambeni objekat je slobodnostojeći sa predviđenom spratnosti Po+Su+Pr +3Sp.' +
		  ' Funkcionalno posmatrano objekat ima dve funkcionalne celine: Stambeni deo koji se nalazi' +
		  ' od nivoa suterena do nivoa 3. sprata sa ukupno 15 stambenih... ',
		  'DETALJNIJE'),
	  new CardsComponentModel('Investitori',
		  './assets/photos/tab3.png',
		  'Lorem Ipsum is simply ' +
		  'dummy text of the printing and typesetting industry.' +
		  'Lorem Ipsum has been the industrys standard dummy tex' +
		  ' ever since the 1500s, when an unknown printer tookLorem Ipsum.' +
		  'Lorem Ipsum has been the Ipsum',
		  'DETALJNIJE'),
  ];

  ski = './assets/photos/skiing-icon.png';
  lake = './assets/photos/lake-icon.png';
  airport = './assets/photos/airport-icon.png';



  ngOnInit() {
  }

}
