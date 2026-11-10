import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    title: string;

    @IsInt()
    release_year: number;

    @IsOptional()
    @IsString()
    description?: string | null;

    @IsOptional()
    @IsInt()
    runtime_minutes?: number | null;

    @IsOptional()
    @IsString()
    poster_url?: string | null;
}