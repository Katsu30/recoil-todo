import { atom } from 'recoil';

export interface Task {
  title: string;
  completed: boolean;
}

// interfaceでのアノテーション
const initialTasks: Task[] = [];

// atomはrecoilを使用した場合のデータストア
export const taskState = atom({
  key: 'task',
  default: initialTasks,
})