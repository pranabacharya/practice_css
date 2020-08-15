const getJokes = document.querySelector('.button');
var number = document.querySelector('#number');
const ul = document.querySelector('.jokes-container');

getJokes.addEventListener('click', jokeInside);

function jokeInside(e) {
    e.preventDefault()
    const xml = new XMLHttpRequest();

    xml.open('GET',`http://api.icndb.com/jokes/random/${number.value}`,true);
    xml.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);
            var output = '' ;
            if(response.type === 'success') {
                response.value.forEach(function(jokes){
                    output += `<li>${jokes.joke}</li>`
                });
            }
            number.value = '' ;
            ul.innerHTML = output ;
        }else{
            ul.innerHTML = `Error ${this.status} ${this.statusText}`;
        }
    }
    
    xml.send();
}
