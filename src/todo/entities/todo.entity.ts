// src/todo/todo.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Todo')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  completed: boolean;
}
