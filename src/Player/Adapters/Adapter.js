class Adapter{

  static basePlayerUrl(id){
    return 'https://everythingpremierapi.herokuapp.com/players/' + id
  }

  static fetchPlayer(id){
    return fetch(Adapter.basePlayerUrl(id))
    .then(resp => resp.json())
  }
}

export default Adapter
