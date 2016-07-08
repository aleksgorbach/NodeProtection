import {Element} from './../models/Element';
import ElectricDispatcher = require('./../dispatchers/ElectricDispatcher');

export class ElementAction {
    add(element: Element){
        ElectricDispatcher.dispatch({
            type: "element:add",
            payload: element
        })
    }

    delete(element: Element){
        ElectricDispatcher.dispatch({
            type: "element:delete",
            payload: element
        })
    }
}