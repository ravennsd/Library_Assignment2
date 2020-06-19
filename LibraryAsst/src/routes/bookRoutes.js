const express = require('express');
const booksRouter = express.Router();

function router(nav) {
    var books = [
        { 
        title: "War and Peace",
        author: "Lev Nicolayevich",
        genre:'Historical Fiction',
        img: "/images/count-lev-nikolayevich.jpg"
    },
    { 
        title: "Les Miserables",
        author: "Victor Hugh",
        genre:'Fiction',
        img: "/images/victor-hugo-9346557-1-402.jpg"
    },
    { 
        title: "Harry Potter",
        author: "J.K Rowling",
        genre:'Fantasy',
        img: "/images/Shot_D_021_V2L-copy-1.jpg"
    }
    ]
    
    booksRouter.get('/',function(req, res){
        res.render("books",{                                                                           //Here, books means books.ejs
            nav,
            title:'Library',
            books
        })
    })
    booksRouter.get('/:id',function(req,res) {
        const id = req.params.id
        res.render('book', 
        {                                                                           //Here, books means books.ejs
            nav,
            title:'Library',
            book: books[id]
        })
    })

    return booksRouter;
}

module.exports = router;
