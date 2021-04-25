sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/formatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
  ],
  (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    'use strict';

    return Controller.extend('sap.ui.walkthrough.controller.InvoiceList', {
      formatter, //formatter: formatter
      onInit() {
        const oViewModel = new JSONModel({
          currency: 'USD',
        });
        this.getView().setModel(oViewModel, 'view');
      },
      onFilterInvoices(oEvent) {
        const aFilter = [];
        const sQuery = oEvent.getParameter('query');
        if (sQuery)
          aFilter.push(
            new Filter('ProductName', FilterOperator.Contains, sQuery)
          );

        console.log(aFilter);

        //filter binding
        const oList = this.byId('invoiceList');
        const oBinding = oList.getBinding('items');
        oBinding.filter(aFilter);
      },
    });
  }
);
