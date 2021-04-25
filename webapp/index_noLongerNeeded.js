//All of this is now happening in the manifest.json file
//sap.ui.define to define a global namespace for each module
//sap.ui.require to asynchronously load dependencies but not
//declare namespace

// sap.ui.define(['sap/ui/core/mvc/XMLView'], XMLView => {
//   'use strict';

//   XMLView.create({
//     viewName: 'sap.ui.walkthrough.view.App',
//   }).then(oView => {
//     oView.placeAt('content');
//   });
// });

sap.ui.define(['sap/ui/core/ComponentContainer'], ComponentContainer => {
  'use strict';

  new ComponentContainer({
    name: 'sap.ui.walkthrough',
    settings: {
      id: 'walkthrough',
    },
    async: true,
  }).placeAt('content');
});
