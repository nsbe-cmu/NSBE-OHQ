// db.js
// Joel Anyanti | 08/09/2019
'use strict'

/*            Imports            */

const MongoDB = require('mongodb');
const K = require('./const')
const DB = require('./db_wrapper')
const chai = require('chai')
const ObjectId = MongoDB.ObjectId

/*          Test Setup           */

var test_db = new DB(K.DB_URI)

test_db.createUser({
  first_name : 'JP',
  last_name : 'Nelson',
  email : 'JP.Nelson@gmail.com',
  profile_url : 'https://www.linkedin.com/in/jp-nelson',
  roles: []
})

test_db.addUserRole('5d4cff134bfdf051bd1dd758', '5d4dc31b6494499ca1ee3c20')

test_db.getUserRoles('5d4cff134bfdf051bd1dd758')

test_db.addServiceRequest('5d4cff134bfdf051bd1dd758', {
  _course_id: ObjectId.createFromHexString('5d4f7529cbe5749f112b4769'),
  digest_time: new Date(),
  status: 'Pending'
})

test_db.addServiceProvider('5d4cff134bfdf051bd1dd758', {
  _course_id: ObjectId.createFromHexString('5d4f7529cbe5749f112b4769'),
  digest_time: new Date(),
  status: 'Pending',
  location: 'Wean Hall',
  availability: { day: 'Tuesday', start: '18:00', end: '19:30' }
})