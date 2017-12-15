import { Injectable } from '@angular/core';

declare var require: any;
@Injectable()
export class ChessGroundService {


  Chessground = require('chessground');

  ground: any;

  id: string;

  constructor() {

  }

  init(id: string, options: any) {

    this.id = id;
    this.ground = this.Chessground(document.getElementById(id), options);

    return this.ground;
  }

  set(options: any) {
    this.ground.set(options);
  }

  getGround() {
    return this.ground;
  }

  getId() {
    return this.id;
  }

  getWidthInPx() {
    return document.getElementById(this.id).clientWidth
  }

  getHeightInPx() {
    return document.getElementById(this.id).clientHeight
  }

  getFen(){
    
  }

}