import { Component, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material';
import { ninvoke } from 'q';
@Component({
  selector: 'app-grindicons',
  templateUrl: './grindIcons.component.html',
  styleUrls: ['./grindIcons.component.css']
})
export class GrindIconsComponent {
  @Input() iconsData: string[];
  @Output() inChange = new EventEmitter<number>();
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  private idSelected: number;
  constructor() { this.iconsData = []; this.idSelected = 0; }

  changeButton(index: number) {
    this.idSelected = index - 1;
    this.toggles.forEach((x) => x.checked = false);
    this.toggles.find((item, indexItem) => indexItem === this.idSelected).checked = true;
    this.inChange.next(this.idSelected);
  }
}
