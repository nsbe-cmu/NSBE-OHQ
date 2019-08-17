import { CourseAvailabilityItem } from '../../Models/CourseAvailabilityDataModel.js';
import { CourseHelpItem } from '../../Models/CourseHelpDataModel.js';
import { NewUser } from '../../Models/NewUserDataModel';
const axios = require('axios');

export function PostAvailability(course, user,time_in,time_out,location){
    let course_help_req = new CourseAvailabilityItem(course,user,time_in,time_out,location);
    axios({
        method: 'post',
        url: 'http://localhost:3000/postAvailability?email=jp@gmail.com&name=jp',
        data: course_help_req,
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


}

export function RequestCourseHelp(course, user){
    let course_help_req = new CourseHelpItem(course,user);
    axios({
        method: 'post',
        url: 'http://localhost:3000/requestHelp?email=jp@gmail.com&name=jp',
        data: course_help_req,
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


}
export function AddNewUser(first_name,last_name,email,profile_url,role){
    let user = new NewUser(first_name,last_name,email,profile_url,role);
    axios({
        method: 'post',
        url: 'http://localhost:3000/newUser?email=jp@gmail.com&name=jp',
        data: user,
        headers: {'Content-Type': 'application/json' }
        })
        .then(function (response) {
            //handle success
            console.log(response.data);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


}