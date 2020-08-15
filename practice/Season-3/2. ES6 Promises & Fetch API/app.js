document.querySelector('#button1').addEventListener('click', getText);

function getText() {
    fetch('test.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            document.querySelector('.output').innerHTML = data ;
        })
}

document.querySelector('#button2').addEventListener('click', getJson);
function getJson() {
    fetch('data.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (post) {
            let output = '';
            post.forEach(function(user){
                output += `<li>${user.title}</li>`
            })
            document.querySelector('.output').innerHTML = output ;
        })
}

document.querySelector('#button3').addEventListener('click', getExternal);
function getExternal() {
    fetch('https://api.github.com/users')
    .then(function(response){
        return response.json();
    })
    .then(function(dataApi){
        let output = '' ;
        dataApi.forEach(function(user){
        output += `<li>${user.id}</li>` 
        })
        document.querySelector('.output').innerHTML = output ;
    })
}