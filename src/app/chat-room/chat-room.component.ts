import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
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
    ]
  }

}
