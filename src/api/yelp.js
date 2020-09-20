import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 44UsHPkEWa0VZ_U_9Cqla9qUp-Ck4oYnmqeEn3mSNK_xmZ-0JPY10lhNu4NIjtXLhVpOTTGSlAAY1OYnziSo9i_Q-3zWcKZUmGngkucVqUO3fqp3hudPw7FIEvNmX3Yx'
    }    
});