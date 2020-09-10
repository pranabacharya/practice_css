// INPUTS
const todoInput = document.querySelector('#todo-input');
const todoButton = document.querySelector('#todo-button');
const todoContainer = document.querySelector('.task-lists');
const filterButton = document.querySelector('#filter');

// EVENT LISTNERS
todoButton.addEventListener('click', addTasks);
todoContainer.addEventListener('click', removeTasks);
filterButton.addEventListener('change', filterTasks);
document.addEventListener('DOMContentLoaded', populateUI)
// FUNCTIONS

function addTasks(e) {
    e.preventDefault();
    if (todoInput.value !== '') {
        const div = document.createElement('div');
        div.className = 'into-container';

        const li = document.createElement('li');
        li.className = 'into-new-div';
        li.textContent = `${todoInput.value}`;
        setToLocalStorage(todoInput.value);
        div.append(li);

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.innerHTML = `<i class="fa fa-check"></i>`;
        div.append(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        div.append(deleteBtn);

        todoContainer.append(div);
        showAlert('Task Added Succesfully', 'success');
        todoInput.value = '';
    } else {
        showAlert('Add some tasks bro !!', 'error')
    }
}

function removeTasks(e) {
    e.preventDefault();
    let target = e.target.previousElementSibling.parentNode;
    if (e.target.classList.contains('complete-btn')) {
        target.classList.toggle('complete');

        if (!target.classList.contains('complete')) {
            showAlert('Task Restored', 'success');
        } else {
            showAlert('Task Completed', 'success');
        }
    }

    if (e.target.classList.contains('delete-btn')) {
        target.remove();
        removeFromLS(e.target.previousElementSibling.parentNode);
        showAlert('Task Removed Succesfully', 'success');
    }
}


function showAlert(message, className) {
    alertLimiter();
    const div = document.createElement('div');
    div.className = `${className} alert`;
    div.append(message);

    const prime = document.querySelector('.container');

    prime.insertAdjacentElement('beforebegin', div)

    setTimeout(function () {
        alertLimiter();
    }, 4000);
}

function alertLimiter() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
        currentAlert.remove();
    }
}

function filterTasks(e) {
    const allLI = todoContainer.childNodes;
    allLI.forEach((li) => {
        switch (e.target.value) {
            case 'all':
                li.style.display = 'flex';
                break;
            case 'completed':
                if (li.classList.contains('complete')) {
                    li.style.display = 'flex';
                } else {
                    li.style.display = 'none';
                }
                break;
            case 'not-completed':
                if (!li.classList.contains('complete')) {
                    li.style.display = 'flex';
                } else {
                    li.style.display = 'none';
                }
        }
    })

}

function setToLocalStorage(item) {
    let li;
    if (localStorage.getItem('li') === null) {
        li = [];
    } else {
        li = JSON.parse(localStorage.getItem('li'));
    }

    li.push(item);
    localStorage.setItem('li', JSON.stringify(li));
}


function populateUI() {
    const li = JSON.parse(localStorage.getItem('li'));

    li.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'into-container';

        const li = document.createElement('li');
        li.className = 'into-new-div';
        li.textContent = item;
        div.append(li);

        const completeBtn = document.createElement('button');
        completeBtn.className = 'complete-btn';
        completeBtn.innerHTML = `<i class="fa fa-check"></i>`;
        div.append(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = `<i class="fa fa-trash"></i>`;
        div.append(deleteBtn);

        todoContainer.append(div);
    })
}


function removeFromLS(content) {
    let li;
    if (localStorage.getItem('li') === null) {
        li = [];
    } else {
        li = JSON.parse(localStorage.getItem('li'));
    }
    const liIndex = content.textContent;
    li.splice(li.indexOf(liIndex), 1);
    localStorage.setItem('li', JSON.stringify(li));
}
