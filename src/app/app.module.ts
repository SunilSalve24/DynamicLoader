import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OverlayModule } from "@angular/cdk/overlay";
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

import { HttpModule } from '@angular/http';

import {
  MatCheckboxModule,
  MatCheckbox,
  MatButtonModule,
  MatButton,
  MatToolbarModule,
  MatMenuModule,
  MatListModule
 } from '@angular/material';


import { BrowserModule } from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ComponetLoderDirective } from './componet-loder.directive';
import { DemoscreenComponent } from './demoscreen/demoscreen.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    ComponetLoderDirective,
    DemoscreenComponent,
  ],
  imports: [CdkTableModule,BrowserAnimationsModule,
    BrowserModule, MatCheckboxModule, MatButtonModule, MatMenuModule, MatListModule, MatToolbarModule, OverlayModule, ScrollDispatchModule, ButtonModule],
  exports: [MatCheckboxModule, MatButtonModule, MatToolbarModule, MatListModule,HttpModule ],
  entryComponents: [ ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
