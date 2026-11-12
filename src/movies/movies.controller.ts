import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service.js';
import { CreateMovieDto } from './dto/create-movie.dto.js';
import { UpdateMovieDto } from './dto/update-movie.dto.js';
import { HttpCode } from '@nestjs/common';
import { MovieEntity } from './entities/movie.entity.js';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}

    @Get()
        getAllMovies(): Promise<MovieEntity[]> {
            return this.moviesService.getAllMovies()
        }

    @Get(":id")
    getMoviesById(@Param("id") id: string): Promise<MovieEntity> {
        return this.moviesService.getMovieById(id)
    }

    @Post()
    addMovie(@Body() movie: CreateMovieDto): Promise<MovieEntity> {
        return this.moviesService.addMovie(movie);
    }

    @Patch(':id')
    updateMovie(@Param("id") id: string, @Body() movie: UpdateMovieDto): Promise<MovieEntity> {
        return this.moviesService.updateMovie(id, movie)
    }

    @Delete(':id')
    @HttpCode(204)
    deleteMovie(@Param("id") id: string): Promise<void> {
        return this.moviesService.deleteMovie(id)
    }


}
