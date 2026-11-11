import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity('movies')
export class MovieEntity{
    @PrimaryColumn('uuid')
    movie_pk: string

    @Column({ type: "varchar", length: 179 })
    title: string

    @Column({ type: "integer" })
    release_year: number

    @Column({ type: "text", nullable: true })
    description: string | null

    @Column({ type: "integer", nullable: true })
    runtime_minutes: number | null

    @Column({ type: "text", nullable: true })
    poster_url: string | null


}