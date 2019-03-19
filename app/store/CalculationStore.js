Ext.define('ExtJSCalculator.store.CalculationStore', {
    extend: 'Ext.data.Store',

    alias: 'store.calculationStore',
    storeId: 'calculationStore',
    fields: [
        'operation', 'result'
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
