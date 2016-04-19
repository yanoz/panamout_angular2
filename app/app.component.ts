import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Spot} from './spot';
import {SpotDetailComponent} from './spot-detail.component';
import {SpotService} from './spot.service'

@Component({
	selector: 'panamout',
	template:`
    <h1>{{title}}</h1>
    <h2>My Spots</h2>
    <ul class="spots">
      <li *ngFor="#spot of spots"
        [class.selected]="spot === selectedSpot"
        (click)="onSelect(spot)">
        <span class="badge"></span> {{spot.name}}
      </li>
    </ul>
    <spot-detail [spot]="selectedSpot"></spot-detail>
  `,
  	styles:[`
		.selected {
			background-color: #CFD8DC !important;
			color: white;
		}
		.spots {
			margin: 0 0 2em 0;
			list-style - type: none;
			padding: 0;
			width: 15em;
		}
		.spots li {
			cursor: pointer;
			position: relative;
			left: 0;
			background-color: #EEE;
			margin: .5em;
			padding: .3em 0;
			height: 1.6em;
			border-radius: 4px;
		}
		.spots li.selected:hover {
			background-color: #BBD8DC !important;
			color: white;
		}
		.spots li:hover {
			color: #607D8B;
			background-color: #DDD;
			left: .1em;
		}
			.spots.text {
				position: relative;
				top: -3px;
			}
				.spots.badge {
					display: inline - block;
					font-size: small;
					color: white;
					padding: 0.8em 0.7em 0 0.7em;
					background-color: #607D8B;
					line-height: 1em;
					position: relative;
					left: -1px;
					top: -4px;
					height: 1.8em;
					margin-right: .8em;
					border-radius: 4px 0 0 4px;
				}
  `],
	directives: [SpotDetailComponent],
	providers: [HTTP_PROVIDERS, SpotService]
})

export class AppComponent implements OnInit {
	title = 'Panamout';
	spots : Spot[];
  	selectedSpot: Spot;
	errorMessage: string;
	constructor(private _spotService: SpotService) { }

  	onSelect(spot: Spot) { this.selectedSpot = spot; }

	getSpots() {
		this._spotService.getSpots()
				.subscribe(
					spots => this.spots = spots,
					error =>  this.errorMessage = <any>error);
		}

		ngOnInit() {
			this.getSpots();
		}
}

