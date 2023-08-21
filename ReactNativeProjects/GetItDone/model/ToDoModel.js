export class ToDoModel {
  constructor(id, name, date, description, isCompleted) {
    (this.id = id),
      (this.name = name),
      (this.date = date),
      (this.description = description),
      (this.isCompleted = isCompleted);
  }
}
export const ToDoList = [
  new ToDoModel(
    '1',
    'Create Home Screen',
    '21-08-2023',
    'Have to create home screen today',
    false,
  ),
  new ToDoModel(
    '2',
    'Create Add Screen',
    '21-08-2023',
    'Have to create add screen today',
    true,
  ),
  new ToDoModel(
    '3',
    'Create Edit Screen',
    '21-08-2023',
    'Have to create edit screen today',
    false,
  ),
  new ToDoModel(
    '4',
    'Add firebase integration with http request',
    '21-08-2023',
    'Have to add firebase today',
    true,
  ),
];
