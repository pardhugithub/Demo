import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  parentFood = '';
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.parentFood = 'Test';
      //this.cd.detectChanges();
    }, 2000);
  }

  triggerParent() {
    console.log('trigger Parent');
  }
  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
