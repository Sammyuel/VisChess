

import {Component, Input, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import {ChessGroundComponent} from './chessground.component';
import { ChessGroundService } from './chessground.service';
import {SparePiecesComponent} from './sparepieces.component';
import {GamesService} from './games.service';
import {ChessJsService} from './chessjs.service';
import {GameItem} from './games';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';
declare var require: any;
var _ = require('lodash');
var util = require('chessground').util;
var drag = require('chessground').drag;
var api = require('chessground').api;

@Component({
    selector: 'boardeditor',
    template: ` 
            <body [style.background] = "success ? 'green' : 'none'">
             <div class = "container">
                <sparepieces  (mousedownonpiece)="onMouseDownOnPiece($event)" 
                  [color]="spareupcolour"
                  [width]="sparepieceWidth"
                  [height]="sparepieceHeight"
                >
                </sparepieces>
                  <chessground  [width]="boardwidth" [height]="boardheight" [pieces]="pieces" [orientation]="orientation"></chessground>
                 
                <sparepieces 
              
                  (mousedownonpiece)="onMouseDownOnPiece($event)" 
                  [color]="sparedowncolour" 
                  [width]="sparepieceWidth" 
                  [height]="sparepieceHeight"
                >
                </sparepieces>
            </div>
            <button *ngIf = "success" type="button" class="btn btn-success btn-lg btn-block" (click)="onContinue()">Next Game</button>

            </body>


            <button *ngIf = "!continue" type="button" class="btn btn-primary btn-lg btn-block" (click)="continueNext()">{{status}} </button>
          
            <button *ngIf = "continue" type="button" class="btn btn-primary btn-lg btn-block" (click)="onSubmit()">{{submit}}<h1><span *ngIf = "success" class="glyphicon glyphicon-ok"></span></h1></button>

            <button type="button" class="btn btn-warning" (click)="changeOrientation()"> Flip </button>
            <button type="button" class="btn btn-warning" (click)="berserk()"> Berserk </button>
          
            `

            ,

    styles: ['.extraclass {background-color: green;}'],
    providers: [ChessGroundService, ChessJsService],
    encapsulation: ViewEncapsulation.None,


})

export class BoardEditorComponent implements AfterViewInit {

    @Input() orientation: string = 'white';
    ground: any;
    dragKey: any;
    pieces: string = "merida";
    boardwidth:string = '75vh';
    boardheight:string = '75vh';
    logic: any;


    sparepieceWidth: string = '50';
    sparepieceHeight: string = '50';
    spareupcolour: string = 'black';
    sparedowncolour: string = 'white';
    pgnEnd: string;
    continue: boolean = false;
    success: boolean = false;
    viewOnly: boolean = true;
    status: string = "Continue";
    submit: string = "Submit";
    GameList: [GameItem];
    req: any;
    berserkState: boolean = false;


    constructor(private cgctrl: ChessGroundService, private userService: GamesService, private chessjs: ChessJsService) {

    }

 
    onMouseDownOnPiece(event) {
        var piece = { role: event.role, color: event.color };
        this.handoverSparePiece(event.event, piece);
    }

    ngOnInit(){

        this.req = this.userService.list().subscribe(data => {
            this.GameList = data as [GameItem];
        })


    }
    berserk(){
        if (this.berserkState == false){
            this.berserkState = true;
            this.ground.set({fen: "8/8/8/8/8/8/8/8 w - -"});
        }
        else{
            this.berserkState = false;
            this.ground.set({fen: this.userService.initialFen});
        }

        
    }

    ngOnDestroy(){
        this.req.unsubscribe()
    }



    ngAfterViewInit() {
        // Component views are initialized
        this.ground = this.cgctrl.getGround();

        var clientWidth = this.cgctrl.getWidthInPx();
        var clientHeight = this.cgctrl.getHeightInPx();



        if (this.orientation == 'black') {
            this.spareupcolour = 'white';
            this.sparedowncolour = 'black';
        }
        this.logic = this.chessjs.getNewInstance();
        this.logic.load_pgn(this.userService.end);
        this.pgnEnd = this.logic.fen();


    }

    setFen(){
        this.logic.load_pgn(this.userService.end);
        this.pgnEnd = this.logic.fen();
        
    }
    onSubmit(){
        this.setFen();
        if(this.pgnEnd.includes(this.ground.getFen())){

            this.success = true;
            this.submit = "SUCCESS";
        }
        else{
            
            this.continue = false;
            
            this.status = "Try again!";
            this.ground.set({fen: this.userService.initialFen});
            this.ground.set({movable: {free:false}});
            this.userService.userActivated.next(false);

        }
    }

    onContinue(){
        this.userService.pgn = this.GameList[this.userService.getNewGame()].pgn;
        this.userService.setNewValues();
        this.submit = "Submit";
        this.logic = this.chessjs.getNewInstance();
        this.logic.load_pgn(this.userService.initialPgn);
        this.userService.initialFen = this.logic.fen();
        this.logic.load_pgn(this.userService.end);
        this.pgnEnd = this.logic.fen();
        
        this.userService.userActivated.next(false);
        this.continue = false;
        this.success = false;
        this.status = "Continue"; 
        this.ground.set({fen:this.userService.initialFen});
        this.ground.set({movable: {free:false}});
        this.problem();


    }

    problem(){
        this.ground.set({fen:this.userService.initialFen});
    }
    
    continueNext(){
        this.continue = true;
        
        this.userService.move = true;
        this.ground.set({movable: {free:true}});
        this.userService.userActivated.next(true);
            
   
        
    }

    onChange() {
    }

    changeOrientation(){

        this.ground.toggleOrientation();
    }

    findFirstEmptySquare(k) {
        return !this.ground.data.pieces[k];

    };

    handoverSparePiece(event, piece) {
        var pieces = this.ground.data.pieces;


        var key = _.find(util.allKeys, this.findFirstEmptySquare.bind(this));
    

        this.dragKey = key;

        var coords = util.key2pos(this.ground.data.orientation === 'white' ? key : util.invertKey(key));

        var obj = {};
        obj[key] = piece;

   

        this.ground.setPieces(obj);

        //this.ground.toggleOrientation(obj);

        var bounds = this.ground.data.bounds();

 
        //assume chessboard is 8*8 squares
        var squareSize = bounds.width / 8;

        var rel = [
            (coords[0] - 1) * squareSize + bounds.left,
            (8 - coords[1]) * squareSize + bounds.top
        ];

        this.ground.data.draggable.current = {
            orig: key,
            piece: piece.color + piece.role,
            rel: rel,
            epos: [event.clientX, event.clientY],
            pos: [event.clientX - rel[0], event.clientY - rel[1]],
            dec: [-squareSize / 2, -squareSize / 2],
            bounds: bounds,
            started: true
        };
        drag.processDrag(this.ground.data);

    }

}
