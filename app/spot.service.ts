import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Spot} from './spot'
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class SpotService {
	constructor (private http: Http) {}

	private _spotsUrl = 'http://localhost:8010/spot?offset=0&count=3';  // URL to web api

	/**getSpots(): Observable<Spot[]> {
		return this.http.get(this._spotsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}*/

  getSpots(): Promise<Spot[]> {
    return this.http.get(this._spotsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

 	private extractData(res: Response) {
	    if (res.status < 200 || res.status >= 300) {
	      throw new Error('Bad response status: ' + res.status);
	    }
	    let body = res.json();
	    return body.data || { };
  	}

	private handleError (error: any) {
	    // In a real world app, we might send the error to remote logging infrastructure
	    let errMsg = error.message || 'Server error';
	    console.error(errMsg); // log to console instead
	    return Observable.throw(errMsg);
  }
}
