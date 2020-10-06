function add(a,b){
    return a+b
}


function getPokemons() {
    return axios.get('api/poke');
}

export default add