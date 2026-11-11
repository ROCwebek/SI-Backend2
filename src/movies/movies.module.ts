import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service.js';
import { MoviesController } from './movies.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity.js';

@Module({
  imports: [TypeOrmModule.forFeature([
    MovieEntity
  ])],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}