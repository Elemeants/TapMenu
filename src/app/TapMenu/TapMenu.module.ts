import { TapMenuDialogComponent } from './TapMenuDialog/TapMenuDialog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
  ],
  declarations: [
    TapMenuDialogComponent
  ],
  entryComponents: [
    TapMenuDialogComponent
  ],
  exports: [
    TapMenuDialogComponent
  ]
})
export class TapMenuModule { }
