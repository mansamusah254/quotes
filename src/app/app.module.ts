import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule } from '@angular/forms';
import { FeelingComponent } from './feeling/feeling.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavbarComponent,
    HighlightDirective,
    FeelingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
