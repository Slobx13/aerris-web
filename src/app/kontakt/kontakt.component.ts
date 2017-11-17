import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit
{
	@ViewChild('f') signupForm: NgForm;
					submitted = false;
					user      = {
						name:    '',
						email:   '',
						subject: '',
						message: ''
					};

	constructor() {}

	ngOnInit() {}

	onSubmit() {
		this.user.name    = this.signupForm.value.name;
		this.user.email   = this.signupForm.value.email;
		this.user.subject = this.signupForm.value.subject;
		this.user.message = this.signupForm.value.message;
		this.submitted    = true;
		setTimeout(() => {
			this.signupForm.resetForm();
		}, 1000);
	}
}
