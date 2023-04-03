import express from 'express';
import cors from 'cors';
import kilka from './routes/kilka.route.js'
import ika from './routes/ika.route.js'
import orbis from './routes/orbis.route.js'



const app = express();
const port = process.env.PORT || 4001

app.use(cors());
app.use(express.json())


app.get("/", (req,res)=>{
    res.send("Desde página principal")
})

app.use(kilka)
app.use(ika)
app.use(orbis)



app.listen(port, () =>{
    console.log(`Servidor en puerto ${port}`)
})