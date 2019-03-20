Ext.define('ExtJSCalculator.store.CalculationStore', {
    extend: 'Ext.data.Store',

    alias: 'store.calculationStore',

    requires: [
        'ExtJSCalculator.model.Values'
    ],

    storeId: 'calculationStore',
    model: 'ExtJSCalculator.model.Values',

    proxy: {
        type: 'memory',
        autoLoad: true,
        reader: {
            type: 'json',
            rootProperty: 'values'
        }
    }
});
