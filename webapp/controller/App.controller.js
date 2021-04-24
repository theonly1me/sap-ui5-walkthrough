sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
  ],
  Controller => {
    'use strict';

    return Controller.extend('sap.ui.walkthrough.controller.App', {
      onOpenDialog() {
        this.getOwnerComponent().openHelloDialog();
      },
      //below UI initialization has been moved to Component.js
      // onInit() {
      //   //build a json model and bind data to it in the onInit lifecycle
      //   // hook of the controller
      //   const oData = {
      //     recipient: {
      //       name: 'UI5',
      //     },
      //   };
      //   //create a JSONModel using the oData JSON
      //   const oModel = new JSONModel(oData);
      //   //getView for the current controller instance
      //   this.getView().setModel(oModel);
      //   const i18nModel = new ResourceModel({
      //     bundleName: 'sap.ui.walkthrough.i18n.i18n',
      //     supportedLocales: [''],
      //     fallbackLocale: '',
      //   });
      //   this.getView().setModel(i18nModel, 'i18n');
      // },
      //Below has been moved to Hello Panel Controller
      // onShowHello() {
      //   //read message from i18n model
      //   const oBundle = this.getView().getModel('i18n').getResourceBundle();
      //   const sRecipient = this.getView()
      //     .getModel()
      //     .getProperty('/recipient/name');
      //   const sMsg = oBundle.getText('helloMsg', [sRecipient]);
      //   //show vanilla js controller
      //   MessageToast.show(sMsg);
      // },
    });
  }
);
