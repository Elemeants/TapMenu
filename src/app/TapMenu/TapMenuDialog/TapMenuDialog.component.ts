import { Component, OnInit, Inject, ViewChild, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { IconsService } from './iconsService/icons.service';

@Component({
  selector: 'app-tapmenudialog',
  templateUrl: './TapMenuDialog.component.html',
  styleUrls: ['./TapMenuDialog.component.css']
})

export class TapMenuDialogComponent implements OnInit {
  public side = 'side';
  public selectedIndex: number;
  public idSelected: number;
  @ViewChild('stepper') private myStepper: MatStepper;
  constructor(public _iconsService: IconsService,
    public dialogRef: MatDialogRef<TapMenuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: any) {
    this.selectedIndex = 1;
    this.idSelected = 0;
  }

  public ngOnInit() { }

  public getIconsSelectors(): string[] {
    return this._iconsService.getIconsSelectors();
  }

  public getIconsIndications(): string[] {
    return this._iconsService.getIconsIndications();
  }

  public stepChange(event?: StepperSelectionEvent) {
    this.selectedIndex = this.myStepper.selectedIndex;
    console.log(this.myStepper.selectedIndex);
  }

  public onNoClick(status?: boolean): void {
    this.dialogRef.close(status);
  }

  public SaveIcon() {
    const message = this.selectedIndex === 0 ? 'Indicador ' : 'Icono ';
    alert(message + (this.idSelected + 1) + ' guardado');
  }
}
