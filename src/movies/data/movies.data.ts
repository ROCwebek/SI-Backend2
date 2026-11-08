import type { Movie } from '../types/movie.type.js';
import { v4 as uuidv4 } from 'uuid';

export const movies: Movie[] = [
    {movie_pk: uuidv4(), title: "The Dark Knight", release_year: 2008, description: "Sammen med politikommissær Jim Gordon og chef-anklageren Harvey Dent fortsætter Batman, alias Bruce Wayne, kampen mod forbryderne i Gotham City. Og det går ganske godt - lige indtil en mystisk og skruppelløs skurk ved navn Jokeren dukker op og spreder kaos.", runtime_minutes: 152, poster_url: null},
    {movie_pk: uuidv4(), title: "The Matrix", release_year: 1999, description: "Neo leder efter sandheden om The Matrix, der optræder i hans drømme. Han er overbevist om, at Morpheus - en af verdens farligste mænd - ved alt om The Matrix. En aften bliver Neo bortført af Trinity, og pludselig står han ansigt til ansigt med Morpheus.", runtime_minutes: 136, poster_url: null}
]

function getAllMovies(): Movie[] {
    return movies
}