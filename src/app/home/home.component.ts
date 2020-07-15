import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  book: any;
  names: any = [];
  tempNames: any = [];
  hideData: boolean = false;

  constructor() { 
    this.names = ['Adele', 'Agnes', 'Billy', 'Bob', 'Calvin', 'Christina', 'Cindy'];
    this.tempNames = this.names;
  }

  ngOnInit() {
  }

  myFunction() {
    if(this.book == '' || this.book == undefined) {
      this.hideData = false;
      this.names = this.tempNames;
    } else {
      console.log('else starts', this.book);
      this.names = this.tempNames;
      console.log(this.names);
      let value = this.book.toLowerCase();
      let arr = _.filter(this.names, (e: any) => {
        return e.toLowerCase().includes(value) ||  e.toLowerCase().match(/value/g) || e.toLowerCase() == value
      });
      console.log(arr);
      this.hideData = true;
      this.names = arr;
    }
  }

  downloadPdf() {
    var data = document.getElementById('htmlData');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('new-file.pdf'); // Generated PDF
    });
  }

}
