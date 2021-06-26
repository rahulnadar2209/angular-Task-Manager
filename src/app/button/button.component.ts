import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text:String;
@Input() color:String;
@Input() color_white:String;
@Output() btnClicked= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.btnClicked.emit();
  }

}