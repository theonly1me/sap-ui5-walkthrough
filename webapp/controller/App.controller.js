sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'],
  (Controller, MessageToast) => {
    'use strict';

    return Controller.extend('sap.ui.walkthrough.controller.App', {
      onShowHello: () => {
        //show vanilla js controller
        MessageToast.show('Hello World!');
      },
    });
  }
);
