import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var openInbox = document.getElementById("myBtn");
    openInbox.click();

    var openTab = document.getElementById("firstTab");
    openTab.click();

    this.openMail("Borge");
  }

  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }

  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  openMail(personName) {
    var i;
    var x:any = document.getElementsByClassName("person");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x = document.getElementsByClassName("test");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(personName).style.display = "block";
    // event.currentTarget.className += " w3-light-grey";
  }

}
