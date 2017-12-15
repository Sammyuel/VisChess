
import {Component, Input} from '@angular/core';
import {GamesService} from './games.service';
import {ChessJsService} from './chessjs.service';
import { ChessGroundService } from './chessground.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/animations';

@Component({
    selector: 'chessmoves',
    template: ` 

    			<div class="col-md-6">
                   
	    			<table class="table table-dark">

	    			    <thead>
                            <tr>

                            <th><h3>Moves</h3></th> 
                            </tr>
                        </thead>

					  <tbody>
                    	<tr *ngFor='let move of pgnArray' > 
                             <td><h4>{{move}} </h4></td>

                
                        </tr>
					  </tbody>
					</table>
				</div>

	
               


                `,
    styleUrls: ['./chessmoves.component.css'],
    providers: [ChessGroundService],




})
export class chessmovesComponent { 
    ground:any;

	constructor(private userService: GamesService){}
	@Input() pgn: string = this.userService.endPgn;
    pgnArray: string[] = this.pgn.split(/[0-9]+[.]/).filter(x => x != "");

    ngOnChanges(){
        this.pgnArray = this.pgn.split(/[0-9]+[.]/).filter(x => x != "");
    }
	
	
    ngOnInit(){}

}



