import pkg from 'mysql2/promise';
const { createPool } = pkg;



const pool = createPool({
    database: "ruta40",
    user: "xgubj9utxeeqpeow4unb",
    host: "aws.connect.psdb.cloud",
    password: "pscale_pw_kueyRQCR475jPdGdOz0XjSTupfMDtVM3U5uz3VS5rFb",
    ssl: {
        rejectUnauthorized: false,
      },


})

export default pool