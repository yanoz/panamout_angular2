import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Spot} from './spot';
import {SpotDetailComponent} from './spot-detail.component';
import {SpotService} from './spot.service'

@Component({
	selector: 'spots',
	templateUrl: 'app/spot.component.html',
	styleUrls: ['app/spot.component.css'],
	directives: [SpotDetailComponent],
	providers: [HTTP_PROVIDERS, SpotService]
})

export class SpotComponent implements OnInit {
	spots : Spot[];
  	selectedSpot: Spot;
	errorMessage: string;
	constructor(private _spotService: SpotService) { }

  	onSelect(spot: Spot) { 
  		this.selectedSpot = spot; 
  	}

	getSpots() {
		this._spotService.getSpots()
				.then(
					spots => this.spots = spots,
					error =>  this.errorMessage = <any>error);
		}

		ngOnInit() {
			this.getSpots();
		}
}

