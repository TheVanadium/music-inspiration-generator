import { Component } from '@angular/core';
import * as Vex from 'vexflow';

@Component({
  selector: 'app-sheet-music',
  templateUrl: './sheet-music.component.html',
  styleUrls: ['./sheet-music.component.css']
})
export class SheetMusicComponent {

  constructor() {}

  ngOnInit() {
    const { Renderer, Stave } = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element
    const sheetMusic : HTMLElement = document.getElementById("sheet-music")!;
    const div : HTMLElement = sheetMusic!; 
    const renderer = new Renderer(div, Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    const context = renderer.getContext();

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef("treble");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }
}
