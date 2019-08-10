import { CourseHelpItem } from '../../Models/CourseHelpDataModel.js';
const axios = require('axios');

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