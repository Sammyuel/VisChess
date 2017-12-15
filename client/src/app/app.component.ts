
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BoardEditorComponent} from './boardeditor.component';
import {PgnViewerComponent} from './pgnviewer.component';
import {GamesService} from './games.service';



@Component({
    selector: 'app',

    styles: ['body { background: -webkit-linear-gradient(#917c4d, #ffffff);}'],
    template: ` 
    		<body>

				<nav class="navbar navbar-inverse">
				  <div class="container-fluid">
				    <div class="navbar-header">
				      <a class="navbar-brand" href="">VisChess</a>
				    </div>
				    <ul class="nav navbar-nav">
				      <li><a (click)="easy()">EASY</a></li>
				      <li><a (click)="medium()">MEDIUM</a></li>
				      <li><a (click)="hard()">HARD</a></li>
				    </ul>
				  </div>
				</nav>

			
    			<div>

	    			<div class="col-md-4">
	    				<h1> Instructions </h1>
	    				<h4> 1. Pick a difficulty </h4>
	    				<h4> 2. Visualize the moves and the resulting end position </h4>
	    				<h4> 3. Press continue and put the resulting position on the board </h4>
	    				<h4> Make it extra spicey by pressing the berserk button to start from a clear board </h4>
	    				<h4> You will be asked to try again if you fail! </h4> 


	    			</div>
	    			<div class="col-md-5" >
	    				<boardeditor [style.width]="'100%'" [style.height]="'100%'" ></boardeditor>
	    		
	    			</div>
	    			<div *ngIf = "showMoves"class="col-md-3" >
	    				<chessmoves [pgn] = "this.userService.endPgn" > </chessmoves>
	    			</div>


	    	
	

	    			
	    		</div>
	    	</body>


	  
	    		

                `,
    encapsulation: ViewEncapsulation.None,

})
export class AppComponent implements OnInit { 
	constructor(private userService: GamesService){}
	showMoves: boolean = true;
	ngOnInit(){
		this.userService.userActivated.subscribe(
			(clicked: boolean) => {
				if (clicked == true){
					this.showMoves = false;
				}
				else{
					this.showMoves = true;
				}
			})
		}
 	easy(){
 		this.userService.difficulty = this.userService.easy;
 		this.userService.setNewValues()


 	}
	medium(){
		this.userService.difficulty = this.userService.medium;
		this.userService.setNewValues()

	}
	hard(){
		this.userService.difficulty = this.userService.hard;
		this.userService.setNewValues()


	}

}




//`<boardeditor [style.width]="'100%'" [style.height]="'100%'"></boardeditor>`