import axios from 'axios';

export async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

export async function getStories() {
  const response = await axios.get('http://localhost:4000/stories');
  return response.data;
}

export async function getStory(id) {
  const response = await axios.get(`http://localhost:4000/stories/${id}`);
  return response.data;
}

export async function createStory({ title, body }) {
  const response = await axios.post('http://localhost:4000/stories', {
    title,
    body,
  });
  return response.data;
}
