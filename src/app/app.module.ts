import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
// import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GoodsListComponent } from './goods/goods-list/goods-list.component';

import { GoodsService } from './shared/services/goods.service';
import { MessagesService } from './shared/services/messages.service';
import { AlertsComponent } from './alerts/alerts.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
	declarations: [
		AppComponent,
		AlertsComponent,
		NotFoundComponent,
		//GoodsComponent

	],
	imports: [
		BrowserModule,
		ClarityModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		RouterModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		// MatButtonModule,
		// MatCheckboxModule
	],
	providers: [
		MessagesService,
		GoodsService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
