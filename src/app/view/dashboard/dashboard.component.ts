import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  employee = {
    productName: '',
    cost: '',
    salePrice: '',
    labelLocation: ''
  };

  labelLocation = ['left', 'top'];
  
  orders = [{
    productName: 'DesktopLCD 19',
    cost: 68,
    salePrice: 110
  }, {
    productName: 'DesktopLCD 21',
    cost: 75,
    salePrice: 120
  }];
  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
  };

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(event) {
    console.log(this.employee);
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top'
      }
    }, 'success', 3000);
    event.preventDefault();
  }

}
