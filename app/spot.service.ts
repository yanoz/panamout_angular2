import {Injectable} from 'angular2/core';
import {Jsonp, URLSearchParams} from 'angular2/http';
import {Spot} from './spot';

@Injectable()
export class SpotService {
  constructor(private jsonp: Jsonp) {}

  search (term: string) {

    var params = new URLSearchParams();
    params.set('search', term);
    params.set('action', 'opensearch');
    params.set('format', 'json');

    let wikiUrl = 'http://localhost:8010/spot?offset=0&count=3';

    // TODO: Error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(res => <Spot[]>res.json().data)
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/