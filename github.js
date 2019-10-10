class Github {
  constructor() {
    this.client_id = 'a87168398e2d090da06b';
    this.client_secret = '55d94ea1606e6f65de2493fe8a417ac800860c3f';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return{
      profile
    }
  }
}