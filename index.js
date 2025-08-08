const express = require('express');
const app = express();
const path = require('path');
const User = require('./model/User')
const mongoose = require('mongoose')

// mongodb connect
mongoose.connect('mongodb://127.0.0.1:27017/Registration')
    .then(() => {
        console.log('mongodb connected');

    })

//middleware
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
//server

app.listen(5000, () => {
    console.log('server started succesfully..');

})
// app.get('/', (req,res)=>{
//     res.send('this is when you write /')
// })

app.get('/signup', (req, res) => {
    res.render('index');


})

app.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const user = new User({ name, email, message }  )
        await user.save()
        res.render('submitted', { name, email, message });
    }
    catch (err) {
        console.error('registration error', err)

    }
})