const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://a2Fxd0uPKsyMON95:a2Fxd0uPKsyMON95@cluster0.q69fezb.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db()
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err
    });
};

const getDb=()=>{
  if(_db){
    return _db
  }
  throw 'No databse found!'
}

exports.mongoConnect=mongoConnect
exports.getDb=getDb

