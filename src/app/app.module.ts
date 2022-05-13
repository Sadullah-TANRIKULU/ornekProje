import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ContentModule } from './content/content.module';
import { HighlightDirective } from './directives/highlight.directive';
// proje büyüdükçe herşeyi app module altında toplamak karışıklığa sebep olur, o yüzden projeyi modullere ayırmalıyız.

@NgModule({
  declarations: [
    AppComponent,  // default olarak gelir, başlangıç component idir.
    HeaderComponent, AboutComponent, ContactComponent, HomeComponent, HighlightDirective  // biz oluşturduk
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }   
