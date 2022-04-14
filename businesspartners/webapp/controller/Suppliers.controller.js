sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("ns.businesspartners.controller.Suppliers", {
            onInit: function () {

            },
            _Save: function () {
                MessageToast.show("Save Button Pressed.", { at: sap.ui.core.Popup.Dock.CenterTop });
            },
            _Change: function () {
                MessageToast.show("Chnage Button Pressed.", { at: sap.ui.core.Popup.Dock.RightBottom });
            },
            _Display: function () {
                MessageToast.show("Dislay Button Pressed", { at: sap.ui.core.Popup.Dock.LeftBottom });
            }
        });
    });
