
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit} from '@angular/core'
import { ChessGroundService } from './chessground.service';
import {GamesService} from './games.service';
import {ChessJsService} from './chessjs.service';

declare var require: any;
var util = require('chessground').util;
var drag = require('chessground').drag;
var api = require('chessground').fen;
@Component({
    selector: 'chessground',
    template: `
                 
                 <div [id]="muuid"  [style.width]="width" [style.height]="height" [ngClass]="[pieces,board]">


                 </div>
              `

})
    
export class ChessGroundComponent implements AfterViewInit {
    
    uuid = require('uuid');

    @Input() pieces: string = 'stuanton';
    @Input() board: string = 'wood';
    @Input() muuid: string = this.uuid.v4();
    @Input() width: string = '100%';
    @Input() height: string = '100%';
    @Input() options: any;
    @Input() orientation: any = 'white';

    @Output() change: EventEmitter<any> = new EventEmitter();
    @Output() move: EventEmitter<any> = new EventEmitter();
    @Output() select: EventEmitter<any> = new EventEmitter();
    dragKey: any;
    ground: any;
    defaultOptions: any;
    logic: any;
    fen: string;
    pgnEnd: string;
    constructor(private cgctrl: ChessGroundService, private userService: GamesService, private chessjs: ChessJsService) {
    }


    dragNewPiece(){

    }
    selectSquare(key, force){
        console.log(key);
    }


    onChangeDrawable(shapes) {
        console.log(shapes);

    }

    onMove(orig, dest, capturedPiece) {

    }

    findFirstEmptySquare(k) {
        return !this.ground.data.pieces[k];

    };
    onSelect(key) {
       console.log(key);

    }

    newPiece(piece, key){

    }

    ondropNewPiece(piece, key){
        console.log(key);
    }


    ngAfterViewInit() {
        this.logic = this.chessjs.getNewInstance();
        this.logic.load_pgn(this.userService.initialPgn);
        this.userService.initialFen = this.logic.fen();
        this.fen = this.userService.initialFen;

        this.defaultOptions = {
            orientation: this.orientation,
            fen: this.fen,
        
            coordinates: true,

            draggable: {
                enabled: true,        // allow moves & premoves to use drag'n drop
                distance: 3,          // minimum distance to initiate a drag, in pixels
                squareTarget: true,  // display big square target; intended for mobile
                centerPiece: true,    // center the piece on cursor at drag start
                showGhost: true,      // show ghost of piece being dragged
            },
            drawable: {
                enabled: true,
                onChange: this.onChangeDrawable
                // enable SVG circle and arrow drawing on the board
            },
            events: {
                change: this.onChange,   // called after the situation changes on the board
                // called after a piece has been moved.
                // capturedPiece is null or like {color: 'white', 'role': 'queen'}
                dropNewPiece: this.ondropNewPiece,
                move: this.onMove,
                select: this.onSelect // called when a square is selected
            },
            movable: {
                free: this.userService.move,           // all moves are valid - board editor
                color: "both",        // color that can move. "white" | "black" | "both" | null
                dropOff: "trash"    // when a piece is dropped outside the board. "revert" | "trash"
            }

        };

        this.ground = this.cgctrl.init(this.muuid, this.defaultOptions);

        if (this.options) {
            this.ground.set(this.options);
        }

      


    };
    onChange() {
    
   
    }



}
