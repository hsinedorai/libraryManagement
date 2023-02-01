const express=require('express')
const path=require('path')
const app=express()


app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')


const RouterHome=require('./routers/home.route')


const RouterBook=require('./routers/book.route')

const routerAuth=require('./routers/auth.route')

app.use('/',RouterHome)


app.use('/',RouterBook)

app.use('/',routerAuth)




// app.get('/books',(req,res)=>{
//     res.render('books')
// })




// app.get('/details',(req,res)=>{
//     res.render('details')
// })



// app.get('/contact',(req,res)=>{
//     res.render('contact')
// })



// app.get('/about',(req,res)=>{
//     res.render('about')
// })


// app.get('/books',(req,res)=>{
//     res.render('books')
// })








app.get('/login',(req,res)=>{
    res.render('login')
})






// app.get('/register',(req,res)=>{
//     res.render('register')
// })



app.listen(5000, () => console.log('serveur run on port 5000'))




















