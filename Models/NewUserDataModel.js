import { service_status_enum } from '../server/ServiceStatus.js';

export function NewUser(first_name,last_name,email,profile_url){
    this.first_name = first_name,
    this.last_name =last_name,
    this.email =email,
    this.profile_url = profile_url
    var cur_time = new Date();
    cur_time.setHours(cur_time.getHours()-4);
    this.digest_time = cur_time;
    this.statusm = service_status_enum.PENDING;
}

