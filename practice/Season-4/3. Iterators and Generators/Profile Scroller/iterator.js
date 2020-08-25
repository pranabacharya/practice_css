class Iterator {
    constructor() {
        this.image = document.getElementById('image');
        this.profile = document.getElementById('profile');
    }

    profileIterator(profiles) {
        let index = 0;

        return {
            next: function () {
                return index < profiles.length ?
                    { value: profiles[index++], done: false } :
                    { done: true }
            }
        }
    }

    showProfile(res) {
        show();
        document.getElementById('next').addEventListener('click', show);
        function show() {
            let currentProfile = res.next().value;
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
    }

}