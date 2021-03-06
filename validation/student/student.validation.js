const { student } = require("./student.schema");

const addUserValidaion = async (req,res,next) => {
        const value = await student.validate(req.body);
        if(value.error){
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next();
        }
    }
module.exports = addUserValidaion;