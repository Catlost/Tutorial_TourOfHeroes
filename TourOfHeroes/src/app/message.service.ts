import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MessageService {
  messages: string[] = [];

  

  // Añadir mensaje llega un mensaje y lo añade al array de mensajes
  add(message: string) {
    this.messages.push(message);
  }

  // Limpia los mensajes convirtiendo el array que se tiene en un array vacio
  clear() {
    this.messages = [];
  }
}
