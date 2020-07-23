import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

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
  chatnames: any;
  chatdata: boolean = false;
  charusernames: any = [];
  cartvalue: any;
  names: any
  charchar: any = [];

  constructor() { }

  ngOnInit() {
    this.msgsList = [
      { msg: `Hello, I'm Vaas!` },
      { msg: `Hey, My name is Mahesh.` },
      { msg: `How are you doing?` },
      { msg: `I'm fine thank you.` },
      { msg: `Great. How can i help you?` },
      { msg: `Navigate to my profile.` }
    ];
    this.usersList = [
      { name: 'Upendra', msg: 'Hi..Good Morning Team...!!!' },
      { name: 'Vasista', msg: 'How are you all?' },
      { name: 'Mohan', msg: 'Today is my good day...ha ha' },
      { name: 'Venkat', msg: 'Jeena hy tho marna sikho...' }
    ]
    this.charusernames = this.usersList;
  }
  indexs:any;
  chartnames(item: any,id:any) {
    console.log('the item name is theeeeee', item,id);
    this.names = item.name
    this.indexs=id
  }
  chatroomsnames() {
    console.log('the chat name is the', this.chatnames);
    if (this.chatnames == '' || this.chatnames == undefined) {
      this.chatdata = false;
      this.usersList = this.charusernames;
    } else {
      console.log('the char name is theeeeeeeeeeeeeeeeeeeeee', this.chatnames);
      this.usersList = this.charusernames;
      let chatvalue = this.chatnames.toLowerCase();
      let arr = _.filter(this.charusernames, (e: any) => {
        return e.name.toLowerCase().includes(chatvalue) || e.name.toLowerCase().match(/chatvalue/g) || e.name.toLowerCase() == chatvalue
      })
      console.log(arr);
      this.chatdata = true;
      this.usersList = arr;
    }
  }
}
