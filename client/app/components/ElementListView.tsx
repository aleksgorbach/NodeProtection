/// <reference path="../../../typings/tsd.d.ts" />


import React = require('react');
import {AddElementForm} from './AddElementForm';
import {ElementView} from './ElementView';
import {Element} from './../models/Element';

interface IElementListProps {
    elements: Element[]
}

export class ElementListView extends React.Component<IElementListProps, {}> {
    constructor(props: IElementListProps){
        super(props);
    }
    
    render() {
        return (
            <div>
                <h1>Electric Elements</h1>
                <div>
                    {
                        this.props.elements.map (function (element, index) {
                            return (<ElementView key={index} element={element} />)
                        })
                    }
                </div>
                <AddElementForm />
            </div>
        );
    }
}