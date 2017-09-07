class Adapter{

  static baseTeamsUrl(id){
    return 'https://everythingpremierapi.herokuapp.com/teams/' + id
  }

  static baseGoals(id){
    return "https://goalposts-api.herokuapp.com/api/v1/highlights/search?title=" + id
  }

  static fetchTeams(id){
    return fetch(Adapter.baseTeamsUrl(id))
    .then(resp => resp.json())
  }

  static fetchGoals(id){
    return fetch(Adapter.baseGoals(id))
    .then(resp => resp.json())
  }


}

export default Adapter
