// Імпортуємо хук
import { useDispatch } from 'react-redux/es/exports';
// Імпортуємо генератор екшену
import { addTask } from 'redux/operations';
import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

export const TaskForm = () => {
  const dispatsh = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
    dispatsh(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
