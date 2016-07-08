import ElectricDispatcher = require('./../dispatchers/ElectricDispatcher');
import {DispatchEventArgs} from "./../dispatchers/DispatchEventArgs";
import {RestHelper} from './../helpers/RestHelper';
import {Element} from "./../models/Element";

export class BusStore {
    private listeners: ((elements: Element[]) => {})[];
    private elements: Element[];
    
    public constructor(){
        var helper = new RestHelper();
        ElectricDispatcher.register(this.handleAction);
        helper.get<Element[]>('api/engines').then(data => {
            this.elements = data; 
            this.onDataChanged();
        });
    }

    public onChange(listener){
        this.listeners.push(listener);
    }
    
    addElement(element) {
        this.elements.push(element);
        this.onDataChanged();
    }
    
    getItems() {
        return this.elements;
    }
    
    onDataChanged(){
        this.listeners.forEach(function(listener){
            listener(this.elements);
        })
    }

    private handleAction(e: DispatchEventArgs){

    }
}