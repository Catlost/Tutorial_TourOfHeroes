import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Solo necesito añadirle el MessageService que es el que voy a usar en el template
  constructor(public messageService: MessageService) {}

  ngOnInit() {

  }

}
