import { Component } from '@angular/core';
import { interval } from 'rxjs';
import * as Vex from 'vexflow';

@Component({
  selector: 'app-motif-generator',
  templateUrl: './motif-generator.component.html',
  styleUrls: ['./motif-generator.component.css'],
})
export class MotifGeneratorComponent {
  keySignature = "";
  tempoIsFast : Boolean = true;
  timeSignature = "";
  notes : Array<string> = [];

  scale = ["C", "D", "E", "F", "G", "A", "B"];

  musicDescription = this.tempoIsFast ? "Fast" : "Slow";

  // copied from vexflow/src/tables.ts
  integerToKeySignature(integer: number): string {
    const keySignatures: Array<string> = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb',
                                          'Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'D#m', 'A#m', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm', 'Abm'];
    
    if (integer < 0 || integer > keySignatures.length - 1) {
      // RunTimeError doesn't work
      console.log('BadArguments', `integerToNote() requires an integer in the range [0, 11]: ${integer}`);
    }

    const noteValue = keySignatures[integer];
    if (!noteValue) {
      console.log('BadArguments', `Unknown note value for integer: ${integer}`);
    }

    return noteValue;
  }

  constructor() {  }
  
  dieRoll(sides : number = 6) {
    return Math.floor(Math.random() * sides) + 1;
  }

  generateKeySignature () {
    this.keySignature = this.integerToKeySignature(this.dieRoll(30)-1);
  }
  generateTimeSignature () {
    /* 3/4 or 4/4, 25-75 odds */
    this.timeSignature = this.dieRoll(4) == 1 ? "3/4" : "4/4";
  }
  generateNotes () {
    this.notes = [];
    let tonic = this.keySignature[0];

    this.notes.push(tonic + "/4");

    let noteIndex = this.scale.indexOf(tonic);

    for (let i = 0; i < 3; i++) {
      noteIndex = this.scale.indexOf(tonic);
      let interval = this.dieRoll(12);
      let steps = interval-1;
      noteIndex += steps;

      // keep track of how many octaves we've gone up
      let octaveCount = 0;

      // loop around if we go past the end of the scale
      while (noteIndex > 6) {
        octaveCount++;
        noteIndex -= 7;
      }

      this.notes.push(this.scale[noteIndex]+("/" + (4+octaveCount)));
    }

  }
  generateTempo () {
    this.tempoIsFast = this.dieRoll(2) == 1;
  }
  setDescription () {
    this.musicDescription = this.tempoIsFast ? "Fast" : "Slow";
    this.musicDescription+= " theme in " + this.keySignature;
  }
  generateMotif() {
    this.generateKeySignature()
    this.generateTimeSignature()
    this.generateTempo()

    this.generateNotes()

    this.setDescription() // has to go last because it describes the other variables
  }

  ngOnInit(): void {
    this.generateMotif();
  }
}
