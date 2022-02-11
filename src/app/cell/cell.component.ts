import { Component, Input } from '@angular/core';

@Component({
  selector: 'cell',
  template: `
  <div>{{character}}</div>
  `,
  styles: ['div { height: 60px; width: 60px; border:solid 1px; text-align:center;}']
})
export class CellComponent {
  @Input() character: string = '';
}