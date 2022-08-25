import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'news' })
export class NewsEntity {
    @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
    id: number;

    @Column({ name: 'title', type: 'text', nullable: true })
    title: string | null;

    @Column({ name: 'cover_url', type: 'varchar', nullable: true })
    coverUrl: string | null;

    @Column({ name: 'lead', type: 'text', nullable: true })
    lead: string | null;

    @Column({ name: 'content', type: 'text', nullable: true })
    content: string | null;
}