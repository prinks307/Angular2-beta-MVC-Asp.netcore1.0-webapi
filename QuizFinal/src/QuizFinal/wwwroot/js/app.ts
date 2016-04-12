import {Component} from 'angular2/core';
import {Http, Headers, HTTP_BINDINGS} from 'angular2/http';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import { bootstrap} from 'angular2/platform/browser'
import 'rxjs/add/operator/map';

declare var module: {
    id: string;
};
@Component({
    selector: 'my-app',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    moduleId: module.id,
    template: '<header><h1>Angular 2 / WebAPI</h1></header><section><p>Values:</p> <ul><li *ngFor="#value of values"> Value: {{ value }} </li></ul></section>'
  //  templateUrl: '/Views/values-index.html'

})


export class App {
    public values: any;

    constructor(public http: Http) {
        this.http = http;
        this.getValues();
    }

    getValues() {
        this.http.get('http://localhost:56689/api/values')
            .map(res => res.json())
            .subscribe(
            data => this.values = data,
            err => this.logError(err),
            () => console.log('Finished retrieving values')
            );
    }

    logError(err) {
        console.error('There was an error: ' + err);
    }
}

bootstrap(App, [HTTP_BINDINGS]);
