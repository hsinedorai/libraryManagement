

const bookController=require('../controllers/book.controller')

const router=require('express').Router()




router.get('/books',bookController.getAllBooksController)

router.get('/books/:id',bookController.getOneBookDtailsController)


module.exports=router
