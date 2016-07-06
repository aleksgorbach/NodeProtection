var React = require('react');
var Element = require('./Element.jsx');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Electric Elements</h1>
                <div>
                    {
                        this.props.elements.map (function (element, index) {
                            return (<Element key={index} element={element} />)
                        })
                    }
                </div>
            </div>
        )
    }
})
