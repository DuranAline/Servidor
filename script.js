const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// coordenadas do caminhão
let posicao = {lat: null, lng: null}

const senha = 'mcs2023'

app.post('/posicao', (req, res) => {
    if(req.body.senha === senha) {
        posicao = req.body.posicao;
        res.send(posicao)
    }
})

app.get('/posicao', (req, res) => {
    res.send(posicao)
})

app.listen(port, () => console.log(`Servidor rodando na porta:${ port }`))