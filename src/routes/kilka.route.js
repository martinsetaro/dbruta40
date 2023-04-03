import { Router } from "express";
import pool from '../connection.js'


const route = Router();



route.get("/kilka/diurno",async (req,res)=>{

const [result] = await pool.query("SELECT * FROM kilkaDiurno")
console.log(result)
    res.json(result)
})


route.post("/kilka/diurno" , async(req,res) => {
   
    const {fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total} = req.body
    const [rows] = await pool.query("INSERT INTO kilkaDiurno (fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total) VALUES (?,?,?,?,?,?,?,?,?)",[fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total])
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


route.get("/kilka/nocturno",async (req,res)=>{

    const [result] = await pool.query("SELECT * FROM kilkaNocturno")
    console.log(result)
        res.json(result)
    })
    
    
    route.post("/kilka/diurno" , async(req,res) => {
       
        const {fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total} = req.body
        const [rows] = await pool.query("INSERT INTO kilkaNocturno (fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total) VALUES (?,?,?,?,?,?,?,?,?)",[fecha,dominio,marcaVehiculo,codigo,kmLiviano,kmPesado,movidaLiviano,movidaPesado,total])
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