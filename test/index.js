/*jslint node:true*/
/*global morsejs, morsejsRenderSVG, describe, it, expect */

"use strict";

describe("Test SVG rendering", function () {
    it("Checks svg structure of translated message", function () {
        var svgEl = document.createElement("svg"),
            message = morsejs.translate("sos"),
            circleEls,
            lineEls;

        // Append our test SVG element
        document.body.appendChild(svgEl);
        // Render our message
        morsejsRenderSVG.graphMorse(svgEl, message);

        // Get our circles and lines
        circleEls = svgEl.querySelectorAll("circle");
        lineEls = svgEl.querySelectorAll("line");

        // Make sure we have the right ammount
        expect(circleEls.length).toEqual(6);
        expect(lineEls.length).toEqual(3);
    });
});