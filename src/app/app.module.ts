import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NestedFormSecondComponent } from './nested-form-second/nested-form-second.component';
import { NestedFormThirdComponent } from './nested-form-third/nested-form-third.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    NestedFormComponent,
    NestedFormSecondComponent,
    NestedFormThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
