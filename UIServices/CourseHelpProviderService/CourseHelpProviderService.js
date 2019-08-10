import { CourseAvailabilityItem } from '../../Models/CourseAvailabilityDataModel.js';
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