// db = connect("localhost:27017/files");
use films

db.film.find({"year":{$gt:2016}}).pretty()

//db.film.insert(
//{
//	"title": "Marsjanin", 
//	"year": 2014, 
//	"director": {
//		"firstname": "Ridley",
//		"lastname": "Scott",
//		"birthday": "1976-05-02"
//	}
//}
//)


db.film.aggregate(
[
{
	$group:{
		_id:'$year',
		total: {$sum:1}
	}
}
]
)

db.film.find({"director.lastname": "Scott"}).pretty()

cursor = db.film.find()
while (cursor.hasNext() ) {
	printjson(cursor.next() );
}