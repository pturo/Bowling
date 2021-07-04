import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  res: any;

  constructor() { }

  ngOnInit(): void {
  }

  // With JSON
  // public loadData(event: any) {
  //   let file = event.target.files[0];
  //   let self = this; // for accessing jsonResults variable
  //   if(file) {
  //     let fileReader: FileReader = new FileReader();
  //     fileReader.readAsText(file, "utf-8");
  //     fileReader.onload = function(evt: any) {
  //       self.jsonResults = JSON.parse(evt.target["result"]);
  //       // DEBUG
  //       // for(var a = 0; a < self.jsonResults.length; a++) {
  //       //   console.log("data: " + JSON.stringify(self.jsonResults[a].score));
  //       // }
  //       // console.log("length: " + self.jsonResults.length);
  //       for(var i = 0; i < self.jsonResults.length; i++) {
  //         self.jsonResults[i].totalScore = Number(JSON.stringify(self.jsonResults[i].score.reduce((a: any, b: any) => a + b, 0)));
  //         // DEBUG
  //         console.log("wynik: " + Number(JSON.stringify(self.jsonResults[i].totalScore)));
  //       }
  //     }
  //   }
  // }

  // different approach
  // WARNING: these lines of code were made for
  // testing reading content from .txt files and
  // they are not valid anymore. Our task uses JSON format.
  public loadData(event: any) {
    var self = this;
    let file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = function () {
      let rows = (<string>fileReader.result).toString().replace(/[\r\n]+/gm, ",").split("\n");
      console.log("rows: " + rows);
      // get each row of txt file
      for (var i = 0; i < rows.length; i++) {
        var validRowData = [];
        var rowData = rows[i].split(",");
        console.log("rowData: " + rowData);
        // get data from row
        for(var j = 0; j < rowData.length; j++) {
          if (rowData[j] == "") {
          } else {
            validRowData.push(rowData[j]);
          }
        }

        // create row template
        var rowTemplate = "<tr>";
        for (var k = 0; k < validRowData.length; k++) {
          rowTemplate += "<td>" + validRowData[k] + "</td>";
          //console.log("k: " + k + " validRowData[" + k + "]: " + validRowData[k]);
        }
        rowTemplate += "</tr>";
        // append to table
        $('#resultsTable').append(rowTemplate);
      }
    }
    fileReader.readAsText(file);
  }
}
