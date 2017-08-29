//고객 등록/조회/수정/삭제 api

import express from 'express';
import Employee from '../models/employee';
// import oracledb from 'oracledb';
// import dbconfig from '../../config/dbconfig';
// // oracledb.createPool(
// //
// // )


const router = express.Router();
let emps = new Map();

let emp = new Employee('emp1', '홍길동', '1234', '010010', 'emp1.com');
emps.set(emp.id,emp);
/**
 * 회원가입 post /api/employee
 * BODY SAMPLE : { "id":"id","name":"test", "password":"pass", "phone":1234, "email":"adf"}
 */
router.post('/', (req,res)=>{
    console.log('create');
    let temp = new Employee(req.body.id,req.body.name,req.body.password ,req.body.phone,req.body.email,);
    emps.set(req.body.id,temp);
    res.json({success:true});
});
/**
 * 회원인증 post /api/customer/auth
 * BODY SAMPLE : { "name":"test", "password":"pass"}
 */
// router.post('/auth', (req,res)=>{
//     if(typeof req.body.password !== "string") {
//         return res.status(401).json({
//             error:'error'
//         });
//     }
//     let cus = Customers.get(req.body.name);
//     if(cus === null){
//         return res.json({
//             error:'아이디없음'
//         });
//     }
//     if(cus.password === req.body.password){
//         res.json({success:true, result:cus});
//     }else
//         res.json({success:false,error:'비번틀림'});
// });

router.get('/', (req,res)=>{
    console.log(emps);

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
    res.json({success:true,result:emps});
});

router.put('/update', (req,res)=>{
    res.json({success:true});
});

router.delete('/:id', (req,res)=>{

    emps.delete(req.param.id);
    console.log(emps);
    res.json({success:true,msg:'삭제'});
});

export default router;


