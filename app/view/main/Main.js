
Ext.define('ExtJSCalculator.view.main.Main', {
    extend: 'Ext.container.Viewport',

    requires: [
        'ExtJSCalculator.view.main.MainController',
        'ExtJSCalculator.view.main.MainModel',
        'ExtJSCalculator.view.main.CalculateGrid'
    ],

    controller: 'mainController',

    viewModel: 'mainModel',

    items:[{
        xtype: 'panel',
        width: 594,
        layout: 'hbox',
        items: [{
            xtype: 'panel',
            title: 'ExtJS calculator',
            width: 280,
            items: [{
                xtype: 'panel',
                items: [{
                    xtype: 'displayfield',
                    width: 260,
                    height: 15,
                    padding: 5,
                    fieldCls: 'lessText',
                    bind: '{opDisplay}'
                }, {
                    xtype: 'displayfield',
                    width: 260,
                    height: 20,
                    padding: 5,
                    fieldCls: 'biggerText',
                    bind: '{display}'
                }]
            }, {
                xtype: 'panel',
                layout: {
                    type: 'table',
                    columns: 4
                },
                defaults: {
                    width: 70,
                    height: 70,
                    handler: 'onNumberClick',
                    cls: 'button-text'
                },
                items: [{
                    xtype: 'button',
                    text: '√',
                    handler: 'onSqrtClick'
                }, {
                    xtype: 'button',
                    text: 'AC',
                    handler: 'onClearAll'
                }, {
                    xtype: 'button',
                    text: '⇐',
                    handler: 'onClear'
                }, {
                    xtype: 'button',
                    text: '/',
                    handler: 'onOperationClick'
                }, {
                    xtype: 'button',
                    text: '7'
                }, {
                    xtype: 'button',
                    text: '8'
                }, {
                    xtype: 'button',
                    text: '9'
                }, {
                    xtype: 'button',
                    text: '*',
                    handler: 'onOperationClick'
                }, {
                    xtype: 'button',
                    text: '4'
                }, {
                    xtype: 'button',
                    text: '5'
                }, {
                    xtype: 'button',
                    text: '6'
                }, {
                    xtype: 'button',
                    text: '-',
                    handler: 'onOperationClick'
                }, {
                    xtype: 'button',
                    text: '1'
                }, {
                    xtype: 'button',
                    text: '2'
                }, {
                    xtype: 'button',
                    text: '3'
                }, {
                    xtype: 'button',
                    text: '+',
                    handler: 'onOperationClick'
                }, {
                    xtype: 'button',
                    text: '±',
                    handler: 'onPlusMinusClick'
                }, {
                    xtype: 'button',
                    text: '0'
                }, {
                    xtype: 'button',
                    text: '.',
                    handler: 'onPointClick'
                }, {
                    xtype: 'button',
                    text: '=',
                    handler: 'onCalculate',
                    style: 'background-color:#ff9311'
                }]
            }]
        },{
            xtype: 'calculateGrid'
        }]
    }]
});

