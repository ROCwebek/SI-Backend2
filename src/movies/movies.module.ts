import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service.js';
import { MoviesController } from './movies.controller.js';

@Module({
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
