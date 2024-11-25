import React, { useState } from 'react';
import { createTask } from '../Api/tasks';


const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName) return;

    try {
      await createTask(taskName);
      setTaskName(''); // Xóa input sau khi thêm thành công
      alert('Thêm công việc thành công!');
    } catch (error) {
      console.error('Lỗi khi thêm công việc:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nhập tên công việc"
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default TaskForm;
