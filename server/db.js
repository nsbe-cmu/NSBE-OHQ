// db.js
// Joel Anyanti | 08/09/2019
'use strict'

/*            Imports            */
const CONSTANT = require('./const')

/*        Database Setup         */

const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(CONSTANT.DB_URI, {useNewUrlParser : true});

/*            Functions          */

/*
  createUser: adds a new user to the database.
              if user with identical credentials are found,
              user will not be created.
  @user: JavaScript Object containing user data
  ex:
  {
    first_name : 'John',
    last_name : 'Smith',
    email : 'John.Smith@gmail.com',
    profile_url : 'https://www.linkedin.com/in/john-smith'
  }
  @return: VOID
*/
//TODO: Unittest
function createUser(user) {
  const email = user.email
  let proceed = true
  client.connect(err => {
    const collection =
        client.db(CONSTANT.DB_OHQ).collection(CONSTANT.USER_COLLECTION);

    collection.findOne({email : email}, (err, res) => {
      if (err) {
        console.log(`[Database Error][${err}`)
        return
      } else if (res) {
        console.log(`[Datbase Error][${res.email} already in database]`)
        proceed = false
      } else {
        collection.insertOne(user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
      }
    })
  });
  client.close();
}

// createUser({
//   first_name : 'JP',
//   last_name : 'Nelson',
//   email : 'JP.Nelson@gmail.com',
//   profile_url : 'https://www.linkedin.com/in/jp-nelson'
// })
