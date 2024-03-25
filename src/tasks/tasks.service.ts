import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { v4, validate } from 'uuid';
import { UUIDException } from 'src/exceptions.ts/uuid.exception';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  create(createTaskDto: CreateTaskDto): Task {
    const id = v4();
    const task = { id, ...createTaskDto };
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: string): Task {
    if (!validate(id)) throw new UUIDException();
    const task = this.searchTask(id);
    if (!task) throw new NotFoundException();
    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    if (!validate(id)) throw new UUIDException();
    const task = this.searchTask(id);
    if (!task) throw new NotFoundException();
    const nweTask = { ...task, ...updateTaskDto };
    const index: number = this.tasks.indexOf(task);
    this.tasks[index] = nweTask;
    return nweTask;
  }

  updateTasks(dto: Task[]): Task[] {
    this.tasks = dto;
    return dto;
  }

  remove(id: string): void {
    if (!validate(id)) throw new UUIDException();
    const task = this.searchTask(id);
    if (!task) throw new NotFoundException();
    const index: number = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  private searchTask(id: string): Task | undefined {
    return this.tasks.find((task) => task.id === id);
  }
}
