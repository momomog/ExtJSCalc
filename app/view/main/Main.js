Ext.define('ExtJSCalculator.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'ExtJSCalculator.view.main.MainController',
        'ExtJSCalculator.view.main.MainModel',
        'ExtJSCalculator.view.main.CalculateGrid',
        'ExtJSCalculator.view.main.CalculatorBody'
    ],

    controller: 'mainController',
    viewModel: 'mainModel',

    items: [{
        xtype: 'panel',
        layout: 'hbox',
        items: [{
            xtype: 'calculatorBody',
            width: 280
        }, {
            xtype: 'calculateGrid',
            flex: 1
        }]
    }]
});

