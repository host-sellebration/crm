const Auth = require('../model/authenticationModel')


// authentication form
const authUser = async (req,res) =>
{
    const {serialno, authCardNum, invoiceNum} =req.body
    try{
        const auth = await Auth.authentication(serialno, authCardNum, invoiceNum)

        const token = createToken(auth._id) 

        res.status(200).json({serialno, authCardNum, invoiceNum, token})
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {authUser} 

