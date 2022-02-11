import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
 rows=["a","a","a","a","a","a","a","a","a","a"];
  constructor() { }

  ngOnInit(): void {

  }

}
