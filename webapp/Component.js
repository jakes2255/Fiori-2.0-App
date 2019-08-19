sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/f/FlexibleColumnLayoutSemanticHelper",
	"sap/f/library",
	"sap/ui/Device",
	"com/demo/Z_Fiori2_Inital_App/model/models"
], function (UIComponent,JSONModel, FlexibleColumnLayoutSemanticHelper, fioriLibrary, Device, models) {
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
			var oModel,
				oProductsModel,
				oRouter;
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			
			oModel = new JSONModel();
			this.setModel(oModel);
			
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			// set products demo model on this sample
			oProductsModel = new JSONModel(
				"https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			oProductsModel.setSizeLimit(1000);
			this.setModel(oProductsModel, 'products');
			
			oRouter = this.getRouter();
			oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
			oRouter.initialize();
		},

		getHelper: function () {
			return this._getFcl().then(function(oFCL) {
				var oSettings = {
					defaultTwoColumnLayoutType: fioriLibrary.LayoutType.TwoColumnsMidExpanded,
					defaultThreeColumnLayoutType: fioriLibrary.LayoutType.ThreeColumnsMidExpanded
				};
				return (FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings));
			});
		},
		_onBeforeRouteMatched: function(oEvent) {
			var oModel = this.getModel(),
				sLayout = oEvent.getParameters().arguments.layout;
			// If there is no layout parameter, set a default layout (normally OneColumn)
			if (!sLayout) {
				sLayout = fioriLibrary.LayoutType.OneColumn;
			}
			oModel.setProperty("/layout", sLayout);
		},
		_getFcl: function () {
			return new Promise(function(resolve, reject) {
				var oFCL = this.getRootControl().byId('flexibleColumnLayout');
				if (!oFCL) {
					this.getRootControl().attachAfterInit(function(oEvent) {
						resolve(oEvent.getSource().byId('flexibleColumnLayout'));
					}, this);
					return;
				}
				resolve(oFCL);

			}.bind(this));
		}
	});
});