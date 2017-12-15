import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import {PgnReplayComponent} from './pgnreplay.component';

import { ChessGroundService } from './chessground.service';

import { ChessJsService } from './chessjs.service';
import { ScalaChessJsService } from './scalachessjs.service';
import { PgnService } from './pgn.service';

@Component({
  selector: 'pgnviewer',
  template: ` <h1> Welcome </h1>
              <div class="pgnviewercontainer">
                  <chessground [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>

                 
                </div>
             `,
  providers: [ChessGroundService, ChessJsService,ScalaChessJsService,PgnService]

})
export class PgnViewerComponent implements AfterViewInit {

  pgn: string = ``;
       
  chessjs :any;
  
  
  
  boardwidth:string = '100vh';
  boardheight:string = '100vh';
  pieces: string = "merida";
  board: string = "chessground.light-wood-3d";
  orientation:string="white";
  fen: string = '2r3k1/pp2Qpbp/4b1p1/3p4/3n1PP1/2N4P/Pq6/R2K1B1R'
  scalachessjssubscription: any;

  constructor(private cgctrl: ChessGroundService, private chessjsservice: ChessJsService, private scalachessjsservice: ScalaChessJsService, private pgnservice: PgnService) {
  
  this.scalachessjssubscription =  this.scalachessjsservice.getResponseEvent().subscribe(this.onTest); 
  
  }
  
  onTest(e)
  {
    console.log(e); 
  }
  
  onPgnSubmit(event)
  {
    
    let pgn: string = this.pgnservice.cleanUpPgn(event.pgn);
    this.scalachessjsservice.postReadPgn(pgn);
    //this.chessjs.load_pgn(pgn);
    //console.log(this.chessjs.history({ verbose: true }));
    
    
  }

  ngAfterViewInit(){
     this.chessjs=this.chessjsservice.getNewInstance(); 
     
             
     
    
  }
  
  onButtonBarDo(event)
  {
    console.log(event);
  }
  
}