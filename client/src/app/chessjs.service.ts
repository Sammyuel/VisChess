import { Injectable } from '@angular/core';
declare var require: any;
var Chess = require('../libs/chess.js').Chess;

@Injectable()
export class ChessJsService {

    
    private chess: any;

    constructor() {

    }

    initSharedInstance() {
        
        this.chess = new Chess();
    }

    getNewInstance() {
        
        return new Chess();
    }

    getSharedInstance() {
        return this.chess;
    }
} 