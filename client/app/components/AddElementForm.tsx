import React = require('react');
import {ElementAction} from './../actions/ElementAction';
import {Element} from './../models/Element';
import ElectricDispatcher = require('./../dispatchers/ElectricDispatcher');

interface IState {
    element: Element;
}

export class AddElementForm extends React.Component<{}, IState> {
    private action: ElementAction;
    public state: IState;

    constructor(props){
        super(props);
        this.action = new ElementAction();
        this.state = {element: new Element()};
    }

    onSubmit(e){
        e.preventDefault();
        this.action.add(this.state.element);
    }
    
    handleInput(key, e){
        var state = {};
        state[key] = e.target.value;
        //this.setState(state);
    }
    
    render (){
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="power">Power</label>
                    <input id="power" value={this.state.element.power} onChange={this.handleInput.bind(this, "power")} type="number" />
                </div>
                <div>
                    <label htmlFor="cos">Cos</label>
                    <input id="cos" value={this.state.element.cos} onChange={this.handleInput.bind(this, "cos")} type="number"/>
                </div>
                <div>
                    <label htmlFor="coef">Coef</label>
                    <input id="coef" value={this.state.element.coef} onChange={this.handleInput.bind(this, "coef")} type="number"/>
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        )
    }
}
