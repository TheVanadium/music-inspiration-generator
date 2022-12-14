import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SheetMusicComponent } from './sheet-music/sheet-music.component';
import { MotifGeneratorComponent } from './motif-generator/motif-generator.component';
import { ReferenceBoxComponent } from './reference-box/reference-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SheetMusicComponent,
    MotifGeneratorComponent,
    ReferenceBoxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
