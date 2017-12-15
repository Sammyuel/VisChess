import {Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    selector:'piece',
    template:`
             <div [style.width.px]="height" [style.height.px]="height" [ngClass]="[color,piece]" class="chessgroundpiece">
             </div>`, 
    
})
export class pieceComponent{

  @Input() width: number;
  @Input() height: number;
  @Input() pieces: string = 'merida';
  @Input() piece:string ='';
  @Input() color: string = 'white';
  @Input() is3d: boolean = false;
  
  constructor(){
    
  }
 
}