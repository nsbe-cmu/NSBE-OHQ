import { service_status_enum } from '../server/ServiceStatus.js';

export function CourseHelpItem(course, user){
    this.id = 0
    this.course = course;
    this.user = user;
    var cur_time = new Date();
    cur_time.setHours(cur_time.getHours()-4);
    this.digest_time = cur_time;
    this.status = service_status_enum.PENDING;
}
