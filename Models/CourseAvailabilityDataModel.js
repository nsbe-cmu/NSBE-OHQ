import { service_status_enum } from '../server/ServiceStatus.js';

export function CourseAvailabilityItem(course, user, time_in,time_out,location){
    this.id = 0
    this.course = course;
    this.user = user;
    var cur_time = new Date();
    cur_time.setHours(cur_time.getHours()-4);
    this.digest_time = cur_time;
    this.status = service_status_enum.PENDING;
    this.location = location;
    this.availabilty = [time_in,time_out];
}
