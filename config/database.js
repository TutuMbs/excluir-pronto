const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://TutuMbs:fox1590051018@cluster0.mx6rm.mongodb.net/test')
}

module.exports = conexao
