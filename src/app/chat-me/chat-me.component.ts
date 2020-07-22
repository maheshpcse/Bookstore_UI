import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../socket-io.service';

@Component({
  selector: 'app-chat-me',
  templateUrl: './chat-me.component.html',
  styleUrls: ['./chat-me.component.css']
})
export class ChatMeComponent implements OnInit {

  message: any;
  msgsList: any = [];

  constructor(private socketService: SocketIoService) { }

  ngOnInit() {
    this.msgsList = [
      {msg:`Hello, I'm Vaas!`},
      {msg:`Hey, My name is Mahesh.`},
      {msg:`How are you doing?`},
      // {msg:`I'm fine thank you.`},
      // {msg:`Great. How can i help you?`}
    ];

    this.socketService
    .getMessage()
    .subscribe((message: string) => {
      this.msgsList.push({msg:message});
    });
  }

  sendMessage() {
    console.log(this.message);
    this.socketService.sendMessage(this.message);
    this.message = '';
  }

  clearMessages(){
    this.msgsList = [];
  }

}
