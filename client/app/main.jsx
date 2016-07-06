var React = require('react');
var ReactDOM = require('react-dom');
var ElementList = require('./components/ElementList.jsx');

var elements = [
    {title: "test element"}
]

ReactDOM.render(<ElementList elements={elements}/>, app);
