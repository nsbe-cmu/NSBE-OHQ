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

test_db.addUser({
  first_name : 'John',
  last_name : 'Smith',
  email : 'John.Smith@gmail.com',
  profile_url : 'https://www.linkedin.com/in/john-smith',
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

test_db.deleteServiceRequest('5d5208ed0d1dd3d1573c38b9')
test_db.deleteServiceProvider('5d51fe9036a19cd076c84ae4')

test_db.updateServiceRequest('5d52255443b2edd3f4367d36', {
  _user_id: ObjectId.createFromHexString('5d4cff134bfdf051bd1dd758'),
  _course_id: ObjectId.createFromHexString('5d4f7529cbe5749f112b4770'),
  digest_time: new Date(),
  status: 'Pending',
})

test_db.updateServiceProvider('5d52255443b2edd3f4367d37', {
  _user_id: ObjectId.createFromHexString('5d4cff134bfdf051bd1dd758'),
  _course_id: ObjectId.createFromHexString('5d4f7529cbe5749f112b4769'),
  digest_time: new Date(),
  status: 'Pending',
  location: 'Tepper Quad',
  availability: { day: 'Friday', start: '16:00', end: '17:30' }
})