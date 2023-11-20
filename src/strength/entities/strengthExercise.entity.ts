import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StrengthSet } from './strengthSet.entity';

@Entity()
export class StrengthExercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  exerciseName: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @OneToMany(() => StrengthSet, (set) => set.strengthExercise, {
    cascade: true,
  })
  sets: StrengthSet[];
}
