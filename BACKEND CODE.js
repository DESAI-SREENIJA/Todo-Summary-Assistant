import TodoForm from './components/TodoForm';


function TodoForm({ onAdd }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
