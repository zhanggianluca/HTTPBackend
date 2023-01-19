const express = require("express"); 
const app = express(); 
app.use(express.json()); 

app.get('/', (req,res)=> {
    res.send('Hello there');
});

const courses = [
    { id: 1, name:'Web Development'},
    { id: 2, name: 'IT'},
    { id: 3, name: 'Cybersecurity'}
]; 

app.get('/api/courses', (req,res)=> {
     res.send(courses); 
})

//HTTP POST REQUESTS
app.post('/api/courses', (req,res) => {
    if (req.body.name.length > 3) {
        const course = {
            id: courses.length + 1,
            name: req.body.name
        }
        courses.push(course); 
        res.send(courses); 
    }
    else {
        res.status(400).send("Name is required and with a minimum of 4 characters"); 
    }
    
})

//PUT REQUESTS
app.put("/api/courses/:id", (req, res) => {
    const course = {
        id: req.body.id,
        name: req.body.name
    }
})

app.listen(3000, () => {
    console.log("Listening on port 3000 ..."); 
}); 
