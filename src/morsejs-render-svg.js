/*jslint node:true browser:true */
/*global define, module */

// Support UMD
(function (root, factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD
        define(["morsejs"], factory);
    } else if (typeof module === "object" && module.exports) {
        // Node but not strict CommonJS
        module.exports = factory(require("morsejs"));
    } else {
        // Browser
        root.morsejsRenderSVG = factory(root.morsejs);
    }
}(this, function (morsejs) {
    "use strict";

    var exports, svgXmlNs;

    /**
     * Morse code web module
     * @module morsejs-render-svg
     */
    exports = {};

    // The namespace for SVG

    /**
     * The URI of the SVG XML namespace
     * @constant {String}
     */
    svgXmlNs = "http://www.w3.org/2000/svg";

    /**
     * Creates an SVGContext to use with the message loop
     * @class SVGContext
     * @memberof module:morsejs-render-svg
     * @param {HTMLDocument} doc The document to append the SVG element to
     * @param {String} namespace The namespace to use when creating SVG elements
     * @param {SVGElement} element The SVG element we will be appending shapes to
     */
    function SVGContext(doc, namespace, element) {
        this.doc = doc;
        this.ns = namespace;
        this.el = element;
    }

    SVGContext.prototype = {
        /**
         * Convert morse to a set of SVG tags and append them to an SVG element
         * @method SVGContext#elementAppender
         * @memberof module:morsejs-render-svg
         * @param {Number} signal The signal to convert to an SVG Element
         * @param {Number} index The signal index within the message we want to convert
         */
        elementAppender: function (signal, index) {
            // Variable to hold new SVG shape
            var newItem;
            // See if it is a short or long signal
            if (signal === morsejs.signal.SHORT) {
                // Make a dot
                newItem = this.doc.createElementNS(svgXmlNs, "circle");
                newItem.setAttribute("cx", ((16 * index) + 8));
                newItem.setAttribute("cy", "50%");
                newItem.setAttribute("r", 4);
                newItem.setAttribute("fill", "#333333");
            } else if (signal === morsejs.signal.LONG) {
                // Make a dash
                newItem = this.doc.createElementNS(svgXmlNs, "line");
                newItem.setAttribute("x1", (16 * index));
                newItem.setAttribute("x2", ((16 * index) + 16));
                newItem.setAttribute("y1", "50%");
                newItem.setAttribute("y2", "50%");
                newItem.setAttribute("stroke", "#333333");
                newItem.setAttribute("stroke-width", 2);
            }
            // If we made an item
            if (newItem) {
                // Append it to the SVG
                this.el.appendChild(newItem);
            }
        },
        /**
         * Clear the shapes already in the SVG element
         * @method SVGContext#clear
         * @memberof module:morsejs-render-svg
         */
        clear: function () {
            while (this.el.lastChild) {
                this.el.removeChild(this.el.lastChild);
            }
        },
        /**
         * Parse a given message and append it to this object
         * @method SVGContext#parseMessage
         * @memberof module:morsejs-render-svg
         * @param {Number[]} message The message to turn into SVG
         */
        parseMessage: function (message) {
            message.forEach(this.elementAppender, this);
        }
    };

    /**
     * Function to graph a morse message to SVG
     * @memberof module:morsejs-render-svg
     * @param {SVGSVGElement} svgElement The element to append to
     * @param {Number[]} message The morse message to graph
     */
    function graphMorse(svgElement, message) {
        // Create a context for our graphing loop
        var svgContext = new SVGContext(document, svgXmlNs, svgElement);
        // Clear the svg
        svgContext.clear();
        // Draw our message
        svgContext.parseMessage(message);
    }

    // Export stuff
    exports.graphMorse = graphMorse;

    // Return our module
    return exports;
}));