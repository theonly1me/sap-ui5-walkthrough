sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast', 'sap/ui/core/Fragment'],
  (Controller, MessageToast, Fragment) => {
    'use strict';
    return Controller.extend('sap.ui.walkthrough.controller.HelloPanel', {
      onShowHello() {
        const oBundle = this.getView().getModel('i18n').getResourceBundle();
        const sRecipient = this.getView()
          .getModel()
          .getProperty('/recipient/name');
        const sMsg = oBundle.getText('helloMsg', [sRecipient]);
        MessageToast.show(sMsg);
      },
      //   onOpenDialog() {
      //     const oView = this.getView();

      //     //create dialog lazily
      //     if (!this.byId('helloDialog')) {
      //       //load asynchronous xml fragment
      //       Fragment.load({
      //         id: oView.getId(),
      //         name: 'sap.ui.walkthrough.view.HelloDialog',
      //         controller: this,
      //       }).then(oDialog => {
      //         //connect dialog to root view (models, lifecycle)
      //         oView.addDependent(oDialog);
      //         oDialog.open();
      //       });
      //     } else {
      //       this.byId('helloDialog').open();
      //     }
      //   },
      onOpenDialog() {
        this.getOwnerComponent().openHelloDialog();
      },
      // onCloseDialog() {
      //   this.byId('helloDialog').close();
      // },
    });
  }
);
