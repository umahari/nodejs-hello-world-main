var app=require("../index.js");

describe("Addition", function() {
    it("function should add the 2 numbers", function(){
        var value = app.AddNumber(3,6);
        expect(value).toBe(9);
    });
});

describe("Multiplication", function() {
    it("function should multiply the 2 numbers", function(){
        var value = app.MultiplyNumber(3,6);
        expect(value).toBe(18);
    });
});

describe("Substraction", function() {
    it("function should substracte the 2 numbers", function(){
        var value = app.SubstractionNumber(6,3);
        expect(value).toBe(3);
    });
});

describe("Division", function() {
    it("function should division the 2 numbers", function(){
        var value = app.divisionNumber(6,3);
        expect(value).toBe(2);
    });
});