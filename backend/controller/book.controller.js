const Book = require("../model/book.model")

const getAllBooks = async (req, res,next) => {
    let book;
    try {
        book = await Book.find()
    } catch (error) {
        console.log(error)
    }
    if (!book) {
        return res.status(404).json({ message: "unable to find books" })
    }
    return res.status(200).json({ book })
}

const addBook = async (req, res) => {
    const { name, price, Category, image, title } = req.body;
    let book;
    try {
        book = new Book({
            name, price, Category, image, title,
        });
        await book.save();
    } catch (error) {
        console.log(error)
    }
    if (!book) {
        return res.status(500).json({ message: "unable to add books" })
    }
    return res.status(201).json({ book })
};

const getById = async (req, res) => {
    const id = req.params.id
    let book
    try {
        book = await Book.findById(id);
    } catch (error) {
        console.log(error)
    }
    if (!book) {
        return res.status(404).json({ message: "unable to get book" })
    }
    return res.status(200).json({ book })
}

const deleteById = async (req, res) => {
    const id = req.params.id
    let book;
    try {
        book = await Book.findOneAndDelete(id)
    } catch (error) {
        console.log(error)
    }
    if (!book) {
        return res.status(404).json({ message: "unable to delete" })
    }
    return res.status(200).json({ message: "book sucessfully deleted" })
}
const updateBook = async (req, res) => {
    const id = req.params.id
    const { name, Category, price, title, image } = req.body
    let book;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name, Category, price, title,image,
        })
        book = await book.save()
    } catch (error) {
        console.log(error)
    }
    if (!book) {

        return res.status(404).json({ message: "unable to update books" })
    }
    return res.status(200).json({book})

}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.deleteById = deleteById;
exports.updateBook=updateBook;