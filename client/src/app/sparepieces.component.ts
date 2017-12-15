import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ChessGroundPieceComponent} from './chessground-piece.component'


@Component({
  selector: 'sparepieces',
  template: `<div class="sparepiecescontainer" [style.width.px]="width" [style.height.px]="height" >
                <chessground-piece (mousedown)="onMouseDown($event,'pawn')" [color]="color" [piece]="'pawn'" [height]="height" [width]="width" ></chessground-piece>
                <chessground-piece (mousedown)="onMouseDown($event,'bishop')" [color]="color" [piece]="'bishop'" [height]="height" [width]="height" ></chessground-piece>
                <chessground-piece (mousedown)="onMouseDown($event,'knight')" [color]="color" [piece]="'knight'" [height]="height" [width]="height" ></chessground-piece>
                <chessground-piece (mousedown)="onMouseDown($event,'rook')" [color]="color" [piece]="'rook'" [height]="height" [width]="height" ></chessground-piece>
                <chessground-piece (mousedown)="onMouseDown($event,'queen')" [color]="color" [piece]="'queen'" [height]="height" [width]="height" ></chessground-piece>
                <chessground-piece (mousedown)="onMouseDown($event,'king')" [color]="color" [piece]="'king'" [height]="height" [width]="height" ></chessground-piece>                                    
              </div>`,

})
export class SparePiecesComponent {

  @Input() width: number;
  @Input() height: number;
  @Input() pieces: string = 'merida';
  @Input() color: string = 'white';
  @Input() is3d: boolean = false;

  @Output() mousedownonpiece: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  onMouseDown(event, piecename) {
    var value = { event: event, role: piecename, color: this.color };
    this.mousedownonpiece.emit(value);
  }

}