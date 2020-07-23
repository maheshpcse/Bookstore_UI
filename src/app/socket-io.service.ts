import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor(
    private socket: Socket
  ) { 
    // this.getUsers();
    this.socket.emit('userslist', '');
  }

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

  // getUsers() {
  //   this.socket.emit('userslist', '');
  // }

  getUsersData() {
    return Observable.create((observer: any) => {
      console.log('get users list');
      this.socket.on('my users', (users: any) => {
        observer.next(users);
      });
    });
  }
}
