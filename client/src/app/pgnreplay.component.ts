
import {Component,Output,EventEmitter} from '@angular/core';
import { ViewerButtonBarComponent } from './viewer-buttonbar.component';
import { PgnInputTextComponent } from './pgninputtext.component';


@Component({
    selector: 'pgnreplay',
    template: ` <div class="pgnreplaycontainer">
                <viewer-buttonbar (do)="onButtonBarDo($event)" ></viewer-buttonbar>
                <pgninputtext (pgnsubmit)="onPgnSubmit($event)"></pgninputtext>
                </div>`,
})
export class PgnReplayComponent { 
    
    @Output() pgnsubmit: EventEmitter<any> = new EventEmitter();
    
    onButtonBarDo(event)
    {
        
    }
    
    onPgnSubmit(event)
    {
       this.pgnsubmit.emit({pgn:event.pgn});
    }
    
}

