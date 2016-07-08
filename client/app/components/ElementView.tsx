import React = require('react');
import {Element} from "./../models/Element";

interface IElementProps {
    element: Element;
}

export class ElementView extends React.Component<IElementProps, {}> {
    render() {
        return (
            <div>
               <table>
                   <tr>
                       <td>{this.props.element.power}</td>
                       <td>{this.props.element.cos}</td>
                       <td>{this.props.element.coef}</td>
                   </tr>
               </table>
            </div>
        )
    }
}