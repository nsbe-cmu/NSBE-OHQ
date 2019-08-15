import { service_status_enum } from '../server/ServiceStatus.js';

function getDigestTime(){
    var cur_time = new Date();
    cur_time.setHours(cur_time.getHours()-4);
    return cur_time;
}

export function CourseHelpItem(course, user){
    this.course = course;
    this.user = user;
    this.digest_time = getDigestTime();
    this.status = service_status_enum.PENDING;
}
