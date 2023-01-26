import { useDispatch } from 'react-redux';
import { todoRemoved, todoToggled } from '../../redux/todoReducer';
import PropTypes from 'prop-types';
import { Item, TaskText, DeleteBtn } from './TodoItem.styled';

export const TodoItem = ({ id, text, isCompleted }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <TaskText
        onClick={() => dispatch(todoToggled({ id }))}
        isCompleted={isCompleted}
      >
        {text}
      </TaskText>
      <DeleteBtn onClick={() => dispatch(todoRemoved({ id }))}>X</DeleteBtn>
    </Item>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};
