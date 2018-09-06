import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoodsService } from '../../shared/services/goods.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-updating-form',
	templateUrl: './updating-form.component.html',
	styleUrls: ['./updating-form.component.css']
})
export class UpdatingFormComponent implements OnInit {
	@Input('good') phoneData: { id?: number, name: string, description: string, photo: string, qty: number };

	@Output('edit') editEmitter = new EventEmitter();

	form: FormGroup;

	constructor(
		private service: GoodsService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) { }

	ngOnInit() {
		this.form = new FormGroup({
			phoneName: new FormControl(this.phoneData && this.phoneData.name),
			phoneDescription: new FormControl(this.phoneData && this.phoneData.description),
			phonePhoto: new FormControl(this.phoneData && this.phoneData.photo),
			phoneQty: new FormControl(this.phoneData && this.phoneData.qty),
		});

	}

	save(good) {

		let params = {
			"name": this.form.value.phoneName,
			"photo": this.form.value.phonePhoto,
			"description": this.form.value.phoneDescription,
			"qty": this.form.value.phoneQty
		}

		if (this.phoneData) {

			this.service.saveGood(this.phoneData.id, params)
				.subscribe(
					res => {
						this.editEmitter.emit(good);
					},
					err => console.log(err)
				)
		} else {
			this.service.createGood(params)
				.subscribe(
					res => {
						this.editEmitter.emit(good);
					},
					err => console.log(err)
				)
		}

	}

	makeClear() {
		this.form.reset();
	}

}



