import React, { useState, useEffect } from 'react';
import List from '../src/Components/List';
import Form from '../src/Components/Form';
import todoServices from './Service/fetchTodo';

export interface TodoData {
	text: string;
	isComplete: boolean;
}

const App: React.FC = () => {
	const [todos, setTodos] = useState<TodoData[] | null>(null);
	const [input, setInput] = useState<string>('');

	useEffect(() => {
		const fetchAllTodos = async () => {
			const initialTodos = await todoServices.fetchAllTodos();
			if (initialTodos) {
				setTodos(initialTodos.data.data);
			}
		};
		fetchAllTodos();
	}, []);

	const handleAddTodo = (): void => {
		if (todos && input) {
			const temp = [...todos];
			temp.push({ text: input, isComplete: false });
			setTodos(temp);
			setInput('');
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
	};

	const handleDeleteTodo = (i: number): void => {
		if (todos) {
			const temp = [...todos];
			temp.splice(i, 1);
			setTodos(temp);
		}
	};

	const handleComplete = (i: number): void => {
		if (todos) {
			const temp = [...todos];
			temp[i].isComplete = !temp[i].isComplete;
			setTodos(temp);
		}
	};

	return (
		<div>
			<List
				handleDeleteTodo={handleDeleteTodo}
				handleComplete={handleComplete}
				todos={todos}
			/>
			<Form
				handleAddTodo={handleAddTodo}
				handleInputChange={handleInputChange}
				input={input}
			/>
		</div>
	);
};

export default App;
