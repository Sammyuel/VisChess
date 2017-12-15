
import {Component, Input,Output,OnInit,EventEmitter} from '@angular/core';


@Component({
  selector: 'glyphbutton',
  styles:[],
  template: `
             <button  (click)="onClick($event)" [style.width]="width" [style.height]="height"><i [style.font-size]="fontsize" class="glyphicon" [ngClass]="[iconclass]"></i></button>`,

})
export class GlyphButtonComponent implements OnInit {
  

  baseclass: string = "glyphicon"
  prestring: string = "glyphicon-"
  iconclass: string ="";
 
  @Input() name: string = "glass";
  @Input() width: string = "50px";
  @Input() height: string = "50px";
  @Input() fontsize:string ="200%"
  
  @Output() innerclick: EventEmitter<any> = new EventEmitter();
  
  ngOnInit() {
    this.iconclass = this.prestring + this.name;
  }
  
  onClick($event)
  {
    this.innerclick.emit({name:this.name});
  }

}
