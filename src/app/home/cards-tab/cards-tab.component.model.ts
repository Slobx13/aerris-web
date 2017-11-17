export class CardsComponentModel {
	private title: string;
	private image: string;
	private desctription: string;
	private button: string;

	constructor(title: string, image: string, desctription: string, button: string) {
		this.title = title;
		this.image = image;
		this.desctription = desctription;
		this.button = button;
	}
}
