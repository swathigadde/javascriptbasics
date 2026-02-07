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
var par1 = /** @class */ (function () {
    function par1(Parentname, Parentage) {
        this.Parentname = Parentname;
        this.Parentage = Parentage;
    }
    par1.prototype.Parentdisplay = function () {
        return {
            key1: this.Parentname,
            Key2: this.Parentage
        };
    };
    return par1;
}());
var child1 = /** @class */ (function (_super) {
    __extends(child1, _super);
    function child1(Parentname, Parentage, childname) {
        var _this = _super.call(this, Parentname, Parentage) || this;
        _this.childname = childname;
        return _this;
    }
    child1.prototype.childdispalay = function () {
        return {
            key3: this.Parentname,
            key4: this.Parentage,
            key5: this.childname
        };
    };
    return child1;
}(par1));
var var23 = new child1('Swathi', 35, 'Vihaan');
console.log(var23.Parentdisplay());
console.log(var23.childdispalay());
