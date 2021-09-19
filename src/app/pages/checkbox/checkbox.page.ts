import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: true },
    { val: 'Mushroom', isChecked: true }
  ];
  constructor() { 
    
  }

  ngOnInit() {
  }
  checkValue(event:CustomEvent){
    console.log(event.detail.checked);
  }
}
