const express = require("express"); 
const { read } = require("fs");
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

app.get('/api/courses/:id', (req,res)=> {
    const course = courses.find(c=> c.id === parseInt(req.params.id)); 
    if(!course) {
        req.status(404).send("The course with the given ID was not found"); 
        return
    }
        res.send(course); 
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
    const course = courses.find(c=> c.id === parseInt(req.params.id)); 
    if(!course) {
        req.status(404).send("The course with the given ID was not found"); 
        return
    }
    course.name = req.body.name; 
    course.id = req.body.id; 
    courses.splice(course.id-1, 1, course)
    res.send(course); 
})

//DELETE REQUESTS
app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find(c=> c.id === parseInt(req.params.id)); 
    if(!course) {
        req.status(404).send("The course with the given ID was not found"); 
        return
    }
    courses.splice(courses.indexOf(course), 1)
    res.send(course); 
})

app.listen(3000, () => {
    console.log("Listening on port 3000 ..."); 
}); 

