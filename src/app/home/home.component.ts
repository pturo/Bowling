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
      //self.fileContent = fileReader.result as string;
      // read line by line and split by commas
      var line = (<string>fileReader.result).split('/[\r\n]+/');
      for(var i = 0; i < line.length; i++){
        console.log("Line: " + i, line[i]);
      }
      var comma = (<string>fileReader.result).split(',');
      for(var i = 0; i < comma.length; i++){
        console.log("Comma: " + i, comma[i]);
      }
      self.results = [
        {
          player: comma[i],
          totalScore: 12,
          one: Number(comma[i]),
          two: Number(comma[i]),
          three: Number(comma[i]),
          four: Number(comma[i]),
          five: Number(comma[i]),
          six: Number(comma[i]),
          seven: Number(comma[i]),
          eight: Number(comma[i]),
          nine: Number(comma[i]),
          ten: Number(comma[i]),
          eleven: Number(comma[i]),
          twelve: Number(comma[i]),
          thirteen: Number(comma[i]),
          fourteen: Number(comma[i]),
          fifteen: Number(comma[i]),
          sixteen: Number(comma[i]),
          seventeen: Number(comma[i]),
          eighteen: Number(comma[i]),
          nineteen: Number(comma[i]),
          twenty: Number(comma[i]),
          twentyOne: Number(comma[i]),
          twentyTwo: Number(comma[i]),
        }
      ];
      console.log(self.results);
    }
    fileReader.readAsText(file);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
