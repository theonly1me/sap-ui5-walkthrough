sap.ui.define(['../localService/mockServer'], mockServer => {
  'use strict';
  mockServer.init();
  sap.ui.require(['sap/ui/core/ComponentSupport']);
});
