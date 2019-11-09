class Github{
  // prepare client secret and id for github
  constructor(){
    this.client_id = 'e4e71c6de1593c4d53d8';
    this.client_secret = 'aeee470e8920abda34c7529576ebe5f0242f985a'
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    // make fetch request for user
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repos = await repoResponse.json();
    const profile = await profileResponse.json();
    return {
      profile,
      repos
    }
  }
}