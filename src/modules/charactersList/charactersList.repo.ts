import axios from "axios";


// Repo fajl brine samo o funkcijama koje salju API poziv na bekend
// idealno bi bilo da se u njemu ne desava nikakva logika koja menja podatke, 
//  vec da se to sve izdesava u tzv middle layer-u odnosno servisu

const fetchAllCharacters = () => {
    return axios.get(
        "https://rickandmortyapi.com/api/character"
      );
}


export const characterListRepo = {
    fetchAllCharacters
}
