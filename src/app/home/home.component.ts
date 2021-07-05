import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Load contents from .txt file
  public loadData(event: any) {
    // clear all records before initializing data from txt file
    $("#tBodyClear").empty();

    var score: any;
    let file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = function () {
      const tbody: any = document.querySelector("tbody");
      const rows = (<string>fileReader.result).replace(/[\r\n]+/gm, "\n").split(/^/m).reduce((acc: any, row: any, i) => {
        row = row.trim();

        if (/^\d/.test(row)) {
          //console.log("???", row);
          acc[acc.length - 1].push(...row.split(/,\s?/));
        } else {
          acc.push([row]);
        }

        return acc;
      }, []);

      //console.log("rows:", rows);

      rows.forEach((cells: any) => {
        const tr = document.createElement("tr");

        cells.forEach((cell: any) => {
          const td = document.createElement("td");
          td.textContent = cell;

          tr.appendChild(td);
        });

        // sum all points
        score = cells.map(function (elt: any) { // assure the value can be converted into an integer
          return /^\d+$/.test(elt) ? parseInt(elt) : 0;
        }).reduce(function (a: number, b: number) { // sum all resulting numbers
          return a + b
        });
        //console.log("score[cells]:" + score);

        const totalScore = document.createElement("td");
        totalScore.textContent = score;
        tr.appendChild(totalScore);

        tbody.appendChild(tr);
      });

      normalizeTable();
    }
    fileReader.readAsText(file);
  }
}

function normalizeTable() {
  // align everything
  var table = document.querySelector("table");
  var trs = table!.getElementsByTagName("tr"), len = trs.length, max = 0, td;
  // search for the longest table row in terms of # of children
  for (var i = len; i--;) {
    if (trs[i].children.length > max)
      max = trs[i].children.length;
      console.log("max: " + max);
  }
  // now fill the other rows
  for (var j = len; j--;) {
    while (trs[j].children.length < max) {
      td = document.createElement("td");
      trs[j].appendChild(td);
      console.log("trsappend: " + trs[j].appendChild(td));
    }
  }
}

