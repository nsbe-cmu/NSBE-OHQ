// db.js
// Joel Anyanti | 08/09/2019
'use strict'

/*            Imports            */

const K = require('./const')
const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;
const ObjectId = MongoDB.ObjectId

/*        Database Setup         */

class DatabaseWrapper {
  constructor(uri) {
    this.uri = uri
    this.client = new MongoClient(this.uri, { useNewUrlParser: true });
  }

  /*
    createUser: adds a new user to the database.
                if user with identical credentials are found,
                user will not be created.
    @user: JavaScript Object containing user data
    ex:
    {
      first_name : String,
      last_name : String,
      email : String,
      profile_url : String,
      roles: Array
    }
    @return: Bool
  */
  // TODO: Unittest
  createUser(user) {
    let status = false
    const email = user.email

    this.client.connect()
      .then(() => {
        const collection =
          this.client.db(K.DB_OHQ).collection(K.USER_COLLECTION);

        collection.findOne({ email: email })
          .then((res) => {
            if (res) {
              console.log(`[Datbase Error][${res.email} already in database]`)
            } else {
              collection.insertOne(user)
                .then(res => {
                  console.log(`[Datbase Success][Added user with ID:${res.insertedId}]`);
                  status = true
                })
                .catch(err => console.log(`[Database Error][${err}]`))
            }
          })
          .catch(err => console.log(`[Database Error][${err.message}]`))
      })
      .catch(err => console.log(`[Databse Error][${err}]`))
  }


  /*
  addUserRole: Adds a role to a given user.
           Assumes given role does not exist for user.
  @user_id: hexstring pointing to specific user
  @role_id: hexstring pointing to specific role
  @return: Bool
*/
  // TODO: Unittest
  addUserRole(user_id, role_id) {
    const _user_id = ObjectId.createFromHexString(user_id)
    const _role_id = ObjectId.createFromHexString(role_id)

    this.client.connect()
      .then(() => {
        const collection =
          this.client.db(K.DB_OHQ).collection(K.USER_COLLECTION);

        collection.updateOne({ _id: _user_id }, { $push: { roles: _role_id } })
          .then((res) => {
            if (res.modifiedCount === res.matchedCount) {
              console.log(`[Database Success][User: ${user_id} updated with role: ${role_id}]`);
            } else {
              console.log(`[Datbase Error][ID: ${user_id} does not exist database]`)
            }
          })
          .catch(err => console.log(`[Database Error][${err.message}]`))
      })
      .catch(err => console.log(`[Databse Error][${err}]`))
  }




  /*
  getUserRoles: retrieves list of roles assigned to a user.
  @user_id: hexstring pointing to specific user
  @return: Array
  */
  // TODO: Unittest
  getUserRoles(user_id) {
    let ret = []
    const _user_id = ObjectId.createFromHexString(user_id)

    this.client.connect()
      .then(() => {
        const collection =
          this.client.db(K.DB_OHQ).collection(K.USER_COLLECTION);

        collection.findOne({ _id: _user_id })
          .then((res) => {
            if (res.roles) {
              res.roles.forEach(role_id => {
                ret.push(K.ROLES_ID[role_id])
              });
              console.log(`[Datbase Success][User: ${user_id} has role(s): ${ret}]`)
            } else {
              console.log(`[Datbase Error][ID: ${user_id} does not have any roles]`)
            }
          })
          .catch(err => console.log(`[Databse Error][${err}]`))

      })
      .catch(err => console.log(`[Databse Error][${err}]`))
  }

  /*
  addServiceRequest: Add tutoring service request as per user (student).
  @user_id: hexstring pointing to specific user
  @request: JavaScript object containing information about service request
  ex:
    {
      _course_id: ObjectId
      digest_time: Date
      status: String
    }
  @return: Bool
  */
  // TODO: Unittest
  addServiceRequest(user_id, request) {
    request._user_id = ObjectId.createFromHexString(user_id)

    this.client.connect()
      .then(() => {
        const collection =
          this.client.db(K.DB_OHQ).collection(K.SERVICE_REQUEST_COLLECTION);

        collection.insertOne(request)
          .then((res) => {
            if (res.insertedCount === 1) {
              console.log(`[Datbase Success][Added service request with ID: ${res.insertedId}]`)
            }
          })
          .catch(err => console.log(`[Database Error][${err.message}]`))
      })
      .catch(err => console.log(`[Database Error][${err.message}]`))
  }



  /*
  addServiceProvider: Add tutoring service provider as per user (tutor).
  @user_id: hexstring pointing to specific user
  @request: JavaScript object containing information about service request
  ex:
    {
      _course_id: ObjectId
      digest_time: Date
      status: String
      location: String
      availability: { day: String , start: String, end: String }
    }
  @return: Bool
  */
  // TODO: Unittest
  addServiceProvider(user_id, provider) {
    provider._user_id = ObjectId.createFromHexString(user_id)

    this.client.connect()
      .then(() => {
        const collection =
          this.client.db(K.DB_OHQ).collection(K.SERVICE_PROVIDER_COLLECTION);

        collection.insertOne(provider)
          .then((res) => {
            if (res.insertedCount === 1) {
              console.log(`[Datbase Success][Added service provider with ID: ${res.insertedId}]`)
            }
          })
          .catch(err => console.log(`[Database Error][${err}]`))
      })
      .catch(err => console.log(`[Database Error][${err}]`))
  }
}

module.exports = DatabaseWrapper;

