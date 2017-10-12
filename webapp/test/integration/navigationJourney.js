/*global QUnit*/
/*global opaTest*/
 
sap.ui.require([
	"sap/ui/test/opaQunit"
], function () {
	"use strict";
 
	QUnit.module("Navigation");
 
	opaTest("Should see the flights  overview table", function (Given, When, Then) {
 
		// Arrangements
		Given.iStartMyAppInAFrame("../../index.html");
 
		//Actions
		When.onTheAppPage.iPressTheSeeAvailableFlightsButton();
 
		// Assertions
		Then.onTheAppPage.iShouldSeeTheFlightsOverview();
	});
	opaTest("Should see the credit card information entered", function (Given, When, Then) {
 
		//Actions
		When.onTheFlightsPage.iSelectAFlight();
		When.onTheFlightsPage.iEnterCreditCardInformation("“5555 5555 5555 5557");
		When.onTheFlightsPage.iSelectConfirmPayment();
 
		// Assertions
		Then.onTheFlightsPage.iShouldSeeErrorMessage().
			and.iTeardownMyAppFrame();
	});
});
 