import { Router } from "express";
import pool from '../connection.js'


const route = Router();



route.get("/orbis/diurno",async (req,res)=>{

const [result] = await pool.query("SELECT * FROM orbisDiurno")
console.log(result)
    res.json(result)
})


route.post("/orbis/diurno" , async(req,res) => {
   
    const {fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total} = req.body
    const [rows] = await pool.query("INSERT INTO orbisDiurno (fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total) VALUES (?,?,?,?,?,?,?,?,?)",[fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total])
    res.status(201).send(
        [{
            id:rows.insertId,
            fecha,
            dominio,
            marcaVehiculo,
            codigo,
            kmLiviano,
            kmPesado,
            movidaLiviano,
            movidaPesado,
            total

        }],
    )



})

route.get("/orbis/nocturno",async (req,res)=>{

    const [result] = await pool.query("SELECT * FROM orbisNocturno")
    console.log(result)
        res.json(result)
    })
    
    
    route.post("/orbis/nocturno" , async(req,res) => {
       
        const {fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total} = req.body
        const [rows] = await pool.query("INSERT INTO orbisNocturno (fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total) VALUES (?,?,?,?,?,?,?,?,?)",[fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total])
        res.status(201).send(
            [{
                id:rows.insertId,
                fecha,
                dominio,
                marcaVehiculo,
                codigo,
                kmLiviano,
                kmPesado,
                movidaLiviano,
                movidaPesado,
                total
    
            }],
        )
    
    
    
    })
    export default route