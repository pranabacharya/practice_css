const iterator = new Iterator;



document.onload = xhrResp();

function xhrResp() {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            let iterators = iterator.profileIterator(data);
            iterator.showProfile(iterators);
        } else {
            console.log(`Error ${this.status}: ${this.statusText}`)
        }
    }

    xhr.send();
}