import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cardio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exerciseName: string;

  @Column()
  distance: number;

  @Column()
  duration: number;

  @Column({ type: 'timestamp' })
  date: Date;
}
