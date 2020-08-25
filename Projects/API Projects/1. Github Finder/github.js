class GitHub {
    constructor() {
        this.client_id = '7bc2f0abf56afe39e67d' ;
        this.client_secret = '7f7a5cd6b42ff8a502d8d81d6a82757a8ea7f783' ;
        this.repos_count = 5 ;
        this.repos_sort = 'updated-asc' ;
    }
    async getuserData(name){
        const profileResponse = await fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        const reposResponse = await fetch(`https://api.github.com/users/${name}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}