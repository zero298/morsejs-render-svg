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

    it("Makes sure that the SVG element is cleared before we render the message", function () {
        var svgEl = document.createElement("svg"),
            message1 = morsejs.translate("sos"),
            message2 = morsejs.translate("test"),
            circleEls,
            lineEls;

        // Append our test SVG element
        document.body.appendChild(svgEl);
        
        /*
         * The first message should insert whatever
         * dots and lines are necessary to make the message
         * above
         */
        
        // Render our message the first time to make sure that there are elements there
        morsejsRenderSVG.graphMorse(svgEl, message1);

        // Get our circles and lines
        circleEls = svgEl.querySelectorAll("circle");
        lineEls = svgEl.querySelectorAll("line");

        // Make sure we have the right ammount
        expect(circleEls.length).toEqual(6);
        expect(lineEls.length).toEqual(3);
        
        /*
         * The second message should first CLEAR OUT the SVG
         * and THEN insert dots and lines are necessary to 
         * make the second message above
         */
        
        // Render our message the first time to make sure that there are elements there
        morsejsRenderSVG.graphMorse(svgEl, message2);

        // Get our circles and lines
        circleEls = svgEl.querySelectorAll("circle");
        lineEls = svgEl.querySelectorAll("line");

        // Make sure we have the right ammount
        expect(circleEls.length).toEqual(4);
        expect(lineEls.length).toEqual(2);
    });
});