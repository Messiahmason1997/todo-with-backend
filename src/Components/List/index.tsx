import React from 'react';
import { TodoData } from '../../App';

interface Props {
	handleDeleteTodo(i: number): void;
	handleComplete(i: number): void;
	todos: TodoData[] | null;
}

const List: React.FC<Props> = ({ handleDeleteTodo, handleComplete, todos }) => {
	return (
		<div>
			<h1>To-do List</h1>

			{todos &&
				todos.map((todo, index) => (
					<div>
						<input type='checkbox' onChange={() => handleComplete(index)} />
						{todo.isComplete ? (
							<span className='strike'>{todo.text}</span>
						) : (
							<span>{todo.text} </span>
						)}

						<button onClick={() => handleDeleteTodo(index)}>X</button>
					</div>
				))}
		</div>
	);
};

export default List;
