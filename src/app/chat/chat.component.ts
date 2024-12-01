import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  isChatOpen = false; // Estado para abrir/cerrar el chat
  messages = [
    { text: '¡Hola! ¿Cómo puedo ayudarte?', sender: 'bot' },
  ]; // Mensajes del chat
  newMessage = ''; // Texto del mensaje nuevo

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(event: Event) {
    event.preventDefault();
    if (this.newMessage.trim()) {
      this.messages.push({ text: this.newMessage, sender: 'user' });
      this.newMessage = '';
      // Respuesta automática (puedes reemplazar esto con lógica de chatbot real)
      setTimeout(() => {
        this.messages.push({
          text: 'Estoy aquí para ayudarte 😊',
          sender: 'bot',
        });
      }, 1000);
    }
  }
}
