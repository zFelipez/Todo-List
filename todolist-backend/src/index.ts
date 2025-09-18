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





app.post('/api/addTask',async( req, res ) => {

    

try{
     console.log(req.body)
     const {title,task} = req.body ; 

     if( !title || !task ){

      return res.status(400).json({error: "Todos os campos sao obrigatorios"}); //perguntar sobre status.json

     }

     const result  = await pool.query( 'INSERT INTO tasks (title,task) VALUES ($1,$2) RETURNING *', [title, task])

    res.status(201).json(result.rows[0]); // Perguntar o pq do returning * e tambem disso aqui

}catch(err){
  console.error('Erro ao inserir tarefa ', err);
  res.status(500).json({error: "Erro ao inserir tarefa "});


}

})



app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
