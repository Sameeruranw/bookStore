const express = require("express")
const router = express.Router()
const booksController = require("../controller/book.controller")

router.get("/",booksController.getAllBooks);
router.post("/",booksController.addBook);
router.get("/:id",booksController.getById);
router.delete("/:id",booksController.deleteById)
router.put("/:id",booksController.updateBook)
module.exports=router;
