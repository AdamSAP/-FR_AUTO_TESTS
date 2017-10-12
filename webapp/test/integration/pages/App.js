sap.ui.require([
	"sap/ui/test/Opa5",
	'sap/ui/test/matchers/BindingPath',
	'sap/ui/test/actions/Press',
	'sap/ui/test/actions/EnterText',
	'sap/ui/test/matchers/Properties'
],
function (Opa5, BindingPath, Press, EnterText, Properties) {
	"use strict";
	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSeeAvailableFlightsButton: function () {
					return this.waitFor({
						controlType: "sap.m.Button",
						success: function (aButtons) {
							aButtons[0].$().trigger("tap");
						},
						errorMessage: "Did not find the See Available flights button on the app page"
					});
				}
			},
			assertions: {
				iShouldSeeTheFlightsOverview: function () {
					return this.waitFor({
						controlType: "sap.m.Table",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The The flights overview is displayed");
						},
						errorMessage: "Did not find the flights overview screen"
					});
				}
			}
		},
		onTheFlightsPage: {
			actions: {
				/**
			     * Selects a flight in the flights overview table
			     *
			     */
			    iSelectAFlight: function() {
			      return this.waitFor({
			        controlType: "sap.m.ColumnListItem",
			        matchers:  new BindingPath({
								path: "/Employees(" + 1 + ")"
					}),
			        actions: new sap.ui.test.actions.Press(),
			        errorMessage: "Table entry could not be selected"
			      });
			    },
			    iEnterCreditCardInformation: function(sCreditCardInfo) {
			    	return this.waitFor({
			    		controlType: "sap.m.Input",
			    		actions: new sap.ui.test.actions.EnterText({
			    			text: sCreditCardInfo
			    		}),
			    		errorMessage: "Input field was not found"
			    	});
			    },
			    iSelectConfirmPayment: function() {
			    	return this.waitFor({
			    		controlType: "sap.m.Button",
			    		success: function (aButtons) {
							aButtons[0].$().trigger("tap");
						},
						errorMessage: "Did not find the Confirm payment button"
			    	});
			    }
			},
			assertions: {
				iShouldSeeErrorMessage: function () {
					return this.waitFor({
						controlType: "sap.m.Input",
						matchers : new sap.ui.test.matchers.Properties({
			                ValueState: "Error"
			            }),
						success: function () {
							Opa5.assert.ok(true, "The Error message is displayed");
						},
						errorMessage: "Did not see the error message"
					});
				}
			}
		}
	});
});