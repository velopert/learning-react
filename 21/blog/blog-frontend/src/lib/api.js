import axios from 'axios';
import queryString from 'query-string';

export const writePost = ({title, body, tags}) => axios.post('/api/posts', { title, body, tags });
export const getPost = (id) => axios.get(`/api/posts/${id}`);
export const getPostList = ({ tag, page }) => axios.get(`/api/posts/?${queryString.stringify({ tag, page })}`);
export const editPost = ({id, title, body, tags}) => axios.patch(`/api/posts/${id}`, { title, body, tags});
export const removePost = (id) => axios.delete(`/api/posts/${id}`);

export const login = (password) => axios.post('/api/auth/login', { password });
export const checkLogin = () => axios.get('/api/auth/check');
export const logout = () => axios.post('/api/auth/logout');
