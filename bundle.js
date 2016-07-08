System.register("main", ['react', 'react-dom', './components/ElementList.jsx', './stores/busStore.jsx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var react_1, react_dom_1, ElementList_jsx_1, busStore_jsx_1;
    function render(elements) {
        react_dom_1.ReactDOM.render(<ElementList_jsx_1.ElementList elements={elements}/>, app);
    }
    return {
        setters:[
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            },
            function (ElementList_jsx_1_1) {
                ElementList_jsx_1 = ElementList_jsx_1_1;
            },
            function (busStore_jsx_1_1) {
                busStore_jsx_1 = busStore_jsx_1_1;
            }],
        execute: function() {
            busStore_jsx_1.store.onChange(render);
            render(busStore_jsx_1.store.getItems());
        }
    }
});
