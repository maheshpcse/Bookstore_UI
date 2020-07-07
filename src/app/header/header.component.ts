import { Component, OnInit } from '@angular/core';
declare var $:any


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Toggle between showing and hiding the sidebar, and add overlay effect
  w3_open() {
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");
    // Get the DIV with overlay effect
    var overlayBg = document.getElementById("myOverlay");
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
      overlayBg.style.display = "none";
    } else {
      mySidebar.style.display = 'block';
      overlayBg.style.display = "block";
    }
  }


  showOpen() {
    $('.w3-sidebar').toggleClass('open');
    $('.w3-main').toggleClass('show');
  }


  // Close the sidebar with the close button
  w3_close() {
    // Get the Sidebar
    var mySidebar = document.getElementById("mySidebar");
    // Get the DIV with overlay effect
    var overlayBg = document.getElementById("myOverlays");

    mySidebar.style.display = "none";
  // overlayBg.style.display = "none";
  }

}
