const mongoose = require('mongoose')



var schemaBook = mongoose.Schema({

    _id: String,
    title: String,
    description: String,
    price: Number,
    image: String
})



var Book = mongoose.model('book', schemaBook)


var url = 'mongodb://localhost:27017/library'

exports.getThreeBooks = () => {

    return new Promise((resolve,rejects)=>{
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        return Book.find({}).limit(3)
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>rejects(err))

})




}
//
exports.getAllBooks = () => {

    return new Promise((resolve,rejects)=>{
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        return Book.find({})
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>rejects(err))

})




}






exports.getOneBooksDetails = (_id) => {

    return new Promise((resolve,rejects)=>{
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        return Book.findById({_id})
    }).then(books=>{
        mongoose.disconnect()
        resolve(books)
    }).catch(err=>rejects(err))

})




}


