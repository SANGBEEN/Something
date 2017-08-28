"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//임시 DAO

var Customer = function Customer(name, pass, age, phone) {
    _classCallCheck(this, Customer);

    this.name = name;
    this.pass = pass;
    this.age = age;
    this.phone = phone;
};

exports.default = Customer;