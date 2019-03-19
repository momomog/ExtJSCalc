
Ext.define('ExtJSCalculator.view.main.CalculateGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'calculateGrid',

    requires: [
        'ExtJSCalculator.store.CalculationStore'
    ],

    width: 300,
    height: 466,
    title: 'Results list',
    margin: '0 0 0 14',
    reference: 'gridPanel',
    scrollable: true,

    store: {
        type: 'calculationStore'
    },

    columns: [
        {
        text: 'Operation',
        flex: 1,
        dataIndex: 'operation'
        }, {
        text: 'Result',
        flex: 1,
        dataIndex: 'result'
        }
    ],

    listeners: {
        itemdblclick: 'dblclick'
    }
});
