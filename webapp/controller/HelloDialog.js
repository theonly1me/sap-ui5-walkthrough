sap.ui.define(
  ['sap/ui/base/ManagedObject', 'sap/ui/core/Fragment'],
  (ManagedObject, Fragment) => {
    'use strict';

    return ManagedObject.extend('sap.ui.walkthrough.controller.HelloDialog', {
      constructor: function (oView) {
        this._oView = oView;
      },
      exit() {
        delete this._oView;
      },
      open() {
        const oView = this._oView;
        //create dialog lazily
        if (!oView.byId('helloDialog')) {
          const oFragmentController = {
            onCloseDialog() {
              oView.byId('helloDialog').close();
            },
          };
          //load async XML fragment
          Fragment.load({
            id: oView.getId(),
            name: 'sap.ui.walkthrough.view.HelloDialog',
            controller: oFragmentController,
          }).then(oDialog => {
            //connect dialog to root view of the component (models, lifecycle)
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          oView.byId('helloDialog').open();
        }
      },
    });
  }
);
