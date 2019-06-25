/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"com/demo/Z_Fiori2_Inital_App/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/demo/Z_Fiori2_Inital_App/test/integration/pages/App",
	"com/demo/Z_Fiori2_Inital_App/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.demo.Z_Fiori2_Inital_App.view.",
		autoWait: true
	});
});