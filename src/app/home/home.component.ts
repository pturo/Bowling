import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BowlingResult } from '../bowling-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  //fileContent: string = '';
  results! : BowlingResult[];

  public onChange(event: any): void {
    let file = event.target.files[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function () {
      // read line by line
      for (const line of (<string>fileReader.result).split(/[\r\n]+/)){
        //console.log("line: " + line);

        for(const k of line.split(","))
        {
          console.log("k: " + k);

          self.results = [
            {
              player: k,
              totalScore: 12435,
              one: Number(k),
              two: Number(k),
              three: Number(k),
              four: Number(k),
              five: Number(k),
              six: Number(k),
              seven: Number(k),
              eight: Number(k),
              nine: Number(k),
              ten: Number(k),
              eleven: Number(k),
              twelve: Number(k),
              thirteen: Number(k),
              fourteen: Number(k),
              fifteen: Number(k),
              sixteen: Number(k),
              seventeen: Number(k),
              eighteen: Number(k),
              nineteen: Number(k),
              twenty: Number(k),
              twentyOne: Number(k),
              twentyTwo: Number(k),
            }
          ];

          console.log(self.results);
        }
      }
    }
    fileReader.readAsText(file);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
