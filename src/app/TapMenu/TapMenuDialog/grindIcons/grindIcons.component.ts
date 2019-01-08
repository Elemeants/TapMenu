import { Component, OnInit, QueryList, ViewChild, ViewChildren, AfterViewInit } from '@angular/core';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material';
@Component({
  selector: 'app-grindicons',
  templateUrl: './grindIcons.component.html',
  styleUrls: ['./grindIcons.component.css']
})
export class GrindIconsComponent implements OnInit, AfterViewInit {
  @ViewChild('group') group: MatButtonToggleGroup;
  @ViewChildren(MatButtonToggle) toggles: QueryList<MatButtonToggle>;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.toggles.forEach(toggle => toggle.buttonToggleGroup = this.group);
  }
}
