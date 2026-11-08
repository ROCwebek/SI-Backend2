import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MoviesService } from './movies.service.js';
import type { Movie } from './types/movie.type.js';
import { CreateMovieDto } from './dto/create-movie.dto.js';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
        getAllMovies(): Movie[] {
            return this.moviesService.getAllMovies()
        }

    @Get(":id")
    getMoviesById(@Param("id") id: string): Movie {
        return this.moviesService.getMovieById(id)
    }

    @Post()
    addMovie(@Body() movie: CreateMovieDto): Movie {
        return this.moviesService.addMovie(movie);
    }


}
