
import {Component,Output,EventEmitter} from '@angular/core';
import {GlyphButtonComponent} from './glyphbutton.component';


@Component({
    selector: 'pgninputtext',
    template: 
    `<div class="pgninputtextcontainer"> 
      <textarea class="pgntextarea" #pgntextarea spellcheck="false" >
       [Event "IBM Kasparov vs. Deep Blue Rematch"]
       [Site "New York, NY USA"]
       [Date "1997.05.11"]
       [Round "6"]
       [White "Deep Blue"]
       [Black "Kasparov, Garry"]
       [Opening "Caro-Kann: 4...Nd7"]
       [ECO "B17"]
       [Result "1-0"]
       1.e4 c6 2.d4 d5 3.Nc3 dxe4 4.Nxe4 Nd7 5.Ng5 Ngf6 6.Bd3 e6 7.N1f3 h6
       8.Nxe6 Qe7 9.O-O fxe6 10.Bg6+ Kd8 
       11.Bf4 b5 12.a4 Bb7 13.Re1 Nd5 14.Bg3 Kc8 15.axb5 cxb5 16.Qd3 Bc6 
       17.Bf5 exf5 18.Rxe7 Bxe7 19.c4 1-0
     </textarea> 
               <glyphbutton  *ngIf="showButton" [name]="'plus'" (click)="onPgnSubmit(pgntextarea.value)"></glyphbutton> 
                </div>`,
 })
export class PgnInputTextComponent { 
    
   @Output() pgnsubmit: EventEmitter<any> = new EventEmitter();
    
   showButton: boolean = false;
   onPgnSubmit(value)
   {
      this.pgnsubmit.emit({pgn:value});
   }
}

