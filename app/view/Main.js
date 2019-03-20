Ext.define('ExtJSCalculator.view.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'ExtJSCalculator.controller.MainController',
        'ExtJSCalculator.model.MainModel',
        'ExtJSCalculator.view.CalculateGrid',
        'ExtJSCalculator.view.CalculatorBody'
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

