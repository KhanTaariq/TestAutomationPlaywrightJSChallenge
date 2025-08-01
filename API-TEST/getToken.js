// Save as getToken.js
import { request } from 'https';

const data = JSON.stringify({
  username: 'admin',
  password: 'password123'
});

const options = {
  hostname: 'restful-booker.herokuapp.com',
  path: '/auth',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = request(options, res => {
  let body = '';
  res.on('data', chunk => {
    body += chunk;
  });
  res.on('end', () => {
    try {
      const json = JSON.parse(body);
      console.log('Token:', json.token);
    } catch (e) {
      console.error('Failed to parse response:', body);
    }
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();