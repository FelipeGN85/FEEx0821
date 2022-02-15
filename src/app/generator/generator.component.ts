import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  cells!: any[];
  date!: Date;
  code!: string;
  characterForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.characterForm = this.fb.group({
      letter:[''],
    });
  }

  ngOnInit(): void {
    setInterval(() => { this.buildGrid() }, 2 * 1000);
    // this.buildGrid();
  }

  buildGrid() {
    this.cells = Array.from({ length: 100 }, () => this.randomCharacter());
    this.cells[87] = 'a';
    this.cells[1] = 'b';
    
    if(this.characterForm.value.letter != '') {
      for (let i=2; i < 22; i++) {
        this.cells[i] = this.characterForm.value.letter;
      }
      this.characterForm.setValue({letter: ''});
    }
  
    this.date = new Date();
    // console.log(this.date);
    // console.log('1st coords character: ', this.cells[this.date.getSeconds()]);
    // console.log('2st coords character: ', this.cells[this.reverseNum(this.date.getSeconds())]);
    this.code = this.caractherOccurrences(this.cells[this.date.getSeconds()]).toString() + this.caractherOccurrences(this.cells[this.reverseNum(this.date.getSeconds())]).toString();
    localStorage.clear();
    localStorage.setItem("grid", JSON.stringify(this.cells));
    localStorage.setItem("code", this.code);
  }

  randomCharacter(): string {
    const possibleCharacters = "abcdefghijklmnopqrstuvwxyz";
    return possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
  }

  reverseNum(n: number): number {
    let r = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(r);
  }

  caractherOccurrences(caracther: string): number {
    let numOfOccr = this.cells.filter(x => x === caracther).length;
    if (numOfOccr > 9) Math.ceil(numOfOccr/2);
    // while (numOfOccr > 9) {
    //   Math.ceil(numOfOccr/2);
    //   if(numOfOccr <= 9){
    //     break;
    //   }
    // }
    return numOfOccr;
  }

}
