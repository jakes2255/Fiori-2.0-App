sap.ui.define([
			"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel'
		], function (Controller,JSONModel) {
			"use strict";

			return Controller.extend("com.demo.Z_Fiori2_Inital_App.controller.App", {
					onInit: function () {
						var oProductsModel;
						// set products demo model on this sample
						oProductsModel = new JSONModel(
								"https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json"); 
						oProductsModel.setSizeLimit(1000); 
						this.getView().setModel(oProductsModel, 'products');
						debugger;
						}
					});
			});