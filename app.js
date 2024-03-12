import express from "express";
const app = express();
import mongoose from 'mongoose';
const PORT = 3000;
import router from './routes/user-route.js';
import { json } from "body-parser";
const dbPassword = 'mongodb+srv://hafizsajidhameed:lU0IQFXjr9EJ5nUH@cluster0.mj40eo6.mongodb.net/BlogApi';

//middleware~
app.use(json())


app.use('/api/user', router)



app.get('/', (req, res) => {
    res.send('hello world!')
    console.log('hello world')
} )

mongoose.connect(dbPassword).then(()=> {
    console.log('database connected successfully');
    app.listen(PORT, ()=>{
        console.log(`server in running on http::/localhost/${PORT}`)
    })
}).catch((err)=> {
    console.log(err)
})
