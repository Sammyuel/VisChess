import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ChessJsService} from './chessjs.service';
import { Http } from '@angular/http';
import {GameItem} from './games';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


const endpoint = '/api/games/'
@Injectable()
export class GamesService {
  GameList: [GameItem];
  private req: any;
  currentID: number = Math.floor(Math.random() * 600) + 1 ; 
  currentGame: GameItem;
  easy: string = "13";
  medium: string = "15";
  hard: string = "17";
  default: string = this.easy;
  difficulty: string = this.default;
  pgn: string = "1. d4 Nf6 2. Bg5 Ne4 3. Bf4 c5 4. f3 Nf6 5. dxc5 b6 6. Nc3 bxc5 7. e4 Nc6 8. Qd2 e5 9. Bg5 Be7 10. Bb5 Nd4 11. Bc4 Rb8 12. b3 h6 13. Be3 d6 14. Nge2 Be6 15. Bxe6 fxe6 16. O-O O-O 17. Ng3 Qe8 18. Na4 g5 19. Nb2 Qg6 20. Nc4 Kh7 21. Rad1 Rf7 22. Rf2 Rg8 23. c3 Nc6 24. b4 g4 25. b5 Nb8 26. Qe2 h5 27. fxg4 h4 28. Nf1 Nxe4 29. Rxf7+ Qxf7 30. Qc2 Qg6 31. Nfd2 Nf6 32. Qxg6+ Kxg6 33. h3 Nbd7 34. Nf3 Nd5 35. Bf2 Nxc3 36. Rd3 Ne2+ 37. Kf1 Nd4 38. Bxh4 Kf7 39. Bxe7 Kxe7 40. a4 Nb6 41. Nfd2 e4 42. Rc3 d5 43. Ne5 c4 44. a5 Nxb5 45. Rc1 Nd7 46. Nexc4 dxc4 47. Rxc4 e3 48. Ne4 Nd6 49. Nxd6 Kxd6 50. Ke2 Rg5 51. Ra4 Re5 52. Ra3 Nf6 53. Rxe3 Rxa5 54. Kf3 Nd5 55. Rd3 e5 56. g5 Ra4 57. Rd2 e4+ 58. Ke2 Ke5 59. g3 Ra3 0-1";
  initialPgn: string = this.pgn.split('10')[0];
  endPgn: string = "10" + this.pgn.split("10")[1].split(this.difficulty)[0];
  initialFen: string;
  end: string = this.pgn.split(this.difficulty)[0];
  endFen: string;
  move: boolean = false;

  constructor(private http: Http) { }
  userActivated = new Subject();
	list(){
	  return this.http.get(endpoint)
	          .map(response=>response.json())
	          .catch(this.handleError)
	}
    private handleError(error:any, caught:any): any{
      console.log(error, caught)
  }

    ngOnInit(){

    }

    ngOnDestroy(){

    }

    getNewGame(){
    	this.currentID += 1;
      if (this.currentID > 999){
        this.currentID = 1; 
      }
    	return this.currentID;

    }

    setNewValues(){
    	this.initialPgn = this.pgn.split('10')[0];
    	this.endPgn = "10" + this.pgn.split("10")[1].split(this.difficulty)[0];
    	this.end = this.pgn.split(this.difficulty)[0];
    	
    }




} 