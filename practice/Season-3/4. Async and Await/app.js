class EasyHttp {
    get(url) {
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url ,{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    put(url, data) {
        return new Promise((resolve,reject) => {
            fetch(url,{
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
    }
    delete(url) {
        return new Promise((resolve,reject) => {
            fetch(url ,{
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(() => resolve("User Deleted.."))
            .catch(err => reject(err))
        })
    }
}

const http = new EasyHttp ;
// http.get('https://api.github.com/users')
// .then(data => data.forEach((user) => console.log(user.id)))
// .catch(err => console.log(err))

const data = {
    name : "Pranab Acharya",
    email : "pacharya808@gmail.com",
    mobile : 7008838651
}

// http.post('https://jsonplaceholder.typicode.com/posts', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

// http.put('https://jsonplaceholder.typicode.com/posts/12', data)
// .then(data => console.log(data))
// .catch(err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/posts/5')
.then(data => console.log(data))
.catch(err => console.log(err))