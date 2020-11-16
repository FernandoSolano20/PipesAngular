import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form = {
    text: '',
    decimal: 0,
    currency: 0
  }
  title = 'PipesForm';
  showData = false;
  text: any;
  decimal : any;
  currency : any;
  
  constructor() { }

  ngOnInit(): void {
  }

  transform():void{
    this.text = this.form.text;
    this.decimal = this.form.decimal;
    this.currency = this.form.currency;
    this.showData = true;
  }
}
