Ext.define('ExtJSCalculator.controller.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid',

    dblclick: function () {
        var vm = this.getViewModel();
        var store = vm.get('calculationStore');
        var gridPanel = this.getView();
        var currentRowIndex = gridPanel.getSelectionModel().getCurrentPosition().rowIdx;
        var currentValue = store.getAt(currentRowIndex).get('result');
        vm.set('opDisplay', '');
        vm.set('display', currentValue);
    }
});