import { Component } from '@angular/core';
import * as Vex from 'vexflow';

@Component({
  selector: 'app-motif-generator',
  templateUrl: './motif-generator.component.html',
  styleUrls: ['./motif-generator.component.css'],
})
export class MotifGeneratorComponent {
  keySignature = "C";
  tempoIsFast : Boolean = true;
  
  musicDescription = this.tempoIsFast ? "Fast" : "Slow";

  // copied from vexflow/src/tables.ts
  integerToNote(integer: number): string {
    if (integer < 0 || integer > 11) {
      // RunTimeError doesn't work
      console.log('BadArguments', `integerToNote() requires an integer in the range [0, 11]: ${integer}`);
    }

    const table: Record<number, string> = {
      0: 'C',
      1: 'C#',
      2: 'D',
      3: 'D#',
      4: 'E',
      5: 'F',
      6: 'F#',
      7: 'G',
      8: 'G#',
      9: 'A',
      10: 'A#',
      11: 'B',
    };

    const noteValue = table[integer];
    if (!noteValue) {
      //throw new RuntimeError('BadArguments', `Unknown note value for integer: ${integer}`);
      console.log('BadArguments', `Unknown note value for integer: ${integer}`);
    }

    return noteValue;
  }

  constructor() {  }
  
  dieRoll(sides : number = 6) {
    const num = Math.floor(Math.random() * sides) + 1;
    return num;
  }

  generateKeySignature () {
    /* generate note, major/minor */
  }
  generateTimeSignature () {
    /* 3/4 or 4/4, 25-75 odds */
  }
  generateNote () {
  }
  generateTempo () {
    this.tempoIsFast = this.dieRoll(2) == 1;
  }
  generateMotif() {
    this.generateKeySignature
    this.generateTimeSignature
    this.generateNote
    this.generateTempo()
    console.log(this.integerToNote(1));
    console.log(this.tempoIsFast);
    this.musicDescription = this.tempoIsFast ? "Fast" : "Slow";
  }

  ngOnInit(): void {
    this.generateMotif();
  }
}
