import express from 'express';
import "dotenv/config"
import routes from "./Routes/index.js"
const app = express();

app.use(express.json());

// app.use(express.urlencoded({extended:false}))
app.use(routes);

app.get("/",(req,res)=>{
    console.log(req.body); // Add this line for debugging
    return res.send('hi');
    
})

app.listen(3000, ()=>{console.log("server running at port 3000");
})