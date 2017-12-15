import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class ScalaChessJsService {


    private chessWorker: any;
    responseevent: EventEmitter<any> = new EventEmitter();

    constructor() {

        this.chessWorker = new Worker('../libs/scalachessjs-opt.js');
        this.chessWorker.addEventListener('message', this.onWorkerEvent.bind(this));

    }


    emitResponseEvent(data) {
        this.responseevent.emit({ data: data });
    }

    getResponseEvent() {
        return this.responseevent;
    }

    postReadPgn(pgn: string) {

        this.chessWorker.postMessage({
            topic: 'pgnRead',
            payload: {
                pgn: pgn
            }
        });

    }

    onWorkerEvent(e) {
        this.emitResponseEvent(e.data);
    }

} 