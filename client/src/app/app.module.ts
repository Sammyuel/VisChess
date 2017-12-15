import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// third party imports
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { SafePipe } from './utility/safe.pipe';
import { BoardEditorComponent} from './boardeditor.component';
import { ChessGroundPieceComponent } from './chessground-piece.component';
import { GlyphButtonComponent } from './glyphbutton.component';
import { PgnInputTextComponent} from './pgninputtext.component';
import { PgnReplayComponent} from './pgnreplay.component';
import { PgnViewerComponent } from './pgnviewer.component';
import { SparePiecesComponent } from './sparepieces.component';
import { ViewerButtonBarComponent } from './viewer-buttonbar.component';
import { ChessGroundComponent } from './chessground.component';
import {pieceComponent} from './piece.component';
import {chessmovesComponent} from './chessmoves.component';
import {GamesService} from './games.service';


@NgModule({
  declarations: [
    AppComponent,
   
    SafePipe,
   
    ChessGroundComponent,
    BoardEditorComponent,
    ChessGroundPieceComponent,
    GlyphButtonComponent,
    PgnInputTextComponent,
    PgnReplayComponent,
    PgnViewerComponent,
    SparePiecesComponent,
    ViewerButtonBarComponent,
    pieceComponent,
    chessmovesComponent,
    

  ],
  imports: [
    // ngx-bootstrap
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
