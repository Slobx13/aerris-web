	export class Apartman {

		constructor(public id: number,
					public floor: string,
					public area: number,
					public type: ApartmanType,
					public posittion: ApartmanPosition,
					public terace: boolean,
					public room: ApartmanRoom,
					public available: ApartmanAvailable,
					public images?: Image[],
					public mainImage?: string,
					public tehImage?: string,
					public highlightImage?: string,
					public gallery?: Gallery[]) {}
}

export type ApartmanType =  'Jednosoban' | 'Dvosoban';
export type ApartmanRoom = 'jedne spavaće' | 'dve spavaće';

export type ApartmanPosition = 'Jug' | 'Jug / Zapad';

export type ApartmanAvailable = 'Da' | 'Ne' | 'Rezervisan';


export class Image {

	constructor(public image: string,
				public title?: string) {}
}

export class Gallery {
	constructor(public galerry: string,
				public title?: string) {}
}
