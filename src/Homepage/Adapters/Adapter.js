class Adapter{

  static baseTeamsUrl(){
    return 'https://everythingpremierapi.herokuapp.com/teams/'
  }

  static baseFixtureUrl(){
    return 'https://everythingpremierapi.herokuapp.com/fixtures/'
  }

  static fetchTeams(){
    return fetch(Adapter.baseTeamsUrl())
    .then(resp => resp.json())
  }

  static fetchFixtures(){
    return fetch(Adapter.baseFixtureUrl())
    .then(resp => resp.json())
  }
}

export default Adapter
