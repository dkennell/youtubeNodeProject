var mongoose = require('mongoose')

var bookSchema = mongoose.Schema({
	title:{
		type: String
	},
	genre:{
		type: String		
	},
	description:{
		type: String
	},
	author:{
		type: String
	},
	publisher:{
		type: String,		
	},
	pages:{
		type: String,
	},
	image_url:{
		type: String,
	},
	buy_url:{
		type: String,
	},
	create_date:{
		type: Date,
		default: Date.now
	}
})

var Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBooks = function(callback, limit){
	Book.find(callback).limit(limit)
}

module.exports.getBookById = function(id, callback){
	Book.findById(id, callback)
}

module.exports.addBook = function(book, callback){
	Book.create(book, callback)
}

module.exports.updateBook = function(_id, book, options, callback){
	var query = {_id:_id};
	var update = {
		title: book.title,
		author: book.author
	}
	Book.findOneAndUpdate(query, update, options, callback )
}

module.exports.removeBook = function(_id, callback){
	var query = {_id: _id}
	Book.remove(query, callback)
}