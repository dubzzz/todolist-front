// @ts-check
'use client';

import React from 'react';
import { useMutation } from './framework/router';

export default function TodoItem({ todo }) {
  const [isSaving, toggleTodo] = useMutation({ endpoint: '/todos/toggle', method: 'POST' });

  return (
    <span onClick={() => toggleTodo({ id: todo.id }, {})}>
      [{isSaving ? '?' : todo.done ? 'X' : '\xA0'}] {todo.task}
    </span>
  );
}
