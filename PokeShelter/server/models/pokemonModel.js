const mongoose = require('mongoose')

const PokemonSchema = new mongoose.Schema({
    name:{
        type: String
    },
    sprite:{
        type: String
    },
    type:{
        type: String
    },
    dex:{
        type: Number
    },
    flavor:{
        type: Object
    },
    nickname:{
        type: String,
        required: [true, "Nickname is required"],
        minLength: [3, "Nickname must be at least 3 characters"]
    }
}, {timestamps:true})

const Pokemon = mongoose.model('Pokemon', PokemonSchema)
module.exports = Pokemon

