"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function Employee(id, name, pass, phone, email) {
    _classCallCheck(this, Employee);

    this.id = id;
    this.name = name;
    this.pass = pass;
    this.phone = phone;
    this.email = email;
};

exports.default = Employee;