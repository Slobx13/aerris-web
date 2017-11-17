import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk';
import { CommonModule } from '@angular/common';
import {
	MdButtonModule,
	MdCardModule,
	MdIconModule,
	MdInputModule,
	MdTableModule,
	MdTabsModule,
	MdToolbarModule
} from '@angular/material';

import { NgBoxModule } from 'ngbox/ngbox.module';
import { NgBoxService } from 'ngbox/ngbox.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { CardsComponent } from './home/cards-tab/cards-tab.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapComponent } from './home/google-map/map.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { GalerijaComponent } from './galerija/galerija.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { HeaderComponent } from './header/header.component';
import { AppService } from './app.service';
import { ApartmaniComponent } from './apartmani/apartmani.component';
import { ApartmaniDetailComponent } from './apartmani/apartmani-detail/apartmani-detail.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import { GalerijaDetailsComponent } from './galerija/galerija-details/galerija-details.component';
import { MaterijalizacijaComponent } from './materijalizacija/materijalizacija.component';
import { GarazaComponent } from './garaza/garaza.component';
import {InvestitoriComponent} from './investitor/investitor.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'galerija', component: GalerijaComponent },
	{ path: 'galerija/:id', component: GalerijaDetailsComponent},
	{ path: 'kontakt', component: KontaktComponent },
	{ path: 'apartmani', component: ApartmaniComponent},
	{ path: 'apartmani/:id', component: ApartmaniDetailComponent},
	{ path: 'materijalizacija', component: MaterijalizacijaComponent},
	{ path: 'garaza', component: GarazaComponent},
	{ path: 'investitori', component: InvestitoriComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SliderComponent,
		CardsComponent,
		NavComponent,
		MapComponent,
		FooterComponent,
		DropdownDirective,
		GalerijaComponent,
		KontaktComponent,
		HeaderComponent,
		ApartmaniComponent,
		ApartmaniDetailComponent,
		GalerijaDetailsComponent,
		MaterijalizacijaComponent,
		GarazaComponent,
		InvestitoriComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		BrowserAnimationsModule,
		FormsModule,
		HttpModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(appRoutes),
		MdTabsModule,
		MdTableModule,
		CdkTableModule,
		MdInputModule,
		MdToolbarModule,
		MdIconModule,
		MdInputModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyB7Z_4PjI8sZydVhET0DN17ScH20NiWdsk',
		}),
		CollapseModule,
		MdButtonModule,
		MdCardModule,
		BrowserAnimationsModule,
		Angular2ImageGalleryModule,
		NgBoxModule,

	],
	providers: [
		AppService,
		NgBoxService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {
}
