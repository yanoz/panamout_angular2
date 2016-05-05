import {Component, Input} from 'angular2/core';
import {Spot} from './spot';

@Component({
	selector: 'spot-detail',
  	template: `  
  		<div *ngIf="spot">
    		<h2>{{spot.name}} details! {{spot.district}}</h2>
    		<div>
      			<label>name: </label>
      			<input [(ngModel)]="spot.name" placeholder="name"/>
    		</div>
        <button (click)="goBack()">Back</button>
  		</div>`,
  styleUrls: ['app/spot-detail.component.css']
})


export class SpotDetailComponent {
	@Input() 
	spot: Spot;
}