import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';


const routes: Routes = [
	{
		path: '',
		redirectTo: 'goods-list',
		pathMatch: 'full'
	},
	{
		path: 'goods-list',
		//component: GoodsListComponent,
		loadChildren: './goods/goods.module#GoodsModule',
	},
	{ path: '**', component: NotFoundComponent }


];

@NgModule({
	imports: [RouterModule.forRoot(routes,
		// { enableTracing: true }
	)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}

// {
//   path: 'users',
//   loadChildren: './users/users.module#UsersModule',
//   canLoad: [AuthGuard]
// },

// {
//   path: 'login',
//   component: LoginComponent
// },
// {
//   path: 'registration',
//   component: RegistrationComponent,
//   canDeactivate: [CanDeactivateGuard]
// },
// {
//   path: 'about',
//   component: AboutComponent,
//   canActivate: [AuthGuard]
// },
// {
//   path: 'users',
//   loadChildren: './users/users.module#UsersModule',
//   canLoad: [AuthGuard]
// },
// {
//   path: '**',
//   component: NotFoundComponent
// }