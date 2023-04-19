import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    FooterComponent,
    BodyComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    FooterComponent,
    BodyComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [
    FooterComponent,
    BodyComponent,
    HeaderComponent]
})
export class UiModule { }
