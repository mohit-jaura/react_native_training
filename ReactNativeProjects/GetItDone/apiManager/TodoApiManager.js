import axios from 'axios';
const baseUrl =
  'https://react-native-dummy-e0c43-default-rtdb.asia-southeast1.firebasedatabase.app/';

export function fetchTodo() {
  axios.get(`${baseUrl}todo.json`).then(response => {
    console.log(response.status);
  });
}

export function createTodo(todo) {
  axios.post(`${baseUrl}todo.json`, todo).then(response => {
    console.log(response.statusText);
  });
}
