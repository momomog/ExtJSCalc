
Ext.define('ExtJSCalculator.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainController',

    state: {
        isNumberAfterEquallyButton: false
    },

    onNumberClick: function (button) {
        var vm = this.getViewModel();
        var display = vm.get('display');
        if(display === 0) {
            display = '';
        }  else if(this.state.isNumberAfterEquallyButton){
            vm.set('opDisplay', '');
            this.state.isNumberAfterEquallyButton = false;
        }
        vm.set('display', display += button.text);
    },

    onSqrtClick: function () {
        var vm = this.getViewModel();
        var display = vm.get('display');
        if (display > 0) {
            vm.set('opDisplay', ('√' + display));
            vm.set('display', Math.sqrt(display));
            var store = Ext.getStore('calculationStore');
            store.add({
                operation: vm.get('opDisplay'),
                result: vm.get('display')
            });
        } else {
            vm.set('opDisplay', 'Negative root');
            vm.set('display', 0);
        }
    },

    onOperationClick: function (button) {
        var vm = this.getViewModel();
        var num1 = vm.get('display');
        vm.set('opDisplay', (num1 += ' ' + button.text));
        vm.set('display', 0);
    },

    onCalculate: function() {
        var vm = this.getViewModel();
        var num2 = Number(vm.get('display'));
        var num1 = vm.get('opDisplay');
        var operation = num1[num1.length-1];
        num1 = num1.slice(0, -1);
        num1 = Number(num1);
        switch (operation) {
            case '+': {
                vm.set('display', num1 + num2);
                vm.set('opDisplay', num1 + ' + ' + num2);
                break;
            }
            case '-': {
                vm.set('display', num1 - num2);
                vm.set('opDisplay', num1 + ' - ' + num2);
                break;
            }
            case '*': {
                vm.set('display', num1 * num2);
                vm.set('opDisplay', num1 + ' * ' + num2);
                break;
            }
            case '/': {
                if(num2 === 0){
                    vm.set('opDisplay', 'Division by zero');
                    vm.set('display', '');
                } else {
                    vm.set('display', num1 / num2);
                    vm.set('opDisplay', num1 + ' / ' + num2);
                    break;
                }
            }
        }
        var store = Ext.getStore('calculationStore');
        if(!(vm.get('opDisplay') === 'Division by zero' || vm.get('opDisplay') === 'Negative root' || vm.get('opDisplay') === '')){
            store.add({
                operation: vm.get('opDisplay'),
                result: vm.get('display')
            });
        }
        this.state.isNumberAfterEquallyButton = true;
    },

    onClearAll: function () {
        var vm = this.getViewModel();
        vm.set('display', 0);
        vm.set('opDisplay', '');
    },

    onClear: function () {
        var vm = this.getViewModel();
        vm.set('opDisplay', '' );
        var display = vm.get('display');
        display = display.toString();
        display = display.slice(0, -1);
        if(display === '-') {
            vm.set('display', 0);
        } else {
            vm.set('display', Number(display));
        }
    },

    onPlusMinusClick: function () {
        var vm = this.getViewModel();
        var display = vm.get('display');
        if(!(display === 0)) {
            vm.set('display', display *= -1 );
        }
    },

    onPointClick: function () {
        var vm = this.getViewModel();
        var display = vm.get('display');
        if (!(display.toString().includes('.'))){
            vm.set('display', display += '.' );
        }
    },

    dblclick: function() {
        var vm = this.getViewModel();
        var store = Ext.getStore('results');
        var gridPanel = this.lookupReference('gridPanel');
        var currentRowIndex = gridPanel.getSelectionModel().getCurrentPosition().rowIdx;
        var currentValue = store.getAt(currentRowIndex).get('result');
        vm.set('opDisplay', '');
        vm.set('display', currentValue);
    }
});

