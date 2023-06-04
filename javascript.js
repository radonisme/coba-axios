import axios from 'axios';

// API
var url = 'https://reqres.in/api/users';

// Pakai Fetch :
// fetch(url + '/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data.data))
//   .catch((error) => console.log('Error: ' + error));

// Methode Get
axios.get(url + '/1')
  .then((data) => console.log(data.data))
  .catch((error) => console.log('error: ' + error));

// Method Post
// axios.post(url, {
//     nama: 'Dwi',
//     umur: '20',
//   })
//   .then((data) => console.log(data));

// axios
//   .get(url + '/x')
//   .then((response) => console.log(response))
//   .catch((error) => console.log('Error: ' + error));
