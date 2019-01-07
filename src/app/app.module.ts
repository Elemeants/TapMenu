// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Material Modules
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

// Project components
import { NavmenuComponent } from './navmenu/navmenu.component';

// Project module
import { TapMenuModule } from './TapMenu/TapMenu.module';

@NgModule({
   declarations: [
      AppComponent,
      NavmenuComponent,
   ],
   imports: [
      TapMenuModule,
      BrowserAnimationsModule,
      BrowserModule,
      AppRoutingModule,
      MatToolbarModule,
      MatDialogModule,
      MatButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
