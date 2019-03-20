Ext.define('ExtJSCalculator.store.CalculationStore', {
    extend: 'Ext.data.Store',

    alias: 'store.calculationStore',

    requires: [
        'ExtJSCalculator.data.Values'
    ],

    storeId: 'calculationStore',
    model: 'ExtJSCalculator.data.Values',

    proxy: {
        type: 'memory',
        autoLoad: true,
        reader: {
            type: 'json',
            rootProperty: 'values'
        }
    }
});
