import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodSingleComponent } from './good-single/good-single.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsComponent } from './goods.component';



const routes: Routes = [
	{
		path: '',
		component: GoodsComponent,
		children: [
			{
				path: '',
				component: GoodsListComponent
			},
			{
				path: ':id/view',
				component: GoodSingleComponent
			}
		]
	},

	// {
	// 	path: ':id/view',
	// 	component: GoodSingleComponent,
	// }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class GoodsRoutingModule {
}
