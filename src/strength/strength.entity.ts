import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Strength {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exerciseName: string;

  @Column()
  weight: number;

  @Column()
  sets: number;

  @Column()
  repetitions: number;

  @Column({ type: 'timestamp' })
  date: Date;
}
