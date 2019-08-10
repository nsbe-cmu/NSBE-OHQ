import { NewUser } from '../../Models/NewUserDataModel';
const axios = require('axios');

export function AddNewUser(first_name,last_name,email,profile_url){
    let user = new NewUser(first_name,last_name,email,profile_url);
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