import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass'],
})
export class ChildComponent implements OnInit {
  @Input() item = '';
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  triggerChild() {
    console.log('trigger Child');
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
