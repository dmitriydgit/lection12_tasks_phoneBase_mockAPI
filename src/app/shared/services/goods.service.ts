import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, pluck, tap, filter } from 'rxjs/operators';

@Injectable()
export class GoodsService {
	goodsData;

	private phonesUrl = "http://5b8b04f878169a0014daad19.mockapi.io/api/v1/phones"

	// private goodsUrl = 'https://gist.githubusercontent.com/nntndfrk/661cbb5e3c005a09078e1b8f41ee9aa4/raw/d9b60d6f8f3cad794ffc8bfe727a99672e7378b5/phones/';

	constructor(private http: HttpClient) {

	}

	getGoods(): Observable<any> {
		if (!this.goodsData) {
			let items = this.http.get(this.phonesUrl)
			return items;
		} else {
			return of(this.goodsData);
		}
	}


	getGoodById(id?): Observable<any> {
		return this.http.get(`${this.phonesUrl}/${id}`)
	}

	createGood(good) {
		let params = good;
		return this.http.post(`${this.phonesUrl}`, params);
	}

	saveGood(id, good) {
		let params = good;
		return this.http.put(`${this.phonesUrl}/${id}`, params);
	}


	deleteGood(id) {
		return this.http.delete(`${this.phonesUrl}/${id}`);
	}




}
