sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/f/library"
], function (Controller, fioriLibrary) {
	"use strict";

	return Controller.extend("com.demo.Z_Fiori2_Inital_App.controller.DetailDetail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.demo.Z_Fiori2_Inital_App.view.DetailDetail
		 */
		onInit: function () {
			var oOwnerComponent = this.getOwnerComponent();
			this.oRouter = oOwnerComponent.getRouter();
			this.oModel = oOwnerComponent.getModel();
			this.oRouter.getRoute("detailDetail").attachPatternMatched(this._onPatternMatch, this);
		},
		_onPatternMatch: function (oEvent) {
			this._supplier = oEvent.getParameter("arguments").supplier || this._supplier || "0";
			this._product = oEvent.getParameter("arguments").product || this._product || "0";
			this.getView().bindElement({
				path: "/ProductCollectionStats/Filters/1/values/" + this._supplier,
				model: "products"
			});
		},
		handleAboutPress: function(){
			this.oRouter.navTo("page2", {layout:fioriLibrary.LayoutType.EndColumnFullScreen});
		},
		onExit: function () {
			this.oRouter.getRoute("detailDetail").detachPatternMatched(this._onPatternMatch, this);
		}

	});
});