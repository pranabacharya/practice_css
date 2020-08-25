const data = [
    {
        name: 'Pranab Acharya',
        age: 25,
        gender: 'Male',
        looking_for: 'Female',
        location: 'Cuttack, Odisha',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Sayoni Majumdar',
        age: 27,
        gender: 'Female',
        looking_for: 'Male',
        location: 'Pawai, Mumbai',
        image: 'https://randomuser.me/api/portraits/women/99.jpg'
    },
    {
        name: 'Diptiman Das',
        age: 28,
        gender: 'Male',
        looking_for: 'Female',
        location: 'Bhubaneswar, Odisha',
        image: 'https://randomuser.me/api/portraits/men/25.jpg'
    },
    {
        name: 'Lotous Sengupta',
        age: 23,
        gender: 'Female',
        looking_for: 'Male',
        location: 'Salt Lake, West Bengal',
        image: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    {
        name: 'Tiger Behera',
        age: 31,
        gender: 'Male',
        looking_for: 'Female',
        location: 'Bolangir, Odisha',
        image: 'https://randomuser.me/api/portraits/men/31.jpg'
    }
];


let profiles = profileIterator(data);
nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);
function nextProfile() {
    let currentProfile = profiles.next().value;
    if (currentProfile !== undefined) {
        document.getElementById('image').innerHTML = `
        <img src="${currentProfile.image}">
        `;
        document.getElementById('profile').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item bg-warning">Name: ${currentProfile.name}</li>
            <li class="list-group-item bg-warning">Age: ${currentProfile.age}</li>
            <li class="list-group-item bg-warning">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item bg-warning">Looking For: ${currentProfile.looking_for}</li>
            <li class="list-group-item bg-warning">Location: ${currentProfile.location}</li>
        </ul>
        `;
    } else {
        window.location.reload();
    }
}


function profileIterator(profiles) {
    let index = 0;

    return {
        next: function () {
            return index < profiles.length ?
                { value: profiles[index++], done: false } :
                { done: true }
        }
    }
}