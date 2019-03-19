Ext.define('ExtJSCalculator.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.mainModel',

    stores: {
        calculationStore: {
            type: 'calculationStore'
        }
    },

    data: {
        type: 'main',
        display: 0,
        opDisplay: ''
    }

});
