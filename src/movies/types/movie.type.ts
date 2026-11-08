export type Movie = {
    movie_pk: string,
    title: string,
    release_year: number,
    description: string | null,
    runtime_minutes: number | null,
    poster_url: string | null
}