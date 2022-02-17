const BASE = "https://api.themoviedb.org/3";
const KEY = "api_key=559e0716959e653ce25f7d162bdb410b"

console.log(BASE)

export const api = {
    
         getMovie: async () => {
            let response = await fetch(`${BASE}${KEY}`)
            let data = await response.json()
            console.log(data)
            return data
    }
}


/*https://api.themoviedb.org/3/movie/76341?api_key=559e0716959e653ce25f7d162bdb410b*/



