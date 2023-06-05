const mongoose = require('mongoose')
const bcrypt =  require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema= new Schema({
    email:{
        type: String,
        required: true,
        unique:true,


    },
    password:{
        type:String,
        required:true,

    }
},
{
    timestamps:true,
}
)

// static login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All fields must be filled in')
    }
    const user = await this.findOne({email})

    if (!user) {
        throw Error('incorrect email')
    }
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('incorrect password')
    }

    return user


}
module.exports = mongoose.model('User', userSchema)