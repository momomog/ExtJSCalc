Ext.define('ExtJSCalculator.view.CalculateGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'calculateGrid',
    controller: 'grid',
    requires: [
        'ExtJSCalculator.controller.GridController'
    ],


    title: 'Results list',
    margin: '0 0 0 14',
    reference: 'gridPanel',
    scrollable: true,

    bind: {
        store: '{calculationStore}'
    },

    columns: [
        {
            text: 'Operation',
            dataIndex: 'operation',
            flex: 1,
            align: 'left'
        }, {
            xtype: 'numbercolumn',
            dataIndex: 'result',
            text: 'Result',
            flex: 1,
            align: 'left',
            format: '0.000'
        }
    ],

    listeners: {
        itemdblclick: 'dblclick'
    }
});
