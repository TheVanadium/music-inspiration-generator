import { Component, Input } from '@angular/core';
import * as Vex from 'vexflow';

@Component({
  selector: 'app-sheet-music',
  templateUrl: './sheet-music.component.html',
  styleUrls: ['./sheet-music.component.css']
})
export class SheetMusicComponent {

  @Input() keySignature = '';
  @Input() timeSignature = '';

  constructor() {}

  render() {
    const { Formatter, Renderer, Stave, StaveNote, Voice } = Vex.Flow;

    const sheetMusic : HTMLElement = document.getElementById("sheet-music")!;
    const div : HTMLElement = sheetMusic!;
    
    // prevents multiple renderings
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }

    const renderer = new Renderer(div, Renderer.Backends.SVG);

    renderer.resize(500, 200);
    const context = renderer.getContext();

    const stave = new Stave(10, 40, 400);
    stave.addClef("treble");
    stave.addTimeSignature(this.timeSignature);
    stave.addKeySignature(this.keySignature);
    stave.setContext(context).draw();

    const notes = [
      new StaveNote({ keys: ["c/4"], duration: "q" }),
      new StaveNote({ keys: ["d/4"], duration: "q" }),
      new StaveNote({ keys: ["b/4"], duration: "qr" }),
    ];

    const voice = new Voice({ num_beats: 3, beat_value: 4 });
    voice.addTickables(notes);

    new Formatter().joinVoices([voice]).format([voice], 350);

    voice.draw(context, stave);
  }

  generateMotif() {
    this.render();
  }

  ngOnInit() {
    this.render();
  }

  ngOnChanges() {
    this.render();
  }
}
