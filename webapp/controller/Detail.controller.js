sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/UIComponent',
    'sap/ui/core/routing/History',
    'sap/m/MessageToast',
  ],
  (Controller, UIComponent, History, MessageToast) => {
    'use strict';
    return Controller.extend('sap.ui.walkthrough.controller.Detail', {
      onInit() {
        const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter
          .getRoute('detail')
          .attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched(oEvent) {
        this.byId('rating').reset();
        this.getView().bindElement({
          path:
            '/' +
            window.decodeURIComponent(
              oEvent.getParameter('arguments').invoicePath
            ),
          model: 'invoice',
        });
      },
      onNavBack() {
        const oHistory = History.getInstance();
        const sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) window.history.go(-1);
        else {
          const oRouter = UIComponent.getRouterFor(this);
          oRouter.navTo('overview', {}, true);
        }
      },
      onRatingChange(oEvent) {
        const fValue = oEvent.getParameter('value');
        const oResourceBundle = this.getView()
          .getModel('i18n')
          .getResourceBundle();
        MessageToast.show(
          oResourceBundle.getText('ratingConfirmation', [fValue])
        );
      },
    });
  }
);
