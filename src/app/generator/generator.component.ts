import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  character: string = "";
  possibleCharacters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  rows: string[] = [''];
  constructor() { }

  ngOnInit(): void {
    this.buildGrid();
  }

  buildGrid(){
    this.character = this.possibleCharacters.charAt(Math.floor(Math.random() * this.possibleCharacters.length));
    this.rows = Array(10).fill(this.character);
  }

}
