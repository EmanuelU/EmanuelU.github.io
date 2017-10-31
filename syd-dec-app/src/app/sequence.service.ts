import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bid } from './bid';
import { Module } from './module';

@Injectable()
export class SequenceService {
	private headers = new Headers({'Content-Type': 'application/json'});
	private sequenceApiUrl = `api/sequences`;  // URL to web api
	private moduleApiUrl = `api/modules`;  // URL to web api

	constructor(private http: Http) { }
 
	getSequences(): Promise<Bid[]> {
		return this.http.get(this.sequenceApiUrl)
	           .toPromise()
	           .then(response => response.json() as Bid[])
	           .catch(this.handleError);
	}

	getModules(): Promise<Module[]> {
		return this.http.get(this.moduleApiUrl)
	           .toPromise()
	           .then(response => response.json() as Module[])
	           .catch(this.handleError);
	}
  
  	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}