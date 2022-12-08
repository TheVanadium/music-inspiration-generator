import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicNoteComponent } from './music-note/music-note.component';
import { HeaderComponent } from './header/header.component';
import { GenerateButtonComponent } from './generate-button/generate-button.component';
import { SheetMusicComponent } from './sheet-music/sheet-music.component';
import { TimeSignatureComponent } from './time-signature/time-signature.component';
import { TempoMarkingComponent } from './tempo-marking/tempo-marking.component';
import { MotifGeneratorComponent } from './motif-generator/motif-generator.component';
import { KeySignatureComponent } from './key-signature/key-signature.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicNoteComponent,
    HeaderComponent,
    GenerateButtonComponent,
    SheetMusicComponent,
    TimeSignatureComponent,
    TempoMarkingComponent,
    MotifGeneratorComponent,
    KeySignatureComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
