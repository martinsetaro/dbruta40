import { Router } from "express";
import pool from '../connection.js'


const route = Router();



route.get("/ika/diurno",async (req,res)=>{

const [result] = await pool.query("SELECT * FROM ikaDiurno")
console.log(result)
    res.json(result)
})


route.post("/ika/diurno" , async(req,res) => {
   
    const {fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total} = req.body
    const [rows] = await pool.query("INSERT INTO ikaDiurno (fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total) VALUES (?,?,?,?,?,?,?,?,?)",[fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total])
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

route.get("/ika/nocturno",async (req,res)=>{

    const [result] = await pool.query("SELECT * FROM ikaNocturno")
    console.log(result)
        res.json(result)
    })
    
    
    route.post("/ika/nocturno" , async(req,res) => {
       
        const {fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total} = req.body
        const [rows] = await pool.query("INSERT INTO ikaNocturno (fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total) VALUES (?,?,?,?,?,?,?,?,?)",[fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total])
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