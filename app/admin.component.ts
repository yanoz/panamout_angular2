import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';

@Component({
  selector: 'admin',
  templateUrl: 'app/admin.component.html',
  styleUrls: ['app/admin.component.css']
})


export class AdminComponent { 

	categories = ['Restaurant', 'Bar'];
	districts = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
	'13', '14', '15', '16', '17', '18', '19', '20'];

}