import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  firstname: any = sessionStorage.getItem('firstname');
  lastname: any = sessionStorage.getItem('lastname');

  constructor() { }

  ngOnInit() {
  }

}
