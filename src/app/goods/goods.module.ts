import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodsRoutingModule } from './goods-routing.module';
import { GoodSingleComponent } from './good-single/good-single.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsComponent } from './goods.component';
import { UpdatingFormComponent } from './updating-form/updating-form.component';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ClarityModule,
		ReactiveFormsModule,
		GoodsRoutingModule,
	],
	declarations: [
		GoodsListComponent,
		GoodSingleComponent,
		GoodsComponent,
		UpdatingFormComponent

	],
	providers: [

	]
})
export class GoodsModule {
}
