var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car1 = /** @class */ (function () {
    function car1(brand) {
        this.brand = brand;
    }
    car1.prototype.getbrand = function () {
        return this.brand;
    };
    return car1;
}());
//let var1 = new car1('Mazada')
//console.log('Model of the Parent car :', var1.getbrand())
var electriccar1 = /** @class */ (function (_super) {
    __extends(electriccar1, _super);
    function electriccar1(brand, battery) {
        var _this = _super.call(this, brand) || this;
        _this.battery = battery;
        return _this;
    }
    electriccar1.prototype.getdisplay = function () {
        return this.battery;
    };
    return electriccar1;
}(car1));
var var2 = new electriccar1('Tesla', 1000);
console.log('Modelof the child car :', var2.getbrand());
console.log('Battery live in min : ', var2.getdisplay());
