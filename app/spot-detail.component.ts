import {Component, Input} from 'angular2/core';
import {Spot} from './spot';

@Component({
	selector: 'spot-detail',
  	template: `  
  		<div *ngIf="spot">
    		<h2>{{spot.name}} details!</h2>
    		<div>
      			<label>name: </label>
      			<input [(ngModel)]="spot.name" placeholder="name"/>
    		</div>
  		</div>`
})


export class SpotDetailComponent {
	@Input() 
	spot: Spot;
}