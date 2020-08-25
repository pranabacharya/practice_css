class EasyHttp {

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(value => resolve(value))
                .catch(err => reject(err))
        })
    }
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url,{
                method : 'DELETE',
                headers : {
                    'Content-type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => resolve('User deleted'))
            .catch(err => reject(err))
        })
    }

}