import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {

  @Input()
  content: any;

  @Output() onDelete = new EventEmitter();

  emitDelete() {
    this.onDelete.emit();
  }
}
