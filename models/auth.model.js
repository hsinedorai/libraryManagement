const mongoose = require('mongoose')

const bcrypt = require('bcrypt')



var schemaAuth = mongoose.Schema({

    name: String,
    email: String,
    password: String

})



var User = mongoose.model('user', schemaAuth)

var url = 'mongodb://localhost:27017/library'


exports.registerFunctionModel = (name, email, password) => {


    //tester l'existance d'emmail

    return new Promise((resolve, reject) => {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

            return User.findOne({ email: email })
        }).then((user) => {

            if (user) {
                mongoose.disconnect()
                reject('email is used')
            } else {
                //crypter le modpasse dans la base de donne

                return bcrypt.hash(password, 10)

            }

        }).then((hPassword) => {

            let user = new User({

                name: name,
                email: email,
                password: hPassword

            })

            return user.save()

        }).then((user) => {
            mongoose.disconnect()
            resolve('registered')
        }).catch((err) => {
            mongoose.disconnect()
            reject(err)
        })


    })


}