// db.js
// Joel Anyanti | 08/09/2019
'use strict'

/*            Imports            */

const K = require('./const')
const DB = require('./db')

/*          Test Setup           */

// DB.createUser({
//   first_name : 'JP',
//   last_name : 'Nelson',
//   email : 'JP.Nelson@gmail.com',
//   profile_url : 'https://www.linkedin.com/in/jp-nelson',
//   roles: []
// })

// getRoles('5d4cff134bfdf051bd1dd758')

// DB.addServiceRequest('5d4cff134bfdf051bd1dd758', {
//   _course_id: ObjectId.createFromHexString('5d4f7529cbe5749f112b4769'),
//   digest_time: new Date(),
//   status: 'Pending'
// })

// DB.addServiceProvider('5d4cff134bfdf051bd1dd758', {
//   _course_id: ObjectId.createFromHexString('5d4f7529cbe5749f112b4769'),
//   digest_time: new Date(),
//   status: 'Pending',
//   location: 'Wean Hall',
//   availability: { day: 'Tuesday', start: '18:00', end: '19:30' }
// })