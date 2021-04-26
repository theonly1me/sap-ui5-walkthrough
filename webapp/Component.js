//UI assets are present in the Component.js file

sap.ui.define(
  [
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    './controller/HelloDialog',
  ],
  (UIComponent, JSONModel, HelloDialog) => {
    'use strict';
    return UIComponent.extend('sap.ui.walkthrough.Component', {
      //moved to manifest.json
      //   metadata: {
      //     rootView: {
      //       viewName: 'sap.ui.walkthrough.view.App',
      //       type: 'XML',
      //       async: true,
      //       id: 'app',
      //     },
      // },
      metadata: {
        manifest: 'json',
      },

      init() {
        //making the super() call
        UIComponent.prototype.init.apply(this, arguments);

        //set data model
        const oData = {
          recipient: {
            name: 'UI5',
          },
        };

        const oModel = new JSONModel(oData);

        this.setModel(oModel);

        //instantiate dialog
        this._helloDialog = new HelloDialog(this.getRootControl());

        //Create views based on URL
        this.getRouter().initialize();

        //below has been moved to set in the manifest.json
        // //set i18n model
        // const i18nModel = new ResourceModel({
        //   bundleName: 'sap.ui.walkthrough.i18n.i18n',
        // });
        // this.setModel(i18nModel, 'i18n');
      },
      exit() {
        this._helloDialog.destroy();
        delete this._helloDialog;
      },

      openHelloDialog() {
        this._helloDialog.open();
      },
    });
  }
);
