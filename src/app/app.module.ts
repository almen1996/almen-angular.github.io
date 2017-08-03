import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppComponent } from './app.component';
import {AngularMaterialModule} from './ngmaterial.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
