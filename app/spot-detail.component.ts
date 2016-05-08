import {Component, Input} from 'angular2/core';
import {Spot} from './spot';

@Component({
	selector: 'spot-detail',
  templateUrl: 'app/spot-detail.component.html',
  styleUrls: ['app/spot-detail.component.css']
})


export class SpotDetailComponent {
	@Input() 
	spot: Spot;
}