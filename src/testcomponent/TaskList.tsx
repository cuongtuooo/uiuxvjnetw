import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTask, createTask } from '../Api/tasks';

type Task = {
  id: number;
  name: string;
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState<string>(''); // State cho form thêm task
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [editTaskName, setEditTaskName] = useState<string>('');

  // Lấy danh sách task từ API
  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error('Lỗi khi lấy danh sách tasks:', error);
    }
  };

  // Thêm task mới
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;

    try {
      // Gọi API để thêm task mới
      const newTask = await createTask(newTaskName);

      // Cập nhật state tasks ngay lập tức
      setTasks([...tasks, newTask]);
      setNewTaskName(''); // Reset input về rỗng
      alert('Thêm task thành công!');
    } catch (error) {
      console.error('Lỗi khi thêm task:', error);
    }
  };

  // Sửa task
  const handleEdit = (task: Task) => {
    setEditTaskId(task.id);
    setEditTaskName(task.name);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editTaskId === null || !editTaskName.trim()) return;

    try {
      await updateTask(editTaskId, editTaskName);
      setTasks(
        tasks.map((task) =>
          task.id === editTaskId ? { ...task, name: editTaskName } : task
        )
      );
      setEditTaskId(null);
      setEditTaskName('');
      alert('Cập nhật task thành công!');
    } catch (error) {
      console.error('Lỗi khi cập nhật task:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
    setEditTaskName('');
  };

  // Xóa task
  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Lỗi khi xóa task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Danh sách công việc</h1>

      {/* Form thêm task */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Nhập tên công việc mới"
        />
        <button type="submit">Thêm</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              // Form chỉnh sửa task
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                  placeholder="Nhập tên công việc"
                />
                <button type="submit">Lưu</button>
                <button type="button" onClick={handleCancelEdit}>
                  Hủy
                </button>
              </form>
            ) : (
              <>
                {task.name}
                <button onClick={() => handleEdit(task)}>Sửa</button>
                <button onClick={() => handleDelete(task.id)}>Xóa</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
