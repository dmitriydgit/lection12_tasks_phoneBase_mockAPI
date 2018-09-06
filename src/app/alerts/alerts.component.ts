import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../shared/services/messages.service';
import { Message } from '../shared/models/message';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
	isShow = false;
	message: Message;
	podpiska: Subscription;


	constructor(private messagesService: MessagesService) {
	}

	ngOnInit() {
		this.messagesService.getMessages()
			.subscribe((msg: Message) => {
				this.message = msg;
				this.isShow = true;
				if (!msg.action) {
					setTimeout(() => this.isShow = false, 4000);
				}
			});
	}
	// ngOnDestroy() {
	// 	this.podpiska.unsubscribe();
	// }

	submit() {
		this.isShow = false;
		this.messagesService.submit();
	}

	close() {
		this.isShow = false;
		this.messagesService.submit(false);
	}

}
