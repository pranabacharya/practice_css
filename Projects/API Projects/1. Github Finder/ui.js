class UiGit {
    constructor() {
        this.profile = document.querySelector('#user-data');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="container card card-body mb-3">
            <div class="row">
                <div class="col-md-3 mb-3">
                <img src="${user.avatar_url}" class="img-fluid img-rounded-lg mb-3">
                <p class="text-center lead h5">${user.name}</p>
                <a href="${user.html_url}" class="btn btn-primary btn-block">View Profile</a>
                </div>
                <div class="col-md-9">
                <span class="badge badge-dark">Followers: ${user.followers}</span>
                <span class="badge badge-primary">Following: ${user.following}</span>
                <span class="badge badge-danger">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                <br><br>
                <ul class="group-item">
                <li class="list-group-item"><b>Company:</b> ${user.company}</li>
                <li class="list-group-item"><b>Blog/Website:</b> <a href="${user.blog}">${user.blog}</a></li>
                <li class="list-group-item"><b>Location:</b> ${user.location}</li>
                <li class="list-group-item"><b>Member Since:</b> ${user.created_at}</li>
                </ul>
                </div>
            </div>
        </div>
        <div class="container">
        <h4>Recent Repository</h4>
        <div id="repos"></div>
        </div>
        `;
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showRepos(repos){
        const data = document.getElementById('repos');
        let output = '' ;
        repos.forEach((repo) => {
            output += `
            <div class="row">
                <div class="col-md-6">
                   <li class="list-group-item"> <a href="${repo.html_url}">${repo.name}</a> </li>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-primary">Forks: ${repo.forks_count}</span>
                    <span class="badge badge-primary">Stargazers: ${repo.stargazers_count}</span>
                </div>
            </div>
            `;
        }) ;
        data.innerHTML = output ;
    }

    showAlert(message,className){
        this.clearAlert()
        const div = document.createElement('div');
        div.className = className ;
        div.append(message);
        const primary = document.querySelector('body');
        const secondary = document.querySelector('.search_alert');
        primary.insertBefore(div, secondary);

        setTimeout(() => {
            this.clearAlert()
        },2000)
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert-danger');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}