'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _customer = require('./customer');

var _customer2 = _interopRequireDefault(_customer);

var _employee = require('./employee');

var _employee2 = _interopRequireDefault(_employee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.use('/customer', _customer2.default);
router.use('/employee', _employee2.default);

exports.default = router;