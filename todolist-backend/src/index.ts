import express from 'express';

import cors from 'cors';


const app= express();
const PORT = 5000;


app.use( cors());
app.use(express.json())


app.get('/', (req, res)=>{

    res.send("servidor rodando")
})


app.listen(PORT, () => {
  console.log(`Servidor na porta ${PORT}`);
});
