import { Injectable, NotFoundException } from '@nestjs/common';
import { movies } from "./data/movies.data.js"
import type { Movie } from './types/movie.type.js';
import { CreateMovieDto } from './dto/create-movie.dto.js';
import { v4 as uuidv4 } from 'uuid';
import { UpdateMovieDto } from './dto/update-movie.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movie.entity.js';

@Injectable()
export class MoviesService {

    constructor(
        @InjectRepository(MovieEntity)
        private readonly movieRepository: Repository<MovieEntity>
    ) {}

    async getAllMovies(): Promise<MovieEntity[]> {
        return this.movieRepository.find()
    }

    async getMovieById(id: string): Promise<MovieEntity> {
        const movie = await this.movieRepository.findOneBy({
            movie_pk: id
        })
        
        if (!movie) {
           throw new NotFoundException("Ingen film blev fundet")
        }

        return movie
    }

    addMovie(movie: CreateMovieDto): Movie {
        const newMovie: Movie = {
            ...movie,
            movie_pk: uuidv4(),
            description: movie.description ?? null,
            runtime_minutes: movie.runtime_minutes ?? null,
            poster_url: movie.poster_url ?? null
        };

        movies.push(newMovie)
        return newMovie
    }

    updateMovie(id: string, movie: UpdateMovieDto): Movie {
        const existingMovie = movies.find(movie => movie.movie_pk === id)

        if (!existingMovie) {
            throw new NotFoundException("Ingen film at opdatere")
        }

        Object.assign(existingMovie, movie)

        return existingMovie
    }

    deleteMovie(id: string): void {
        const index = movies.findIndex(movie => movie.movie_pk === id)

        if (index === -1) {
            throw new NotFoundException("Ingen film at slette")
        }

        movies.splice(index, 1)
        
    }
}
