require('dotenv').config()

const pies = require('./controllers/piecontroller')
const express = require('express')
//create an instance of express

const app = express()

app.listen(process.env.PORT, () => console.log(`App is listening on ${process.env.PORT}.`)) // BACK TICS!

//app.listen(3000, () => console.log('App is listening on 3000'))

app.use(express.static(__dirname + '/public'))
console.log(__dirname)

app.get('/', (req, res) => res.render('index'))


//app.get('/pies', (req, res) => res.send('I love pie!'))
app.use('/pies', pies)
