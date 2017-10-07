var mongoose = require('mongoose')

var genreSchema = mongoose.Schema({
	name:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
})

var Genre = module.exports = mongoose.model('Genre', genreSchema)

module.exports.getGenres = function(callback, limit){
	Genre.find(callback).limit(limit)
}

module.exports.addGenre = function(genre, callback){
	Genre.create(genre, callback)
}

module.exports.updateGenre = function(_id, genre, options, callback){
	var query = {_id:_id};
	var update = {
		name: genre.name
	}
	Genre.findOneAndUpdate(query, update, options, callback )
}

module.exports.removeGenre = function(_id, callback){
	var query = {_id: _id}
	Genre.remove(query, callback)
}