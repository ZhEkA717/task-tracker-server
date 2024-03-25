export class CreateTaskDto {
  title: string;
  name: string;
  deadline: number;
  priority: TypePriority;
  status: boolean;
  performers: TypeUser[];
}

type TypePriority = 'low' | 'medium' | 'high';

export type TypeUser = {
  firstName: string;
  secondName: string;
};
