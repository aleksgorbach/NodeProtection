/// <reference path='./../../typings/tsd.d.ts' />



import ReactDOM = require('react-dom');
import React = require('react');
import {ElementListView} from './components/ElementListView';
import {ElementView} from "./components/ElementView";
import {Element} from "./models/Element";
import {BusStore} from "./stores/BusStore";

class App {
    constructor(store: BusStore){
        store.onChange(this.render);
        this.render(store.getItems());
    }
    
    render(elements: Element[]) {
        ReactDOM.render(<ElementListView elements={elements}/>, document.getElementById('app'));
    }
}

var store = new BusStore();
var app = new App(store);
app.render(store.getItems());