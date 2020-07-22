import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor(
    private socket: Socket
  ) { }

  sendMessage(message: any) {
    this.socket.emit('new-message', message);
  }

  getMessage() {
    return Observable.create((observer: any) => {
      this.socket.on('new-message', (message: any) => {
        observer.next(message);
      });
    });
  }
}
