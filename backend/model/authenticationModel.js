const mongoose = require('mongoose')
const bcrypt =  require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const authenticationSchema = new Schema ({
    serialno:{
        type: String,
        required: true,
        unique: true
    },
    authCardNum: {
        type: Number,
        unique: true,
        required: true
    },
    invoiceNum: {
        type: Number,
        unique: true,
        required: true
    },
},{
    timestamps: true,
}
)

// Authenticate Method
authenticationSchema.statics.authentication = async function(serialno, authCardNum, invoiceNum){
    if(!serialno || !authCardNum || !invoiceNum){
        throw Error('All fields must be filled in')
    }
    const auth = await this.findOne({serialno})

    if (!serialno) {
        throw Error('incorrect serialno')
    }
    if (!authCardNum) {
        throw Error('incorrect authCardNum')
    }
    if (!invoiceNum) {
        throw Error('incorrect invoiceNum')
    }

    return auth


}

module.exports = mongoose.model('Auth', authenticationSchema)