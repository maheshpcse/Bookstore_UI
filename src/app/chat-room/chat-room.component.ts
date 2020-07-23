import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  message: any;
  msgsList: any = [];
  user: any;
  usersList: any = [];
  usersData: any = [];

  constructor(private socketService: SocketIoService) { 
    // this.socketService.getUsers();
  }

  async ngOnInit() {
    this.msgsList = [
      {msg:`Hello, I'm Vaas!`},
      {msg:`Hey, My name is Mahesh.`},
      {msg:`How are you doing?`},
      {msg:`I'm fine thank you.`},
      {msg:`Great. How can i help you?`},
      {msg:`Navigate to my profile.`}
    ];
    this.usersList = [
      {name: 'Upendra', msg: 'Hi..Good Morning Team...!!!'},
      {name: 'Vasista', msg: 'How are you all?'},
      {name: 'Mohan', msg: 'Today is my good day...ha ha'},
      {name: 'Venkat', msg: 'Jeena hy tho marna sikho...'}
    ];

    await this.socketService.getUsersData().subscribe((resp) => {
      this.usersData = resp;
      console.log(this.usersData, "users Data");
      for(let i of this.usersData) {
        let obj = {
          name: i.firstname + ' ' + i.lastname,
          msg: ''
        }
        this.usersList.push(obj);
      }
    });
  }

}
