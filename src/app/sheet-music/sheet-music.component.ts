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
  @Input() noteList : Array<string> = [];

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

    renderer.resize(600, 200);
    const context = renderer.getContext();

    const stave = new Stave(10, 40, 440);
    stave.addClef("treble");
    stave.addTimeSignature(this.timeSignature);
    stave.addKeySignature(this.keySignature);
    stave.setContext(context).draw();

    const notes = [
      new StaveNote({ keys: [this.noteList[0]], duration: "q" }),
    ];

    // for loop append notes to notes array
    for (let i = 1; i < this.noteList.length; i++) {
      notes.push(new StaveNote({ keys: [this.noteList[i]], duration: "q" }));
    }

    const voice = new Voice({ num_beats: 4, beat_value: 4 });
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
