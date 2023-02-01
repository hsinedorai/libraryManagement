
const bookModel=require('../models/book.model')


exports.getAllBooksController=(req,res,next)=>{



    bookModel.getAllBooks().then(books=>{
    res.render('books',{books:books})

    
})


}



exports.getOneBookDtailsController=(req,res,next)=>{

let id=req.params.id

    bookModel.getOneBooksDetails(id).then(resbook=>{
    res.render('details',{book:resbook})

    
})


}


