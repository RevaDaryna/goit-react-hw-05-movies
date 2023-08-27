const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY ='c45da519c79ca04d409b5c0716c0ef3e'
export const getMoviesAllDay =()=>{
    return fetch(`${BASE_URL}trending/all/day?api_key=${API_KEY}`)
    
}

export const getSearch = (query) =>{
    return fetch(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`) 
}

export const getDetails = (movieId)=>{
    return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`) 
}

export const getCredits = (movieId)=>{
    return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`) 
}

export const getReviews = (movieId)=>{
    return fetch(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`) 
}



