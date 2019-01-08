import { Component, OnInit, Inject, ViewChild, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-tapmenudialog',
  templateUrl: './TapMenuDialog.component.html',
  styleUrls: ['./TapMenuDialog.component.css']
})

export class TapMenuDialogComponent implements OnInit {
  public side = 'side';
  public selectedIndex: number;
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(
    public dialogRef: MatDialogRef<TapMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any) {
    this.selectedIndex = 1;
  }

  ngOnInit() {
  }

  stepChange(event?: StepperSelectionEvent) {
    this.selectedIndex = this.myStepper.selectedIndex;
    console.log(this.myStepper.selectedIndex);
  }

  showAlert() {
    console.log('selected');
  }

  onNoClick(status?: boolean): void {
    this.dialogRef.close(status);
  }
}
