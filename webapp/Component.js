sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/demo/Z_Fiori2_Inital_App/model/models",
	'sap/ui/model/json/JSONModel'
], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("com.demo.Z_Fiori2_Inital_App.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			var oProductsModel;
			// set products demo model on this sample
			oProductsModel = new JSONModel(
				"https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
		}
	});
});