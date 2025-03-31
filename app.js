const express = require("express");
const app = express();
const port = 3500;
const postRoutes = require("./routers/routes.js");

//registro il bodyu parser 
app.use(express.json());

app.use('/posts', postRoutes); 


app.get('/', (req, res) => {
    res.send('Ciao Carlo')
})


app.listen(port, () => {
    console.log(`In ascolto sulla porta ` + port)
})