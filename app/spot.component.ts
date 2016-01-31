import {Component, OnInit} from 'angular2/core';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {JSONP_PROVIDERS, Jsonp, URLSearchParams} from 'angular2/http';
import {SpotService} from './spot.service';
import {Spot} from './spot';

@Component({
  selector: 'my-spot',
  template: `
    <h1>Spot search Demo</h1>
    <p><i>Fetches when typing stops</i></p>
    <input [ngFormControl]="inputs"/>
    <ul>
      <li *ngFor="#spot of spots | async">{{spot.name}}</li>
    </ul>
  `,
  providers: [JSONP_PROVIDERS, SpotService]
})
export class SpotComponent implements OnInit {

  constructor(private _spotService: SpotService) { }

  spots: Observable<Spot>;
  inputs = new Control();

  ngOnInit() {
    this.spots = this.inputs.valueChanges
      .debounceTime(300)
      .distinctUntilChanged()
    .switchMap((term: string) => this._spotService.search(term));
  }
}