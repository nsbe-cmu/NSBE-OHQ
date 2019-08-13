import { service_status_enum } from '../server/ServiceStatus.js';

export function NewUser(first_name,last_name,email,profile_url,role){
    this.first_name = first_name,
    this.last_name =last_name,
    this.email =email,
    this.profile_url = profile_url
    this.roles = [role];
}

