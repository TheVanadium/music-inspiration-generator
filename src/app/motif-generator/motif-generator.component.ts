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
  timeSignature = "4/4";
  
  musicDescription = this.tempoIsFast ? "Fast" : "Slow";

  // copied from vexflow/src/tables.ts
  integerToKeySignature(integer: number): string {
    // const table: Record<number, string> = {
    //   0: 'C',
    //   1: 'C#',
    //   2: 'D',
    //   3: 'D#',
    //   4: 'E',
    //   5: 'F',
    //   6: 'F#',
    //   7: 'G',
    //   8: 'G#',
    //   9: 'A',
    //   10: 'A#',
    //   11: 'B',
    // };
    const keySignatures: Array<string> = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb',
                                          'Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'D#m', 'A#m', 'Dm', 'Gm', 'Cm', 'Fm', 'Bbm', 'Ebm', 'Abm'];
    
    if (integer < 0 || integer > keySignatures.length - 1) {
      // RunTimeError doesn't work
      console.log('BadArguments', `integerToNote() requires an integer in the range [0, 11]: ${integer}`);
    }

    const noteValue = keySignatures[integer];
    if (!noteValue) {
      //throw new RuntimeError('BadArguments', `Unknown note value for integer: ${integer}`);
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
    console.log(this.timeSignature)
  }
  generateNote () {
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
    this.generateNote()
    this.generateTempo()
    this.setDescription() // has to go last
  }

  ngOnInit(): void {
    this.generateMotif();
  }
}
