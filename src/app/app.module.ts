import { DragDropModule } from '@angular/cdk/drag-drop';
import { registerLocaleData } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InputNumberModule } from '@deividfortuna/input-number';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  NgbModalModule,
  NgbToastModule,
  NgbDropdownModule,
  NgbDatepickerModule,
  NgbTypeaheadModule,
  NgbProgressbarModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeDe from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { NgforissueComponent } from './ngforissue/ngforissue.component';

registerLocaleData(localeDe);

@NgModule({
    declarations: [
        AppComponent,
        NgforissueComponent
    ],
    imports: [
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModalModule,
        NgbToastModule,
        NgbDropdownModule,
        NgbDatepickerModule,
        NgSelectModule,
        NgbTypeaheadModule,
        NgbProgressbarModule,
        NgbTooltipModule,
        InputNumberModule,
        DragDropModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    entryComponents: [
    ]
})
export class AppModule { }
