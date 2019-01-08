import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TapMenuDialogComponent } from '../TapMenu/TapMenuDialog/TapMenuDialog.component';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {
  public isBussyModal: boolean;
  constructor(public dialog: MatDialog) { 
    this.isBussyModal = true;
  }

  ngOnInit() { }

  openTapMenu() {
    this.isBussyModal = false;
    const dialogRef = this.dialog.open(TapMenuDialogComponent, {
      width: '700px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.isBussyModal = true;
    });
  }
}
