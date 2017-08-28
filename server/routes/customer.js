//고객 등록/조회/수정/삭제 api

import express from 'express';
import Customer from '../models/customer';
import oracledb from 'oracledb';
import dbconfig from '../../config/dbconfig';
// oracledb.createPool(
//
// )


const router = express.Router();
let Customers = new Map();

/**
 * 고객등록 post /api/customer
 * BODY SAMPLE : { "name":"test", "password":"pass", "age":10, "phone":1234}
 */
router.post('/', (req,res)=>{
    console.log('create');
    console.log(Customers);
    console.log(req.body);
    let cus = new Customer(req.body.name,req.body.password ,req.body.age,req.body.phone);
    Customers.set(req.body.name,cus);
   // console.log(Customers.get(req.body.name).name);
    res.json({success:true});
});
/**
 * 고객인증 post /api/customer/auth
 * BODY SAMPLE : { "name":"test", "password":"pass"}
 */
router.post('/auth', (req,res)=>{
    if(typeof req.body.password !== "string") {
        return res.status(401).json({
            error:'error'
        });
    }
    let cus = Customers.get(req.body.name);
    if(cus === null){
        return res.json({
            error:'아이디없음'
        });
    }
    if(cus.password === req.body.password){
        res.json({success:true, result:cus});
    }else
        res.json({success:false,error:'비번틀림'});
});

router.get('/', (req,res)=>{
    //console.log(Customers);
    oracledb.getConnection(
        {
            user: dbconfig.user,
            password: dbconfig.password,
            connectString : dbconfig.connectString
        },
        function(err, connection){
            if(err){console.error(err.message);return;}
            connection.execute(
                "select name, password, age, phone from customer",
                function (err, result) {
                    if (err) {
                        console.error(err.message);
                        return;
                    }
                    console.log("result : ", result);
                });
        });
    res.json({success:true,result:Customers});
});

router.put('/update', (req,res)=>{
    res.json({success:true});
});

router.delete('/:name', (req,res)=>{

    Customers.delete(req.param.name);
    console.log(Customers);
    res.json({success:true,msg:'삭제'});
});

export default router;
