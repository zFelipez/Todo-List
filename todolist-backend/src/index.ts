import dotenv from 'dotenv';
dotenv.config(); 

import express from 'express';
import cors from 'cors';
import pool from './db'



const app= express();
const PORT = 5000;



app.use( cors());
app.use(express.json())




app.get('/api/allTasks', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json({ tasks: result.rows});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error:`Erro ao conectar ao banco ${err}` });
  }
}); 



app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
