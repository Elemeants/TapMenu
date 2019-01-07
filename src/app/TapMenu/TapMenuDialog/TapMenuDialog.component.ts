import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';

@Component({
  selector: 'app-tapmenudialog',
  templateUrl: './TapMenuDialog.component.html',
  styleUrls: ['./TapMenuDialog.component.css']
})

export class TapMenuDialogComponent implements OnInit {
  public side = 'side';
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(
    public dialogRef: MatDialogRef<TapMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any) { }
  ngOnInit() {
  }

  showAler() {
    alert('Hola');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  Finished() { }
}
