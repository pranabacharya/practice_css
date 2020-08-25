const input = document.getElementById('change');
input.addEventListener('change',(e) => {
    const color = e.target.value;
    document.body.style.backgroundColor = color;
});

document.addEventListener('DOMContentLoaded',() => {
    document.body.style.backgroundColor = 'black';
});