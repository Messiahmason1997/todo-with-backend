import axios, { AxiosResponse } from 'axios';

const fetchAllTodos = (): Promise<AxiosResponse> => {
	return axios.get('http://localhost:3008/todos/fetch').then((response) => {
		return response;
	});
};

const todoServices = {
	fetchAllTodos: fetchAllTodos,
};

export default todoServices;
