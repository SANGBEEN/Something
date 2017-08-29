'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _customer = require('../models/customer');

var _customer2 = _interopRequireDefault(_customer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import oracledb from 'oracledb';
// import dbconfig from '../../config/dbconfig';
// // oracledb.createPool(
// //
// // )


//고객 등록/조회/수정/삭제 api

var router = _express2.default.Router();
var Customers = new Map();

/**
 * 고객등록 post /api/customer
 * BODY SAMPLE : { "name":"test", "password":"pass", "age":10, "phone":1234}
 */
router.post('/', function (req, res) {
    console.log('create');
    console.log(Customers);
    console.log(req.body);
    var cus = new _customer2.default(req.body.name, req.body.password, req.body.age, req.body.phone);
    Customers.set(req.body.name, cus);
    // console.log(Customers.get(req.body.name).name);
    res.json({ success: true });
});
/**
 * 고객인증 post /api/customer/auth
 * BODY SAMPLE : { "name":"test", "password":"pass"}
 */
router.post('/auth', function (req, res) {
    if (typeof req.body.password !== "string") {
        return res.status(401).json({
            error: 'error'
        });
    }
    var cus = Customers.get(req.body.name);
    if (cus === null) {
        return res.json({
            error: '아이디없음'
        });
    }
    if (cus.password === req.body.password) {
        res.json({ success: true, result: cus });
    } else res.json({ success: false, error: '비번틀림' });
});

router.get('/', function (req, res) {
    console.log(Customers);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = Customers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var value = _step.value;

            console.log(value);
        }
        // oracledb.getConnection(
        //     {
        //         user: dbconfig.user,
        //         password: dbconfig.password,
        //         connectString : dbconfig.connectString
        //     },
        //     function(err, connection){
        //         if(err){console.error(err.message);return;}
        //         connection.execute(
        //             "select name, password, age, phone from customer",
        //             function (err, result) {
        //                 if (err) {
        //                     console.error(err.message);
        //                     return;
        //                 }
        //                 console.log("result : ", result);
        //             });
        //     });
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    res.json({ success: true, result: Customers });
});

router.put('/update', function (req, res) {
    res.json({ success: true });
});

router.delete('/:name', function (req, res) {

    Customers.delete(req.param.name);
    console.log(Customers);
    res.json({ success: true, msg: '삭제' });
});

exports.default = router;