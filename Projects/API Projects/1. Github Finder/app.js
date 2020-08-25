const git = new GitHub ;
const ui = new UiGit ;


const input_field = document.getElementById('search');
input_field.addEventListener('keyup',(e) => {
    const name = e.target.value ;
    if(name != '') {
        git.getuserData(name)
        .then((user) => {
            if(user.profile.message === 'Not Found'){
                ui.showAlert('User doesn\'t exist !!','alert alert-danger bg-danger container text-white')
            }else{
                ui.showProfile(user.profile);
                ui.showRepos(user.repos);
            }
        });
    }else {
        ui.clearProfile();
    }
})