import { Injectable } from '@angular/core';


@Injectable()
export class PgnService {

    constructor() {

    }

    getInstance()
    {
        return this;
    }
    
    cleanUpPgn(pgn: string)
    {
        
       //move string to array
       let arrayOfLines :string[] =  pgn.match(/[^\r\n]+/g);
       
       //remove leading and trailing whytespace
       for(let i=0;i< arrayOfLines.length;i++)
       {
           arrayOfLines[i] = arrayOfLines[i].trim();
       }
       
       //remove empty lines from array
       arrayOfLines = arrayOfLines.filter(v=>v!='');       	
       
       let result :string = arrayOfLines.join('\n');
       
       return result;
    }
    
    getMovesArray()
    {
        
    }          

} 