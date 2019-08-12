// const.js
// Joel Anyanti | 08/09/2019
'use strict'

/*            constants           */

const USERNAME = 'nsbeadmin'
const PASS = 'i1RRSUNz0bjMG3RV'
const CLUSTER = 'nsbe-ohq-pz6dp'

module.exports = {

  DB_URI : `mongodb+srv://${USERNAME}:${PASS}@${CLUSTER}.azure.mongodb.net/test?retryWrites=true&w=majority`,
  DB_OHQ : 'ohq_test',
  USER_COLLECTION : 'user_test',
  ROLES_COLLECTION : 'roles_test',
  USER_ROLES_COLLECTION : 'user_roles_test',
  COURSE_COLLECTION : 'course_test',
  SERVICE_REQUEST_COLLECTION : 'service_request_test',
  SERVICE_PROVIDER_COLLECTION : 'service_provider_test',
  ROLES_ID : {
    '5d4dc31b6494499ca1ee3c20' : 'Admin',
    '5d4dc3276494499ca1ee3c21' : 'Student',
    '5d4dc3276494499ca1ee3c22' : 'Tutor'
  }

};
