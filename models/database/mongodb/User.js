module.exports = (app) => {

    const { mongoose } = app.libs.database

    const User = new mongoose.Schema({
        username  : String,
        login     : { type: String, required: true, trim: true },
        password  : { type: String, required: true }
    })

    return mongoose.model('User', User)
    
}