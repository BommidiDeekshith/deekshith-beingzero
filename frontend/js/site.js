
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('frontend'))//this line tells to serve js or css files from frontend folder
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))

app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))

var student = {"name" : "Deekshith Bommidi",
               "college" : "VNRVJIET",
               "regno": "17071A12C6"}
app.get('/data', (req, res) => res.json(student))   
app.get('/resume', (req, res) => res.render(resume.html))


//res.sendFile())
//res.json())


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
