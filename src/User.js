"use strict";
exports.__esModule = true;
var faker_1 = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.name = faker_1["default"].name.firstName();
        this.location.lat = faker_1["default"].address.latitude();
        this.location.lng = faker_1["default"].address.longitude();
    }
    return User;
}());
var user = new User();
console.log(user.name, user.location);
