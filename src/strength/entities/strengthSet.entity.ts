import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { StrengthExercise } from './strengthExercise.entity';

@Entity()
export class StrengthSet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight: number;

  @Column()
  repetitions: number;

  @ManyToOne(() => StrengthExercise, (exercise) => exercise.sets)
  strengthExercise: StrengthExercise;
}
