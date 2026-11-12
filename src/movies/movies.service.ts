import { Injectable, NotFoundException } from '@nestjs/common';
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

    async addMovie(movie: CreateMovieDto): Promise<MovieEntity> {
        const newMovie = this.movieRepository.create({
            ...movie,
            movie_pk: uuidv4(),
            description: movie.description ?? null,
            runtime_minutes: movie.runtime_minutes ?? null,
            poster_url: movie.poster_url ?? null
        });
        
        return this.movieRepository.save(newMovie);
    }

    async updateMovie(id: string, movie: UpdateMovieDto): Promise<MovieEntity> {
        const existingMovie = await this.movieRepository.findOneBy({
            movie_pk: id
        })

        if (!existingMovie) {
            throw new NotFoundException("Ingen film at opdatere")
        }

        Object.assign(existingMovie, movie)

        return this.movieRepository.save(existingMovie)
    }

    async deleteMovie(id: string): Promise<void> {

        const result = await this.movieRepository.delete({
            movie_pk: id
        })

        if(result.affected === 0) {
            throw new NotFoundException("Ingen film at slette")
        }
    }
}
