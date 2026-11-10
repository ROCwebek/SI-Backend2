import { CreateMovieDto } from "./create-movie.dto.js";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    
}