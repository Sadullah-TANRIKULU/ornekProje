import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';



@NgModule({
  declarations: [
    ContentListComponent
  ],
  exports: [ContentListComponent],  // ayrı modulleri olan component içeriğini diğerinde(component html) göstermek için o component i kendi modülünde export etmek gererkiyor. 
  imports: [
    CommonModule
  ]
})
export class ContentModule { }
