const http = new EasyHttp;

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const data = {
    name: 'Pranab Acharya',
    username: 'pranabacharya',
    email: 'pacharya808@gmail.com'
}

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/users/5', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/5')
.then(msg => console.log(msg))
.catch(err => console.log(err))