	export class Apartman {

		constructor(public id: number,
					public floor: string,
					public area: number,
					public style: ApartmanStyle,
					public type: ApartmanType,
					public posittion: ApartmanPosition,
					public terace: boolean,
					public available: ApartmanAvailable,
					public images?: Image[],
					public mainImage?: string,
					public tehImage?: string,
					public gallery?: Gallery[]) {}
}

export type ApartmanType = 'Lux' | 'Standard';

export type ApartmanStyle = 'Modern' | 'Etno' | 'Neo Baroque';

export type ApartmanPosition = 'Sever / Istok' | 'Sever / Zapad'  | 'Jug / Zapad';

export type ApartmanAvailable = 'Da' | 'Ne' | 'Rezervisan';


export class Image {

	constructor(public image: string,
				public title?: string) {}
}

export class Gallery {
	constructor(public galerry: string,
				public title?: string) {}
}
