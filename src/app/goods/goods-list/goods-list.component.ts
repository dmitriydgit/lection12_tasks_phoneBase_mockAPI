import { Component, OnInit, } from '@angular/core';

import { GoodsService } from '../../shared/services/goods.service';
import { RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MessagesService } from '../../shared/services/messages.service';


@Component({
	selector: 'app-goods-list',
	templateUrl: './goods-list.component.html',
	styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

	goods;
	adding = false;
	//router: any;
	//впилить гудс сервис
	constructor(
		private goodService: GoodsService,
		private msgService: MessagesService,
		private router: Router,
		private route: ActivatedRoute,
	) {
	}

	ngOnInit() {
		//console.log("goods component active!");
		this.getGoods();
	}
	getGoods() {
		this.goodService.getGoods()
			.subscribe((goods) => {
				this.goods = goods;
				//console.log(this.goods);
			});
	}

	openGoodById(id) {

		this.router.navigate(['/goods-list', id, 'view']);
	}

	buyGoodById(good) {

		let params = {
			"description": good.description,
			"name": good.name,
			"photo": good.photo,
			"qty": good.qty - 1
		}

		this.msgService.setMessage({
			type: 'success',
			body: 'Товар добавлен в корзину!'
		});

		this.goodService.saveGood(good.id, params)
			.subscribe(
				res => {
					this.getGoods();
				},
				err => console.log(err)
			)

		this.getGoods();
		//this.router.navigate(['/goods-list', id, 'buy']);
	}

	addPhone() {

		this.adding = true;

	}

	finishAdding() {
		this.adding = false;
		this.getGoods();
	}

	goBack() {
		this.adding = false;
	}

}

