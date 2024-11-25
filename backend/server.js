const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const urlRoutes = require('./routes/urlRoutes')
const dotenv = require('dotenv')


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    })


app.use('/', urlRoutes);

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})


    


