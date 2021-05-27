import React from 'react';

interface Props {
	handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
	handleAddTodo(): void;
	input: string;
}

const Form: React.FC<Props> = ({ handleAddTodo, handleInputChange, input }) => {
	return (
		<div>
			<input type='text' value={input} onChange={handleInputChange} />
			<button onClick={handleAddTodo}>Add Todo</button>
		</div>
	);
};

export default Form;
