//Using ESM Style

import express from 'express';
import bodyParser from 'body-parser';

// import { users } from '../sample.js';
// import { books } from '../sample.js';
// import { teachers } from '../sample.js';
// import { money } from '../sample.js';
// import { stock } from '../sample.js';
import teacherRoute from './routes/teacher.route.js';
import userRoute from './routes/user.route.js';
import stockRoute from "./routes/stock.route.js"
import { dbConnect } from './database/db.js';

dbConnect().catch((err) => {
    console.log(err);
})

const app = express();

// POST & PATCH & PUT
app.use(bodyParser.json());



app.use('/users', userRoute);
//app.listen(3000,running);
//ShortCut to use func of running
app.use("/teachers", teacherRoute);
app.use("/stocks", stockRoute);
app.listen(3000, () =>{
    console.log("Running on 3000");
});

//Full func of getAllUsers
// function getAllUsers(req,res){
//     return res.send('Hello World!');
// }

//This is one func of running 
// function running(){
//     console.log("Running on 3000");
// }

//full
//app.get('/users', getAllUsers);
//shortCut
// app.get('/users', (req,res)=>{
//     return res.send('Hello World!');
// })
/*  
//users
app.get('/users/',(req,res)=> {
    return res.json(users);
});
//get user by id
app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const user = users.find((u) => {
        return u.id == id;
    });
    if(!user){
        return res.json({ message: "Not Found"});
    }
    return res.json(user);
});
// delete user
app.delete('/users/:id', (req,res) => {
    const userId = req.params.id;
    const deleteIndex  = users.findIndex((u) =>{
        return u.id == userId;
    });
    if(deleteIndex == -1){
        return res.json("User Not Found!");
    }
    users.splice(deleteIndex, 1);
    return res.json({ message:`User with Id ${userId} deleted`});
});
// create user by using post method
app.post('/users', (req,res)=> {
    users.push(req.body);
    return res.status(201).json({
        message: `User with name:${req.body.name} created`
    });

});

//books
app.get('/books/', (req,res)=> {
    return res.json(books);
});
app.get('/books/:id',(req,res) => {
    const id = req.params.id;
    const book = books.find((u) => {
        return u.id == id;
    });
    if(!book){
        return res.json({ message: "Not Found"});
    }
    return res.json(book);
});

//teachers
app.get('/teachers/', (req,res)=> {
    return res.json(teachers);
});
app.get('/teachers/:id',(req,res) => {
    const id = req.params.id;
    const teacher = teachers.find((u) => {
        return u.id == id;
    });
    if(!teacher){
        return res.json({ message: "Not Found"});
    }
    return res.json(teacher);
});

//Money
app.get('/money/', (req,res)=> {
    return res.json(money);
});
app.get('/money/:id',(req,res) => {
    const id = req.params.id;
    const mony = money.find((u) => {
        return u.id == id;
    });
    if(!mony){
        return res.json({ message: "Not Found"});
    }
    return res.json(mony);
});

//Stock
app.get('/stock/', (req,res)=> {
    return res.json(stock);
});
app.get('/stock/:id',(req,res) => {
    const id = req.params.id;
    const st = stock.find((u) => {
        return u.id == id;
    });
    if(!st){
        return res.json({ message: "Not Found"});
    }
    return res.json(st);
});
*/