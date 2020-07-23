import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
declare var $:any


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  href: any;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.href = this.router.url;
    // console.log(this.href);
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

  logOut() {
    this.authService.isLogout({ username: sessionStorage.getItem('username') }).subscribe(res => {
      console.log('User logout successful');
      localStorage.clear();
      sessionStorage.clear();
      this.router.navigate(['/login']);
    })
  }

}
