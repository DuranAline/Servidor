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
let posicao = {lat: null, lng: null, senha: ''}

app.post('/posicao', (req, res) => {
    let posicaoSenha = req.body.posicao;

    if ( posicaoSenha.senha == 'mcs2023' ) {
        posicao = req.body.posicao;
        res.send(posicao.lat, posicao.lng)
    }
})

app.get('/posicao', (req, res) => {
    res.send(posicao)
})

app.listen(port, () => console.log(`Servidor rodando na porta:${ port }`))