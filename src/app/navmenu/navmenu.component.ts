import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TapMenuDialogComponent } from '../TapMenu/TapMenuDialog/TapMenuDialog.component';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openTapMenu() {
    const dialogRef = this.dialog.open(TapMenuDialogComponent, {
      width: '700px',
      height: '500px'
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
