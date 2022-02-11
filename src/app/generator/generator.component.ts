import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  cells!: any[];
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => { this.buildGrid() }, 2 * 1000);
    this.buildGrid();
  }

  buildGrid() {
    this.cells = Array(100).fill(this.randomCharacter());
  }

  randomCharacter(): string {
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

}
