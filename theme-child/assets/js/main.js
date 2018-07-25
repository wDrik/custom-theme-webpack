import axios from 'axios';

const username = 'wdrik';

const github = async (username) => {
    await axios.get(`https://api.github.com/users/${username}`)
        .then(function(response){
            console.log(response.data);
            console.log(response.status);
        });  
}

github(username);