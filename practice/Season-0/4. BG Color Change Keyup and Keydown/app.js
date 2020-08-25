document.addEventListener('keyup',(e) => {
    if(e.key == 'ArrowUp'){
        document.body.style.backgroundColor = 'red';
        console.log(e.key+" "+e.keyCode);
    }
})
document.addEventListener('keyup',(e) => {
    if(e.key == 'ArrowDown'){
        document.body.style.backgroundColor = 'yellow';
        console.log(e.key+" "+e.keyCode);
    }
    console.log(e.key+' '+e.keyCode);
})
