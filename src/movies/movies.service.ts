import { Injectable, NotFoundException } from '@nestjs/common';
import { movies } from "./data/movies.data.js"
import type { Movie } from './types/movie.type.js';
import { CreateMovieDto } from './dto/create-movie.dto.js';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MoviesService {
    getAllMovies(): Movie[] {
        return movies
    }

    getMovieById(id: string): Movie {
        const movie = movies.find(movie => movie.movie_pk === id);
        
        if (!movie) {
           throw new NotFoundException("Ingen film blev fundet")
        }

        return movie
    }

    addMovie(movie: CreateMovieDto): Movie {
        const newMovie: Movie = {
            ...movie,
            movie_pk: uuidv4()
        };

        movies.push(newMovie)
        return newMovie
    }
}
